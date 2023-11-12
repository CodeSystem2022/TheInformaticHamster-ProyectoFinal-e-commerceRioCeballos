

## PRIMERO CREAR LA BASE DE DATOS Y CONFIGURAR LAS CREDENCIALES EN `server.js`
ECREATE DATABASE ecommerce;
USE ecommerce;
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    productName VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quanty INT DEFAULT 1,
    img VARCHAR(255)
);
INSERT INTO products (productName, price, quanty, img) VALUES ('Mate Argentino', 3000, 1, '/media/mate_argentino.jpg');
INSERT INTO products (productName, price, quanty, img) VALUES ('Taza con cuchara artesanal', 2500, 1, '/media/taza.jpg');
INSERT INTO products (productName, price, quanty, img) VALUES ('Caja x 6 Alfajores artesanales', 6500, 1, '/media/alfajor.jpg');
INSERT INTO products (productName, price, quanty, img) VALUES ('Dulces artesanales', 2000, 1, '/media/dulces.jpg');
INSERT INTO products (productName, price, quanty, img) VALUES (' Poncho gaucho artesanal blanco', 15000, 1, '/media/poncho.jpeg');
INSERT INTO products (productName, price, quanty, img) VALUES (' Matera canasta color negro', 8000, 1, '/media/matera.jpeg');
INSERT INTO products (productName, price, quanty, img) VALUES (' Billetera de cuero marrón oscuro', 5500, 1, '/media/billetera.jpeg');
INSERT INTO products (productName, price, quanty, img) VALUES ('Set De Asado Artesanal Eco Cuero', 9000, 1, '/media/asador.jpg');

## PASO 1
En la carpeta E-commerce entrar con 
`cd server`

## PASO 2
`npm instal`
(Instala las dependencias  )

## PASO 3
`npm start`
( ejecuta la aplicacion escuchando por cambios )

# NOTAS
-- Es importante tener en cuenta que el formulario puede estar formado por respuestas de tipo String 
