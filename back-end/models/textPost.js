var mongoose= require('mongoose');
var Schema = mongoose.Schema;
var Comment= require('./comment');

var TextPostSchema = new Schema ({
  title: String,
  content: String,
  thumbnail_image_url: String,
  votes: Number,
  comments: [Comment.Schema],
},
{
  timestamps: true
});

var TextPost= mongoose.model('TextPost',  TextPostSchema);

module.exports = TextPost;
