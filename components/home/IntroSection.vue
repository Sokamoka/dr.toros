<template>
  <!-- eslint-disable vue/no-v-html -->
  <section id="intro" class="pb-20 scroll-mt-20">
    <div class="bg-primary w-full h-80"></div>
    <div class="container mx-auto -mt-72 p-10">
      <h1 class="text-white mb-5 truncate">{{ $t('intro.title') }}</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-20 px-0 xl:px-16">
        <div>
          <img src="/images/image_intro_01.png" height="290" width="490" />
        </div>
        <div
          class="text-white text-right text-2xl pt-16 sm:-ml-56 bg-primary sm:bg-transparent"
          v-html="$t('intro.quote')"
        ></div>
        <div v-html="$t('intro.section1')"></div>
        <div>
           <img src="/images/image_intro_01.png" />
        </div>
        <div>
          <img src="/images/image_intro_01.png" />
        </div>
        <div v-html="$t('intro.section2')"></div>
        <div v-html="$t('intro.section3')"></div>
        <div>
          <img src="/images/image_intro_01.png" />
        </div>
      </div>
    </div>
  </section>
  <!-- <eslint-enable>-->
</template>
