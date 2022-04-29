<template>
  <div class="relative">
    <svg
      v-if="!isLoaded"
      class="absolute top-1/2 left-1/2 animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <img :src="src" :class="['custom-images', { 'is-loaded': isLoaded }]" @load="onLoded" />
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'

export default {
  name: 'CustomImage',

  props: {
    src: {
      type: String,
      default: 'ë',
    },
  },

  setup() {
    const isLoaded = ref(false)

    return {
      isLoaded,
      onLoded: () => {
        isLoaded.value = true
      },
    }
  },
}
</script>

<style scoped>
.custom-images {
  opacity: 0;
  transition: opacity 2s ease-out;
}
.custom-images.is-loaded {
  opacity: 1;
}
</style>
