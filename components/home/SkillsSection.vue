<template>
  <!-- eslint-disable vue/no-v-html -->
  <section id="skills" class="flex items-center bg-primary py-14 scroll-mt-20">
    <div class="container mx-auto px-10">
      <h1 class="text-white my-10 truncate" v-html="$t('skills.title')"></h1>
      <div class="px-0 xl:px-16">
        <div class="sm:columns-2 sm:gap-5 text-white" v-html="$t('skills.content')" />

        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-0.5 mt-20">
          <template v-for="skill in skills">
            <SkillsContainer :key="skill.lableKey" :icon="skill.icon" :label="skill.labelKey" />
          </template>
        </div>
      </div>
    </div>
  </section>
  <!-- <eslint-enable>-->
</template>

<script>
import { SKILLS_HU } from '../../helpers/skills'
import SkillsContainer from './helpers/SkillsContainer.vue'

export default {
  name: 'SkillsSection',

  components: {
    SkillsContainer,
  },

  data() {
    return {
      skills_hu: SKILLS_HU,
      skills_en: SKILLS_HU,
    }
  },

  computed: {
    skills() {
      return this[`skills_${this.$i18n.locale}`]
    },
  }
}
</script>
