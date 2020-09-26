<template>
  <div>
    <AppHeader :blog="blog" />
    <AppPagination
      :totalResults="postsCount"
      :resultsPerPage="resultsPerPage"
    />
    <PostList v-if="posts" :posts="posts" />
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
    this.resultsPerPage = config.fireblog.postsPerPage
  }
}
</script>
