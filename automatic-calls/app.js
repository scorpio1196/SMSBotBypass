/**
 * Intégrations des dépendences 
 */
const express = require('express');
const morgan = require('morgan');

/**
 * Intégration des routes stockées dans /routes
 */
const voice = require('./routes/voice');
const status = require('./routes/status');
const call = require('./routes/call');
const sms = require('./routes/sms');
const get = require('./routes/get');
const stream = require('./routes/stream');

/**
 * Ajout du middleware d'authentification => vérifie si l'on utilise bien l'API avec un mot de passe
 */
const auth = require('./middleware/authentification');

/**
 * Partie express côté serveur web
 */
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.post('/voice/:apipassword', auth, voice);
app.post('/status/:apipassword', auth, status);
app.post('/call', auth, call);
app.post('/sms', auth, sms);
app.post('/get', auth, get);
app.get('/stream/:service', stream);

module.exports = app;