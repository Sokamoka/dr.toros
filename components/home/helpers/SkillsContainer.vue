<template>
  <div class="aspect-square bg-secondary grid grid-rows-2 gap-2 items-center p-3 overflow-hidden">
    <img :src="require(`~/assets/images/svgs/${icon}.svg`)" class="w-auto max-h-12 justify-self-center items-start" />
    <p class="text-center text-white justify-self-center self-start text-xs md:text-sm leading-3">{{ label }}</p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },

    label: {
      type: String,
      required: true,
    },
  },
}
</script>
