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
    const page = parseInt(context.route.params.number)
    const variables = {
      skip: page === 1 ? 0 : (page - 1) * config.fireblog.postsPerPage,
      limit: config.fireblog.postsPerPage,
      blog: process.env.FIREBLOG_BLOG_ID
    }
    const { blog, postsCount, posts } = await graphqlClient.request(
      indexPageQuery,
      variables
    )
    return { blog, posts, postsCount }
  }
}
</script>
