const data = require('../data/data')
const db = require('../database/models')
const Producto = db.Producto;
const Usuario = db.Usuario;
const bcryptjs = require('bcryptjs')
const Comentario = db.Comentario;

const usersController = {
    profile: function(req,res){
        
        let id = req.params.id
        
        let relaciones = {
            include: [
                {association:"comentario"},
                {association:"producto"}
        ]}
        Usuario.findByPk(id, relaciones)
        
        .then(function (data) {
            console.log(data);
            return res.render('profile', {data: data})
       
        }).catch(function (error) {
            console.log(error);
        })

    },
    editprofile: function(req,res){
        
        let id = req.params.id
        
        Usuario.findByPk(id)
        .then(function(data){
            return res.render('profile-edit', {user: data})
             
        }).catch(function(error) {
            console.log(error);
        })
         
    },
    Posteditprofile: function (req,res) {

        if (req.session.user != undefined){ 
        let profileEdit = {
            email: req.body.email, 
            contrasena: req.body.contrasena, 
            fotoDeperfil: req.body.fotoDePerfil, 
            fecha: req.body.fecha,
            dni: req.body.dni
        }

        Usuario.update(profileEdit, {where: [{id: req.params.user.id}]})
        .then(function (products) {
            res.locals.user.email = req.body.email
            return res.redirect('/users/profile' + req.sessio.user.id)
        })
        .catch(function (error) {
            console.log(error);
        })}
    },
    logout: function(req,res) {
        req.session.destroy()
        res.clearCookie('usuario') 
        return res.redirect('/')
    }
}

module.exports = usersController;