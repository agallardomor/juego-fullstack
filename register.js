
$(".card").delay(300).animate({opacity: 1},"slow");

let capturaBoton = function () {
    document.querySelector(".btnRegistro input").setAttribute("onclick", "dataRead()");
}

let dataRead = function () {
    console.log("dataRead");
    console.log(
        document.querySelector('input[name="avatares"]:checked').value,
        document.querySelector("#typeEmailX").value,
        document.querySelector("#typePasswordX").value,
    );

    let myObjectResgistration = {};


    myObjectResgistration = {
        email: document.querySelector("#typeEmailX").value,
        password: document.querySelector("#typePasswordX").value,
        avatar: document.querySelector('input[name="avatares"]:checked').value,
    };

    console.log(myObjectResgistration);

    JSON.stringify(myObjectResgistration);

    save_localStorage(myObjectResgistration);

}

let save_localStorage = function (myObjectReg) {
    localStorage.setItem("miRegistro", JSON.stringify(myObjectReg));
    openModal();
}

function openModal() {
    const myModal = new bootstrap.Modal('#staticBackdrop', {
        keyboard: false
    })

    const modalToggle = document.getElementById('staticBackdrop');
    myModal.show(modalToggle)
    document.querySelector("#goLoginBtn").setAttribute("onclick", "goLogin()");
}

function goLogin() {
    window.location.href = "login.html";
}



const main = function () {
    capturaBoton();
}



main();
