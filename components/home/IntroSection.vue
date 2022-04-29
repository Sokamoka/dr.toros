<template>
  <!-- eslint-disable vue/no-v-html -->
  <section id="intro" class="sm:pb-20 scroll-mt-20">
    <div class="bg-primary w-full h-80"></div>
    <div class="container mx-auto -mt-72 px-10">
      <h1 class="text-white mb-5 mt-10 truncate">{{ $t('intro.title') }}</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-y-20 px-0 xl:px-16">
        <div class="-mx-10 sm:mx-0">
          <img src="/images/intro-01.jpg" class="w-full" />
        </div>
        <div
          class="text-white text-right text-xl sm:text-2xl sm:pt-16 sm:-ml-56 bg-primary sm:bg-transparent -mx-10 -mt-10 pt-5 px-10"
          v-html="$t('intro.quote')"
        />
        <div class="sm:pr-16 pt-10 sm:pt-0" v-html="$t('intro.section1')"></div>
        <div class="-mx-10  sm:mx-0">
          <img src="/images/image_intro_01.png" />
        </div>
        <div class="order-6 sm:order-none -mx-10 sm:mx-0">
          <img src="/images/image_intro_01.png" />
        </div>
        <div class="sm:pl-16 pt-10 sm:pt-0 order-5 sm:order-none" v-html="$t('intro.section2')"></div>
        <div class="sm:pr-16 pt-10 sm:pt-0" v-html="$t('intro.section3')"></div>
        <div class="-mx-10 sm:mx-0">
          <img src="/images/image_intro_01.png" />
        </div>
      </div>
    </div>
  </section>
  <!-- <eslint-enable>-->
</template>
