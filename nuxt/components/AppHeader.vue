<template>
  <div>
    <h1>
      <nuxt-link to="/">{{ blog.name }}</nuxt-link>
    </h1>
    <p>
      <em>{{ blog.description }}</em>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  }
}
</script>
