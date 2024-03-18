
const frmLogin = document.getElementById("frmLogin");

frmLogin.addEventListener("submit", function (event) {

    event.preventDefault(); // detener el envío del formulario

    const correo = document.getElementById("email").value;
    const passwd = document.getElementById("password").value;
    const responsLogin = document.getElementById("responseLogin");
    responsLogin.textContent = ""; // limpiar el div de respuesta para que cuando se de clic en cada intento de envío se limpie y no cargue mas y mas div

    const accesLogin = document.createElement("div");
    accesLogin.setAttribute("role", "alert");

    if (correo === "erahinpachecoluna@hotmail.com" && passwd === "12345") {
        accesLogin.textContent = "Datos correctos!!";
        accesLogin.classList.add("alert", "alert-success");
        responsLogin.appendChild(accesLogin);
        window.location.href = "src/pages/dashboard.html";
    }
    else {
        accesLogin.textContent = "Datos Incorrectos!!";
        accesLogin.classList.add("alert", "alert-danger");
        responsLogin.appendChild(accesLogin);

        document.querySelector("#frmLogin").reset();
    }

});

