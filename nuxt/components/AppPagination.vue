<template>
  <nav>
    <ul class="pagination">
      <li v-for="i in pagesNumber" :key="i">
        <nuxt-link :to="`/page/${i}`">
          {{ i }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    totalResults: {
      type: Number,
      required: true
    },
    resultsPerPage: {
      type: Number,
      required: true
    }
  },
  created() {
    this.pagesNumber = Math.ceil(this.totalResults / this.resultsPerPage)
  }
}
</script>

<style scoped>
.pagination li {
  display: inline;
}
.pagination li a {
  background: rgb(240, 240, 240);
  padding: 5px 10px;
  margin: 4px;
}
</style>
