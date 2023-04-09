create schema trabajoIntegradorProg2;
use trabajoIntegradorProg2;

create table usuarios(
id int unsigned primary key auto_increment,
email varchar(100) unique not null,
contrasena varchar(250) not null,
fotoDePerfil varchar (200),
fecha date,
dni int unsigned,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp default current_timestamp
);

use trabajoIntegradorProg2;

create table productos(
id int unsigned primary key auto_increment,
nombre varchar(250) not null,
descripcion varchar(500) not null,
usuario_id int,
foreign key (usuario_id) references ususarios(id),
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp default current_timestamp
);

use trabajoIntegradorProg2;

create table comentarios(
id_post int unsigned auto_increment,
id_usuario int,
comentarios text,
usuario_id int,
foreign key (usuario_id) references usuario(id),
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp default current_timestamp
);