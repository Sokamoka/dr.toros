<template>
  <nav class="fixed top-0 left-0 right-0 bg-white/90">
    <div class="container mx-auto px-5 py-5 flex items-center">
      <div class="">
        <img src="~/assets/images/svgs/toros_logo.svg" class="h-auto w-40" />
      </div>
      <div class="flex-1 space-x-5 text-right">
        <a href="#intro" class="">{{ $t('menu.intro') }}</a>
        <a href="#skills" class="">{{ $t('menu.skills') }}</a>
        <a href="#teams" class="">{{ $t('menu.teams') }}</a>
        <a href="#responsibility" class="">{{ $t('menu.responsibility') }}</a>
        <a href="#contact" class="">{{ $t('menu.contact') }}</a>
      </div>
      <div class="mx-5">
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
