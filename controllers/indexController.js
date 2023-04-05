const products = require('../data/data')

const indexController = {
    index : function(req, res) {
          return res.render('index', { products: info.products });
      },
      login: function (req, res){
          return res.render('login')
      },
      register: function (req, res){
          return res.render('register')
      },
      results: function (req, res){
          return res.render('search-results')
      },



}

module.exports = indexController;