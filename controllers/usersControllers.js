const usersController = {
    profile: function(req,res){
        return res.render('profile', {users:info.user, products: info.products})
    },
    editprofile: function(req,res){
        return res.render('profile-edit', {user:info.user})
    }
}
module.exports = usersController;