<template>
  <div class="aspect-square bg-secondary flex flex-col items-center justify-center">
    icon
    <p>{{ labelKey }}</p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },

    labelKey: {
      type: String,
      required: true,
    },
  },
}
</script>
