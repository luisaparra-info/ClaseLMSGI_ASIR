let temperaturas = [];

async function cargarDatos() {
    try {
        const response = await fetch("datos.json");
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo: ${response.status}`);
        }
        const datos = await response.json();
        temperaturas = datos.localidades;
        setSelectLocalidades(temperaturas);
        console.log("Datos cargados correctamente:", temperaturas);
    } catch (error) {
        console.error("Error al cargar los datos:", error.message);
    } finally {
        console.log("Carga de datos finalizada.");
    }
}

function setSelectLocalidades(localidades) {
    const select = document.getElementById("localidad");
    localidades.forEach(localidad => {
        const option = document.createElement("option");
        option.value = localidad.nombre;
        option.textContent = localidad.nombre;
        select.appendChild(option);
    });
}

function calcularMaximaLocalidad(arrayT) {
    if (!arrayT || !arrayT.length) return "0.00";
    const suma = arrayT.reduce((acc, dia) => acc + parseInt(dia.max), 0);
    return (suma / arrayT.length).toFixed(2);
}

function calcularMediaDia(diaLetra) {
    if (!temperaturas || temperaturas.length === 0) return "0.00";
    let suma = 0;
    let total = 0;

    temperaturas.forEach(localidad => {
        const dia = localidad.temperaturas.find(t => t.dia === diaLetra);
        if (dia) {
            suma += parseInt(dia.max);
            total++;
        }
    });

    return total > 0 ? (suma / total).toFixed(2) : "0.00";
}

function calcularMediaGlobal() {
    let suma = 0;
    let total = 0;

    temperaturas.forEach(localidad => {
        localidad.temperaturas.forEach(dia => {
            suma += parseInt(dia.max);
            total++;
        });
    });

    return total > 0 ? (suma / total).toFixed(2) : "0.00";
}

function avglocalidad() {
    const select = document.getElementById("localidad");
    const indice = select.selectedIndex - 1;

    const resultado = document.getElementById("res_avglocalidad");

    if (!temperaturas || temperaturas.length === 0) {
        resultado.textContent = "Datos no disponibles";
        return;
    }

    if (indice >= 0) {
        const localidad = temperaturas[indice];
        const media = calcularMaximaLocalidad(localidad.temperaturas);
        resultado.textContent = `Media: ${media}°C`;
    } else {
        resultado.textContent = "No has seleccionado ninguna localidad";
    }
}

document.getElementById("avgdia").addEventListener("click", function () {
    const diaSelect = document.getElementById("dia");
    const diaLetra = diaSelect.value;
    const resultado = document.getElementById("res_avgdia");

    if (!diaLetra) {
        resultado.textContent = "Selecciona un día válido";
        return;
    }

    const media = calcularMediaDia(diaLetra);
    resultado.textContent = `Media: ${media}°C`;
});

document.getElementById("avg").addEventListener("click", function () {
    const resultado = document.getElementById("res_avg");
    if (!temperaturas || temperaturas.length === 0) {
        resultado.textContent = "Datos no disponibles";
        return;
    }
    const media = calcularMediaGlobal();
    resultado.textContent = `Media global: ${media}°C`;
});

// Cargar datos al iniciar la página
cargarDatos();
