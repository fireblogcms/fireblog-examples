<template>
  <div>
    <AppHeader :blog="blog" />
    <h1 class="text-4xl">{{ post.title }}</h1>
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
import AppHeader from '~/components/AppHeader'

export default {
  components: {
    AppHeader
  },
  async asyncData({ params }) {
    const result = await apolloClient.query({
      query: gql`
        query postPageQuery($slug: String!, $blog: ID!) {
          blog(filter: { _id: { eq: $blog } }) {
            name
            description
          }
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
      blog: result.data.blog,
      post: result.data.post
    }
  }
}
</script>
