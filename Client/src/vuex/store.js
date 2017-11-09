import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let db = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    articles: [],
    article: {},
    user: {
      isLogin: false,
      userId: ''
    }
  },
  mutations: {
    setArticles (state, dataArticles) {
      state.articles = dataArticles
    },

    setArticle (state, dataArticle) {
      state.article = dataArticle
    },

    setUser (state, userData) {
      state.user.isLogin = userData.isLogin
      state.user.userId = userData.userId
    }
  },
  actions: {
    getArticles ({commit}) {
      db.get('/articles')
      .then((serverResponse) => {
        commit('setArticles', serverResponse.data.data)
      }).catch((reason) => {
        console.log('ERROR -> ', reason)
      })
    },

    getArticle ({commit}, id) {
      db.get(`/articles/${id}`)
      .then((serverResponse) => {
        // console.log(serverResponse)
        commit('setArticle', serverResponse.data.data)
      }).catch((reason) => {
        console.log('ERROR -> ', reason)
      })
    }
  }
})

export default store
