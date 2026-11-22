#!/usr/bin/env node
/*
  Szyfrowanie generatora ofert – strona dostępna tylko z hasłem.

  W repozytorium leży WYŁĄCZNIE wersja zaszyfrowana. Jawny plik powstaje lokalnie
  (odszyfruj -> edycja -> zaszyfruj) i nie jest commitowany.

  Hasło podaje się w zmiennej środowiskowej GENOF_HASLO (nigdy w pliku ani w repozytorium).

    GENOF_HASLO=... node szyfruj.cjs odszyfruj  <zaszyfrowany.html> <jawny.html>
    GENOF_HASLO=... node szyfruj.cjs zaszyfruj  <jawny.html> <zaszyfrowany.html> [--klucz-z <stary-zaszyfrowany.html>]
    node szyfruj.cjs nowe-haslo

  --klucz-z: używa tego samego klucza strony co poprzednia wersja, dzięki czemu urządzenia,
  na których już wpisano hasło, dalej otwierają generator samym PIN-em.

  Kryptografia (WebCrypto, to samo w przeglądarce):
    klucz strony K: losowe 256 bitów; treść = AES-GCM(K, generator)
    hasło -> PBKDF2-SHA256 (1 000 000 powtórzeń, losowa sól) -> klucz opakowujący -> AES-GCM(K)
    na urządzeniu: PIN -> PBKDF2-SHA256 (600 000) -> AES-GCM(K) w localStorage
*/
"use strict";
const fs = require("fs");
const { webcrypto } = require("crypto");
const subtle = webcrypto.subtle;
const ITER_PASS = 1000000;

const b64 = (u8) => Buffer.from(u8).toString("base64");
const unb64 = (s) => new Uint8Array(Buffer.from(s, "base64"));
const normPass = (p) => String(p).toLowerCase().replace(/[^a-z0-9]/g, "");

async function passKey(pass, salt, iter) {
  const base = await subtle.importKey("raw", new TextEncoder().encode(normPass(pass)), "PBKDF2", false, ["deriveKey"]);
  return subtle.deriveKey({ name: "PBKDF2", salt, iterations: iter, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
}
function readPayload(file) {
  const m = /<script id="payload" type="application\/json">([\s\S]*?)<\/script>/.exec(fs.readFileSync(file, "utf8"));
  if (!m) throw new Error("To nie jest zaszyfrowany generator: " + file);
  return JSON.parse(m[1]);
}
async function unwrapK(P, pass) {
  const wk = await passKey(pass, unb64(P.salt), P.iter);
  try { return new Uint8Array(await subtle.decrypt({ name: "AES-GCM", iv: unb64(P.wiv) }, wk, unb64(P.wk))); }
  catch (e) { throw new Error("Złe hasło."); }
}
async function decryptFile(file, pass) {
  const P = readPayload(file), K = await unwrapK(P, pass);
  const key = await subtle.importKey("raw", K, "AES-GCM", false, ["decrypt"]);
  return new TextDecoder().decode(await subtle.decrypt({ name: "AES-GCM", iv: unb64(P.iv) }, key, unb64(P.ct)));
}
async function encrypt(html, pass, K) {
  K = K || webcrypto.getRandomValues(new Uint8Array(32));
  const salt = webcrypto.getRandomValues(new Uint8Array(16)), wiv = webcrypto.getRandomValues(new Uint8Array(12)), iv = webcrypto.getRandomValues(new Uint8Array(12));
  const wk = await passKey(pass, salt, ITER_PASS);
  const key = await subtle.importKey("raw", K, "AES-GCM", false, ["encrypt"]);
  const P = {
    v: 1, iter: ITER_PASS, salt: b64(salt), wiv: b64(wiv),
    wk: b64(new Uint8Array(await subtle.encrypt({ name: "AES-GCM", iv: wiv }, wk, K))),
    iv: b64(iv), ct: b64(new Uint8Array(await subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(html))))
  };
  return LOADER.replace("__PAYLOAD__", () => JSON.stringify(P));
}
function newPassword() {
  const A = "abcdefghjkmnpqrstuvwxyz23456789"; // bez l, i, o, 0, 1 – nie do pomylenia
  const out = [];
  while (out.length < 20) { const b = webcrypto.getRandomValues(new Uint8Array(1))[0]; if (b < A.length * 8) out.push(A[b % A.length]); }
  return out.join("").match(/.{5}/g).join("-");
}

/* ---------- strona-zamek (jawna część opublikowanej strony) ---------- */
const LOADER = String.raw`<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<meta name="referrer" content="no-referrer">
<title>Dostęp chroniony</title>
<style>
  :root { --navy: #1b233a; --accent: #0b6fb8; --muted: #5b6776; --line: #d9dfe6; }
  * { box-sizing: border-box; }
  html, body { margin: 0; min-height: 100%; }
  body { background: var(--navy); color: #1c2430; font: 15px/1.45 "Segoe UI", -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 16px; }
  .card { background: #fff; border-radius: 12px; padding: 24px 20px; width: 100%; max-width: 380px; text-align: center; box-shadow: 0 8px 30px rgba(0,0,0,.35); }
  h1 { font-size: 19px; margin: 4px 0 6px; }
  p { margin: 6px 0; font-size: 13px; color: var(--muted); }
  input { font: inherit; width: 100%; border: 1px solid var(--line); border-radius: 6px; padding: 10px; margin-top: 10px; text-align: center; font-size: 18px; }
  input.pin { font-size: 22px; letter-spacing: 6px; }
  input:focus { outline: 2px solid var(--accent); outline-offset: -1px; }
  button { font: inherit; cursor: pointer; border-radius: 6px; }
  .primary { width: 100%; margin-top: 12px; padding: 11px; font-size: 16px; font-weight: 600; background: var(--accent); color: #fff; border: 1px solid var(--accent); }
  .primary:disabled { opacity: .6; cursor: progress; }
  .link { border: 0; background: none; color: var(--accent); font-size: 13px; padding: 6px; margin-top: 6px; }
  .err { color: #b3261e; font-weight: 600; min-height: 1.4em; }
  .lock { font-size: 34px; line-height: 1; }
</style>
</head>
<body>
<div class="card" id="card">
  <div class="lock" aria-hidden="true">&#128274;</div>
  <h1 id="title">Dostęp chroniony</h1>
  <p id="info"></p>
  <form id="form" autocomplete="off">
    <input id="f1" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">
    <input id="f2" autocomplete="off" hidden>
    <p class="err" id="err"></p>
    <button class="primary" id="btn" type="submit">Dalej</button>
  </form>
  <button class="link" id="forgot" type="button" hidden>Nie pamiętam PIN-u</button>
</div>
<noscript><p style="color:#fff">Ta strona wymaga JavaScriptu.</p></noscript>
<script id="payload" type="application/json">__PAYLOAD__</script>
<script>
(function () {
  "use strict";
  var P = JSON.parse(document.getElementById("payload").textContent);
  var DEV = "genof:devkey", DEVFAILS = "genof:devfails", ITER_PIN = 600000, MAX_PIN_FAILS = 10;
  var te = new TextEncoder(), K = null, mode = "";
  function el(id) { return document.getElementById(id); }
  function b64(u8) { var s = "", C = 0x8000; for (var i = 0; i < u8.length; i += C) s += String.fromCharCode.apply(null, u8.subarray(i, i + C)); return btoa(s); }
  function unb64(s) { var b = atob(s), u = new Uint8Array(b.length); for (var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return u; }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); return true; } catch (e) { return v === undefined ? null : false; } }
  function wipe() { try { Object.keys(localStorage).forEach(function (k) { if (k.indexOf("genof:") === 0) localStorage.removeItem(k); }); } catch (e) {} }
  async function kdf(secret, salt, iter) {
    var base = await crypto.subtle.importKey("raw", te.encode(secret), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey({ name: "PBKDF2", salt: salt, iterations: iter, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
  }
  function err(t) { el("err").textContent = t || ""; }
  function show(m, info) {
    mode = m; err("");
    var f1 = el("f1"), f2 = el("f2");
    f1.value = ""; f2.value = "";
    var pin = m !== "pass";
    f1.className = f2.className = pin ? "pin" : "";
    f1.type = f2.type = "password";
    f1.setAttribute("inputmode", pin ? "numeric" : "text");
    f2.setAttribute("inputmode", "numeric");
    f1.placeholder = m === "pass" ? "Hasło dostępu" : "PIN";
    f2.placeholder = "Powtórz PIN";
    f2.hidden = m !== "setpin";
    el("forgot").hidden = m !== "pin";
    el("title").textContent = m === "pass" ? "Dostęp chroniony" : m === "setpin" ? "Ustaw PIN na tym urządzeniu" : "Wpisz PIN";
    el("btn").textContent = m === "pass" ? "Dalej" : m === "setpin" ? "Zapisz PIN" : "Odblokuj";
    el("info").textContent = info || (m === "pass" ? "Wpisz hasło dostępu. Na tym urządzeniu trzeba je podać tylko raz." :
      m === "setpin" ? "Hasło poprawne. Ustaw PIN (4–12 cyfr, zalecane 6) – następnym razem na tym urządzeniu wystarczy PIN." : "");
    setTimeout(function () { f1.focus(); }, 50);
  }
  async function openWithK(pin) {
    var key = await crypto.subtle.importKey("raw", K, "AES-GCM", false, ["decrypt"]);
    var html = new TextDecoder().decode(await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(P.iv) }, key, unb64(P.ct)));
    var pinHolder = pin, Kcopy = K;
    window.__GENOF_LOADER = {
      takePin: function () { var p = pinHolder; pinHolder = null; return p; },
      rewrap: async function (newPin) { await storeDevKey(Kcopy, newPin); }
    };
    K = null;
    document.open(); document.write(html); document.close();
  }
  async function storeDevKey(k, pin) {
    var salt = crypto.getRandomValues(new Uint8Array(16)), iv = crypto.getRandomValues(new Uint8Array(12));
    var wk = await kdf(pin, salt, ITER_PIN);
    var ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: iv }, wk, k));
    if (ls(DEV, JSON.stringify({ v: 1, iter: ITER_PIN, salt: b64(salt), iv: b64(iv), ct: b64(ct) })) === false) throw new Error("Przeglądarka nie pozwala zapisać danych.");
  }
  function fails() { try { return JSON.parse(ls(DEVFAILS) || '{"n":0,"until":0}'); } catch (e) { return { n: 0, until: 0 }; } }

  el("form").addEventListener("submit", async function (e) {
    e.preventDefault();
    var v1 = el("f1").value.trim(), v2 = el("f2").value.trim();
    el("btn").disabled = true; err(mode === "pass" ? "Sprawdzam…" : "");
    try {
      if (mode === "pass") {
        var pass = v1.toLowerCase().replace(/[^a-z0-9]/g, "");
        if (!pass) { err("Wpisz hasło."); return; }
        var wk = await kdf(pass, unb64(P.salt), P.iter);
        try { K = new Uint8Array(await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(P.wiv) }, wk, unb64(P.wk))); }
        catch (x) { await new Promise(function (r) { setTimeout(r, 1500); }); show("pass"); err("Złe hasło."); return; }
        show("setpin");
      } else if (mode === "setpin") {
        if (!/^\d{4,12}$/.test(v1)) { err("PIN to 4–12 cyfr."); return; }
        if (v1 !== v2) { err("PIN-y się różnią."); return; }
        await storeDevKey(K, v1); ls(DEVFAILS, null);
        await openWithK(v1);
      } else {
        var f = fails(), now = Date.now();
        if (f.until > now) { err("Za dużo błędnych prób. Spróbuj za " + Math.ceil((f.until - now) / 1000) + " s."); return; }
        if (!/^\d{4,12}$/.test(v1)) { err("PIN to 4–12 cyfr."); return; }
        var D = JSON.parse(ls(DEV));
        var pk = await kdf(v1, unb64(D.salt), D.iter || ITER_PIN);
        try { K = new Uint8Array(await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(D.iv) }, pk, unb64(D.ct))); }
        catch (x) {
          f.n++;
          if (f.n >= MAX_PIN_FAILS) { wipe(); show("pass", "Za dużo błędnych PIN-ów – dostęp i zapamiętane dane na tym urządzeniu zostały usunięte. Wpisz hasło dostępu."); return; }
          if (f.n >= 3) f.until = now + Math.min(30000 * Math.pow(2, f.n - 3), 15 * 60000);
          ls(DEVFAILS, JSON.stringify(f));
          show("pin"); err("Zły PIN. Pozostało prób: " + (MAX_PIN_FAILS - f.n) + "." + (f.until > now ? " Kolejna za " + Math.round((f.until - now) / 1000) + " s." : ""));
          return;
        }
        ls(DEVFAILS, null);
        await openWithK(v1);
      }
    } catch (x) { err("Błąd: " + x.message); }
    finally { var b = el("btn"); if (b) b.disabled = false; }
  });
  el("forgot").onclick = function () {
    if (!confirm("Usunąć dostęp i zapamiętane dane na tym urządzeniu? Potem trzeba będzie wpisać hasło dostępu, ustawić nowy PIN i ponownie wczytać cennik oraz klientów.")) return;
    wipe(); show("pass");
  };

  if (!window.crypto || !crypto.subtle) { el("info").textContent = "Ta przeglądarka nie obsługuje szyfrowania. Otwórz stronę w aktualnym Chrome, Edge, Safari lub Firefox."; el("form").hidden = true; return; }
  show(ls(DEV) ? "pin" : "pass");
})();
</script>
</body>
</html>
`;

(async () => {
  const [cmd, a, b, flag, c] = process.argv.slice(2);
  const pass = process.env.GENOF_HASLO;
  if (cmd === "nowe-haslo") { console.log(newPassword()); return; }
  if (!pass) throw new Error("Brak hasła: ustaw zmienną GENOF_HASLO.");
  if (cmd === "odszyfruj") { fs.writeFileSync(b, await decryptFile(a, pass)); console.log("Odszyfrowano do " + b); return; }
  if (cmd === "zaszyfruj") {
    let K = null;
    if (flag === "--klucz-z") K = await unwrapK(readPayload(c), pass);
    fs.writeFileSync(b, await encrypt(fs.readFileSync(a, "utf8"), pass, K));
    if (await decryptFile(b, pass) !== fs.readFileSync(a, "utf8")) throw new Error("Kontrola odszyfrowania nie powiodła się.");
    console.log("Zaszyfrowano do " + b + (K ? " (ten sam klucz strony)" : " (nowy klucz strony)"));
    return;
  }
  console.log("Użycie: zob. komentarz na początku pliku.");
})().catch((e) => { console.error("Błąd: " + e.message); process.exit(1); });
