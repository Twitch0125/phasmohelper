<template>
  <aside class="sm:w-96 sm:px-4 rounded bg-gray-800 sm:bg-gray-900">
    <div
      class="text-2xl font-bold p-2 border-b-2 border-gray-700 rounded items-center flex sm:bg-gray-800 sm:mb-1"
    >
      <span> Contents </span>
      <div class="flex-grow"></div>
      <svg
        @click="showMenu = !showMenu"
        class="w-10 bg-gray-800 rounded p-1 sm:hidden"
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
      class="bg-gray-900 w-full sm:max-h-full transition-all duration-300 ease-in-out overflow-hidden"
      :class="{ 'max-h-screen': showMenu, 'max-h-0': !showMenu }"
    >
      <nuxt-link
        v-for="entry in journal"
        :key="entry.page"
        class="text-lg w-full px-2 py-0.5 my-1 rounded block hover:bg-gray-800"
        active-class="text-green-400 bg-gray-800 font-medium"
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