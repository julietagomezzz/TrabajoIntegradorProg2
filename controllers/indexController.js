const products = require('../data/data')
const db = require('../database/models')
const bcryptjs = require('bcryptjs')
const Producto = db.Producto;
const Usuario = db.Usuario;
const Comentario = db.Comentario;

const indexController = {
    index : function(req, res) {
          return res.render('index', { products: data.products });
      },
      login: function (req, res){
          return res.render('login')
      },
      register: function (req, res){
          return res.render('register')
      },
      results: function (req, res){
          return res.render('search-results',{products: data.products} )
      },



}

module.exports = indexController;