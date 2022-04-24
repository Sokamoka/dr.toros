<template>
  <div class="aspect-square bg-secondary flex flex-col items-center px-3 py-5">
    <img src="~/assets/images/svgs/icon-03.svg" class="w-12 h-12 text-white mb-5" />
    <p class="text-center text-white text-xs">{{ labelKey }}</p>
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
