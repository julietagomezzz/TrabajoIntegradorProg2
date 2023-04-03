const productsController ={
    index: function(req, res,) {
      },
    detalle: function(req,res){
      id = req.params.id
      for(let i = 0; i<DataTransfer.products.lenght; i++){
        if( id== DataTransfer.products[i].id){
            product_info = data.products[i]
        }
      }
      res.render('product', {id:id, products: data.products, product_info: product_info, comments:data.comments})

    },
    add: function (req,res) {
      res.render('product-add', {user:data.user})
    }
}

module.exports = productsController;