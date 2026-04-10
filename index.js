require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// ROOT
app.get("/", (req, res) => {
    res.json({
        status: "ok",
        name: "Stumble Base Backend",
        version: "0.56",
        message: "online"
    });
});

// PING
app.get("/api/v1/ping", (req, res) => {
    res.send("OK");
});

// LOGIN
app.post("/user/login", (req, res) => {
    res.json({
        token: "fake_token",
        user: {
            id: "1",
            username: "Player"
        }
    });
});

// ONLINE CHECK
app.get("/onlinecheck", (req, res) => {
    res.json({ online: true });
});

// 🔥 ESSENCIAL PRO JOGO
app.get("/shared", (req, res) => {
    res.json({});
});

// 🔥 CONFIG DO JOGO
app.get("/user/config", (req, res) => {
    res.json({});
});

// 🔥 BACKGROUND (resolve teu erro)
app.get("/background", (req, res) => {
    res.json({
        background: "default"
    });
});

// START
app.listen(PORT, () => {
    console.log("Backend rodando na porta " + PORT);
});
