<template lang="html">
  <div class="list-group col-md-3 col-sm-12">
    <router-link :to="''+listArticle._id" class="list-group-item" v-for="(listArticle, index) in Articles" :key="index">
      <h2 class="list-group-item-heading">{{ listArticle.title }}</h2>
      <p class="list-group-item-text">{{ listArticle.content.substring(0, 100) }}..</p>
      <h5 class='text-right'>Created by <span class="usernameHL">{{ listArticle.author.username }}</span></h5>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    Articles () {
      return this.$store.state.articles
    }
  }
}
</script>

<style scoped>
  .list-group{
    margin-left: 10px;
    margin-top: 10px;
  }

  .usernameHL{
    color: red;
  }
</style>
