const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const jsonParser = express.json();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "students",
  password: "password",
  port: 5432
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/list", gS_all); //вывести всех
app.get('/list/:id', gS_one); //вывести одного
app.post("/list", cS); //добавить
app.delete('/list/:id', dS); //удалить
app.put('/list', uS) //изменить

app.get("/", (req, res) => res.send("Сервер подключен"));
app.all("*", (req, res) => res.send("Ошибка '404'"));

app.listen(PORT);
