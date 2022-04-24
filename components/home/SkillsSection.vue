<template>
  <section class="flex items-center bg-primary py-14">
    <div class="container mx-auto px-10">
      <h1 class="text-white mb-10">Szakterületeink</h1>
      <div class="px-20">
        <p class="sm:columns-2 sm:gap-5 text-white">
          Csak a változás állandó és az ehhez való alkalmazkodás jelenti a hosszútávú siker zálogát. A preventív
          hozzáállást, a mediációs megoldásokat elengedhetetlenül fontos beépíteni az üzleti és jogi
          kultúrába.Megbízóinkkal a nulladik pillanattól közösen gondolkodunk. Az ügyvéd egyfajta tanácsadó szerepben
          jelenik meg a projektekben, így lehetőség van a szakmai és jogi szempontok összefésülésére, ami
          költséghatékony alternatívát jelent minden szereplő számára, szemben az elhúzódó és költséges utólagos
          jogvitákkal. Egy jó szerződés „békében” biztonságot ad, „háborúban” pedig pajzsként véd. Egy szerződéses
          jogviszony sikeressége egyrészt a felek együttműködésén és tudatos vállalásán, másrészt az ügyvéd és megbízója
          közvetlen kommunikációján és bizalmi viszonyán múlik.A hosszadalmas és költséges peres eljárások leggyakrabban
          a nem megfelelő előkészítésből adódnak. Ha mégis jogvita alakulna ki, mi megkeressük a legoptimálisabb
          megoldást.Ne jogi problémáinkkal, hanem jogi ügyeinkkel forduljunk ügyvédhez!
        </p>

        <div class="grid grid-cols-3 sm:grid-cols-7 gap-0.5 mt-20">
          <template v-for="skill in skills">
            <SkillsContainer :key="skill.lableKey" :icon="skill.icon" :label-key="skill.labelKey" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillsContainer from './helpers/SkillsContainer.vue'

export default {
  name: 'SkillsSection',

  components: {
    SkillsContainer,
  },

  data() {
    return {
      skills: [
        {
          icon: '',
          labelKey: 'Peres és peren kívüli vitarendezés',
        },
        {
          icon: '',
          labelKey: 'mediáció',
        },
        {
          icon: '',
          labelKey: '',
        },
      ],
    }
  },
}
</script>
