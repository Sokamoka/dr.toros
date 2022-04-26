<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 transition-all duration-500',
      {
        'bg-white/90 shadow-md backdrop-blur-md': onScroll,
      },
    ]"
  >
    <div class="container mx-auto px-5 py-5 flex items-center">
      <a href="#" :class="['block transition-all duration-500', onScroll ? 'w-32' : 'w-40']">
        <img src="~/assets/images/svgs/toros_logo.svg" class="h-auto w-full" />
      </a>
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
          :class="['uppercase', { 'text-primary': locale.code === $i18n.locale }]"
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

  props: {
    onScroll: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
  },
}
</script>
