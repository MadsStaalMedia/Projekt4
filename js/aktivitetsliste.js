const netOd = '<img class="eventButton__img" src="billeder/ikoner/netvaerk1.svg" alt="netærksgruppen odense ikon"><p><b>Netværksgruppen</b> - Odense</p>';
const streg = '<img class="eventButton__img" src="billeder/ikoner/streger.svg" alt="adhd streger ikon"><p><b>ADHD Streger</b> - Odense</p>';
const lego = '<img class="eventButton__img" src="billeder/ikoner/lego.svg" alt="lego cafe ikon"><p><b>LEGO Cafe</b> - Bolbro</p>';
const klub = '<img class="eventButton__img" src="billeder/ikoner/klubben.svg" alt="adhd klubben ikon"><p><b>ADHD Klubben</b> - Middelfart</p>';
const natur = '<img class="eventButton__img" src="billeder/ikoner/natur.svg" alt="naturgruppen ikon"><p><b>Naturgruppen</b> - Svendborg</p>';
const netSve = '<img class="eventButton__img" src="billeder/ikoner/netvaerk2.svg" alt="netærksgruppen svendborg ikon"><p><b>Netværksgruppen</b> - Svendborg</p>';
const cafe = '<img class="eventButton__img" src="billeder/ikoner/cafe.svg" alt="cafe ærø ikon"><p><b>Cafe Ærø</b> - Ærø</p>';
const halvtre = '<img class="eventButton__img" src="billeder/ikoner/tovholder.svg" alt="50+ netværksgruppen ikon"><p><b>50+ Netværksgruppen</b><br> (mangler tovholder) </p>';


const events = [netOd, streg, lego, klub, natur, netSve, cafe, halvtre];

let eventList = document.getElementById("eventList");

let eventDetail = document.getElementById("eventDetail");

for (let i = 0; i < events.length ; i++) {
    console.log(i);
    let x = events[i];
    eventList.innerHTML += '<button class="eventButton" onclick="seeEvent('+i+')">' + x + '</button>';
    eventDetailing(i);
}

function eventDetailing(x) {
    if (x == 0) {
        eventDetail.innerHTML +=
        eventDetail.innerHTML += '<h3>Netværksgruppe for kvinder</h3><p>Mødes sidste onsdag i måneden, man er velkommen både som diagnosticeret eller afventende udredning. Der er altid nye og vi har en god og rummende stemning.<br><br>De næste netværksmøder er:</p><ul><li>Onsdag d. 29/10</li><li>Onsdag d. 26/11</li></ul>';
    } else if (x == 1) {
        
    } else if (x == 2) {
        
    } else if (x == 3) {
        
    } else if (x == 4) {
        
    } else if (x == 5) {
        
    } else if (x == 6) {

    } else if (x == 7) {

    }
    
}

function seeEvent(x) {
    document.getElementById("event"+x).scrollIntoView();
}