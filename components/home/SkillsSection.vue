<template>
  <section id="skills" class="flex items-center bg-primary py-14 scroll-mt-20">
    <div class="container mx-auto px-10">
      <h1 class="text-white mb-10">Szakterületeink</h1>
      <div class="px-0 sm:px-20">
        <!-- eslint-disable vue/no-v-html -->
        <div class="sm:columns-2 sm:gap-5 text-white" v-html="$t('skills.content')" />
        <!-- <eslint-enable>-->

        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-0.5 mt-20">
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
        {
          icon: '',
          labelKey: 'Adatvédelem',
        },
        {
          icon: '',
          labelKey: '',
        },
        {
          icon: '',
          labelKey: '',
        },
        {
          icon: '',
          labelKey: '',
        },
        {
          icon: '',
          labelKey: '',
        },
        {
          icon: '',
          labelKey: '',
        },
        {
          icon: '',
          labelKey: '',
        },
        {
          icon: '',
          labelKey: '',
        },
        {
          icon: '',
          labelKey: '',
        },
        {
          icon: '',
          labelKey: '',
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
