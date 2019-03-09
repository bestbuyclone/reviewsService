const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: String,
  stars: {
    five: Number,
    four: Number,
    three: Number,
    two: Number,
    one: Number,
  }
})

const Product = mongoose.model("Product", productSchema);

const commentSchema = new mongoose.Schema({
  productId: String,
  user: String,
  rating: Number,
  ratingComment: String,
  date: Date,
  comment: String,
  helpful: Number,
})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = {
  Product,
  Comment,
}