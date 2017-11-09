const Article = require('../models/article')
const User = require('../models/user')
const helper = require('../helpers/helpers')

module.exports = {
  findAll: (req, res) => {
    Article.find().populate('author').then((allArticles) => {
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
    let userId = helper.tokenDecode(req.headers.token)
    User.findOne({_id: userId}).then((result) => {
      if (result) {
        Article.create(helper.dataArticle(req.body, userId)).then((createdArticle) => {
          res.status(200).json({
            message: "Insert Article Success",
            data: createdArticle
          })
        }).catch((reason) => {
          res.status(400).json({
            message: reason
          })
        })
      } else {
        res.status(401).json({
          message: "You have no authority to create article"
        })
      }
    }).catch((reason) => {
      res.status(400).json({
        message: reason
      })
    })
  },

  update: (req, res) => {
    let userId = helper.tokenDecode(req.headers.token)
    Article.findOne({_id: req.params.id}).then((result) => {
      // console.log(userId);
      // console.log(result);
      if (result.author == userId) {
        Article.update({_id: req.params.id}, {
          $set: {
            title: req.body.title,
            content: req.body.content,
            category: req.body.category
          }
        }).then((updatedArticle) => {
          res.status(200).json({
            message: "Update Success",
            data: updatedArticle
          })
        }).catch((reason) => {
          res.status(400).json({
            message: reason
          })
        })
      } else {
        res.status(401).json({
          message: "You have no authority to update this article"
        })
      }
    }).catch((reason) => {
      res.status(400).json({
        message: reason
      })
    })
  },

  findByAuthor: (req, res) => {
    Article.find({author: req.params.authorId}).then((articleByAuthor) => {
      res.status(200).json({
        message: "Show by author success",
        data: articleByAuthor
      })
    }).catch((reason) => {
      res.status(400).json({
        message: reason
      })
    })
  },

  findByCategory: (req, res) => {
    Article.find({category: req.params.category}).then((articleByCategory) => {
      res.status(200).json({
        message: "Show by category success",
        data: articleByCategory
      })
    }).catch((reason) => {
      res.status(400).json({
        message: reason
      })
    })
  },

  delete: (req, res) => {
    Article.remove({_id: req.params.id}).then((result) => {
      res.status(200).json({
        message: "Delete Article Success",
        data: result
      })
    }).catch((reason) => {
      res.status(400).json({
        message: reason
      })
    })
  }
}
