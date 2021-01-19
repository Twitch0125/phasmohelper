<template>
  <article class="prose prose-lg p-4 bg-gray-800 rounded max-w-none mx-auto">
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('journal/contents').fetch()
    return { page }
  },
}
</script>