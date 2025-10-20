const acc = document.getElementsByClassName("accordion__section");

for (i=0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() { 
        this.classList.toggle("active");

        let pan = this.nextElementSibling;

        if (pan.style.display === "block" ) {
            pan.style.display = "none";
        } else {
            pan.style.display = "block";
        }
    });
}
