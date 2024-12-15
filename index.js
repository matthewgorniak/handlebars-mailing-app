const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

app.set('views', path.join(__dirname, "/views"));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	res.render('home');
});

app.listen(3000, (err) => {
	if (err) throw err;
	console.log("Server listening on port 3000");
});