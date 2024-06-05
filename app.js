const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index'));
app.get('/map', (req, res) => res.render('map'));
app.get('/guide', (req, res) => res.render('guide'));
app.get('/contact', (req, res) => res.render('contact'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
