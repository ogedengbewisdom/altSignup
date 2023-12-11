
let show = false;
const toggle= document.querySelector("#toggle");
const password = document.querySelector("#password")

toggle.addEventListener("click", () => {
    if(show) {
        password.setAttribute("type", "password");
    } else {
        password.setAttribute("type", "text");
    }
    show = !show
})