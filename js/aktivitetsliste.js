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
    let x = events[i];
    eventList.innerHTML += '<button class="eventButton" onclick="seeEvent('+i+')">' + x + '</button>';
    
}

function eventDate() {
    let date = new Date();
    let firstDay = new Date(date.getFullYear(),date.getMonth(),1);
    let finalDay = new Date(date.getFullYear(),date.getMonth()+1,0);

    for (i = firstDay.getDate(); i <= finalDay.getDate(); i++) {

        if (firstDay.getDay() == 2 && firstDay.getDate() < 8)  {
        const nextTuesday = firstDay.getDate() + "/" + firstDay.getMonth();
        document.getElementById('event1date1').innerText += nextTuesday;
        console.log(nextTuesday);
        }

        if (firstDay.getDay() == 3 && firstDay.getDate() > finalDay.getDate - 7)

        firstDay.setDate(firstDay.getDate() + 1);
    }

    
}

function seeEvent(x) {
    document.getElementById("event"+x).scrollIntoView();
}