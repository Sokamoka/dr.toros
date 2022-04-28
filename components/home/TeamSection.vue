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

        <transition name="fade" mode="out-in">
          <div :key="selectedMember.id" class="grid grid-cols-1 sm:grid-cols-5 gap-5">
            <div class="col-span-2">
              <img :src="selectedMember.imageSrc" />
            </div>
            <div class="col-span-3 col-end-6">
              <dl>
                <dt class="text-2xl">{{ selectedMember.name }}</dt>
                <dt class="text-primary">{{ selectedMember.title }}</dt>
                <dt>{{ selectedMember.description }}</dt>
                <dt>{{ selectedMember.details }}</dt>
              </dl>
            </div>
          </div>
        </transition>

        <div class="relative overflow-hidden mt-4">
          <swiper :slides-per-view="1" :space-between="16" :navigation="true" :loop="false" :breakpoints="breakpoints">
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
    </div>
  </section>
</template>

<script>
import { Navigation } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import TEAM_MEMBERS_HU from '../../helpers/teams.hu-HU'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation])

// const TEAM_MEMBERS = [
//   {
//     id: 0,
//     imageSrc: '/images/dr._Toros_Judit.jpg',
//     name: 'dr. Törös Judit',
//     title: 'alapító, irodavezető ügyvéd',
//     description:
//       'Az iroda ügyvezető partnere, aki a hosszútávú stratégiáért felel és szakmailag koordinálja a kulcsfontosságú tranzakciókat, megbízásokat',
//     details:
//       'széleskörű peres képviselet választottbíróság és rendes bíróságok előtt kiemelt M&A tranzakciókban való részvétel, az ahhoz kapcsolódó teljes körű jogi átvilágítási eljárások koordinálásaBridge Budapest Vállalható Üzleti Kultúráért nagykövetemagyar, angol, német',
//   },
//   {
//     id: 1,
//     imageSrc: '/images/dr._Toros_Judit.jpg',
//     name: 'dr. Fekete Zita L.L.M.',
//     title: 'ügyvéd, partner, közbeszerzési szakjogász',
//     description:
//       'Az iroda ügyvezető partnere, aki a hosszútávú stratégiáért felel és szakmailag koordinálja a kulcsfontosságú tranzakciókat, megbízásokat',
//     details:
//       'széleskörű peres képviselet választottbíróság és rendes bíróságok előtt kiemelt M&A tranzakciókban való részvétel, az ahhoz kapcsolódó teljes körű jogi átvilágítási eljárások koordinálásaBridge Budapest Vállalható Üzleti Kultúráért nagykövetemagyar, angol, német',
//   },
// ]

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
      console.log(this.$i18n.locale);
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
