// server.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Endpoint de login simulado
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    // Simula tiempo de procesamiento (50 ms)
    setTimeout(() => {
        if (username === "user" && password === "pass") {
            res.status(200).json({ status: "ok" });
        } else {
            res.status(401).json({ status: "unauthorized" });
        }
    }, 50);
});
// Iniciar servidor
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});