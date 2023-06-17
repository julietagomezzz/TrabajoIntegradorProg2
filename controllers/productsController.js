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
           // return res.send(data)
        return res.render('product', {usuario:data.usuario, comentarios:data.comentario, data: data})   
      })
      .catch(function(err) {
          console.log(err);
      })
 
  },
  add: function(req,res) {
      res.render('product-add')

  },
  postAdd: function(req,res) {
    if (req.session.usuario != undefined) { 
    let producto = {
          nombre: req.body.nombre, 
          descripcion: req.body.descripcion, 
          cover: req.body.cover,
          usuarioId: req.session.usuarioId
      } 
    
      Producto.create(producto)
      .then(function (data) {
        res.redirect('/')
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    else{ 
      res.redirect('/login')  
      
  }},
  edit: function(req,res) {
      Producto.findByPk(req.params.id)

      .then(function(product){
          return res.render('product-edit', {product:product})
           
      }).catch(function(err) {
          console.log(err);
      })
      
  },
  postEdit: function (req,res) {

      Producto.findByPk(req.body.id)

      .then(function(data){

          if (req.session.user.id == data.usuarioId) {

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
    let comentario = {
        usuarioId: req.session.usuario.id,
        productoId:req.params.id,
        comentarios: req.body.comentario
        }
    
    Comentario.create(comentario)
        .then(function(req, res){
            return res.redirect("/")
        })
        .catch(function(errors){
            console.log(errors);
            })
    }
}
      
module.exports = productsController;