document.querySelector("#loginBtn").setAttribute("onclick","readLocalStorage()");


function readLocalStorage () {
    let miInfo = localStorage.getItem("miRegistro");
    let myObject = JSON.parse(miInfo);
    console.log(myObject)

    checkUser(myObject.email, myObject.password, myObject.avatar);

}

function checkUser(localEmail, localPassword, localAvatarURL){

    let formEmail = document.querySelector("#typeEmailX").value;
    let formPassword = document.querySelector("#typePasswordX").value;

    console.log("DATOS STORAGE: " ,localEmail, localPassword, localAvatarURL )
    console.log("DATOS FORM: ", formEmail, formPassword);

    if (localEmail == formEmail && localPassword == formPassword){
        window.location.href=`home.html?email=${formEmail}&password=${formPassword}&avatar=${localAvatarURL}`
    } else {
        alert("usuario y/o contraseña incorrectos")
        document.querySelector("#typeEmailX").value = "";
        document.querySelector("#typePasswordX").value = "";
    }
}