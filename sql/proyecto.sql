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
usuario_id int unsigned,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp default current_timestamp,
foreign key (usuario_id) references ususarios(id)
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
foreign key (usuario_id) references usuario(id),
foreign key (producto_id) references producto(id)
);