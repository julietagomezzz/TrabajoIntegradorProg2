const indexController = {
    index : function(req, res) {
        return res.render('index', { title: 'Express' });
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