const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const routes = require("./routes");

const app = express();
const server = http.createServer(app);

app.use(routes);
app.use(express.static(__dirname));

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

function log(mensaje) {
  const fecha = new Date().toLocaleString();
  console.log(`[${fecha}] ${mensaje}`);
}

io.on("connection", (socket) => {
  log("Cliente conectado: " + socket.id);

  socket.emit("saludo", "Conectado al servidor IoT");

  socket.on("sensor", (data) => {
    let sensorData = data;

    if (typeof data === "string") {
      try {
        sensorData = JSON.parse(data);
      } catch (error) {
        socket.emit("errorSensor", "JSON inválido");
        return;
      }
    }

    log("Sensor recibido: " + JSON.stringify(sensorData));

    socket.emit("respuesta", "Dato recibido correctamente");

    io.emit("dashboard", sensorData);
  });

  socket.on("disconnect", () => {
    log("Cliente desconectado: " + socket.id);
  });
});

server.listen(3000, () => {
  log("Servidor corriendo en http://localhost:3000");
});