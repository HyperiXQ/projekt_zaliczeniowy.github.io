let modal = document.getElementById("myModal");
let modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
let btn = document.getElementById("rozwiazanie_btn");
let btn2 = document.getElementById("egzamin_btn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

btn2.onclick = function () {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal2.style.display = "none";
    }
}