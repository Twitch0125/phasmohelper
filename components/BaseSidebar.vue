<template>
  <aside class="w-96 px-4 rounded">
    <div class="text-2xl font-bold p-2 rounded bg-gray-800 mb-1">Contents</div>
    <nuxt-link
      v-for="entry in journal"
      :key="entry.page"
      class="text-lg w-full px-2 py-0.5 my-1 rounded block hover:bg-gray-800"
      active-class="text-green-400 bg-gray-800 font-medium"
      :to="entry.path"
    >
      {{ entry.title }}
    </nuxt-link>
  </aside>
</template>

<script>
export default {
  async fetch() {
    const journal = await this.$content('journal').sortBy('page').fetch()
    this.journal = journal
  },
  data() {
    return {
      journal: [],
    }
  },
}
</script>

<style>
</style>