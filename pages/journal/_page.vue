<template>
  <article class="sm:px-12 py-4 bg-gray-800 rounded">
    <div class="flex">
      <nuxt-link v-if="previousPage.slug" :to="`/journal/${previousPage.slug}`">
        <svg
          class="w-10 cursor-pointer text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </nuxt-link>
      <div class="flex-grow">
        <nuxt-content
          class="hidden sm:block prose prose-lg mx-4"
          :document="page"
        />
      </div>
      <nuxt-link v-if="nextPage.slug" :to="`/journal/${nextPage.slug}`">
        <svg
          class="w-10 cursor-pointer text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </nuxt-link>
    </div>
    <nuxt-content class="sm:hidden prose prose-lg mx-4" :document="page" />
  </article>
</template>

<script>
export default {
  layout: 'journal',
  async asyncData({ $content, params }) {
    const page = await $content(`journal/${params.page}`).fetch()
    let nextPage = await $content(`journal`)
      .where({
        page: page.page + 1,
      })
      .fetch()
    nextPage.length && (nextPage = nextPage[0])
    let previousPage = await $content(`journal`)
      .where({
        page: page.page - 1,
      })
      .fetch()
    previousPage.length && (previousPage = previousPage[0])
    return { page, nextPage, previousPage }
  },
}
</script>

<style>
.nuxt-content-editor {
  @apply bg-gray-900;
}
</style>