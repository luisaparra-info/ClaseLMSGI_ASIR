const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

let datos = null;

try {
    const filePath = path.join(__dirname, "data", "datos.json");
    const rawData = fs.readFileSync(filePath, "utf-8");
    datos = JSON.parse(rawData);
} catch (error) {
    console.error("Error al cargar datos.json:", error);
    process.exit(1); // Detiene el servidor si no puede cargar los datos
}

// Ruta para enviar el JSON completo (si quieres que el cliente lo cargue directamente)
app.get("/api/datos", (req, res) => {
    res.json(datos);
});

// Ruta para media global
app.get("/api/media-global", (req, res) => {
    const todasLasMaximas = datos.localidades.flatMap(loc =>
        loc.temperaturas.map(t => parseFloat(t.max))
    );

    if (todasLasMaximas.length === 0) {
        return res.status(404).json({ error: "No hay temperaturas disponibles" });
    }

    const suma = todasLasMaximas.reduce((acc, temp) => acc + temp, 0);
    const media = suma / todasLasMaximas.length;

    res.json({ media: media.toFixed(2) });
});

// Ruta para media por localidad
app.get("/api/media-localidad/:nombre", (req, res) => {
    const nombre = decodeURIComponent(req.params.nombre);
    const localidad = datos.localidades.find(loc => loc.nombre === nombre);

    if (!localidad) {
        return res.status(404).json({ error: "Localidad no encontrada" });
    }

    const maximas = localidad.temperaturas.map(t => parseFloat(t.max));
            const suma = maximas.reduce((acc, temp) => acc + temp, 0);
            const media = suma / maximas.length;

            res.json({ media: media.toFixed(2) });

});

// Ruta para media por día
app.get("/api/media-dia/:dia", (req, res) => {
    const dia = parseInt(req.params.dia);

    if (isNaN(dia) || dia < 0 || dia > 6) {
        return res.status(400).json({ error: "Día inválido (0-6)" });
    }

    const maximasDelDia = datos.localidades
        .map(loc => loc.temperaturas[dia]?.max)
        .filter(max => max !== undefined)
        .map(max => parseFloat(max));

    if (maximasDelDia.length === 0) {
        return res.status(404).json({ error: "No hay datos para ese día" });
    }

    const suma = maximasDelDia.reduce((acc, t) => acc + t, 0);
    const media = suma / maximasDelDia.length;

    res.json({ media: media.toFixed(2) });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
