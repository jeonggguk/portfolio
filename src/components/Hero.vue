<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <h1>안녕하세요, 저는 <span class="highlight">{{ personalInfo.name }}</span>입니다</h1>
      <p class="hero-subtitle">{{ personalInfo.title }}</p>
      <div class="hero-buttons">
        <a href="#projects" class="btn btn-primary" @click="scrollTo('projects')">프로젝트 보기</a>
        <a href="#contact" class="btn btn-secondary" @click="scrollTo('contact')">연락하기</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScroll } from '@/composables/useScroll'
import { portfolioData } from '@/data/portfolio'

const { scrollTo } = useScroll()
const { personalInfo } = portfolioData
</script>

<style scoped>
/* 히어로 섹션 */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 150px 0 100px;
    margin-top: 70px;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
}

.highlight {
    color: #f39c12;
}

.hero-subtitle {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
