const netOd = '<img class="eventButton__img" src="billeder/ikoner/netvaerk1.svg" alt="netærk ikon"><p><b>Netværksgruppen</b> - Odense</p>';
const streg = '<p><b>ADHD Streger</b> - Odense</p>';
const lego = '<p><b>LEGO Cafe</b> - Bolbro</p>';
const klub = '<p><b>ADHD Klubben</b> - Middelfart</p>';
const natur = '<p><b>Naturgruppen</b> - Svendborg</p>';
const netSve = '<p><b>Netværksgruppen</b> - Svendborg</p>';
const cafe = '<p><b>Cafe Ærø</b> - Ærø</p>';
const halvtre = '<p><b>50+ Netværksgruppen</b><br> (mangler tovholder) </p>';


const events = [netOd, streg, lego, klub, natur, netSve, cafe, halvtre];

let eventList = document.getElementById("eventList");

for (let i = 0; i < events.length ; i++) {
    console.log(i)
    let x = events[i];
    eventList.innerHTML += '<button class="eventButton" onclick="seeEvent('+i+')">' + x + '</button>'
}

function seeEvent(x) {

}

