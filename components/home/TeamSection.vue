<template>
  <section id="teams" class="scroll-mt-20">
    <div class="container mx-auto p-10">
      <h1 class="mb-10">Teams</h1>

      <div class="px-16">
        <div class="flex justify-end mb-16">
          <p class="max-w-2xl text-right text-3xl">
            „You can do what I cannot do. I can do what you cannot do. Together we can do great things.”
            <br />Mother Theresa
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-5 gap-5">
          <div class="col-span-2">
            <img src="/images/dr._Toros_Judit.jpg" />
          </div>
          <div class="col-span-3 col-end-6">
            <dl>
              <dt class="text-2xl">Név</dt>
              <dt class="text-primary">Titulus</dt>
              <dt>leírás</dt>
              <dt>Lista</dt>
            </dl>
          </div>
        </div>

        <div class="relative overflow-hidden mt-4">
          <swiper
            :slides-per-view="1"
            :space-between="16"
            :navigation="true"
            :loop="false"
            :breakpoints="{
              '640': {
                slidesPerView: 2,
              },
              '768': {
                slidesPerView: 4,
              },
              '1024': {
                slidesPerView: 5,
              },
            }"
          >
            <swiper-slide v-for="n in 10" :key="n">
              <a href="#" class="w-full aspect-3/4 bg-gray-200" @click.prevent="onSelectMemeber">
                <img src="/images/dr._Toros_Judit.jpg" />
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Navigation } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation])

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSelectMemeber = () => {}
    return {
      onSelectMemeber,
    }
  },
}
</script>
