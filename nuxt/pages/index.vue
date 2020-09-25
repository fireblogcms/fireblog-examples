<template>
  <div>
    <h1 class="text-6xl">{{ blog.name }}</h1>
    <p class="text-xl">{{ blog.description }}</p>
    <div class="mt-8">
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
      posts: [],
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
