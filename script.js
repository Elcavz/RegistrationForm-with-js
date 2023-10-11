var button = document.getElementById('btn')
const SU = document.getElementById("successSU")


button.onclick = function(e) {
    e.preventDefault();

    let conPassword = document.getElementById("confirm_password")
    const passwordtxt = document.getElementById("confirm-password-span")
    const fname = document.getElementById("fname").value
    const lname = document.getElementById("lname").value
    const uname = document.getElementById("uname").value
    const pass = document.getElementById("password").value
    const email = document.getElementById("email").value
    const male = document.getElementById("male").value
    const dataFname = document.getElementById("dataFname")
    const dataLname = document.getElementById("dataLname")
    const dataUname = document.getElementById("dataUname")
    const dataEmail = document.getElementById("dataEmail")
    const terms = document.getElementById("terms")

    if (terms.checked == true) {
        if (conPassword.value === pass) {
            passwordtxt.innerHTML = "";
            dataFname.innerHTML = fname;
            dataLname.innerHTML = lname;
            dataUname.innerHTML = uname;
            dataEmail.innerHTML = email;
        } else {
            passwordtxt.innerHTML = "Password Do Not Match";
            conPassword.value = "";
        }
    } else {
        passwordtxt.innerHTML = "Password Do Not Match";
    }

    
}