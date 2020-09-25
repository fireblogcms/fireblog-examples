<template>
  <div>
    <h1 class="text-6xl">{{ blog.name }}</h1>
    <p class="text-xl">{{ blog.description }}</p>
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
