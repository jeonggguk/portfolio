<template>
  <section id="projects" class="section bg-light">
    <div class="container">
      <h2 class="section-title">프로젝트</h2>
      <div class="projects-grid">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id" 
          :project="project" 
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
import { portfolioData } from '@/data/portfolio'

const { projects } = portfolioData
</script>

<style scoped>
/* 프로젝트 섹션 */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}
</style>
