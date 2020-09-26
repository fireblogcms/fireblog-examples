<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div v-if="loading">Loading ...</div>
    <div v-if="!loading">
      {{ blog }}
    </div>
  </div>
</template>

<script>
import { gql } from "graphql-request";
import graphqlClient from "./utils/graphqlClient";

export default {
  name: "App",
  data() {
    return {
      loading: false,
      blog: null,
      posts: [],
    };
  },
  methods: {
    async fetchData() {
      const query = gql`
        query($blog: ID!, $skip: Int!, $limit: Int!) {
          blog(filter: { _id: { eq: $blog } }) {
            name
            description
          }
          postsCount(filter: { blog: { eq: $blog } })
          posts(
            limit: $limit
            skip: $skip
            sort: { publishedAt: desc }
            filter: { blog: { eq: $blog } }
          ) {
            slug
            title
            teaser
            updatedAt
            publishedAt
            imageThumbnail: image(w: 800, h: 200, fit: crop) {
              url
            }
          }
        }
      `;
      const result = await graphqlClient.request(query, {
        skip: 0,
        limit: 20,
        blog: process.env.VUE_FIREBLOG_BLOG_ID,
      });
      this.blog = result.blog;
      this.postsCount = result.postsCount;
      this.posts = result.posts;
      return result;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
