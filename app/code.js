// we extract the necessary elements for the password validation
const passw = document.getElementById("psswr");
const verification_passw = document.getElementById("confirm_psswr");
const form = document.querySelector("form");
const err_msg = document.getElementById("error-msg")

//validation before we submit

form.addEventListener("submit", (event) => {

    

    if (passw.value == verification_passw.value){
        alert("Account created!")
    }
    else{
        event.preventDefault();
        passw.value = ""
        passw.style.borderBlockColor = "red"
        verification_passw.value = ""
        err_msg.innerHTML = "Passwords do not match!";
        err_msg.style.color = "red";
    }
})
