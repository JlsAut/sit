var http = require("http");
// Чтобы использовать HTTP-интерфейсы в Node.js
const url = require("url");
// Для разрешения и разбора URL
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

//create a server object:
http
  .createServer(function (req, res) {
    //req позволяет нам получать доступ ко всей информации о запросе
    //res предоставляет множество методов для отправки данных обратно клиенту
    const queryObject = url.parse(req.url, true).query;
    // предоаставляет доступ к строке URL
    var current_date = new Date();
    //получение текущей даты
    res.write(
      "Hello, " + queryObject.name + ", today is " + days[current_date.getDay()]
    ); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
