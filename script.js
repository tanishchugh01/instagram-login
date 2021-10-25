const username = document.getElementById("username");
const pass = document.getElementById("password");

function login() {
    console.log(username);
    alert("hacked");
}

let validUsername = false;
let validPass = false;

username.addEventListener("keyup", function () {
    if (username.value.length > 0) {
        validUsername = true;
    } else {
        validUsername = false;
    }

    // console.log(validUsername);
    validCheck();
});

pass.addEventListener("keyup", function () {
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
        loginOff();
    }
}

const submitButton = document.getElementById("login");

function loginOn() {
    submitButton.style.backgroundColor = "#0095f6";
    submitButton.disabled = false;
    submitButton.style.cursor = "pointer";
}

function loginOff() {
    submitButton.style.backgroundColor = "#B2DFFC";
    submitButton.disabled = true;
    submitButton.style.cursor = "";
}

let screenshot = document.querySelector("#ss");
let index = 0;

let sslist = [
    "images/screenshot2.jpg",
    "images/screenshot3.jpg",
    "images/screenshot4.jpg",
    "images/screenshot5.jpg",
    "images/screenshot.jpg",
];

function change() {
    screenshot.src = sslist[index];
    if (index == 4) {
        index = 0;
    } else {
        index++;
    }

    setTimeout(change, 5000);
}

window.onload = change();

// function change() {
//     // setInterval(function () {
//         screenshot.src=sslist[index++];
//     // },1000);

//     if(index>=4)  index=0;
// }

// window.onload=function () {
//     setInterval( change(),1000);
// };

//color
//button block
