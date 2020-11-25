const express = require('express');

const app = express();

app.use((req, res) => {
    res.json({message : 'Requête prise en compte sur le serveur.'})
});

module.exports = app;