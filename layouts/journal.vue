<template>
  <div class="min-h-screen text-white bg-gray-900 border">
    <div class="container mx-auto">
      <base-header />
      <div class="sm:flex">
        <base-sidebar class="sm:w-1/4" />
        <Nuxt class="flex-grow" />
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