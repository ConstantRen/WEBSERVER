// app.js

const express = require('express');
const app = express();
const port = 3000;

// Import modules
const rootModule = require('./modules/rootModule');
const aboutModule = require('./modules/aboutModule');
const contactModule = require('./modules/contactModule');

// Middleware to set a name
const name = 'John Smith';

// Routes
app.get('/', (req, res) => {
    res.send(rootModule(name));
});

app.get('/about', (req, res) => {
    res.send(aboutModule(name));
});

app.get('/contact', (req, res) => {
    res.send(contactModule(name));
});

app.get('/gallery', (req, res) => {
    res.send('<h1>Gallery</h1><p>Welcome to the Gallery page!</p>');
});

app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

// Author comment
// Name: Renell Constantino
// Date: July 27 ,2024
// Section: WD-301
