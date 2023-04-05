const usersController = {
    profile: function(req,res){
        return res.render('profile', {users:data.user, products: data.products})
    },
    editprofile: function(req,res){
        return res.render('profile-edit', {user:info.user})
    }
}
module.exports = usersController;