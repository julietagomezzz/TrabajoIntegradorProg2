// const db = require('../database/models/Producto')

const productsController ={
    
  index: function(req, res,) {
      },
      
  detalle: function(req,res){
   res.render('product' , {comments: data.comments} )

    },
  
    add: function (req,res) {
      res.render('product-add', {user:data.user})
    }
}

module.exports = productsController;