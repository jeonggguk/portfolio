<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title">기술 스택</h2>
      <div class="skills-grid">
        <div 
          v-for="(skills, category) in skillsData" 
          :key="category" 
          class="skill-category"
        >
          <h3>{{ getCategoryName(category) }}</h3>
          <div class="skills-list">
            <span 
              v-for="skill in skills" 
              :key="skill" 
              class="skill-item"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'

const { skills: skillsData } = portfolioData

const getCategoryName = (category) => {
  const categoryNames = {
    frontend: '프론트엔드',
    backend: '백엔드',
    database: '데이터베이스',
    tools: '도구'
  }
  return categoryNames[category] || category
}
</script>

<style scoped>
/* 기술 섹션 */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.skill-category h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    text-align: center;
}

.skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
}

.skill-item {
    background-color: #f8f9fa;
    color: #2c3e50;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    border: 2px solid #e9ecef;
    transition: all 0.3s ease;
}

.skill-item:hover {
    background-color: #3498db;
    color: white;
    border-color: #3498db;
}
</style>
