<template>
  <aside class="py-2 mb-4 bg-gray-800 border-gray-700 rounded sm:w-96 sm:pr-4 sm:bg-gray-900">
    <div
      class="flex items-center px-4 text-2xl font-bold sm:py-2 sm:rounded sm:mb-1 sm:border-b sm:border-gray-700"
    >
      <span> Contents </span>
      <div class="flex-grow"></div>
      <svg
        @click="showMenu = !showMenu"
        class="w-10 p-1 bg-gray-800 sm:hidden"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
    <div
      class="w-full overflow-hidden transition-all duration-300 ease-in-out bg-gray-900 sm:max-h-full sm:my-2"
      :class="{ 'max-h-screen': showMenu, 'max-h-0': !showMenu }"
    >
      <nuxt-link
        v-for="entry in journal"
        :key="entry.page"
        class="block w-full px-4 py-2 my-1 text-lg transition-all duration-150 ease-in-out rounded hover:bg-gray-800"
        active-class="font-medium text-green-400 bg-gray-800"
        :to="entry.path"
      >
        {{ entry.title }}
      </nuxt-link>
    </div>
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
      showMenu: false,
    }
  },
}
</script>

<style>
</style>