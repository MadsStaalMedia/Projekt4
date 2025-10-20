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
let htmlIndhold = "";
for (let i = 0; i < menuPunkter.length; i++) {
  const punkt = menuPunkter[i];
  htmlIndhold += "<a href='" + punkt.href + "'>" + punkt.title + "</a>";
}
menuContainer.innerHTML = htmlIndhold;

// Funktion med if/else (kontrolstruktur)
function visMenu(vis) {
  if (vis) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
}

// Event listeners til klik på knapperne (DOM)
knapOpn.addEventListener("click", function() {
  visMenu(true);
});

knapLuk.addEventListener("click", function() {
  visMenu(false);
});
