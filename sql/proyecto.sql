create schema trabajoIntegradorProg2;

use trabajoIntegradorProg2;

create table usuarios(
id int unsigned primary key auto_increment,
nombre varchar (200) not null,
email varchar(100) unique not null,
contrasena varchar(250) not null,
fotoDePerfil varchar (200),
fecha date,
dni int unsigned,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp default current_timestamp
);


create table productos(
id int unsigned primary key auto_increment,
cover text,
nombre varchar(250) not null,
descripcion varchar(500) not null,
usuarioId int unsigned not null,
foreign key (usuarioId) references usuarios(id),
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp default current_timestamp
);

create table comentarios(
id int unsigned primary key auto_increment,
comentarios text,
usuarioId int unsigned,
productoId int unsigned,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp default current_timestamp,
foreign key (usuarioId) references usuarios(id),
foreign key (productoId) references productos(id)
);

insert into usuarios (id,nombre, email, contrasena, fotoDePerfil, fecha, dni)
values (default,'Ema', 'ema@udesa.com', 'contrasena1', '/images/users/ema.jpeg', '2023-1-1', 11111),
(default, 'Julieta', 'julietagomez@udesa.com', 'contrasena2', '/images/users/juli.png', '2023-1-1', 22222),
(default, 'valentina','valenkolek@udesa.com', 'contrasena3', '/images/users/valen.png', '2023-1-1', 33333),
(default, 'Juan','juanneira@udesa.com','contrasena4', '/images/users/juan.jpeg', '2023-1-1', 44444 ),
(default, 'Pili', 'pilarmedico@udesa.com','contrasena5', '/images/users/pili.jpeg', '2023-1-1', 55555 );




insert into productos (id, nombre, descripcion, usuarioId, cover)
values (default, 'Shampoo Kerastase', 'Shampoo Kerastase super hidratante', 1,'/images/products/shampoo.jpg'),
(default, 'Labial Dior', 'Labial Dior rojo humectante', 2, '/images/products/labialdior.webp'),
(default, 'Mascara Lancome', 'Máscara Lancome grandiosa', 3, '/images/products/mascaralancome.jpg'),
(default, 'Acondicionador Kerastase', 'Acondicionador Kerastase super hidratante', 4, '/images/products/acondicionador.jpg'),
(default, 'Desmaquillante Lancome', 'Desmaquillante Lancome super suave', 5, '/images/products/desmaquillante.webp'),
(default, 'Contorno Rare Beauty', 'Contorno Rare Beauty en crema', 1, '/images/products/contornorare.jpeg'),
(default, 'Rubor Mac', 'Rubor Mac super pigmentado', 2, '/images/products/rubormac.avif'),
(default, 'Sombra Dior', 'Paleta de sombras colores neutros', 3, '/images/products/sombradior.jpeg'),
(default, 'Gloss Dior', 'Gloss super brillante', 4, '/images/products/glossdior.jpeg'),
(default, 'Set Labial Kylie Cosmetics', 'Set de labios color nude', 5, '/images/products/labialkylie.jpeg');

insert into comentarios (id, comentarios, usuarioId, productoId)
values (default, '¿Tienen stock disponible?', 1, 1),
(default, '¿Tienen envíos a todo el país?', 2, 1),
(default, '¿Tienen envío gratis?', 3, 1),
(default, '¿Tienen cuotas sin interes?', 4, 1),
(default, '¿El producto es original?', 5, 2),
(default, '¿Tienen stock disponible?', 1, 2),
(default, '¿Tienen envíos a todo el país?', 2, 2),
(default, '¿Tienen envío gratis?', 3, 2),
(default, '¿Tienen cuotas sin interes?', 4, 3),
(default, '¿El producto es original?', 5, 3),
(default, '¿Tienen stock disponible?', 1, 3),
(default, '¿Tienen envíos a todo el país?', 2, 3),
(default, '¿Tienen envío gratis?', 3, 4),
(default, '¿Tienen cuotas sin interes?', 4, 4),
(default, '¿El producto es original?', 5, 4),
(default, '¿Tienen stock disponible?', 1, 4),
(default, '¿Tienen envíos a todo el país?', 2, 5),
(default, '¿Tienen envío gratis?', 3, 5),
(default, '¿Tienen cuotas sin interes?', 4, 5),
(default, '¿El producto es original?', 5, 5),
(default, '¿Tienen stock disponible?', 1, 6),
(default, '¿Tienen envíos a todo el país?', 2, 6),
(default, '¿Tienen envío gratis?', 3, 6),
(default, '¿Tienen cuotas sin interes?', 4, 6),
(default, '¿El producto es original?', 5, 7),
(default, '¿Tienen stock disponible?', 1, 7),
(default, '¿El producto es original?', 2, 7),
(default, '¿Tienen envío gratis?', 3, 7),
(default, '¿Tienen cuotas sin interes?', 4, 8),
(default, '¿El producto es original?', 5, 8),
(default, '¿Tienen stock disponible?', 1, 8),
(default, '¿Tienen envíos a todo el país?', 2, 8),
(default, '¿Tienen envío gratis?', 3, 9),
(default, '¿Tienen cuotas sin interes?', 4, 9),
(default, '¿El producto es original?', 5, 9),
(default, '¿Tienen stock disponible?', 1, 9),
(default, '¿Tienen envíos a todo el país?', 2, 10),
(default, '¿Tienen envío gratis?', 3, 10),
(default, '¿Tienen cuotas sin interes?', 4, 10),
(default, '¿El producto es original?', 5, 10);
