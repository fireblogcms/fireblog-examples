<template>
  <section>
    <article v-for="post in posts" :key="post._id">
      <nuxt-link :to="`/post/${post.slug}`">
        <img v-if="post.imageThumbnail" :src="post.imageThumbnail.url" />
      </nuxt-link>
      <div class="bg-white">
        <h2>{{ post.title }}</h2>
        <p>{{ post.teaser }}</p>
        <nuxt-link :to="`/post/${post.slug}`">
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
