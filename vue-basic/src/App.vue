<template>
  <div id="app">
    <div style="text-align: center">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <div v-if="loading">Loading ...</div>
    <div v-if="!loading" style="max-width:700px;margin:auto">
      <header style="margin-bottom:40px;text-align:center">
        <h1>{{ blog.name }}</h1>
        <em>{{ blog.description }} </em>
      </header>
      <ul class="articles">
        <li v-for="post in posts" :key="post._id">
          {{ post.title }}
        </li>
      </ul>
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
            _id
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
        blog: process.env.VUE_APP_FIREBLOG_BLOG_ID,
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
