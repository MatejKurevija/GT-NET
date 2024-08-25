const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8000;
const DB_FILE = path.join(__dirname, 'db.json');

// Middleware za CORS i parsiranje JSON podataka
app.use(cors());
app.use(bodyParser.json());

// Posluživanje statičkih datoteka iz direktorija 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Helper funkcije za čitanje i pisanje u db.json
const readDb = () => {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
};

const writeDb = (data) => {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// API rute

// Dohvati sve korisnike
app.get('/users', (req, res) => {
    try {
        const users = readDb();
        res.json(users);
    } catch (err) {
        console.error('Error reading users:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Kreiraj novog korisnika
app.post('/users', (req, res) => {
    try {
        const newUser = req.body;
        const users = readDb();
        newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
        users.push(newUser);
        writeDb(users);
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Ažuriraj postojećeg korisnika
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const updatedUser = req.body;
    const users = readDb();
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedUser };
        writeDb(users);
        res.json(users[userIndex]);
    } else {
        res.status(404).send('User not found');
    }
});

// Obriši korisnika
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    let users = readDb();
    users = users.filter(user => user.id !== userId);
    writeDb(users);
    res.status(204).end();
});


// Ruta za početnu stranicu (HTML)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Pokreni server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
