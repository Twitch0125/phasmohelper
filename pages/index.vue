<template>
  <div class="px-4">
    <div class="mx-auto text-xl">
      Phasmohelper is a tool to assist you in ghost hunting.
    </div>
    <section class="grid grid-cols-1 my-8">
      <ListItem class="my-2" to="/journal" name="Journal">
        <template #icon>
          <svg
            class="w-6 h-6 mx-2 text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </template>
      </ListItem>
      <ListItem class="my-2" to="/evidence" name="Evidence Checker">
        <template #icon>
          <svg
            class="w-6 h-6 mx-2 text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </template>
      </ListItem>
      <ListItem class="my-2" to="/timer" name="Timer">
        <template #icon>
          <svg
            class="w-6 h-6 mx-2 text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </template>
      </ListItem>
    </section>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
export default {
  components: { ListItem },
}
</script>
