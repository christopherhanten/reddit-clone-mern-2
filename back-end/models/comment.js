// Add your comment model here
var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema ({
  content: String,
  votes: Number
})

var Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment
module.exports.Schema = CommentSchema
