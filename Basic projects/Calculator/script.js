let p = document.querySelector(".p");

function validation(value) {
    p.textContent  = p.textContent === "0" ? value: p.textContent += value;
}

function vanish() {
    p.textContent = 0;
}

function getresult() {
    p.textContent = eval(p.textContent);
}