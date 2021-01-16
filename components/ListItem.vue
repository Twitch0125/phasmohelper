<template>
  <div
    @click="$router.push(to)"
    class="bg-gray-800 border border-gray-700 py-2 rounded cursor-pointer hover:border-gray-600 hover:bg-gray-700 transition-colors duration-75 ease-in"
  >
    <div class="flex">
      <slot name="icon"> </slot>
      <slot>
        <div>{{ name }}</div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListItem",
  props: {
    name: {
      type: String,
      default: "",
    },
    to: {
      type: String,
      default: "",
    },
  },
};
</script>