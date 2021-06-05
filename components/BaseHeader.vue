<template>
  <div class="sticky flex px-4 py-2 mb-4 bg-gray-900 border-b border-gray-700 rounded-b">
    <nuxt-link
      to="/"
      class="font-mono text-lg font-bold text-green-400 cursor-pointer"
      >Phasmohelper</nuxt-link
    >
    <div class="flex-grow"></div>
  </div>
</template>

<script>
export default {
  name: 'BaseHeader',
  setup() {
    return {}
  },
}
</script>
