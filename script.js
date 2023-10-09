var button = document.getElementById('btn')
const SU = document.getElementById("successSU")

button.onclick = function(e) {
    e.preventDefault();

    let conPassword = document.getElementById("confirm_password")
    const passwordtxt = document.getElementById("confirm-password-span")
    const username = document.getElementById("uname").value
    const pass = document.getElementById("password").value
    const email = document.getElementById("email").value

    if (conPassword.value === pass) {
        passwordtxt.innerHTML = "";
        SU.style.display = "block";
        document.getElementById("user").innerHTML = username;
    } else {
        passwordtxt.innerHTML = "Password Not Match";
        conPassword.value = "";
    }
}   