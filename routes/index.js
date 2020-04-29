const conn = require('../bin/DBconection');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index')
});
//------------------------------------------------------------------------------------------
//Tipo Persona
//------------------------------------------------------------------------------------------
router.get('/persona', (req, res, next) => {
  //conn.connect()
  sql = 'SELECT * FROM tpersona;'
  conn.query(sql, (err, respuesta) => {
    if (err) {
      console.log('Error')
    } else {
      res.render('persona', { datos: respuesta })
    }
  })
});

router.get('/nuevoPersona', (req, res) => {
  res.render('nuevoPersona');
});

router.post('/DOinsPers', (req, res) => {
  let codPersona = req.body.txtCod || '';
  let nombres = req.body.txtNombres || '';
  let apellidos = req.body.txtApellidos || '';
  let dni = req.body.txtDNI || '';
  let direccion = req.body.txtDireccion || '';
  let telefono = req.body.txtTelefono || '';
  let email = req.body.txtEmail || '';

  SQL = `INSERT INTO tPersona VALUES ('${codPersona}','${nombres}','${apellidos}','${dni}','${direccion}','${telefono}','${email}');`
  conn.query(SQL, (err, resultado) => {
    if (err) {
      console.log('Error al insertar')
    } else {
      res.send('Insertado correctamente...   <a href="http://localhost:3000/persona">HOME</a>')
    }
  })
});

router.get('/borraPersona/:codigo', (req, res) => {
  let codigo = req.params.codigo;

  SQL = `DELETE FROM tPersona WHERE codPersona = '${codigo}';`
  conn.query(SQL, (err, resultado) => {
    if (err) {
      console.log('Error al borrar')
    } else {
      res.send('Borrado correctamente...   <a href="http://localhost:3000/persona">HOME</a>')
    }
  })
});

router.get('/editaPersona/:codigo', (req, res) => {
  let codigo = req.params.codigo;
  SQL = `SELECT * FROM tPersona WHERE codPersona = '${codigo}';`
  conn.query(SQL, (err, respuesta) => {
    if (err) {
      console.log('Error al buscar persona')
    } else {
      res.render('editaPersona', { dato: respuesta })
    }
  })
});

router.post('/editaPersona/DOedtPers', (req, res) => {
  let codPersona = req.body.txtCod || '';
  let nombres = req.body.txtNombres || '';
  let apellidos = req.body.txtApellidos || '';
  let dni = req.body.txtDNI || '';
  let direccion = req.body.txtDireccion || '';
  let telefono = req.body.txtTelefono || '';
  let email = req.body.txtEmail || '';

  SQL = `UPDATE tPersona SET nombres='${nombres}', apellidos='${apellidos}', DNI='${dni}', direccion='${direccion}', telefono='${telefono}', email='${email}' WHERE codPersona='${codPersona}'; `
  conn.query(SQL, (err, resultado) => {
    if (err) {
      console.log('Error al editar')
    } else {
      res.send('Editado correctamente...   <a href="http://localhost:3000/persona">HOME</a>')
    }
  })
});


//------------------------------------------------------------------------------------------
//Tipo Producto
//------------------------------------------------------------------------------------------
router.get('/producto', (req, res, next) => {
  //conn.connect()
  sql = 'SELECT * FROM tproducto;'
  conn.query(sql, (err, respuesta) => {
    if (err) {
      console.log('Error')
    } else {
      res.render('producto', { datos: respuesta })
    }
  })
});

router.get('/nuevoProducto', (req, res) => {
  res.render('nuevoProducto');
});

router.post('/DOinsProd', (req, res) => {
  let codProducto = req.body.txtCod || '';
  let nombreProd = req.body.txtNombreProducto || '';
  let marca = req.body.txtMarca || '';
  let precioUnitario = req.body.txtPrecioUnitario || '';
  let stock = req.body.txtStock || '';

  SQL = `INSERT INTO tProducto VALUES ('${codProducto}','${nombreProd}','${marca}','${precioUnitario}','${stock}');`
  conn.query(SQL, (err, resultado) => {
    if (err) {
      console.log('Error al insertar')
    } else {
      res.send('Insertado correctamente...   <a href="http://localhost:3000/producto">HOME</a>')
    }
  })
});

router.get('/borraProducto/:codigo', (req, res) => {
  let codigo = req.params.codigo;

  SQL = `DELETE FROM tProducto WHERE codProducto = '${codigo}';`
  conn.query(SQL, (err, resultado) => {
    if (err) {
      console.log('Error al borrar')
    } else {
      res.send('Borrado correctamente...   <a href="http://localhost:3000/producto">HOME</a>')
    }
  })
});

router.get('/editaProducto/:codigo', (req, res) => {
  let codigo = req.params.codigo;
  SQL = `SELECT * FROM tProducto WHERE codProducto = '${codigo}';`
  conn.query(SQL, (err, respuesta) => {
    if (err) {
      console.log('Error al buscar producto')
    } else {
      res.render('editaProducto', { dato: respuesta })
    }
  })
});

router.post('/editaProducto/DOedtProd', (req, res) => {
  let codProducto = req.body.txtCod || '';
  let nombreProd = req.body.txtNombreProd || '';
  let marca = req.body.txtMarca || '';
  let precioUnitario = req.body.txtPrecioUnitario || '';
  let stock = req.body.txtStock || '';

  SQL = `UPDATE tProducto SET nombreProd='${nombreProd}', marca='${marca}', precioUnitario='${precioUnitario}', stock='${stock}' WHERE codProducto='${codProducto}'; `
  conn.query(SQL, (err, resultado) => {
    if (err) {
      console.log('Error al editar')
    } else {
      res.send('Editado correctamente...   <a href="http://localhost:3000/producto">HOME</a>')
    }
  })
});

//------------------------------------------------------------------------------------------
//Tipo Comprobante factura o boleta
//------------------------------------------------------------------------------------------
router.get('/factura', (req, res, next) => {
  //conn.connect()
  sql = 'SELECT * FROM tFactura;'
  conn.query(sql, (err, respuesta) => {
    if (err) {
      console.log('Error')
    } else {
      res.render('factura', { datos: respuesta })
    }
  })
});

router.get('/nuevoFactura', (req, res) => {
  res.render('nuevoFactura');
});

router.post('/DOinsFact', (req, res) => {
  let nroFactura = req.body.txtNroFactura || '';
  let fecha = req.body.txtFecha || '';
  let tipo = req.body.txtTipo || '';
  let codPersona = req.body.txtCodPersona || '';

  SQL = `INSERT INTO tFactura VALUES ('${nroFactura}','${fecha}','${tipo}','${codPersona}');`
  conn.query(SQL, (err, resultado) => {
    if (err) {
      console.log('Error al insertar')
    } else {
      res.send('Insertado correctamente...   <a href="http://localhost:3000/factura">HOME</a>')
    }
  })
});

router.get('/borraFactura/:codigo', (req, res) => {
  let codigo = req.params.codigo;

  SQL = `DELETE FROM tFactura WHERE nroFactura = '${codigo}';`
  conn.query(SQL, (err, resultado) => {
    if (err) {
      console.log('Error al borrar')
    } else {
      res.send('Borrado correctamente...   <a href="http://localhost:3000/factura">HOME</a>')
    }
  })
});

router.get('/editaFactura/:codigo', (req, res) => {
  let codigo = req.params.codigo;
  SQL = `SELECT * FROM tFactura WHERE nroFactura = '${codigo}';`
  conn.query(SQL, (err, respuesta) => {
    if (err) {
      console.log('Error al buscar factura')
    } else {
      res.render('editaFactura', { dato: respuesta })
    }
  })
});

router.post('/editaFactura/DOedtFact', (req, res) => {
  let nroFactura = req.body.txtNro || '';
  let Fecha = req.body.txtFecha || '';
  let Tipo = req.body.txtTipo || '';
  let codPersona = req.body.txtCodPersona || '';

  SQL = `UPDATE tFactura SET Fecha='${Fecha}', Tipo='${Tipo}', codPersona='${codPersona}' WHERE nroFactura='${nroFactura}';`
  conn.query(SQL, (err, resultado) => {
    if (err) {
      console.log('Error al editar')
    } else {
      res.send('Editado correctamente...   <a href="http://localhost:3000/Factura">HOME</a>')
    }
  })
});

//------------------------------------------------------------------------------------------
//Tipo Detalle Comprobante factura o boleta
//------------------------------------------------------------------------------------------
router.get('/detalleFactura/:codigo', (req, res, next) => {
  let codigo = req.params.codigo;
  SQL = `SELECT * FROM tDetalleFactura WHERE nroFactura = '${codigo}';`
  conn.query(SQL, (err, respuesta) => {
    if (err) {
      console.log('Error al buscar factura')
    } else {
      res.render('detalleFactura', { datos: respuesta })
    }
  })
});

router.get('/detalleFactura/nuevoDetFact/:codigo', (req, res) => {
  let codigo = req.params.codigo;
  SQL = `SELECT nroFactura FROM tDetalleFactura WHERE nroFactura = '${codigo}';`
  conn.query(SQL, (err, respuesta) => {
    if (err) {
      console.log('Error al buscar factura')
    } else {
      res.render('nuevoDetFact', { dato: respuesta })
    }
  })
});

router.post('/detalleFactura/nuevoDetFact/DOinsDetFact', (req, res) => {
  let nroFactura = req.body.txtNro || '';
  let codProducto = req.body.txtCodProducto || '';
  let cantidad = req.body.txtCantidad || '';
  let precioUnitario = req.body.txtPrecioUnitario || ''; 
  
  SQL = `INSERT INTO tDetalleFactura VALUES ('${nroFactura}','${codProducto}','${cantidad}','${precioUnitario}');`
  conn.query(SQL, (err, resultado) => {
    if (err) {
      console.log('Error al insertar detalle de factura la ptmr')
    } else {
      res.send('Insertado correctamente...   <a href="http://localhost:3000/Factura">HOME</a>')
    }
  })
});

router.get('/borraDetFact/:nro/:codigo', (req, res) => {
  let nro = req.params.nro;
  let codigo = req.params.codigo;

  SQL = `DELETE FROM tDetalleFactura WHERE nroFactura = '${nro}' and codProducto = '${codigo}'`
  conn.query(SQL, (err, resultado) => {
    if (err) {
      console.log('Error al borrar')
    } else {
      res.send('Borrado correctamente...   <a href="http://localhost:3000/factura">HOME</a>')
    }
  })
});

router.get('/detalleFactura/editaDetFact/:nro/:codigo', (req, res) => {
  let nro = req.params.nro;
  let codigo = req.params.codigo;
  SQL = `SELECT * FROM tDetalleFactura WHERE nroFactura = '${nro}' and codProducto = '${codigo}'`
  conn.query(SQL, (err, respuesta) => {
    if (err) {
      console.log('Error al buscar detalle factura')
    } else {
      res.render('editaDetFact', { dato: respuesta })
    }
  })
});

router.post('/editaFactura/DOedtDetFact', (req, res) => {
  let nroFactura = req.body.txtNro || '';
  let codProducto = req.body.txtCodProducto || '';
  let cantidad = req.body.txtCantidad || '';
  let precioUnitario = req.body.txtPrecioUnitario || '';

  SQL = `UPDATE tFactura SET cantidad='${cantidad}', precioUnitario='${precioUnitario}' WHERE nroFactura='${nroFactura}' and codProducto='${codProducto}'; `
  conn.query(SQL, (err, resultado) => {
    if (err) {
      console.log('Error al editar')
    } else {
      res.send('Editado correctamente...   <a href="http://localhost:3000/Factura">HOME</a>')
    }
  })
});
module.exports = router;
