const express = require('express');
const path = require('path');
const hbs = require('hbs');
const mysql = require('mysql2');

const app = express();

app.set('views', path.join(__dirname, "/views"));
app.set('view engine', 'hbs');

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "zse_tai3"
});

db.connect((err) => {
	if (err) throw err;
	console.log("Database connected!");
});

app.get('/', (req, res) => {
	db.query("SELECT `surname`, `name`, `email` FROM cmsUsers ORDER BY `surname` ASC;", (err, rows) => {
		if (err) throw err;
		
		res.render('home', {
			users: rows
		});
	});
});

app.listen(3000, (err) => {
	if (err) throw err;
	console.log("Server listening on port 3000");
});