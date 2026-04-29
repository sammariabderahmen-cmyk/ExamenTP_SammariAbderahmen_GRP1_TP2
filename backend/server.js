const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connexion à MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Votre utilisateur MySQL
    password: '',      // Votre mot de passe MySQL
    database: 'pfe_system'
});

// GET : Récupérer tous les projets
app.get('/projects', (req, res) => {
    db.query('SELECT * FROM projects', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// PUT : Mettre à jour le statut d'un projet (Utilisé par le Coordinateur)
app.put('/projects/:id', (req, res) => {
    const { status } = req.body;
    const { id } = req.params;
    db.query('UPDATE projects SET status = ? WHERE id = ?', [status, id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Statut mis à jour avec succès" });
    });
});

app.listen(3000, () => console.log('Serveur démarré sur http://localhost:3000'));