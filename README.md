# Sistema IoT de Monitoreo del Cultivo de Arándanos en Tiempo Real

## 📌 Descripción

Este proyecto implementa un sistema IoT básico que permite monitorear variables ambientales como temperatura, humedad del aire y humedad del suelo en tiempo real utilizando WebSocket (Socket.IO).

Los datos son enviados en formato JSON y visualizados dinámicamente en un dashboard web.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- Socket.IO
- HTML + JavaScript

---

## 🧠 Funcionamiento

El sistema simula sensores IoT que envían datos al servidor.  
El servidor procesa los datos y los envía en tiempo real al frontend.

---

## 🔄 Flujo del sistema

---

## 📦 Instalación

Instalar dependencias:

```bash
npm install
npm install express socket.io

▶️ Ejecución
node server.js
🌐 Abrir en navegador
http://localhost:3000

🧪 Prueba con Socket.IO

Usar la siguiente herramienta:

https://piehost.com/socketio-tester
🔌 Conexión
http://localhost:3000
📡 Evento
sensor
📦 Payload (JSON)
{"nodo":"nodo1","temperatura":28,"humedadAire":70,"humedadSuelo":20}
## 📸 Capturas del sistema

<p align="center">
  <img src="https://github.com/user-attachments/assets/be35ec19-7075-4921-97e5-8b6ef4d1e40b" width="600">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/4698f1fb-4193-4cec-80a6-eb59722c52d3" width="600">
</p>

