<template>
  <nav>
    <ul class="pagination">
      <li v-for="i in pagesNumber" :key="i">
        <nuxt-link :to="i === 1 ? '/' : `/page/${i}`">
          {{ i }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pagesNumber: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.pagination {
  padding-left: 0;
}
.pagination li {
  display: inline;
}
.pagination li a {
  background: rgb(240, 240, 240);
  padding: 5px 10px;
  margin: 4px;
}
</style>
