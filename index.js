
// Servidor mínimo para Railway que sirve un HTML estático
const path = require('path');
const express = require('express');
const app = express();

// Railway asigna el puerto en process.env.PORT
const port = process.env.PORT || 3000;

// 1) Servir todos los archivos estáticos desde la carpeta raíz
//    (si prefieres /public, cambia __dirname por path.join(__dirname, 'public'))
app.use(express.static(__dirname, {
  extensions: ['html', 'htm'] // permite /ruta sin .html
}));

// 2) Ruta raíz -> tu archivo principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'reporte_siniestros_standalone.html'));
});

// 3) Salud opcional (útil para diagnósticos)
app.get('/health', (_req, res) => res.status(200).send('OK'));

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
