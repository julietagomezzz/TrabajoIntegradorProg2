const productsController ={
    index: function(req, res,) {
      },
    detalle: function(req,res){
      id = req.params.id
      for(let i = 0; i< info.products.lenght; i++){
        if( id== info.products[i].id){
            product_info = info.products[i]
        }
      }
      res.render('product', {id:id, products: info.products, product_info: product_info, comments:info.comments})

    },
    add: function (req,res) {
      res.render('product-add', {user:info.user})
    }
}

module.exports = productsController;