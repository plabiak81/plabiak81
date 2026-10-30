/* Nierdzewka w warsztacie - minimum JS.
 * KONFIGURACJA: uzupełnia właściciel (szczegóły w ZADANIA-WLASCICIELA.md).
 * Dopóki linki płatności są puste, przycisk „Kupuję” otwiera e-mail z zamówieniem
 * (przedsprzedaż: płatność przelewem po potwierdzeniu, faktura bez VAT).
 * Dopóki adres formularza jest pusty, zapis po ściągę otwiera e-mail, a ściąga jest dostępna od razu.
 */
var KONFIG = {
  email: 'mojeacount@gmail.com',   // e-mail do zamówień (decyzja właściciela 2026-10-30)
  formularz: '',                      // [[ADRES FORMULARZA - np. endpoint usługi newslettera]]
  platnosci: {                        // [[LINK PŁATNOŚCI - np. Stripe Payment Link / Przelewy24]]
    poradnik: '',
    szablony: '',
    komplet: ''
  }
};

var PRODUKTY = {
  poradnik: { nazwa: 'Poradnik „Nierdzewka bez przebarwień” + 6 ściąg', cena: '49 zł' },
  szablony: { nazwa: 'Szablony warsztatu (8 dokumentów)', cena: '179 zł' },
  komplet:  { nazwa: 'Komplet: szablony + poradnik + aktualizacje 12 mies.', cena: '199 zł' }
};

function mailto(temat, tresc) {
  return 'mailto:' + KONFIG.email + '?subject=' + encodeURIComponent(temat) + '&body=' + encodeURIComponent(tresc);
}

document.addEventListener('DOMContentLoaded', function () {
  // Przyciski zakupu
  document.querySelectorAll('[data-kup]').forEach(function (el) {
    var id = el.getAttribute('data-kup');
    var p = PRODUKTY[id];
    if (!p) return;
    var link = KONFIG.platnosci[id];
    el.addEventListener('click', function (e) {
      var reg = document.getElementById('akcept-regulamin');
      var tc = document.getElementById('zgoda-tresc');
      var info = document.getElementById('kup-info');
      if (reg && tc && (!reg.checked || !tc.checked)) {
        e.preventDefault();
        if (info) { info.textContent = 'Zaznacz oba pola nad przyciskami: akceptację regulaminu i zgodę na dostarczenie plików.'; info.scrollIntoView({ block: 'center' }); }
        return;
      }
      if (link) { el.href = link; return; }
      el.href = mailto('Zamówienie: ' + p.nazwa + ' (' + p.cena + ')',
        'Dzień dobry,\n\nzamawiam: ' + p.nazwa + ' - ' + p.cena + ' (cena końcowa, sprzedawca zwolniony z VAT).\n\n' +
        'Imię i nazwisko / nazwa firmy:\nNIP (jeśli faktura na firmę):\nAdres:\n\n' +
        'Zaakceptowałem/am regulamin. Na stronie zaznaczyłem/am zgodę na dostarczenie treści cyfrowej przed upływem 14 dni ' +
        'i przyjmuję do wiadomości, że po dostarczeniu plików tracę prawo odstąpienia od umowy.\n\n' +
        'Proszę o dane do przelewu. Pliki dostanę e-mailem po zaksięgowaniu wpłaty.\n');
    });
    el.href = link || '#zamow';
  });

  // Zapis po darmową ściągę
  var form = document.getElementById('zapis');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.querySelector('[name=email]').value.trim();
      var zgoda = form.querySelector('[name=zgoda]').checked;
      var info = document.getElementById('zapis-info');
      if (!email || email.indexOf('@') < 1) { info.textContent = 'Wpisz poprawny adres e-mail.'; return; }
      if (!zgoda) { info.textContent = 'Zaznacz zgodę, żebyśmy mogli wysłać ściągę i e-maile.'; return; }
      if (KONFIG.formularz) {
        fetch(KONFIG.formularz, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        }).then(function () { window.location.href = 'dziekujemy.html?sciaga=1'; })
          .catch(function () { info.textContent = 'Nie udało się zapisać. Spróbuj ponownie albo napisz: ' + KONFIG.email; });
      } else {
        window.location.href = mailto('Ściąga: kolory nalotu', 'Proszę o ściągę „Kolory nalotu na spoinie” i informacje o poradniku i szablonach.\nMój e-mail: ' + email + '\nZgoda na e-maile: tak');
        setTimeout(function () { window.location.href = 'dziekujemy.html?sciaga=1'; }, 800);
      }
    });
  }

  // Strona „dziękujemy”: pokaż właściwy komunikat
  var param = new URLSearchParams(window.location.search);
  if (param.get('sciaga')) {
    var s = document.getElementById('dla-sciagi');
    if (s) s.hidden = false;
  }

  // Rok w stopce
  document.querySelectorAll('[data-rok]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
});
