<template>
  <div class="flex px-4 bg-gray-900 sticky py-2">
    <nuxt-link
      to="/"
      class="font-bold font-mono text-lg text-green-400 cursor-pointer"
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
