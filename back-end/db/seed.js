const db = require ('../models');

let currentDate = new Date()

const testComments = [
  {
    userName: 'BMC',
    text: 'My flow tight like your pants are',
    votes: '15'
  },{
    userName: 'Higgins',
    text: 'Gods a golden impressionist',
    votes: '7'
  },
];

const testTextPostsList = [
  {
    title: 'test title 2',
    content: 'test textpost content 1',
    thumbnail_image_url: 'https://worldwideinterweb.com/wp-content/uploads/2015/09/coolest-ever-2.jpg'
  }, {
    title: 'test title 2',
    content: 'test textpost content 2',
    thumbnail_image_url: 'https://incompliancemag.com/wp-content/uploads/2017/03/ISS.jpg'
  }
];

db.TextPost.remove({}, (err, textposts) => {
  db.TextPost.create(testTextPostsList, (err, textposts) => {
    if (err) {
      return console.log('ERROR ' + err);
    }
    console.log("all textposts: " + textposts);
    console.log("created " + textposts.length + " textposts");
    process.exit();
  })
})
