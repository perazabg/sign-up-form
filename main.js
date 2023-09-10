const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

function checkPassword(){
    if(password1.value != password2.value){
        password2.setCustomValidity("Passwords do not match!");
    }
    else{
        password2.setCustomValidity("");
    }
}

password2.onkeyup = checkPassword;