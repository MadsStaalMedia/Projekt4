const netOd = '<img class="eventButton__img" src="billeder/ikoner/netvaerk1.svg" alt="netærksgruppen odense ikon"><p><b>Netværksgruppen</b> - Odense</p>';
const streg = '<img class="eventButton__img" src="billeder/ikoner/streger.svg" alt="adhd streger ikon"><p><b>ADHD Streger</b> - Odense</p>';
const lego = '<img class="eventButton__img" src="billeder/ikoner/lego.svg" alt="lego cafe ikon"><p><b>LEGO Cafe</b> - Bolbro</p>';
const klub = '<img class="eventButton__img" src="billeder/ikoner/klubben.svg" alt="adhd klubben ikon"><p><b>ADHD Klubben</b> - Middelfart</p>';
const natur = '<img class="eventButton__img" src="billeder/ikoner/natur.svg" alt="naturgruppen ikon"><p><b>Naturgruppen</b> - Svendborg</p>';
const netSve = '<img class="eventButton__img" src="billeder/ikoner/netvaerk2.svg" alt="netærksgruppen svendborg ikon"><p><b>Netværksgruppen</b> - Svendborg</p>';
const cafe = '<img class="eventButton__img" src="billeder/ikoner/cafe.svg" alt="cafe ærø ikon"><p><b>Cafe Ærø</b> - Ærø</p>';
const halvtre = '<img class="eventButton__img" src="billeder/ikoner/tovholder.svg" alt="50+ netværksgruppen ikon"><p><b>50+ Netværksgruppen</b><br> (mangler tovholder) </p>';

const events = [netOd, streg, lego, klub, natur, netSve, cafe, halvtre];

const months = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"];

let eventList = document.getElementById("eventList");

let eventDetail = document.getElementById("eventDetail");

let date1set = 0;
let date2set = 0;
let date3set = 0;

for (let i = 0; i < events.length ; i++) {
    let x = events[i];
    eventList.innerHTML += '<button class="eventButton" onclick="seeEvent('+ i + 1 +')">' + x + '</button>';
    if (i == events.length - 1) {
        eventDate();
    }
    
}

function seeEvent(x) {
    let element = document.getElementById("event"+x);
    element.scrollIntoView(true);
}

function eventDate() {
    let date = new Date();
    let firstDay = new Date(date.getFullYear(),date.getMonth(),1);
    let finalDay = new Date(date.getFullYear(),date.getMonth()+1,0);
    let secondMonth = new Date(date.getFullYear(),date.getMonth()+1,1);
    let secondMonthFinal = new Date(secondMonth.getFullYear(),secondMonth.getMonth()+1,0);
    let lastWeek = finalDay.getDate() - 7;
    let lastWeekSecond = secondMonthFinal.getDate() - 7;


    for (i = firstDay.getDate(); i <= finalDay.getDate(); i++) {

        if (firstDay.getDay() == 2 && firstDay.getDate() <= 7 && firstDay.getDate() >= date.getDate() && date1set == 0)  {
            const nextTuesday = firstDay.getDate() + ". " + months[firstDay.getMonth()];
            document.getElementById('event1date1').innerText += nextTuesday;
            date1set = 1;
        }

        if (firstDay.getDay() == 3 && firstDay.getDate() >= lastWeek && firstDay.getDate() >= date.getDate() && date2set == 0) {
            const lastWednesday = firstDay.getDate() + ". " + months[firstDay.getMonth()];
            document.getElementById('event1date2').innerText += lastWednesday;
            document.getElementById('event1date3').innerText += lastWednesday;
            date2set = 1;
        }

        if (firstDay.getDay() == 6 && firstDay.getDate() > 7 && firstDay.getDate() <= 14 && firstDay.getDate() >= date.getDate() && date3set == 0)  {
            const secondSaturday = firstDay.getDate() + ". " + months[firstDay.getMonth()];
            document.getElementById('event4date1').innerText += secondSaturday;
            date3set = 1;
        }

        firstDay.setDate(firstDay.getDate() + 1);
    }

    for (i = secondMonth.getDate(); i <= secondMonthFinal.getDate(); i++) {

        if (secondMonth.getDay() == 2 && secondMonth.getDate() <= 7 && date1set == 0)  {
            const nextTuesday = secondMonth.getDate() + ". " + months[secondMonth.getMonth()];
            document.getElementById('event1date1').innerText += nextTuesday;
            date1set = 1;
    
        }

        if (secondMonth.getDay() == 3 && secondMonth.getDate() >= lastWeekSecond  && date2set == 0) {
            const lastWednesday = secondMonth.getDate() + ". " + months[secondMonth.getMonth()];
            document.getElementById('event1date2').innerText += lastWednesday;
            document.getElementById('event1date3').innerText += lastWednesday;
            date2set = 1;
        }

        if (secondMonth.getDay() == 6 && secondMonth.getDate() > 7 && secondMonth.getDate() <= 14 && date3set == 0)  {
            const secondSaturday = secondMonth.getDate() + ". " + months[secondMonth.getMonth()];
            document.getElementById('event4date1').innerText += secondSaturday;
            date3set = 1;
        }

        secondMonth.setDate(secondMonth.getDate() + 1);
    }

}