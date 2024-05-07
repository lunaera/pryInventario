let contador = 0;
const frmDatosPersonales = document.getElementById("frmAddProducts");

frmDatosPersonales.addEventListener("submit", function (event) {
    event.preventDefault();

    contador++;
    const txtId = document.getElementById("txtIdProduct").value;
    const txtNombre = document.querySelector("#txtNameProduct").value;
    const SelectMarca = document.getElementById("SelectMarca").value;
    const rdTipoVenta = document.querySelector('input[name="rdTipoVenta"]:checked').value;

    //crear fila
    const fila = document.createElement("tr");

    //crear celdas
    const celdaId = document.createElement("td");
    const celdaNombre = document.createElement("td");
    const celdaMarca = document.createElement("td");
    const celdaTipoVenta = document.createElement("td");
    const celdaAcciones = document.createElement("td");

    const divBotones = crearBotones();


    //añadir en las celdas valores de las cajas de 
    celdaId.textContent = txtId;
    celdaNombre.textContent = txtNombre;
    celdaMarca.textContent = SelectMarca;
    celdaTipoVenta.textContent = rdTipoVenta;
    celdaAcciones.appendChild(divBotones);

    // añadir las celdas a la fila
    fila.appendChild(celdaId);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaMarca);
    fila.appendChild(celdaTipoVenta);
    fila.appendChild(celdaAcciones);

    //agregar la fila al cuerpo de la tabla
    document.getElementById("cuerpoTabla").appendChild(fila);
    // limpiar el formulario
    document.querySelector("#frmAddProducts").reset();


});


function crearBotones() {
    const divBotones = document.createElement("div");
    divBotones.className = "btn-group";

    const btnEditar = document.createElement("button");
    const btnEliminar = document.createElement("button");
    const btnAceptar = document.createElement("button");
    btnEditar.className = "btn btn-primary";
    btnEliminar.className = "btn btn-danger";
    btnAceptar.className = "btn btn-success";

    btnEditar.innerHTML = "<img src='../assets/edit.png'>";
    btnEliminar.innerHTML = "<img src='../assets/delete.png'>";
    btnAceptar.innerHTML = "<img src='../assets/cheked.png'>";

    divBotones.appendChild(btnEditar);
    divBotones.appendChild(btnEliminar);
    divBotones.appendChild(btnAceptar);

    btnAceptar.disabled = true;


    let filaEditar = null;
    btnEditar.addEventListener("click", function () {

        btnAceptar.disabled = false;
        btnEliminar.disabled = true;
        btnEditar.disabled = true;

        const fila = this.closest("tr");
        if (fila) {
            filaEditar = fila;
            habilitarEdicion(filaEditar);
        }
        else {
            console.log("No se pudo localizxar la fila");
        }
    });

    btnAceptar.addEventListener("click", function () {
        if (filaEditar) {
            filaEditar.querySelectorAll("td").forEach(function (celda, index) {
                if (index !== 0 && index !== filaEditar.cells.length - 1) {
                    const nuevoValor = celda.textContent;
                    celda.textContent = nuevoValor;
                    celda.contentEditable = false;
                }
            });

            filaEditar = null;
            btnAceptar.disabled = true;
            btnEditar.disabled = false;
            btnEliminar.disabled = false;
        }
    });


    btnEliminar.addEventListener("click", function () {
        const filaEliminar = this.closest("tr");
        if (filaEliminar) {
            filaEliminar.remove();
        }
        else {
            console.log("No se pudo detectar la fila acrtual");
        }
    });

    return divBotones;

}

function habilitarEdicion(filaActual) {
    const celdas = filaActual.querySelectorAll("td");
    if (celdas.length > 0) {
        celdas.forEach(function (celda, index) {
            if (index !== 0 && index != celdas.length - 1) {
                celda.contentEditable = true;
                celdas[1].focus();
            }
        });
    }
    else {
        console.log("No hay celdas en la fila seleccionada");
    }
}