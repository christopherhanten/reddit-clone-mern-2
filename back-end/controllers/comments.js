var models = require('../models');
var Comment = models.Comment;
var TextPost = models.TextPost;

function create(req, res) {
  comment.create(req.body, function (err,comment) {
    if(err) req.send(err);
    else {
      TextPost.findById(req.params.post_id, function (err,post) {
        if (err) res.send(err);
        else {
          post.comments.push(comment);
          post.save();
          res.json(comment);
          
        }
      })
    }
  })
  
}

function update(req, res) {

}

function destroy(req, res) {

}

module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;