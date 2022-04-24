<template>
  <nav class="fixed top-0 left-0 right-0 bg-red-100">
    <div class="container mx-auto px-5 bg-red-400 flex">
      <div class="flex-1">Logo</div>
      <div>Menu</div>
      <div class="mx-2">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          :class="['uppercase', {'text-primary': locale.code === $i18n.locale}]"
        >
          {{ locale.code }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavHeader',

  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
  },
}
</script>
