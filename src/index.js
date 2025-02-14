const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Serveur fonctionne http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Test bonjour dfkqsfkqsfs');
});