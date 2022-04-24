<template>
  <main>
    <NavHeader />
    <HeroSection />
    <IntroSection />
    <SkilsSection />
    <TeamSection />
    <ResponsibilitySection />
    <ContactSection />
    <FooterSection />
  </main>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
import HeroSection from '../components/home/HeroSection.vue'
import IntroSection from '../components/home/IntroSection.vue'
import SkilsSection from '../components/home/SkilsSection.vue'
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
    SkilsSection,
    TeamSection,
    FooterSection,
    ContactSection,
    ResponsibilitySection
},
}
</script>
