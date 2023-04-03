const indexController = {
    index : function(req, res) {
        res.render('index', { title: 'Express' });
      },
      login: function (req, res){
        res.render('login')
      },
      register: function (req, res){
        res.render('register')
      },
      results: function (req, res){
        res.render('search-results')
      },



}

module.exports = indexController;