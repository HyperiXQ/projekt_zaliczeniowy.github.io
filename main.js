let modal = document.getElementById("myModal");
let modal2 = document.getElementById("myModal2");

let btn = document.getElementById("rozwiazanie_btn");
let btn2 = document.getElementById("egzamin_btn");

let span = document.getElementsByClassName("close")[0];
let span2 = document.getElementsByClassName("close2")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

btn2.onclick = function () {
    modal2.style.display = "block";
}

span2.onclick = function () {
    modal2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal2.style.display = "none";
    }
}