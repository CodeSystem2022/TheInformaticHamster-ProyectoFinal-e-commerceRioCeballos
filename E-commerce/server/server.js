const express = require("express");
const mysql = require('mysql2');
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
const path = require("path");

// Configuración de MercadoPago
// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "TEST-8984584947035732-110809-57e9bd7292f56485fa88e609da2c205b-444290765",
});

// Middleware para datos de formulario y JSON
app.use(express.urlencoded({ extended: false }));
// Parsear JSON bodies (para POST requests)
app.use(express.json());

// Sirviendo archivos estáticos del subdirectorio 'media' dentro de 'client'

app.use(express.static(path.join(__dirname, "../client")));
// Middleware para permitir solicitudes de diferentes orígenes
app.use(cors());

// Ruta específica para 'index.html'

app.get("/", function (req, res) {
	res.sendFile(path.resolve(__dirname, "..", "client", "index.html"));
  });
  


app.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:8080",
			"failure": "http://localhost:8080",
			"pending": "",
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});



// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '123456789',
	database : 'ecommerce'
  });
  
  // Conectar a la base de datos
  connection.connect(error => {
	if (error) {
	  console.error('Error de conexión: ' + error.stack);
	  return;
	}
	console.log('Conectado con el identificador ' + connection.threadId);
  });
  
  
  // GET endpoint para obtener productos
  app.get('/api/products', (req, res) => {
	connection.query('SELECT * FROM products', (error, results, fields) => {
	  if (error) return res.status(500).send(error);
  
	  res.json(results);
	});
  });
  
  // Iniciar el servidor en un puerto (8080)
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
