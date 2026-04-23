require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

/app.get("/", (req, res) => {
    res.json({
        status: "ok",
        name: "Stumble Base Backend",
        version: "0.56",
        message: "online"
    });
});


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


app.get("/onlinecheck", (req, res) => {
    res.json({ online: true });
});

app.get("/shared", (req, res) => {
    res.json({});
});

app.get("/user/config", (req, res) => {
    res.json({});
});

app.get("/background", (req, res) => {
    res.json({
        background: "default"
    });
});

// START
app.listen(PORT, () => {
    console.log("Backend rodando na porta " + PORT);
});
