<template>
  <div class="col-md-8 white">
    <h2 class='col-md-12 text-center' style='color:red;'>{{ Article.title }}</h2>
    <p>{{ Article.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    Article () {
      return this.$store.state.article
    }
  },
  methods: {
    reqArticle () {
      this.$store.dispatch('getArticle', this.id)
    }
  },
  watch: {
    id (newId) {
      this.reqArticle()
    }
  },
  created () {
    this.reqArticle()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .col-md-9{
    background-color: white;
  }

  .white{
    margin-top: 10px;
    border-radius: 10px;
    background-color: white;
    color: black;
  }
</style>
