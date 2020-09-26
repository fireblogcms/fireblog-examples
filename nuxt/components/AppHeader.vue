<template>
  <div>
    <h1>{{ blog.name }}</h1>
    <p>{{ blog.description }}</p>
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
