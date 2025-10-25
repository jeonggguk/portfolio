<template>
  <section id="techStack" class="techStack-section">
    <div class="container">
      <h2 class="section-title">Tech Stack</h2>
      <div class="techStack-content">
        <div v-for="techStack in techStack" :key="techStack.id" class="techStack-item">
          <h3 class="techStack-name">
            <span class="tech-icon">{{ getTechIcon(techStack.name) }}</span>
            {{ techStack.name }}
          </h3>
          <p class="techStack-description">{{ techStack.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'

const { techStack } = portfolioData

// 기술별 아이콘 반환 함수
const getTechIcon = (techName) => {
  const iconMap = {
    java: '☕',
    database: '🗄️',
    'frontend (vue.js, react)': '⚛️',
  }
  return iconMap[techName] || '💻'
}
</script>

<style scoped>
/* 스킬 섹션 스타일 */
.techStack-section {
  background: #f8f9fa;
  padding: 60px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 3rem;
}

.techStack-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.techStack-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.techStack-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #e9ecef, #f8f9fa);
}

.techStack-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  border-color: #e9ecef;
}

.techStack-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-transform: lowercase;
  display: flex;
  align-items: center;
  gap: 12px;
}

.tech-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
}

.techStack-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #5a6c7d;
  margin: 0;
  white-space: pre-line;
  word-wrap: break-word;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .techStack-section {
    padding: 40px 0;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .techStack-item {
    padding: 1.5rem;
  }

  .techStack-name {
    font-size: 1.3rem;
  }

  .techStack-description {
    font-size: 0.9rem;
  }
}
</style>
