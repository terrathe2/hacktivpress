const jwt = require('jsonwebtoken')
const jwtDecode = require('jwt-decode')
const crypto = require('crypto')

module.exports = {
  dataArticle: (reqBody, userId) => {
    let obj = {
      author: userId,
      title: reqBody.title,
      content: reqBody.content,
      category: reqBody.category
    }

    return obj
  },

  secretGen: () => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'

    let secret = ''
    for (let i = 0; i < 6; i++) {
      secret += str[Math.floor(Math.random()*62)]
    }

    return secret
  },

  secretHash: (secret, password) => {
    const hash = crypto.createHmac('md5', secret).update(password).digest('hex');

    return hash
  },

  tokenGen: (input) => {
    let token = jwt.sign({
      _id: input._id,
      username: input.username
    }, process.env.token_secret);

    return token
  },

  tokenDecode: (input) => {
    let decode = jwtDecode(input)

    decode = decode._id

    return decode
  }
}
