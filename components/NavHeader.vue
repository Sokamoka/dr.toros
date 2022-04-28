<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 transition-all duration-500 z-50',
      {
        'bg-white/90 shadow-md backdrop-blur-md': onScroll,
      },
    ]"
  >
    <div class="container mx-auto px-5 py-5 flex items-center">
      <a href="#" :class="['block transition-all duration-500', onScroll ? 'w-28' : 'w-40']">
        <img src="~/assets/images/svgs/toros_logo.svg" class="h-auto w-full" />
      </a>
      <div class="flex-1">
        <div
          class="absolute top-full left-0 right-0 bg-secondary/90 flex flex-col space-y-5 p-5 shadow-md md:space-x-5 md:text-right md:block md:relative md:bg-transparent md:shadow-none md:p-0"
          :class="[isMenuOpen ? 'block' : 'hidden']"
        >
          <a href="#intro" class="">{{ $t('menu.intro') }}</a>
          <a href="#skills" class="">{{ $t('menu.skills') }}</a>
          <a href="#teams" class="">{{ $t('menu.teams') }}</a>
          <a href="#responsibility" class="">{{ $t('menu.responsibility') }}</a>
          <a href="#contact" class="">{{ $t('menu.contact') }}</a>
        </div>
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
      <button type="button" class="md:hidden" @click="onClickMenu">
        <img src="~/assets/images/svgs/icon-menu.svg" class="w-6 h-6" />
      </button>
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

  data() {
    return {
      isMenuOpen: false,
    }
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
  },

  methods: {
    onClickMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>
