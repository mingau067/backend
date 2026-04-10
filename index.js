require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// ✅ ROTA PRINCIPAL (JSON CORRETO)
app.get("/", (req, res) => {
    res.json({
        status: "ok",
        name: "Stumble Base Backend",
        version: "0.56",
        message: "online"
    });
});

// ✅ PING
app.get("/api/v1/ping", (req, res) => {
    res.send("OK");
});

// ✅ LOGIN (obrigatório)
app.post("/user/login", (req, res) => {
    res.json({
        token: "fake_token",
        user: {
            id: "1",
            username: ".gg/sgbase"
        }
    });
});

// ✅ ONLINE CHECK
app.get("/onlinecheck", (req, res) => {
    res.json({ online: true });
});

// 🚀 START
app.listen(PORT, () => {
    console.log("Backend rodando na porta " + PORT);
});
