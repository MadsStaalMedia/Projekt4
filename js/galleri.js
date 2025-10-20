const billeder = ["billeder/carousel/carousel1.webp","billeder/carousel/carousel1.webp","billeder/carousel/carousel1.webp"];

let galleri = document.getElementById("carousel");
let prikker = document.getElementById("carousel_prikker");

for (let i = 0; i < billeder.length; i++) {
    let x = billeder[i];
    prikker.innerHTML += "<div class='carousel_prik' onclick='skiftbillede("+i+")'></div>";
}

function skiftbillede(x) {
if (Number(x)==0) {
    document.getElementById("carousel_billede").innerHTML='<img id="carousel_billede" src="billeder/carousel/carousel1.webp"> '
}
 if (Number(x)==1) {
   document.getElementById("carousel_billede").innerHTML='<img id="carousel_billede" src="billeder/carousel/carousel2.PNG"> '
}
if (Number(x)==2) {
    document.getElementById("billede").innerHTML='<img class="carousel" src="img/baby3.png"> '
}
}
document.getElementById("carousel_billede").innerHTML='<img id="carousel_billede" src="billeder/carousel/carousel1.webp"> '