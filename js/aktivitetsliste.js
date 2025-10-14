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

let eventDetail = document.getElementById("eventDetail");

for (let i = 0; i < events.length ; i++) {
    console.log(i);
    let x = events[i];
    eventList.innerHTML += '<button class="eventButton" onclick="seeEvent('+i+')">' + x + '</button>';
    eventDetailing(i);
}

function eventDetailing(x) {
    if (x == 0) {
        eventDetail.innerHTML += '<h3>Åben netværksgruppe for alle</h3><p>Mødes første tirsdag i måneden. <br>Her er pårørende, diagnosticerede og dem der afventer udredning velkommen. <br>Der er ingen undervisning eller oplæg, netværket er et fællesskab hvor man kan møde ligesindede, finde fællesskab og dele erfaringer. Alt efter hvor mange vi bliver deler vi os op i to grupper, den ene med et emne der vælges ud fra forslag og med ordstyring, den anden gruppe med mere fri snak. <br>Der er frivillige fra foreningen til at holde snakken kørende. <br><br>De næste netværksmøder er:</p><ul><li>Tirsdag d.7.okt</li><li>Tirsdag d.4. nov</li><li>Tirsdag d.2. dec</li></ul><p><br>Meld dig endelig til på FB-gruppen <a href="https://www.facebook.com/ADHDforeningen/">ADHD Fyn og omegn.</a></p>' 
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

}