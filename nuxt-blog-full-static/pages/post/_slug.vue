<template>
  <div>
    <AppHeader :blog="blog" />
    <h1>{{ post.title }}</h1>
    <div v-if="post.image">
      <img :src="post.image.url" />
    </div>
    <article>
      <div v-html="post.content" class="ck-content" />
    </article>
  </div>
</template>

<script>
import { gql } from 'graphql-request'
import graphqlClient from '~/utils/graphqlClient'
import AppHeader from '~/components/AppHeader'
export default {
  components: {
    AppHeader
  },
  async asyncData({ params }) {
    const query = gql`
      query postPageQuery($slug: String!, $blog: ID!) {
        blog(filter: { _id: { eq: $blog } }) {
          name
          description
        }
        post(filter: { blog: { eq: $blog }, slug: { eq: $slug } }) {
          title
          publishedAt
          content
          image(w: 800, h: 300, fit: crop) {
            url
          }
        }
      }
    `
    const { blog, post } = await graphqlClient.request(query, {
      blog: process.env.FIREBLOG_BLOG_ID,
      slug: params.slug
    })
    return { blog, post }
  }
}
</script>
