<template>
  <div>
    <div class="header-wrapper">
      <AppHeader :blog="blog" />
    </div>
    <PostList v-if="posts" :posts="posts" />
    <div class="pagination-wrapper">
      <AppPagination v-if="pagesNumber > 1" :pagesNumber="pagesNumber" />
    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader'
import AppPagination from '~/components/AppPagination'
import PostList from '~/components/PostList'
import config from '~/nuxt.config'

export default {
  components: {
    AppHeader,
    AppPagination,
    PostList
  },
  props: {
    blog: {
      type: Object,
      required: true
    },
    postsCount: {
      type: Number,
      required: true
    },
    posts: {
      type: Array,
      required: true
    }
  },
  created() {
    this.pagesNumber = Math.ceil(this.postsCount / config.fireblog.postsPerPage)
  }
}
</script>

<style scoped>
.header-wrapper {
  margin-bottom: 40px;
}
.pagination-wrapper {
  margin-top: 40px;
}
</style>
