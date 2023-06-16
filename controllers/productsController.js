const data = require('../data/data')
const db = require('../database/models')
const Producto = db.Producto;
const Usuario = db.Usuario;
const Comentario = db.Comentario;
const user = data.user;

const productsController = {

  detalle:function(req,res) { 
 
      let id = req.params.id
      let relaciones = {
          include: [
              {association:"usuario"},
              {association:"comentario", include: {association:"usuario"}}
          ]
      }

      Producto.findByPk(id,relaciones)
      .then(function(data){
        return res.render('product', { data:data})   
      })
      .catch(function(err) {
          console.log(err);
      })
 
  },
  detalleComment: function(req,res) {

      let comentario = {
          comentario:req.body.comentario, 
          usuarioId: req.session.Usuario.id, 
          productoId: req.params.id, 
          
      }
      Comentario.create(comentario)
      Producto.findByPk(req.params.id)
      .then(function(data){
          return res.redirect(`/products/detalle/id/${products.id}`)
          
      }).catch(function(error) {
          console.log(error);
      })
  },
  add: function(req,res) {
      res.render('product-add')

  },
  postAdd: function(req,res) {
      let producto = {
          nombre:req.body.nombre, 
          descripcion:req.body.descripcion, 
          cover: req.body.cover,
          usuarioId:  req.session.usuarioId
      }
      
      Producto.create(producto)
      return res.redirect('/')
  },
  edit: function(req,res) {
      Producto.findByPk(req.params.id)

      .then(function(product){
          return res.render('product-edit', {product:product})
           
      }).catch(function(err) {
          console.log(err);
      })
      
  },
  postEdit: function (req,res) {

      Producto.findByPk(req.params.id)

      .then(function(products){

          if (req.session.user.id == products.usuarioId) {

              let productoEditado = {
                  nombre: req.body.nombre, 
                  descripcion: req.body.descripcion, 
                  cover: req.body.cover, 
                  usuarioId: req.session.usuarioId}
      
              Producto.update(productoEditado, {where: [{id: req.params.id}]})
              return res.redirect('/') 
                  
          } else {
              let errors = {}
              errors.message  = "No puede editar. Este producto no le pertenece";
              res.locals.errors = errors;
              return res.render('product-edit', {product:products})
          }

      })
      .catch(function(error) {
          console.log(error);
      })
  }  ,
  postDelete: function (req,res) {

      Producto.findByPk(req.params.id, {
          include: [
              {association:"usuario"},
              {association:"comentario", include: {association:"usuario"}}
          ]
      } )

      .then(function(data){

          if (req.session.Usuario.id == data.usuarioId) {

              Producto.destroy({where: [{ id: req.params.id}]})
              .then(function(coment) {
                  Comentario.destroy({where: [ {productoId : req.params.id}]})
                  return res.redirect('/') 
              })
                  
          } else {
              let errors = {}
              errors.message  = "No puede eliminar el producto. No le pertenece";
              res.locals.errors = errors;
              return res.render('product', {data:data})
          }
      })
      .catch(function(err) {
          console.log(err);
      })    
  },
  agregarComentario: function(req,res){
    Comentario.create({
        usuarioId: req.session.usuarioId,
        productoId:req.params.productoId,
        comentario: req.body.comentario
    })
    .then((data) => {
        return res.redirect('/')
    })
    .catch((error) => {
        res.send(error)
    })
  }

}
      
module.exports = productsController;