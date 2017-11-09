import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let db = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    setArticles (state, dataArticles) {
      state.articles = dataArticles
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
    }
  }
})

export default store
