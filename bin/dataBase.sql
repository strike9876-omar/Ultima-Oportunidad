drop database DBDemo;
create database DBDemo;
use DBDemo;

create table tPersona
(
    codPersona varchar(5) NOT NULL, 
    nombres varchar(50) NOT NULL, 
    apellidos varchar(50),
    DNI varchar(8) NOT NULL,
    direccion varchar(50),
    telefono varchar(12),
    email varchar(50),
    PRIMARY KEY(codPersona)
);

create table tProducto
(
    codProducto varchar(5) NOT NULL,
    nombreProd varchar(50) NOT NULL,
    marca varchar(50),
    precioUnitario float check (precioUnitario > 0),
    stock int,
    PRIMARY KEY(codProducto)
);

create table tFactura
(
    nroFactura varchar (10) NOT NULL,
	Fecha datetime NOT NULL,
	Tipo varchar(10),
	codPersona varchar (5),	
	PRIMARY KEY(nroFactura),
    FOREIGN KEY (codPersona) references tPersona(codPersona)
);

create table tDetalleFactura
(
    nroFactura varchar(10) NOT NULL,
    codProducto varchar(5) NOT NULL,
    cantidad numeric(15,2) check (Cantidad > 0),
    precioUnitario float check (PrecioUnitario > 0),
    PRIMARY KEY (nroFactura,codProducto),
    FOREIGN KEY(nroFactura) REFERENCES tFactura(nroFactura),
    FOREIGN KEY (codProducto) REFERENCES tProducto(codProducto)
);

-- ===================================================================================================
--                                     INSERTAR DATOS
-- ===================================================================================================
-- *********************************************************
--         DATOS PARA LA TABLA PERSONA
-- *********************************************************
insert into tPersona(codPersona,nombres,apellidos,DNI,direccion,telefono,email) 
values('P01','Pedro','Loaz Torres','1447895','Av. La Cultura nro 112', '995244789','pedro@gmail.com');
insert into tPersona(codPersona,nombres,apellidos,DNI,direccion,telefono,email) 
values('P02','Juan','Torres Contrears','1847991','Av. El Sol nro 100', '944784778','juantorr@gmail.com');
insert into tPersona(codPersona,nombres,apellidos,DNI,direccion,telefono,email) 
values('P03','Julio','Carrilo Vega','847891','Av. Manco Capac nro 912', '901246578','juliocesar@gmail.com');
insert into tPersona(codPersona,nombres,apellidos,DNI,direccion,telefono,email) 
values('P04','Jose','Castillo Sto','1947192','Av. Bolivar nro 192', '995249875','josesus@gmail.com');
insert into tPersona(codPersona,nombres,apellidos,DNI,direccion,telefono,email) 
values('P05','Guillermo','Loaz Torres','1447895','Av. La Cultura nro 512', '995244709','guille@gmail.com');

-- *********************************************************
--         DATOS PARA LA TABLA PRODUCTO
-- *********************************************************
insert into tProducto(CodProducto,nombreProd,marca,precioUnitario,stock) 
values('A01','Gaseosa 1L','Coca Cola',5.5,102);
insert into tProducto(CodProducto,nombreProd,marca,precioUnitario,stock) 
values('A02','Gaseosas 1L','Inka Cola',5.9,50);
insert into tProducto(CodProducto,nombreProd,marca,precioUnitario,stock) 
values('A03','Galletas 350g','Tentacion',5.5,40);
insert into tProducto(CodProducto,nombreProd,marca,precioUnitario,stock) 
values('A04','Yogurt 1L','Gloria',5.5,20);
insert into tProducto(CodProducto,nombreProd,marca,precioUnitario,stock) 
values('A05','Paneton','Gloria',5.5,10);
insert into tProducto(CodProducto,nombreProd,marca,precioUnitario,stock) 
values('A06','Galletas 600g','Tentacion',5.5,12);
insert into tProducto(CodProducto,nombreProd,marca,precioUnitario,stock) 
values('A07','Gaseosas 350ml','Coca Cola',5.5,52);
insert into tProducto(CodProducto,nombreProd,marca,precioUnitario,stock) 
values('A08','Gaseosas 380ml','Inka Cola',5.5,30);
insert into tProducto(CodProducto,nombreProd,marca,precioUnitario,stock) 
values('A09','Galletas 400g','Tentacion',5.5,5);
insert into tProducto(CodProducto,nombreProd,marca,precioUnitario,stock) 
values('A10','Aceite Cil 1L','Primo',5.5,1);
insert into tProducto(CodProducto,nombreProd,marca,precioUnitario,stock) 
values('A11','Galletas Oreo 320ml','Tentacion',5.5,11);
-- *********************************************************
--         DATOS PARA LA TABLA FACTURA
-- *********************************************************
insert into tFactura(nroFactura,Fecha,Tipo,codPersona) 
values('F0001','2020-04-04 12:12:45','BOLETA','P01');
insert into tFactura(nroFactura,Fecha,Tipo,codPersona) 
values('F0002','2020-04-06 12:12:45','FACTURA','P02');
insert into tFactura(nroFactura,Fecha,Tipo,codPersona) 
values('F0003','2020-03-04 12:12:45','BOLETA','P03');
-- *********************************************************
--         DATOS PARA LA TABLA DETALLEFACTURA
-- *********************************************************
insert into tDetalleFactura(nroFactura,codProducto,cantidad,precioUnitario) 
values('F0001','A11',2,5.5);
insert into tDetalleFactura(nroFactura,codProducto,cantidad,precioUnitario) 
values('F0001','A10',1,2.1);
insert into tDetalleFactura(nroFactura,codProducto,cantidad,precioUnitario) 
values('F0001','A09',2,5.5);

insert into tDetalleFactura(nroFactura,codProducto,cantidad,precioUnitario) 
values('F0002','A01',2,5.5);
insert into tDetalleFactura(nroFactura,codProducto,cantidad,precioUnitario) 
values('F0002','A02',1,1.1);

insert into tDetalleFactura(nroFactura,codProducto,cantidad,precioUnitario) 
values('F0003','A07',3,5.5);
insert into tDetalleFactura(nroFactura,codProducto,cantidad,precioUnitario) 
values('F0003','A10',2,2.1);
insert into tDetalleFactura(nroFactura,codProducto,cantidad,precioUnitario) 
values('F0003','A09',2,5.5);

-- ===================================================================================================
--                              PROCEDIMIENTOS ALMACENaDOS
-- ===================================================================================================

-- *********************************************************
--      Prcocedimientos para la tabla PERSONA
-- *********************************************************

delimiter $
create procedure InsertarPersona(in Cod varchar(5),in nombre varchar(50),in apellid varchar(50),in dni varchar(8), in direcc varchar(50),in telefon varchar(12), in emai varchar(50))
begin
	insert into tPersona(codPersona,nombres,apellidos,DNI,direccion,telefono,email) 
    values(Cod,nombre,apellid,dni,direcc,telefon,emai);
end $
-- call InsertarPersona('P90','´Pedro','Loaz Torres','1447895','Av. La Cultura nro 112', '995244789','pedro@gmail.com')

delimiter $
create procedure ActualizarPersona(in Cod varchar(5),in nombre varchar(50),in apellid varchar(50),in dni varchar(8), in direcc varchar(50),in telefon varchar(12), in emai varchar(50))
begin
	update tPersona
	set nombres=nombre,apellidos=apellid,DNI=dni,direccion=direcc,telefono=telefon,email=emai where codPersona=Cod;
end $
-- call ActualizarPersona('P90','´Pedro','Loaz Torres','1447895','Av. El sol nro 112', '000000','pedro@gmail.com')

delimiter $
create procedure BorrarPersona(in CodPer varchar(5))
begin
	Delete from tPerona where CodPersona = CodPer;
end $
-- call BorrarPersona('P90')

-- *********************************************************
--      Prcocedimientos para la tabla PRODUCTO
-- *********************************************************
delimiter $
create procedure InsertarProducto(in Cod varchar(5),in nombre varchar(50),in marc varchar(50),in pu float, in stoc int)
begin
	insert into tProducto(CodProducto,nombreProd,marca,precioUnitario,stock) 
    values(Cod,nombre,marc,pu,stoc);
end $
-- call InsertarProducto('A90','´Gaseosas','Coca Cola',5.5,102)

delimiter $
create procedure ActualizarProducto(in Cod varchar(5),in nombre varchar(50),in marc varchar(50),in pu float, in stoc int)
begin
	update tProducto
	set nombreProd=nombre,marca=marc,precioUnitario=pu,stock=stoc where CodProducto=Cod;
end $
-- call ActualizarProducto('A90','Gaseosa','Inka Cola',5.9,10)

delimiter $
create procedure ActualizarStock(in Cod varchar(5),in stoc int)
begin
	update tProducto
	set stock=stoc where CodProducto=Cod;
end $
-- call ActualizarStock('A90',10)

delimiter $
create procedure BorrarProducto(in CodP varchar(5))
begin
	Delete from tProducto where CodProducto = CodP;
end $
-- call BorrarProducto('A90')

-- *********************************************************
--      Prcocedimientos para la tabla FACTURA
-- *********************************************************
delimiter $
create procedure InsertarFactura(in nro varchar(10),in fech datetime,in tipo varchar(10),in CodPerso varchar(5))
begin
	insert into tFactura(nroFactura,Fecha,Tipo,codPersona) 
    values(nro,fech,tipo,CodPerso);
end $
-- call InsertarFactura('F0090','2020-04-04 12:12:45','BOLETA','P090')

delimiter $
create procedure ActualizarFactura(in nro varchar(10),in fech datetime,in tipo varchar(10),in CodPerso varchar(5))
begin
	update tFactura
	set nroFactura=nro,Fecha=fech,Tipo=tipo,codPersona=CodPerso where nroFactura=nro;
end $
-- call ActualizarFcatura('F0090','2020-04-04 12:12:45','FACTURA','P090')

delimiter $
create procedure BorrarFactura(in nro varchar(5))
begin
	Delete from tFactura where nroFactura = nro;
end $
-- call BorrarFactura('F0090')

-- *********************************************************
--      Procedimientos para la tabla DETALLEFACTURA
-- *********************************************************
delimiter $
create procedure InsertarDetalleFactura(in nro varchar(10),in codP varchar(5),in cantidad numeric,in pu float)
begin
	insert into tDetalleFactura(nroFactura,codProducto,cantidad,precioUnitario) 
    values(nro,codP,cantidad, pu);
end $
-- call InsertarDetalleFactura('F0090','A90',12,2.3)

delimiter $
create procedure ActualizarDetalleFactura(in nro varchar(10),in codP varchar(5),in cantid numeric,in pu float)
begin
	update tDetalleFactura
	set cantidad=cantid, precioUnitario=pu where nroFactura=nro and codProducto=codP;
end $
-- call ActualizarDetalleFactura('F0090','A90',10,2.2)

delimiter $
create procedure BorrarDetalleFactura(in nro varchar(10),in codP varchar(5))
begin
	Delete from tDetalleFactura where nroFactura = nro and codProducto=codP;
end $
-- call BorrarDetalleFactura('F0090','A90')