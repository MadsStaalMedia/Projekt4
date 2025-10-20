// Variabler og typer
const overlay = document.getElementById("myNav");
const menuContainer = document.getElementById("menuContainer");
const knapOpn = document.getElementById("burgerKnap");
const knapLuk = document.getElementById("krydsKnap");

// Arrays + objekter
const menuPunkter = [
  { href: "index.html", title: "HJEM" },
  { href: "frivillig.html", title: "OM FRIVILLIGHEDEN" },
  { href: "aktiviteter.html", title: "AKTIVITETER" },
  { href: "tilmelding.html", title: "BLIV FRIVILLIG" }
];

// Loop til at vise menu-punkterne (DOM-manipulation)
for (let i = 0; i < menuPunkter.length; i++) {
  const punkt = menuPunkter[i];
  menuContainer.innerHTML += "<a href='" + punkt.href + "'>" + punkt.title + "</a>";
}

// Funktion med if/else (kontrolstruktur)
function visMenu(vis) {
  if (vis) {
    overlay.style.display = "inline-block";
    document.body.style.overflow = "hidden"; // låser scroll
  } else {
    overlay.style.display = "none";
    document.body.style.overflow = "auto"; // tillader scroll igen
  }
}

// Event listeners til klik på knapperne (DOM)
knapOpn.addEventListener("click", function() {
  visMenu(true);
});

knapLuk.addEventListener("click", function() {
  visMenu(false);
});
