<template>
  <div>
    <AppHeader :blog="blog" />
    <div>
      <PostList v-if="posts" :posts="posts" />
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-request'
import graphqlClient from '~/utils/graphqlClient'
import AppHeader from '~/components/AppHeader'
import PostList from '~/components/PostList'

export default {
  components: {
    PostList,
    AppHeader
  },
  data() {
    return {
      loading: false,
      posts: [],
      blog: null
    }
  },
  async asyncData(context) {
    const query = gql`
      query indexPageQuery($blog: ID!) {
        blog(filter: { _id: { eq: $blog } }) {
          name
          description
        }
        postsCount(filter: { blog: { eq: $blog } })
        posts(limit: 20, skip: 0, filter: { blog: { eq: $blog } }) {
          slug
          title
          teaser
          updatedAt
          publishedAt
          imageThumbnail: image(w: 400, h: 200, fit: crop) {
            url
          }
        }
      }
    `
    const { blog, posts } = await graphqlClient.request(query, {
      blog: process.env.FIREBLOG_BLOG_ID
    })
    return { blog, posts }
  }
}
</script>
