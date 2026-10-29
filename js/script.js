const formKontak = document.getElementById("formKontak");

if (formKontak) {
  formKontak.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const status = document.getElementById("statusKontak");

    status.textContent = "Terima kasih, " + nama + "! Pesan berhasil diperiksa.";
    status.className = "mt-3 mb-0 text-success";
    formKontak.reset();
  });
}

const menuNavbar = document.getElementById("menuNavbar");

if (menuNavbar) {
  menuNavbar.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      if (menuNavbar.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menuNavbar).hide();
      }
    });
  });
}

const linkNav = document.querySelectorAll("#menuNavbar .nav-link");

function setAktif(id) {
  linkNav.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + id);
  });
}
let kunci = false;
linkNav.forEach(function (link) {
  link.addEventListener("click", function () {
    setAktif(link.getAttribute("href").slice(1));
    kunci = true;
    setTimeout(function () { kunci = false; }, 1000);
  });
});
window.addEventListener("scroll", function () {
  if (kunci) return;
  const akhirHalaman = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
  let aktif = "beranda";
  document.querySelectorAll("section[id]").forEach(function (sec) {
    if (sec.getBoundingClientRect().top <= 140) aktif = sec.id;
  });
  if (akhirHalaman) aktif = "kontak";
  setAktif(aktif);
}, { passive: true });