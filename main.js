
let mail  =document.getElementById(" email").value
let curso = document.getElementById("curso").value
let nombre =document.getElementById("nombre").value
let edad = document.getElementById("edad").value
let carrera = document.getElementById("carrera").value
let telefono = document.getElementById("telefono").value
let boton = document.getElementsByTagName("Enviar")

boton.addEventListener{("click"), ()=>{
    alert(
    `nombre${nombre}
    telefono${telefono}
    curso${curso}
    edad${edad}`
    )
}}



