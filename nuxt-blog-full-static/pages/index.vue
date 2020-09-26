<template>
  <IndexPage :blog="blog" :posts="posts" :postsCount="postsCount" />
</template>

<script>
import IndexPage from '~/components/IndexPage'
import graphqlClient from '~/utils/graphqlClient'
import { indexPageQuery } from '~/utils/helpers'
import config from '~/nuxt.config'

export default {
  components: {
    IndexPage
  },
  async asyncData(context) {
    const { blog, postsCount, posts } = await graphqlClient.request(
      indexPageQuery,
      {
        skip: 0,
        limit: config.fireblog.postsPerPage,
        blog: process.env.FIREBLOG_BLOG_ID
      }
    )
    return { blog, posts, postsCount }
  }
}
</script>
