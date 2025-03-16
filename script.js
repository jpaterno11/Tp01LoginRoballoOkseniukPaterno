function validarForm()
{
    let valido = confirmarNombre() && confirmarEmail() && confirmarContraseña() && confirmar2daContraseña();
    if (valido != true)
    {
        alert("ERROR: Alguno de los ingresos que estas intentando enviar no cumple con los requisitos. Por favor, verifique sus datos y vuelva a intentarlo.");
    }
    else{
        alert("Ha logrado registrarse correctamente. ¡Bienvenido a bordo!");
    }
    return valido;
}
function mostrarMensaje(id) {
    document.getElementById(id).style.opacity = 1;
}
function esconderMensaje(id) {
    document.getElementById(id).style.opacity = 0;
}

function mostrarMensajesContraseña() {
    mostrarMensaje("mensajeA");
    mostrarMensaje("mensajeB");
    mostrarMensaje("mensajeC");
}
function esconderMensajesContraseña() {
    esconderMensaje("mensajeA");
    esconderMensaje("mensajeB");
    esconderMensaje("mensajeC");
}
function confirmarNombre(){
    const Nombre = document.getElementById("Nombre").value; 
    let mensajeE=document.getElementById("mensajeE");
    mensajeE.style.color = (Nombre.length > 2 ? "green" : "red");
    mensajeE.textContent = (Nombre.length > 2 ? "El nombre contiene al menos 3 caracteres" : "El nombre no contiene al menos 3 caracteres");
    return (mensajeE.style.color == "green");
}
function confirmarEmail(){
    let mensajeF = document.getElementById("mensajeF"); 
    const email = document.getElementById("email").value; 
    const emailNecesita = /^[a-zA-Z0-9]{3,}@[a-zA-Z0-9]+\.[a-zA-Z]{3,}$/;
    ;
    const emailApto = emailNecesita.test(email);
    mensajeF.style.color = (emailApto ? "green" : "red")
    mensajeF.textContent = (emailApto ? "El mail ingresado es valido" : "El mail ingresado no cumple con el formato valido");
    return (mensajeF.style.color == "green");

}
function confirmarContraseña(){
    let mensajeA = document.getElementById("mensajeA"); 
    let mensajeB = document.getElementById("mensajeB"); 
    let mensajeC = document.getElementById("mensajeC");
    const Contraseña = document.getElementById("Contraseña").value; 
    const numeros = /[0-9]/g;
    const tieneNumero = numeros.test(Contraseña);
    mensajeA.style.color = (Contraseña.length > 7 ? "green" : "red");
    mensajeA.textContent = (Contraseña.length > 7 ? "La contraseña contiene al menos 8 caracteres" : "La contraseña no contiene al menos 8 caracteres");   
    mensajeB.style.color = (Contraseña===Contraseña.toLowerCase() ? "red" : "green");
    mensajeB.textContent = (Contraseña===Contraseña.toLowerCase() ? "La contraseña contiene al menos una mayuscula" : "La contraseña no contiene una mayuscula");   
    mensajeC.style.color = (tieneNumero ? "green" : "red");
    mensajeC.textContent = (tieneNumero ? "La contraseña contiene al menos 1 número" : "La contraseña no contiene al menos 1 número"); 
    return (mensajeA.style.color == "green" && mensajeB.style.color == "green" && mensajeC.style.color == "green");
}
function confirmar2daContraseña(){
    const Contraseña = document.getElementById("Contraseña").value; 
    const ConfirmarContraseña = document.getElementById("ConfirmarContraseña").value;
    let mensajeD=document.getElementById("mensajeD");
    mensajeD.style.color = (ConfirmarContraseña===Contraseña ? "green" : "red");
    mensajeD.textContent = (ConfirmarContraseña===Contraseña ? "Las contraseñas coinciden" : "Las contraseñas no coinciden");
    return (mensajeD.style.color == "green");
}




