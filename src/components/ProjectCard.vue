<template>
  <div class="project-card">
    <div class="project-image">
      <div class="project-placeholder">프로젝트 이미지</div>
    </div>
    <div class="project-content">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="project-tech">
        <span 
          v-for="tech in project.technologies" 
          :key="tech" 
          class="tech-tag"
        >
          {{ tech }}
        </span>
      </div>
      <div class="project-links">
        <a :href="project.demoUrl" class="btn btn-small">데모 보기</a>
        <a :href="project.codeUrl" class="btn btn-small btn-outline">코드 보기</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
/* 프로젝트 카드 */
.project-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
}

.project-image {
    height: 200px;
    background-color: #f8f9fa;
}

.project-placeholder {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    background-color: #e9ecef;
}

.project-content {
    padding: 1.5rem;
}

.project-content h3 {
    margin-bottom: 1rem;
    color: #2c3e50;
}

.project-content p {
    color: #666;
    margin-bottom: 1rem;
}

.project-tech {
    margin-bottom: 1rem;
}

.tech-tag {
    display: inline-block;
    background-color: #3498db;
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}

.project-links {
    display: flex;
    gap: 1rem;
}
</style>
