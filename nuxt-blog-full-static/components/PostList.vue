<template>
  <section>
    <article v-for="post in posts" :key="post._id" class="post">
      <nuxt-link :to="`/post/${post.slug}`">
        <img
          v-if="post.imageThumbnail"
          :src="post.imageThumbnail.url"
          loading="lazy"
        />
      </nuxt-link>
      <div class="bg-white">
        <h2>{{ post.title }}</h2>
        <p>{{ post.teaser }}</p>
        <nuxt-link :to="`/post/${post.slug}`" class="read-more">
          Continue Reading
        </nuxt-link>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.post {
  margin-bottom: 40px;
}
.read-more {
  display: inline-block;
  padding: 10px 20px;
  border: solid black 1px;
  color: black;
  text-decoration: none;
}
</style>
