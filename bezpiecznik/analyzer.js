// Silnik oceny wiadomości. Działa w całości na urządzeniu — tekst nigdzie nie jest wysyłany.
(function (root) {
    "use strict";

    // Oficjalne domeny marek, pod które oszuści najczęściej się podszywają.
    const BRANDS = {
        inpost: ["inpost.pl", "inpost.eu"],
        dpd: ["dpd.com", "dpd.com.pl"],
        dhl: ["dhl.com", "dhl.pl", "dhlparcel.pl"],
        poczta: ["poczta-polska.pl", "pocztex.pl", "envelo.pl"],
        olx: ["olx.pl"],
        allegro: ["allegro.pl", "allegrolokalnie.pl"],
        vinted: ["vinted.pl", "vinted.com"],
        pge: ["gkpge.pl", "pge-obrot.pl", "pge.pl"],
        tauron: ["tauron.pl"],
        enea: ["enea.pl"],
        energa: ["energa.pl"],
        orlen: ["orlen.pl"],
        mobywatel: ["gov.pl", "mobywatel.gov.pl"],
        pko: ["pkobp.pl", "ipko.pl"],
        mbank: ["mbank.pl"],
        santander: ["santander.pl"],
        ing: ["ing.pl"],
        pekao: ["pekao.com.pl"],
        netflix: ["netflix.com"],
        facebook: ["facebook.com", "fb.com", "meta.com"],
        whatsapp: ["whatsapp.com"]
    };

    const SHORTENERS = ["bit.ly", "tinyurl.com", "t.ly", "cutt.ly", "is.gd", "shorturl.at", "rb.gy", "goo.gl", "ow.ly", "t.co", "tiny.cc", "s.id"];
    const RISKY_TLDS = ["xyz", "top", "shop", "online", "site", "click", "icu", "live", "buzz", "info", "cfd", "sbs", "lol", "win", "vip", "store", "fun", "rest", "monster", "cyou"];

    // Każda reguła: wzorce (bez polskich znaków i wielkości liter), waga, opis dla użytkownika.
    const RULES = [
        { id: "payment", weight: 25, title: "Prośba o drobną dopłatę",
          why: "Oszuści proszą o „dopłatę” rzędu kilku złotych, żeby zdobyć dane Twojej karty lub dostęp do konta.",
          patterns: [/doplat/, /niedoplat/, /oplat[aey] (celn|manipulac|za dostaw|za przesyl)/, /\b\d{1,2}[,.]\d{2} ?(zl|pln)\b/, /uregulu/, /zaleglos/] },
        { id: "urgency", weight: 15, title: "Presja czasu i straszenie",
          why: "Pośpiech ma sprawić, że nie zdążysz się zastanowić. Prawdziwe firmy nie grożą w SMS-ie.",
          patterns: [/pilne/, /natychmiast/, /w ciagu (24|48|12|2) ?(h|godz)/, /ostatni[ae]? (ostrzezen|wezwan|szans)/, /zostanie (zablokowan|zawieszon|usunie|anulowan|odlaczon)/, /odlaczeni[ae] (pradu|energii|gazu)/, /dzis(iaj)? do (godz|\d)/, /konto .*zablokowan/] },
        { id: "credentials", weight: 30, title: "Prośba o kod BLIK, PIN, hasło lub dane karty",
          why: "Nikt uczciwy — ani bank, ani rodzina przez komunikator — nie prosi o kod BLIK, PIN, hasło czy kod CVV.",
          patterns: [/kod(u|em)? blik/, /\bblik/, /\bpin(u|em)?\b/, /\bcvv\b/, /\bcvc\b/, /haslo|hasla|haslem/, /dane (karty|logowania)/, /numer karty/, /zaloguj sie/, /potwierdz (dane|tozsamosc)/] },
        { id: "family", weight: 30, title: "„Mamo, tato, to mój nowy numer”",
          why: "Klasyczne oszustwo „na dziecko”: ktoś podaje się za bliską osobę z nowego numeru i prosi o pieniądze lub BLIK.",
          patterns: [/nowy numer/, /(zepsul|zgubil|ukradl|rozbil)(em|am)? (mi )?(sie )?telefon/, /to moj nowy/, /napisz na (whatsapp|wa)/] },
        { id: "money_request", weight: 15, title: "Prośba o pilny przelew",
          why: "Prośba o szybki przelew lub pożyczkę — szczególnie od „znajomego” — wymaga potwierdzenia telefonem.",
          patterns: [/pozycz/, /przelej/, /przelew/, /potrzebuje pieniedzy/, /oddam jutro/, /wyslij (mi )?(kase|pieniadze|kod)/] },
        { id: "remote", weight: 35, title: "Prośba o instalację aplikacji zdalnego dostępu",
          why: "AnyDesk, TeamViewer, RustDesk itp. dają oszustowi pełną kontrolę nad Twoim telefonem lub komputerem.",
          patterns: [/anydesk/, /teamviewer/, /quicksupport/, /rustdesk/, /zainstaluj (aplikacj|program)/, /\.apk\b/, /pulpit zdaln/] },
        { id: "fake_consultant", weight: 30, title: "„Konsultant banku” lub „policjant”",
          why: "Bank ani policja nigdy nie każą przelewać pieniędzy na „bezpieczne konto” ani brać kredytu „dla ochrony”.",
          patterns: [/bezpieczne konto/, /konto techniczne/, /konsultant (banku|bezpieczenstwa)/, /dzial bezpieczenstwa/, /prowadzimy postepowanie/, /(policj|cba|knf|abw).*(przel|wplac|kredyt)/, /podejrzana transakcj/, /proba (wyludzenia|wlamania)/] },
        { id: "investment", weight: 25, title: "Obietnica łatwego zysku",
          why: "„Gwarantowany zysk”, kryptowaluty, akcje Orlenu czy „inwestycja od 1000 zł” to najczęstszy wabik oszustów inwestycyjnych.",
          patterns: [/gwarantowan[ya] zysk/, /zarab(iaj|ia sie)/, /zarob(isz)? /, /pasywny dochod/, /kryptowalut/, /bitcoin/, /inwestuj/, /inwestycj[aie] (od|juz od)/, /platforma inwestycyjn/, /akcje (orlen|pge|pzu)/] },
        { id: "prize", weight: 20, title: "Wygrana, nagroda, prezent",
          why: "Jeśli nie brałeś udziału w konkursie, nie mogłeś nic wygrać. Odbiór „nagrody” zwykle wymaga podania karty.",
          patterns: [/wygral(es|as|is)/, /gratulacje/, /nagrod[aey]/, /darmow[ya]/, /bezplatn[ya] (iphone|telefon|bon)/, /zostal(es|as) wybran/, /bon (o wartosci|na)/, /zwrot (podatku|pieniedzy|nadplaty)/] },
        { id: "marketplace", weight: 25, title: "„Kurier odbierze, kliknij, aby otrzymać płatność”",
          why: "Sprzedajesz na OLX lub Vinted? Kupujący nigdy nie przysyła linku do „odebrania pieniędzy”. Płatność odbierasz tylko w aplikacji serwisu.",
          patterns: [/odebra(c|nia) (platnosc|pieniadz|srodk)/, /otrzyma(c|nia) (platnosc|pieniadz|srodk)/, /(olx|vinted|allegro) (dostaw|przesyl|pay)/, /kurier (odbierze|przyjedzie)/, /zaplacil(em|am) za/, /wypelnij formularz/] },
        { id: "delivery", weight: 10, title: "Wiadomość o przesyłce",
          why: "Fałszywe SMS-y „od kuriera” to obecnie najczęstsze oszustwo w Polsce. Status paczki sprawdzaj w oficjalnej aplikacji przewoźnika.",
          patterns: [/przesylk/, /paczk/, /kurier/, /adres (dostawy|jest niepelny|niekompletny)/, /wstrzyman/, /nie (moze|mozemy) (dostarczyc|doreczyc)/] }
    ];

    function normalize(text) {
        return text.toLowerCase()
            .normalize("NFD").replace(/[̀-ͯ]/g, "")
            .replace(/ł/g, "l")
            .replace(/\s+/g, " ");
    }

    function extractLinks(text) {
        const re = /\b((?:https?:\/\/)?(?:www\.)?(?:[a-z0-9¡-￿-]+\.)+[a-z¡-￿]{2,}(?::\d+)?(?:\/[^\s]*)?)/gi;
        const out = [];
        for (const m of text.matchAll(re)) {
            const raw = m[1].replace(/[),.;!?]+$/, "");
            const host = raw.replace(/^https?:\/\//i, "").split(/[/:?#]/)[0].toLowerCase().replace(/^www\./, "");
            // pomiń zwykłe kwoty i skróty typu "np.pl" nie mają kropek z TLD — wymagamy litery w TLD
            if (!/[a-z]/.test(host.split(".").pop())) continue;
            out.push({ raw, host });
        }
        return out;
    }

    function isOfficial(host, domains) {
        return domains.some(d => host === d || host.endsWith("." + d));
    }

    function checkLink(link) {
        const issues = [];
        const host = link.host;
        const tld = host.split(".").pop();
        if (SHORTENERS.some(s => host === s)) {
            issues.push({ weight: 25, text: `Skrócony link (${host}) ukrywa prawdziwy adres strony.` });
        }
        if (host.startsWith("xn--") || host.includes(".xn--") || /[^\x00-\x7f]/.test(host)) {
            issues.push({ weight: 35, text: `Adres ${host} zawiera nietypowe znaki — może udawać znaną stronę.` });
        }
        if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) {
            issues.push({ weight: 30, text: `Link prowadzi na sam adres IP (${host}), a nie na stronę firmy.` });
        }
        if (RISKY_TLDS.includes(tld)) {
            issues.push({ weight: 20, text: `Końcówka „.${tld}” jest często używana przez fałszywe strony.` });
        }
        for (const [brand, domains] of Object.entries(BRANDS)) {
            if (host.includes(brand) && !isOfficial(host, domains)) {
                issues.push({ weight: 40, text: `Adres ${host} udaje markę „${brand}”, ale to nie jest jej oficjalna strona (${domains[0]}).` });
                break;
            }
        }
        if ((host.match(/-/g) || []).length >= 2) {
            issues.push({ weight: 10, text: `Adres ${host} ma wiele myślników — typowe dla podróbek.` });
        }
        return issues;
    }

    function analyze(text) {
        const norm = normalize(text || "");
        const findings = [];
        let score = 0;

        for (const rule of RULES) {
            if (rule.patterns.some(p => p.test(norm))) {
                findings.push({ id: rule.id, weight: rule.weight, title: rule.title, why: rule.why });
                score += rule.weight;
            }
        }

        const links = extractLinks(text || "");
        const linkFindings = [];
        for (const link of links) {
            for (const issue of checkLink(link)) {
                linkFindings.push(issue);
                score += issue.weight;
            }
        }
        if (links.length) {
            const linkWeight = 10;
            findings.push({ id: "link", weight: linkWeight, title: "Wiadomość zawiera link",
                why: "Nie klikaj w linki z nieoczekiwanych wiadomości. Wejdź na stronę firmy samodzielnie, wpisując adres." });
            score += linkWeight;
        }

        // Link + prośba o płatność lub dane to połączenie typowe dla phishingu.
        const has = id => findings.some(f => f.id === id);
        if (links.length && (has("payment") || has("credentials") || has("marketplace"))) score += 20;

        // Zwrot do bliskiej osoby + prośba o pieniądze lub kod = „na dziecko”.
        if (!has("family") && /\b(mamo|tato|babciu|dziadku|ciociu|wujku)\b/.test(norm) && (has("money_request") || has("credentials"))) {
            const fam = RULES.find(r => r.id === "family");
            findings.push({ id: fam.id, weight: fam.weight, title: fam.title, why: fam.why });
            score += fam.weight;
        }

        score = Math.min(100, score);
        let level;
        if (!text || !text.trim()) level = "empty";
        else if (score >= 60) level = "high";
        else if (score >= 30) level = "medium";
        else if (score > 0) level = "low";
        else level = "none";

        findings.sort((a, b) => b.weight - a.weight);
        return { score, level, findings, links, linkFindings };
    }

    const api = { analyze, normalize, extractLinks };
    if (typeof module !== "undefined" && module.exports) module.exports = api;
    else root.Bezpiecznik = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
