const mongoose = require("mongoose")
const url = 'mongodb://localhost/hacktivpress-redha'
mongoose.connection.openUri(url)

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  secret: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const userModel = mongoose.model("User", schema)

module.exports = userModel
