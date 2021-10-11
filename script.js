const username = document.getElementById("username");
const pass = document.getElementById("password");

function login() {
    console.log(username);
}

let validUsername = false;
let validPass = false;

username.addEventListener("keyup", function (event) {
    if (username.value.length > 0) {
        validUsername = true;
    } else {
        validUsername = false;
    }

    // console.log(validUsername);
    validCheck();
});

pass.addEventListener("keyup", function (event) {
    if (pass.value.length > 5) {
        validPass = true;
    } else {
        validPass = false;
    }

    validCheck();
});

function validCheck() {
    // console.log(validUsername);
    // console.log(validPass);

    if (validPass && validUsername) {
        loginOn();

        console.log("go");
    } else {
        console.log("no");
        
        loginOff();
    }
}

const submitButton = document.getElementById("login");

function loginOn() {
    submitButton.style.backgroundColor = "#0095f6";
}

function loginOff() {
    submitButton.style.backgroundColor = "#B2DFFC";
}

//color
//button block
