
function validarForm()
{
    let valido = confirmarNombre() && confirmarEmail() && confirmarContraseña() && confirmar2daContraseña();
    if (valido != true)
    {
        alert("ERROR: Alguno de los ingresos que estas intentando enviar no cumple con los requisitos. Por favor, verifique sus datos y vuelva a intentarlo.");
    }
    else{
        guardarUsuario();
        alert("Ha logrado registrarse correctamente. ¡Bienvenido a bordo!");
    }
    event.preventDefault();
    location.reload();
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
    const Nombre = document.getElementById("Nombre"); 
    let mensajeE=document.getElementById("mensajeE");
    mensajeE.style.color = (Nombre.value.length > 2 ? "green" : "red");
    mensajeE.textContent = (Nombre.value.length > 2 ? "El nombre contiene al menos 3 caracteres" : "El nombre no contiene al menos 3 caracteres");
    return (mensajeE.style.color == "green");
}
function confirmarEmail(){
    const email = document.getElementById("email"); 
    let mensajeF = document.getElementById("mensajeF"); 
    const emailNecesita = /^[a-zA-Z0-9]{3,}@[a-zA-Z0-9]+\.[a-zA-Z]{3,}$/;
    ;
    const emailApto = emailNecesita.test(email.value);
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
const ConfirmarContraseña = document.getElementById("ConfirmarContraseña");
function confirmar2daContraseña(){
    const Contraseña = document.getElementById("Contraseña").value; 
    let mensajeD=document.getElementById("mensajeD");
    mensajeD.style.color = (ConfirmarContraseña.value===Contraseña ? "green" : "red");
    mensajeD.textContent = (ConfirmarContraseña.value===Contraseña ? "Las contraseñas coinciden" : "Las contraseñas no coinciden");
    return (mensajeD.style.color == "green");
}


function guardarUsuario() {
    const nombre = document.getElementById("Nombre").value;
    const email = document.getElementById("email").value;
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push({ nombre, email });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function mostrarUsuarios() {
    const userListDisplay = document.getElementById('userListDisplay');
    userListDisplay.innerHTML = '';
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.length === 0) {
        userListDisplay.innerHTML = '<li>No hay usuarios registrados.</li>';
    } else {
        usuarios.forEach((usuario, index) => {
            const userItem = document.createElement('li');
            userItem.innerHTML = `
                Nombre: ${usuario.nombre}, Email: ${usuario.email} 
                <button class="eliminar-btn" onclick="eliminarUsuario(${index})">Eliminar</button>
            `;
            userListDisplay.appendChild(userItem);
        });
    }
}

function eliminarUsuario(index) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.splice(index, 1);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    mostrarUsuarios();
}

function toggleUsuarios() {
    const userList = document.getElementById('userList');
    const boton = document.getElementById('mostrarUsuariosBtn');

    if (userList.style.display === 'none') {
        mostrarUsuarios();
        userList.style.display = 'block';
        boton.textContent = 'Esconder usuarios';
    } else {
        userList.style.display = 'none';
        boton.textContent = 'Mostrar usuarios registrados';
    }
}
let eyeicon = document.getElementById('eyeicon')
let eyeicon1 = document.getElementById('eyeicon1')
let password = document.getElementById('Contraseña')
let passwordConfirmada = document.getElementById('ConfirmarContraseña')
eyeicon1.onclick = function(){
    password.type = (password.type == "password" ? "text" : "password");
    eyeicon1.src = (password.type != "password" ? "imgs/eye-open.png" : "imgs/eye-close.png");
}
eyeicon.onclick = function(){
    passwordConfirmada.type = (passwordConfirmada.type == "password" ? "text" : "password");
    eyeicon.src = (passwordConfirmada.type != "password" ? "imgs/eye-open.png" : "imgs/eye-close.png");
}

let darkmode = localStorage.getItem('darkmode');
const cambioColor = document.getElementById("cambio-color")

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}
const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}
if(darkmode === "active") enableDarkmode();

cambioColor.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
