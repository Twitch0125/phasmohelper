<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <div class="container mx-auto">
      <base-header />
      <div class="flex">
        <base-sidebar class="w-1/4" />
        <Nuxt class="flex-grow mx-16"/>
      </div>
      <base-footer />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>