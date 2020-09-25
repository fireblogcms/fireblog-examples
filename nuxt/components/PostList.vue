<template>
  <section class="w-full md:w-2/3 flex flex-col items-center px-3">
    <article
      v-for="post in posts"
      :key="post._id"
      class="flex flex-col shadow my-4"
    >
      <!-- Article Image -->
      <a href="#" class="hover:opacity-75" v-if="post.imageThumbnail">
        <img :src="post.imageThumbnail.url" />
      </a>
      <div class="bg-white flex flex-col justify-start p-6">
        <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">
          {{ post.title }}
        </a>
        <p href="#" class="text-sm pb-3">Published on {{ post.publishedAt }}</p>
        <a href="#" class="pb-6">
          {{ post.teaser }}
        </a>
        <a href="#" class="uppercase text-gray-800 hover:text-black">
          Continue Reading
          <i class="fas fa-arrow-right"></i>
        </a>
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
