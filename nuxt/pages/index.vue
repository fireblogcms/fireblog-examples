<template>
  <div>
    <div v-if="!posts">Loading...</div>
    <div v-if="posts">
      <PostList v-if="posts" :posts="posts" />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import apolloClient from '~/utils/apolloClient'
import PostList from '~/components/PostList'

export default {
  components: {
    PostList
  },
  data() {
    return {
      loading: false,
      posts: null,
      blog: null
    }
  },
  async asyncData(context) {
    const result = await apolloClient.query({
      query: gql`
        query indexPageQuery($blog: ID!) {
          blog(filter: { _id: { eq: $blog } }) {
            name
            description
            image {
              url
            }
          }
          postsCount(filter: { blog: { eq: $blog } })
          posts(limit: 20, skip: 0, filter: { blog: { eq: $blog } }) {
            slug
            title
            teaser
            content
            updatedAt
            publishedAt
            imageThumbnail: image(w: 200) {
              url
            }
            imageFull: image {
              url
            }
          }
        }
      `,
      variables: {
        blog: process.env.FIREBLOG_BLOG_ID
      }
    })
    return {
      blog: result.data.blog,
      posts: result.data.posts
    }
  }
}
</script>
