const db = require('../database/models')
const Producto = db.Producto;
const Usuario = db.Usuario;
const Comentario = db.Comentario;

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
      .then(function(products){
          return res.redirect(`/products/detalle/id/${products.id}`)
          
      }).catch(function(err) {
          console.log(err);
      })
      

  },

  add: function(req,res) {
      res.render('product-add')

  },
  postAdd: function(req,res) {
      let producto = {
          nombre:req.body.nombre, 
          descripcion:req.body.descripcion, 
          usuarioId:  req.session.Usuario.id
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

  Postedit: function (req,res) {

      Producto.findByPk(req.params.id)

      .then(function(products){

          if (req.session.Usuario.id == products.usuarioId) {

              let producto_edit = {
                  nombre:req.body.nombre, 
                  descripcion:req.body.descripcion, 
                  cover:req.body.cover, 
                  usuarioId:  req.session.Usuario.id}
      
               
              Producto.update(producto_edit, {where: [{id: req.params.id}]})
              return res.redirect('/') 
                  
              

          } else {
              let errors = {}
              errors.message  = "No puede editar. Este producto no le pertenece";
              res.locals.errors = errors;
              return res.render('product-edit', {product:products})
          }

      })
      .catch(function(err) {
          console.log(err);
      })


  }  ,
  PostDelete: function (req,res) {

      Producto.findByPk(req.params.id, {
          include: [
              {association:"usuario"},
              {association:"comentario", include: {association:"usuario"}}
          ]
      } )

      .then(function(products){

          if (req.session.Usuario.id == products.usuarioId) {

              Producto.destroy({where: [{ id: req.params.id}]})
              .then(function(coment) {
                  Comentario.destroy({where: [ {productoId : req.params.id}]})
                  return res.redirect('/') 
              })
                  
          
          } else {
              let errors = {}
              errors.message  = "No puede eliminar. Este producto no le pertenece";
              res.locals.errors = errors;
              return res.render('product', {products:products})
          }

      })
      .catch(function(err) {
          console.log(err);
      })



      
  }

}
      
module.exports = productsController;