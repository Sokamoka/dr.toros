<template>
  <section id="responsibility" class="scroll-mt-20">
    <div class="bg-primary">
      <div class="container mx-auto pt-5 px-10">
        <h1 class="text-white my-10 truncate">
          {{ $t('responsibility.title') }}
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:pl-16">
          <div>
            <div class="text-white mb-10" v-html="$t('responsibility.content')"></div>
            <div class="grid grid-cols-2 sm:grid-cols-4 items-center mb-10 gap-5">
              <img src="~/assets/images/svgs/bridge_logo.svg" class="w-auto max-h-12 justify-self-center" />
              <img src="~/assets/images/svgs/uccu_logo.svg" class="w-auto max-h-12 justify-self-center" />
              <img src="~/assets/images/svgs/romaster_logo.svg" class="w-auto max-h-16 justify-self-center" />
              <img src="~/assets/images/svgs/indahouse_logo.svg" class="w-auto max-h-16 justify-self-center" />
            </div>
          </div>
          <div class="flex items-end justify-end">
            <img src="/images/image_intro_01.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-secondary">
      <div class="container mx-auto py-10 text-center text-xl sm:text-4xl text-white">
        {{ $t('responsibility.quote') }}
      </div>
    </div>
  </section>
</template>
