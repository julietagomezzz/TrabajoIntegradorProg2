create schema trabajoIntegradorProg2;

use trabajoIntegradorProg2;

create table usuarios(
id int unsigned primary key auto_increment,
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
nombre varchar(250) not null,
descripcion varchar(500) not null,
usuario_id int unsigned not null,
foreign key (usuario_id) references usuarios(id),
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp default current_timestamp
);



create table comentarios(
id_post int unsigned primary key auto_increment,
id_usuario int,
comentarios text,
usuario_id int unsigned,
producto_id int unsigned,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp default current_timestamp,
foreign key (usuario_id) references usuarios(id),
foreign key (producto_id) references productos(id)
);

insert into usuarios (id, email, contrasena, fotoDePerfil, fecha, dni)
values (default, 'ema@udesa.com', 'contrasena1', '/images/users/ema.jpeg', '2023-1-1', 11111),
(default, 'julietagomez@udesa.com', 'contrasena2', '/images/users/juli.png', '2023-1-1', 22222),
(default, 'valenkolek@udesa.com', 'contrasena3', '/images/users/valen.png', '2023-1-1', 33333),
(default, 'juanneira@udesa.com','contrasena4', '/images/users/juan.jpeg', '2023-1-1', 44444 ),
(default, 'pilarmedico@udesa.com','contrasena5', '/images/users/pili.jpeg', '2023-1-1', 55555 );

insert into productos (id, nombre, descripcion, usuario_id)
values (default, 'Shampoo Kerastase', 'Shampoo Kerastase super hidratante', 1),
(default, 'Labial Dior', 'Labial Dior rojo humectante', 2),
(default, 'Mascara Lancome', 'Máscara Lancome grandiosa', 3),
(default, 'Acondicionador Kerastase', 'Acondicionador Kerastase super hidratante', 4),
(default, 'Desmaquillante Lancome', 'Desmaquillante Lancome super suave', 5),
(default, 'Contorno Rare Beauty', 'Contorno Rare Beauty en crema', 1),
(default, 'Rubor Mac', 'Rubor Mac super pigmentado', 2),
(default, 'Sombra Dior', 'Paleta de sombras colores neutros', 3),
(default, 'Gloss Dior', 'Gloss super brillante', 4),
(default, 'Set Labial Kylie Cosmetics', 'Set de labios color nude', 5);