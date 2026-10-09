function highlight() {
    let elements = document.querySelectorAll("strong");

    elements.forEach(function(element) {
        element.style.color = "rgb(0, 128, 0)";
    });
}

function return_normal() {
    let elements = document.querySelectorAll("strong");

    elements.forEach(function(element) {
        element.style.color = "rgb(0, 0, 0)";
    });
}