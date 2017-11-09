const mongoose = require("mongoose")
const url = 'mongodb://localhost/hacktivpress-redha'
mongoose.connection.openUri(url)

const schema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
})

const articleModel = mongoose.model("Article", schema)

module.exports = articleModel
