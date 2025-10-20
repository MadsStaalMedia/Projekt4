const acc = document.getElementsByClassName("accordion__section");

for (let i=0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() { alert(lol)
        this.classlist.toggle("active");

        let pan = this.nextElementSibling;

        if (pan.style.display === "block" ) {
            pan.style.display = "none";
        } else {
            pan.style.display = "block";
        }
    });
}

function myFunction () {
    let pan = this.nextElementSibling;

        if (pan.style.display === "none" ) {
            pan.style.display = "block";
        } else {
            pan.style.display = "none";
        }
}