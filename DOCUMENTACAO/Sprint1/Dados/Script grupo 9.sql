create database grupo9;
use grupo9;

create table usuario (
id int primary key auto_increment,
nome varchar (45),
cnpj varchar (45),
email varchar (45),
check (email like '%@%' and email like '%.com%'),
senha varchar (45)
);

select * from usuario;

-- create table funcionario (
-- idFuncionario int primary key auto_increment,
-- funcionario varchar (45)
-- );

-- insert into funcionario values
-- (null, 'Administrador'),
-- (null, 'Usuário');
-- select * from funcionario;
