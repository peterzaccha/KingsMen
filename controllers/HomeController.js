const Post = require('../database/models/Post');

exports.index =async function(req, res) {
  const  posts = await Post.find({}).populate('user');
  String.prototype.trunc = String.prototype.trunc ||
        function(n){
            return (this.length > n) ? this.substr(0, n-1) + '&hellip;' : this;
    };



   res.render('index', {
       posts
   });
};
