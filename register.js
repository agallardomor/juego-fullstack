function signUp(){
    console.log("work")
}

signUp();

let main = function(){
    capturaBoton();
}

let capturaBoton = function(){
    document.querySelector(".btnRegistro input").setAttribute("onclick","dataRead()");
}

let dataRead = function(){
    console.log("dataRead");
    console.log(
        document.querySelector("#typeEmailX").value,
        document.querySelector("#typePasswordX").value,
    );

    let myObjectResgistration ={
        name: document.querySelector("#typeEmailX").value,
        email: document.querySelector("#typePasswordX").value,
    };
    console.log(myObjectResgistration);

    JSON.stringify(myObjectResgistration);

    save_localStorage(myObjectResgistration);
}

let save_localStorage = function(myObjectReg){
    localStorage.setItem("miRegistro",JSON.stringify(myObjectReg));
}

let readLocalStorage = function(){
    let miInfo = localStorage.getItem("miRegistro");
    let myObject = JSON.parse(miRegistro);
    document.querySelector("#typeEmailX").value = myObject.email;
    document.querySelector("#typePasswordX").value = myObject.password;
    console.log(myObject)
}

main();
