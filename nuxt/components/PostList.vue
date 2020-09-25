<template>
  <section class="flex flex-wrap -mx-4 overflow-hidden">
    <article
      v-for="post in posts"
      :key="post._id"
      class="p-4 w-full md:w-1/2 lg:w-1/3 overflow-hidden"
    >
      <!-- Article Image -->
      <nuxt-link :to="`/post/${post.slug}`">
        <img v-if="post.imageThumbnail" :src="post.imageThumbnail.url" />
      </nuxt-link>
      <div class="bg-white">
        <h2 class="text-2xl font-bold py-4">
          {{ post.title }}
        </h2>

        <p class="text-gray-700 mb-6">{{ post.teaser }}</p>

        <nuxt-link
          :to="`/post/${post.slug}`"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
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
