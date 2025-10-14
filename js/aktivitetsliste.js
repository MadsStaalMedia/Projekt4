const events = ["netOd", "streg", "lego", "klub", "natur", "netSve", "cafe", "50+"];

let eventList = document.getElementById("eventList");

for (let i = 0; i < events.length ; i++) {
    console.log(i)
    let x = events[i];
    eventList.innerHTML += '<button class="eventButton"></button>'
}