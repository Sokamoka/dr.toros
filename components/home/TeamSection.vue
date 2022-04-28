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
            <div class="relative overflow-hidden">
              <swiper
                :slides-per-view="2"
                :space-between="16"
                :navigation="true"
                :loop="false"
                :breakpoints="breakpoints"
              >
                <swiper-slide v-for="member in members" :key="member.id">
                  <a href="#" class="w-full aspect-3/4 bg-primary block" @click.prevent="onSelectMemeber(member.id)">
                    <img
                      src="/images/dr._Toros_Judit.jpg"
                      :class="[
                        'transition-opacity duration-500 ease-out',
                        { 'opacity-50': selectedMember.id === member.id },
                      ]"
                    />
                  </a>
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="">
            <transition name="fade" mode="out-in">
              <img :key="selectedMember.id" :src="selectedMember.imageSrc" class="w-full sm:max-w-[420px] h-auto" />
            </transition>
          </div>
          <div class="">
            <transition name="fade" mode="out-in">
              <dl :key="selectedMember.id">
                <dt class="text-2xl mt-10">{{ selectedMember.name }}</dt>
                <dt class="text-primary text-xl mt-3">{{ selectedMember.title }}</dt>
                <dt class="mb-5 mt-12">{{ selectedMember.description }}</dt>
                <ul role="list" class="marker:text-primary list-disc pl-4">
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

SwiperCore.use([Navigation])

export default {
  components: {
    Swiper,
    SwiperSlide,
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
