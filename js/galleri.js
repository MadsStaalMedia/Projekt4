const billeder = ["billeder/carousel/carousel1.webp","billeder/carousel/carousel1.webp","billeder/carousel/carousel1.webp"];

let prikviser = document.getElementById("carousel_prikker");
let billedeviser = document.getElementById("carousel_billede");

for (let i = 0; i < billeder.length; i++) {
    prikviser.innerHTML += "<div class='carousel_prik'onclick='skiftbillede("+i+")></div>";
    billedeviser.innerHTML += "<img class='carousel_billede fade 'src='"+billeder[i]+"'>";
}

const slides = document.getElementsByClassName("carousel_billede");
const prikker = document.getElementsByClassName("carousel_prik");

slides[0].style.display = "block";

let billedenummer = 0;

function skiftbillede(x) {

    for (i = 0; x < prikker.length; x++) {
        prikker[i].classList.remove("active");
        slides[i].style.display = "none";
    }

    billedenummer = x;

    prikker[x].classList.add("active");

    slides[x].style.display = "block";
}

//window.setInterval(next_img, 5000); 

//let billedeNummer = 0;  

//function next_img() { 
  //  skiftbillede(billedeNummer); 
  //  billedeNummer += 1;
   // if (billedeNummer >= billeder.length) { 
   //     billedeNummer = 0;
   // }
//}