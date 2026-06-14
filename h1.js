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