<script setup>
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import { useAnimation } from './composables/useAnimation'

// 애니메이션 초기화
useAnimation()
</script>

<template>
  <div id="app">
    <Navigation />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </div>
</template>

<style>
@import './assets/styles/main.css';
@import './assets/styles/components.css';
</style>
