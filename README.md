# 🍝 Lasaña API

API básica para gestionar pedidos de lasañas.

## 🚀 Endpoints

### 📋 Ver menú
GET /menu

### 🧾 Crear pedido
POST /pedido

Body:
{
  "producto": "Lasaña Bolognesa",
  "cantidad": 2
}

### 📦 Ver pedidos
GET /pedidos

## 🛠️ Tecnologías
- Node.js
- Express

## ▶️ Cómo ejecutar

npm install  
node app.js

Servidor en:
http://localhost:3000