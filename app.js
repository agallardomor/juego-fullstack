
const avatar = document.getElementById("avatar");

const salas = document.querySelector(".contenedor-salas");

salas.addEventListener("dragover", e =>{
    e.preventDefault();
    e.target.classList.add("sala-item--hover");
})

salas.addEventListener("dragleave", e =>{
    e.preventDefault();
    e.target.classList.remove("sala-item--hover");
})

salas.addEventListener("drop", e =>{
    e.target.classList.remove("sala-item--hover");
    e.target.append(avatar);
})