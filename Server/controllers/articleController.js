const Article = require('../models/article')
const helper = require('../helpers/helpers')

module.exports = {
  findAll: (req, res) => {
    Article.find().then((allArticles) => {
      res.status(200).json({
        message: "Show all articles",
        data: allArticles
      })
    }).catch((reason) => {
      res.status(404).json({
        message: reason
      })
    })
  },

  findOne: (req, res) => {
    Article.findOne({_id: req.params.id}).then((article) => {
      res.status(200).json({
        message: "Show article",
        data: article
      })
    }).catch((reason) => {
      res.status(400).json({
        message: reason
      })
    })
  },

  create: (req, res) => {
    Article.create()
  }
}
