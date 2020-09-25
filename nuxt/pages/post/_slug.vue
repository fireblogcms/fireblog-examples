<template>
  <div>
    <h1 class="text-6xl">{{ post.title }}</h1>
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div ref="content" v-html="post.content" class="content" />
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import apolloClient from '~/utils/apolloClient'

export default {
  async asyncData({ params }) {
    const result = await apolloClient.query({
      query: gql`
        query postPageQuery($slug: String!, $blog: ID!) {
          post(filter: { blog: { eq: $blog }, slug: { eq: $slug } }) {
            title
            content
            image {
              url
            }
            publishedAt
          }
        }
      `,
      variables: {
        blog: process.env.FIREBLOG_BLOG_ID,
        slug: params.slug
      }
    })
    return {
      post: result.data.post
    }
  }
}
</script>
