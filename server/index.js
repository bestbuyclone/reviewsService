const express = require("express");
const path = require("path");
const loremIpsum = require("lorem-ipsum");
const bodyParser = require('body-parser')
const { Product , Comment } = require("../db/schema")

const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://nmentakis:5SH.!j45x5HSibs@reviews-tvusn.mongodb.net/Reviews?retryWrites=true")


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connection successful')
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/reviews/:productId', (req,res) => {
  Product.find({productId : req.params.productId}).then(data => {
    res.json(data);
  })
})

app.get('/comments/:productId', (req,res) => {
  Comment.find({productId : req.params.productId}).then(data => {
    res.json(data);
  })
})

app.post('/comments/helpful', (req,res) => {
  Comment.findByIdAndUpdate(req.body.commentId, {helpful : req.body.helpful}).then(result => res.send(result))
})

app.post('/comments/seed', (req,res) => {
  console.log('hit seed')
  let commentArray = [];
  const numberOfComments = [1,2,3,4,5]
  for (let number of numberOfComments) {
    for ( let i=101; i < 1001; i++) {
      for (let j = 1; j < 6; j++) {
        output = loremIpsum({
          count: 2,
          units: 'paragraphs',
          sentenceLowerBound: 15,
          sentenceUpperBound: 22,
          paragraphLowerBound: 7,
          paragraphUpperBound: 10,
        });
        let comment = new Comment({
          productId: i,
          rating: j,
          user: 'Nikolas Mentakis',
          ratingComment: 'This was Good/Bad/Ok',
          date: Date.now(),
          comment: output,
          helpful: Math.floor(Math.random() * 150),
        })
        commentArray.push(comment);
      }
    }
  }
  Comment.insertMany( commentArray, {}, () => {
    console.log("totally updated")
    res.send("hi nik")
  })
})


app.post('/products/seed/', (req,res) => {
  console.log('hit seed')
  let productArray = [];
  for ( let i=101; i < 1001; i++) {
      let product = new Product({
        productId: i,
        stars: {
          five: 5,
          four: 5,
          three: 5,
          two: 5,
          one: 5,
        }
      })
      productArray.push(product);
    }
  Product.insertMany( productArray, {}, () => {
    console.log("totally updated")
    res.send("hi nik")
  })
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 6001;
}
app.listen(port, () => {
  console.log('listening on port 3005!');
});
