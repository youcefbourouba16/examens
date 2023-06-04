
function openPopup() {
    let v = document.getElementById("test");
    v.classList.add("open-login-html")

}
function closePopup() {
    let v = document.getElementById("test");
    v.classList.remove("open-login-html");
}





//////change back ground when hovering
document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit1");
    const submitButton1 = document.getElementById("logUp");
    const loginHtml = document.getElementById("test");

    submitButton.addEventListener("mouseover", function() {
        loginHtml.style.boxShadow = "0 12px 15px 0 rgb(0, 255, 40), 0 17px 50px 0 rgba(0, 0, 0, 0.78)";
    });

    submitButton.addEventListener("mouseout", function() {
        loginHtml.style.boxShadow = "";
    });
    submitButton1.addEventListener("mouseover", function() {
        loginHtml.style.boxShadow = "0 12px 15px 0 rgb(0, 255, 40), 0 17px 50px 0 rgba(0, 0, 0, 0.78)";
    });

    submitButton1.addEventListener("mouseout", function() {
        loginHtml.style.boxShadow = "";
    });
});


function emailvalidation(){
    var email_error = document.getElementById("email-error");
    var user_signin = document.getElementById("user-signin");

    if (!user_signin.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
        email_error.innerHTML = "Veuillez saisir une adresse e-mail valide ";
        return false;
    }else email_error.innerHTML = "";

}
function passwordvalidation() {
    var password_error = document.getElementById("password-error");
    var input = document.getElementById("pass-signup").value;
    password_error.innerHTML = "";
    input=input.trim();
    if (input.length < 6) {
        password_error.innerHTML = "Le mot de passe doit comporter au moins 6 caractères";
        return false;
    } else password_error.innerHTML = "";
    if (!input.match(/[a-z]/)) {
        password_error.innerHTML = "Le mot de passe doit contenir au moins une lettre minuscule";
        return false;
    } else password_error.innerHTML = "";
    if (!input.match(/[A-Z]/)) {
        password_error.innerHTML = "Le mot de passe doit contenir au moins une lettre majuscule";
        return false;
    } else password_error.innerHTML = "";
    if (!input.match(/\d/)) {
        password_error.innerHTML = "Le mot de passe doit contenir au moins un chiffre";
        return false;
    } else

        password_error.innerHTML = "";
        return true;

}
function passwordVerfication(){
    let input1 = document.getElementById("pass-signup").value;
    let input2=document.getElementById("pass-repeat").value;
    let error=document.getElementById("password-repeat-error");
    if (!input1.match(input2)){
        error.innerHTML="Ces mots de passe ne correspondent pas. Veuillez réessayer.";
    }else error.innerHTML = "";
}
function eye(){
    let eye1=document.getElementById('eye');
    eye1.src="eye.svg";
    eye1.alt="eye hide";

}
/*
+++++++++++++++ calculatrice+++++++++++++++++++++++++++++++++++++++++++++++++++
 */
function openCal(){
    let d=document.getElementById("d1");
    d.classList.add("calculator2");

}
function closeCal(){
    let d=document.getElementById("d1");
    d.classList.remove("calculator2");
}
var display = document.querySelectorAll(".display");
var operator = "";
var x = 0;

function operations(symbol) {
    if (x == 1) {
        if (symbol == "+" || symbol == "-" || symbol == "*" || symbol == "/") {
            operator = "";
            operator = display[1].value;
            x = 0;
        } else {
            operator = "";
            x = 2;
        }
    }
    if (symbol == "=") {
        if (operator != "") {
            let operation = operator.replace(")(", ")*(");
            try {
                eval(operation);
                res = eval(operation);
                display[1].value = res;
            } catch (error) {
                display[0].value = "Syntax Error";
                display[1].value = "";
                operator = "";
            }
            x = 1;
        }
    } else if (symbol == "C") {
        display[0].value = "";
        display[1].value = "0";
        operator = "";
    } else if (symbol == "<") {
        operator = operator.substring(0, operator.length - 1);
        display[0].value = operator;
    } else {
        operator += symbol;
        display[0].value = operator;
    }
}
// Récupérer la référence de la div
var div = document.getElementById('d1');

// Variables pour stocker les coordonnées de départ du déplacement
var startX = 0;
var startY = 0;

// Fonction de gestion de l'événement de démarrage du déplacement
function startDrag(event) {
    startX = event.clientX;
    startY = event.clientY;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}

// Fonction de gestion de l'événement de déplacement de la souris
function drag(event) {
    var deltaX = event.clientX - startX;
    var deltaY = event.clientY - startY;
    var newPosX = div.offsetLeft + deltaX;
    var newPosY = div.offsetTop + deltaY;
    div.style.left = newPosX + 'px';
    div.style.top = newPosY + 'px';
    startX = event.clientX;
    startY = event.clientY;
}

// Fonction de gestion de l'événement d'arrêt du déplacement
function stopDrag() {
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
}

// Ajouter l'événement de démarrage du déplacement à la div
div.addEventListener('mousedown', startDrag);

