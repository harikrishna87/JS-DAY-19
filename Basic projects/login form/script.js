let login = document.querySelector('#btn');
login.addEventListener('click', function (event) {
    event.preventDefault();

    let user_name = document.getElementById("username");
    let user_password = document.getElementById("password");
    let names = document.querySelector("#h2");

    let user_names = user_name.value.trim();
    let user_pass = user_password.value.trim();

    if (user_names && user_pass) {
        names.innerText = `${user_names} Account is creating....`
        names.style.paddingLeft = "10px"
    }

    user_password.value = "";
    user_name.value = "";

});

let password = document.getElementById("password");

let icon = document.querySelector("#icon");

// icon.addEventListener("click", function() {
//     if (password.type === "password") {
//         password.type = "text";
//         icon.className = "fa-solid fa-eye"
//     }
//     else {
//         password.type = "password";
//         icon.className = "fa-solid fa-eye-slash"
//     }
// })

icon.onclick = function() {
    if (password.type === "password") {
        password.type = "text";
        icon.className = "fa-solid fa-eye"
    }
    else {
        password.type = "password";
        icon.className = "fa-solid fa-eye-slash"
    }
}