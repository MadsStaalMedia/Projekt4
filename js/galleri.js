const billeder = ["billeder/carousel/carousel1.webp","billeder/carousel/carousel1.webp","billeder/carousel/carousel1.webp"];

let galleri = document.getElementById("carousel");
let prikker = document.getElementById("carousel_prikker");

for (let i = 0; i < billeder.length; i++) {
    let x = billeder[i];
    prikker.innerHTML += "<div class='carousel_prik' onclick='skiftbillede("+i+")'></div>";
}
/*
Lav en class til prikkerne som gør at de er den mørkerre grå farve.
Derefter tilføj at når man skifter billede at man så også tildeler prikken den overstående class, og fjerner hvis de andre har den grå farve
*/
function skiftbillede(x) {
if (Number(x)==0) {
    document.getElementById("carousel_billede").innerHTML='<img id="carousel_billede" src="billeder/carousel/carousel1.webp"> '
}
 if (Number(x)==1) {
   document.getElementById("carousel_billede").innerHTML='<img id="carousel_billede" src="billeder/carousel/carousel2.PNG"> '
}
if (Number(x)==2) {
document.getElementById("carousel_billede").innerHTML='<img id="carousel_billede" src="billeder/carousel/carousel3.PNG"> '
}
}
document.getElementById("carousel_billede").innerHTML='<img id="carousel_billede" src="billeder/carousel/carousel1.webp"> '

//window.setInterval(next_img, 5000); 

//let billedeNummer = 0;  

//function next_img() { 
  //  skiftbillede(billedeNummer); 
  //  billedeNummer += 1;
   // if (billedeNummer >= billeder.length) { 
   //     billedeNummer = 0;
   // }
//}