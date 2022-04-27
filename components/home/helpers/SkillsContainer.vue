<template>
  <div class="aspect-square bg-secondary grid items-center">
    <img src="~/assets/images/svgs/icon-03.svg" class="w-auto max-h-12 justify-self-center" />
    <p class="text-center text-white text-xs justify-self-center">{{ labelKey }}</p>
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
