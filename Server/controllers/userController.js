const User = require('../models/user')
const helper = require('../helpers/helpers')

module.exports = {
  findAll: (req, res) => {
    User.find().then((allUser) => {
      res.status(200).json({
        message: "Berhasil tampil semua data user",
        data: allUser
      })
    }).catch((reason) => {
      res.status(404).json({
        message: reason
      })
    })
  },
  register: (req, res) => {
    let secret = helper.secretGen()
    let password = helper.secretHash(secret, req.body.password)
    User.create({
      username: req.body.username,
      password: password,
      secret: secret,
      name: req.body.name
    }).then((registeredUser) => {
      let token = helper.tokenGen(registeredUser)
      res.status(200).json({
        message: "Berhasil Register",
        token: token
      })
    }).catch((reason) => {
      res.status(404).json({
        message: reason
      })
    })
  }
}
