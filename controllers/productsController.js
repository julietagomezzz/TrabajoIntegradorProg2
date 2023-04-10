const productsController ={
    
  index: function(req, res,) {
      },
      
  detalle: function(req,res){
   res.render('product' , {comments: data.coments} )

    },
  
    add: function (req,res) {
      res.render('product-add', {user:data.user})
    }
}

module.exports = productsController;