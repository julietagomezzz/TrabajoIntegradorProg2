const data = require('../data/data')
const db = require('../database/models')
const bcryptjs = require('bcryptjs')
const Producto = db.Producto;
const Usuario = db.Usuario;
const Comentario = db.Comentario;
const op = db.Sequelize.Op;

const indexController = {
    index : function(req, res) {
        Producto.findAll( {order: [['createdAt', 'DESC']], include: [
            {association:"usuario"},
            {association:"comentario", include: [{association:"usuario"}]}
        ] })
        .then(function(data){
            return res.render('index', {data: data})})
            
        .catch(function(error){console.log(error)}) 
      },

    login: function (req, res){
          return res.render('login')
      },

    loginPost: function(req,res){
        Usuario.findOne(
            {where: [{email: req.body.email}]}
            )
        .then(function (results) {

            if(results){

                let check = bcryptjs.compareSync(req.body.password, results.contrasena) 
                
                if(check){
                    req.session.Usuario = results.dataValues; 
                    if (req.body.recordarme){
                        res.cookie('usuario', results.dataValues.id, {maxAge: 1000 * 60 * 5})
                    }
                    return res.redirect('/')
                }
                else{
                    res.send(results)
                    let errors = {};
                    errors.message = "El usuario o la contraseña es incorrecto"
                    res.locals.errors = errors;
                    return res.render("login")
                }
            } else {
                    let errors = {};
                    errors.message = "Este mail nunca se ha registrado"
                    res.locals.errors = errors;
                    return res.render("login")
            }
        })
    },

    register: function (req, res){
          return res.render('register')
      },

    postRegister: function(req,res) {

        console.log(req.body.email)
            
        Usuario.findOne({where: [{email : req.body.email}]}) 
        
        .then(function(resultado) { 

            let errors = {}
  
                console.log(req.body.contrasena);
                if (resultado) {

                errors.message = "El email ingrasado ya existe"
                res.locals.errors = errors;
                res.render('register')

                }else if(req.body.nombre == ""){
                    errors.message  = "El nombre esta vacío";
                    res.locals.errors = errors
                    res.render('register')
        
                } else if (req.body.contrasena == ""){
                    errors.message  = "La contraseña esta vacía";
                    res.locals.errors = errors;
                    res.render('register')
        
                }

                 else if (req.body.contrasena.length < 3) {
                    errors.message  = "La contraseña debe tener 3 o más caracteres";
                    res.locals.errors = errors;
                    res.render('register')
                } 
                else{
                
                let passEncriptada= bcryptjs.hashSync(req.body.contrasena,req.body.contrasena.length);
                let usuario = {
                    nombre:req.body.nombre,
                    email:req.body.email, //allowNull: false
                    contrasena:passEncriptada, //allowNull: false
                    fotoDePerfil: req.body.fotoDePerfil,
                    fecha: req.body.date ,
                    dni: req.body.dni 
                }
                Usuario.create(usuario);
                return res.redirect('/login');
                }

            }).catch(function(error) {
                console.log(error);
            })
              
        },

      results: function (req, res){
        let busqueda = req.query.busqueda;
        console.log('busqwue');
        console.log(busqueda);
        let relaciones ={
            include: [
                {association:'usuario'},
                {association:'comentario',  include: {association:"usuario"}}
            ]
        };
        let criterio = {
            where:{
                [op.or]:[
                    {nombre: {[op.like]:'%'+busqueda+'%'}},
                    {descripcion:{[op.like]:'%'+busqueda+'%'}}
                ]
            },
            order: [['createdAt', 'DESC']]
        }
        Producto.findAll(criterio, relaciones)
            .then(function(data){
                //return res.send(data);
                return res.render('search-results', {products: data});
            })
            .catch(function(error){
                console.log(error);
           
        })
        
        
    },
    searchresultsUser: function(req,res) {
        let busqueda = req.query.search;
        let criterio = {
            where: {
                [op.or]: [{
                      nombre: {
                         [op.like]: "%"+busqueda+"%"
                      }
                   },
                   {
                      email: {
                         [op.like]: "%"+busqueda+"%"
                      }
                   }
                ]
             }
            
            }
            Usuario.findAll(criterio)

            .then(function(user){

                

                return res.render('searchresults-user', {user : user})
                            
                        
                         
            }).catch(function(err) {
                console.log(err);
            })    
        }


}

module.exports = indexController;