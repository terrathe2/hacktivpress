<template>
  <div id="app">
    <ArticleList/>
    <router-view/>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList'

export default {
  name: 'app',
  components: {
    ArticleList
  },
  methods: {
    reqArticles () {
      this.$store.dispatch('getArticles')
    }
  },
  created () {
    this.reqArticles()
  }
}
</script>

<style>
</style>
