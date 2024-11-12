
function color(x) {
    let color = document.querySelector("input");
    if(x.key === "Enter") {
        document.body.style.backgroundColor = color.value;
    }
}