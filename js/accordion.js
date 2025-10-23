//const acc = document.getElementsByClassName("accordion__section");

const acc = [
    document.getElementById("section1"),
    document.getElementById("section2"),
    document.getElementById("section3"),
    document.getElementById("section4"),
]

for (i=0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() { 
        this.classList.toggle("expanded");

        let pan = this.nextElementSibling;

        if (pan.style.maxHeight) {
            pan.style.maxHeight = null;
        } else {
            pan.style.maxHeight = pan.scrollHeight + "px";
        }
    });
}
