<template>
  <main>
    <NavHeader :on-scroll="isOnScroll" />
    <HeroSection />
    <IntroSection />
    <SkillsSection />
    <TeamSection />
    <ResponsibilitySection />
    <ContactSection />
    <FooterSection />
  </main>
</template>

<script>
import { ref, onMounted } from '@nuxtjs/composition-api'
import { useEventListener, useThrottleFn } from '@vueuse/core'
import NavHeader from '../components/NavHeader.vue'
import HeroSection from '../components/home/HeroSection.vue'
import IntroSection from '../components/home/IntroSection.vue'
import SkillsSection from '../components/home/SkillsSection.vue'
import TeamSection from '../components/home/TeamSection.vue'
import FooterSection from '../components/home/FooterSection.vue'
import ContactSection from '../components/home/ContactSection.vue'
import ResponsibilitySection from '../components/home/ResponsibilitySection.vue'

export default {
  name: 'IndexPage',
  components: {
    NavHeader,
    HeroSection,
    IntroSection,
    SkillsSection,
    TeamSection,
    FooterSection,
    ContactSection,
    ResponsibilitySection,
  },

  setup() {
    const isOnScroll = ref(false)

    const onCalculateValue = () => {
      isOnScroll.value = window.scrollY > 0
    }

    const throttledFn = useThrottleFn(onCalculateValue, 100)
    useEventListener(window, 'scroll', throttledFn)

    onMounted(onCalculateValue)

    return {
      isOnScroll,
    }
  },
}
</script>
