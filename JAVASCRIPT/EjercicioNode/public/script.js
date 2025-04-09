async function getMediaGlobal() {
    const res = await fetch("/api/media-global");
    const data = await res.json();
    document.getElementById("res_avg").textContent = `Media global: ${data.media}°C`;
}

async function getMediaLocalidad() {
    const select = document.getElementById("localidad");
    const nombre = select.value;
    const res = await fetch(`/api/media-localidad/${encodeURIComponent(nombre)}`);
    const data = await res.json();
    document.getElementById("res_avglocalidad").textContent = `Media: ${data.media}°C`;
}

async function getMediaDia() {
    const dia = document.getElementById("dia").value;
    const res = await fetch(`/api/media-dia/${dia}`);
    const data = await res.json();
    document.getElementById("res_avgdia").textContent = `Media: ${data.media}°C`;
}

document.getElementById("avg").addEventListener("click", getMediaGlobal);
document.getElementById("avgdia").addEventListener("click", getMediaDia);
document.getElementById("avglocalidad").addEventListener("click", getMediaLocalidad);

// Cargar localidades al iniciar
async function cargarLocalidades() {
    const res = await fetch("/api/datos");
    const data = await res.json();
    const localidades = data.localidades;
    const select = document.getElementById("localidad");

    localidades.forEach(loc => {
        const option = document.createElement("option");
        option.value = loc.nombre;
        option.textContent = loc.nombre;
        select.appendChild(option);
    });
}
cargarLocalidades();
