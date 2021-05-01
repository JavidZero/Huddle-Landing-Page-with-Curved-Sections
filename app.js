const form = document.querySelector(".container .footer .flex .form form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var val = form.querySelector("label input");

    if (validateEmail(val.value)) {
        form.classList.remove("err");
    }
    else {
        form.classList.add("err");
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}