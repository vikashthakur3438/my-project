let mode = document.querySelector("#mode");
let body = document.querySelector("body");

// current mode
let curtmode = "light";

// click logic
mode.addEventListener("click", () => {

    if (curtmode === "light") {

        console.log("dark");

        curtmode = "dark";

        body.classList.add("dark");
        body.classList.remove("light");

    } else {

        console.log("light");

        curtmode = "light";

        body.classList.add("light");
        body.classList.remove("dark");
    }

});
function login() {

    // username aur password check
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username !== "" && password !== ""){

        // dashboard open hoga
        window.location.href = "dashboard.html";

    }
    else{
        alert("Please enter username and password");
    }

}