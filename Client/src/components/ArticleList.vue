<template lang="html">
  <div class="list-group col-md-3 col-sm-12">
    <router-link to="" class="list-group-item" v-for="(listArticle, index) in Articles">
      <h2 class="list-group-item-heading">{{ listArticle.title }}</h2>
      <p class="list-group-item-text">{{ listArticle.content.substring(0, 100) }}..</p>
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
  }
</style>
