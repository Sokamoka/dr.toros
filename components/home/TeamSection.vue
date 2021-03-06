<template>
  <section id="teams" class="scroll-mt-20">
    <div class="container mx-auto p-10">
      <h1 class="mb-10 truncate">
        {{ $t('teams.title') }}
      </h1>

      <div class="lg:px-16">
        <div class="flex justify-end mb-16">
          <!-- eslint-disable vue/no-v-html -->
          <p class="max-w-2xl text-right text-3xl" v-html="$t('teams.quote')"></p>
          <!-- <eslint-enable>-->
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="sm:col-span-2 sm:order-last">
            <div class="relative">
              <a href="#" class="swiper-prev absolute top-1/2 -left-8 -translate-y-2.5">
                <img src="~/assets/images/svgs/icon-left.svg" class="w-5 h-5" />
              </a>
              <swiper
                :slides-per-view="2"
                :space-between="16"
                :navigation="{
                  nextEl: '.swiper-next',
                  prevEl: '.swiper-prev',
                }"
                :loop="false"
                :breakpoints="breakpoints"
              >
                <swiper-slide v-for="member in members" :key="member.id">
                  <a href="#" class="w-full aspect-3/4 bg-primary block" @click.prevent="onSelectMemeber(member.id)">
                    <img
                      :src="member.imageSrc"
                      :class="[
                        'transition-opacity duration-500 ease-out',
                        { 'opacity-50': selectedMember.id === member.id },
                      ]"
                    />
                  </a>
                </swiper-slide>
              </swiper>
              <a href="#" class="swiper-next absolute top-1/2 -right-8 -translate-y-2.5">
                <img src="~/assets/images/svgs/icon-right.svg" class="w-5 h-5" />
              </a>
            </div>
          </div>
          <div class="">
            <custom-image
              :key="selectedMember.id"
              :src="selectedMember.imageSrc"
              class="h-auto sm:max-w-[420px] bg-secondary"
            />
          </div>
          <div class="">
            <transition name="fade" mode="out-in">
              <dl :key="selectedMember.id">
                <dt class="text-2xl mt-10">{{ selectedMember.name }}</dt>
                <dt class="text-primary text-xl mt-3">{{ selectedMember.title }}</dt>
                <dt v-if="selectedMember.description" class="mt-12">{{ selectedMember.description }}</dt>
                <ul role="list" class="marker:text-primary list-disc pl-4 mt-5">
                  <li v-for="(detail, index) in selectedMember.details" :key="index">
                    {{ detail }}
                  </li>
                </ul>
              </dl>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Navigation } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import TEAM_MEMBERS_HU from '../../helpers/teams.hu-HU'
import 'swiper/swiper-bundle.css'
import CustomImage from './helpers/CustomImage.vue'

SwiperCore.use([Navigation])

export default {
  components: {
    Swiper,
    SwiperSlide,
    CustomImage,
  },

  data() {
    return {
      selectedMemberId: 0,
      teams_hu: TEAM_MEMBERS_HU,
      teams_en: TEAM_MEMBERS_HU,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      },
    }
  },

  computed: {
    members() {
      return this[`teams_${this.$i18n.locale}`]
    },
    selectedMember() {
      return this.members.find((member) => member.id === this.selectedMemberId)
    },
  },

  methods: {
    onSelectMemeber(id) {
      this.selectedMemberId = id
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
