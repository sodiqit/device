var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=write-us-name]");
var form = popup.querySelector(".write-us");
var email = popup.querySelector("[name=write-us-email]");
var storage = "";

var isStorageSupport = true;


try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
})

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    console.log(login.value);
    console.log(email.value);
    if (!login.value || !email.value) {
        console.log("Введите логин и емайл");
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
                localStorage.setItem("name", login.value);
        }
    }
});
