<template>
  <div id="app">
    <a href="#" class="btn btn-default btn-lg btn-block" data-toggle="modal" data-target="#myModal" v-if="!isLogin">Sign In</a>
    <a href="#" class="btn btn-default btn-lg btn-block" @click="userLogout" v-else>Logout</a>
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <form @submit.prevent="userLogin" method="post">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Hai, Please Sign in</h4>
            </div>
            <div class="modal-body">
              <div class="form-group has-error">
                <label class="control-label" for="inputError">Username</label>
                <input class="form-control" id="inputError" type="text" v-model="user.username" required>
              </div>
              <div class="form-group has-error">
                <label class="control-label" for="inputError">Password</label>
                <input class="form-control" id="inputError" type="password" v-model="user.password" required>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-danger">Login</button>
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </form>
        </div>

      </div>
    </div>
    <ArticleList/>
    <router-view/>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList'

export default {
  name: 'app',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    ArticleList
  },
  computed: {
    isLogin () {
      return this.$store.state.user.isLogin
    }
  },
  methods: {
    reqArticles () {
      this.$store.dispatch('getArticles')
    },
    userLogin () {
      this.$axios.post('/users/login', this.user)
      .then((serverResponse) => {
        localStorage.setItem('token', serverResponse.data.token)

        let userId = this.$jwt(localStorage.getItem('token'))

        this.$store.commit('setUser', {
          isLogin: true,
          userId: userId
        })

        this.user.username = ''
        this.user.password = ''
      }).catch((reason) => {
        alert('Invalid Username and password')
      })
    },
    userLogout () {
      localStorage.removeItem('token')
      this.$store.commit('setUser', {
        isLogin: false,
        userId: ''
      })
    }
  },
  created () {
    this.reqArticles()
    if (localStorage.getItem('token')) {
      let userId = this.$jwt(localStorage.getItem('token'))
      console.log(userId)

      this.$store.commit('setUser', {
        isLogin: true,
        userId: userId
      })
    }
  }
}
</script>

<style>
</style>
