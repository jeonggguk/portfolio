<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <h2 class="section-title">Projects</h2>
      <div class="projects-grid">
        <ProjectCard
          v-for="project in displayedProjects"
          :key="project.id"
          :project="project"
          @open-detail="openProjectDetail"
        />
      </div>
      <div class="show-more-container">
        <button @click="toggleShowMore" class="show-more-btn">
          {{ showAll ? '프로젝트 접기' : '프로젝트 더보기' }}
        </button>
      </div>
    </div>

    <!-- 프로젝트 상세 모달 -->
    <div v-if="selectedProject" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <button @click="closeModal" class="close-btn">&times;</button>
        </div>
        <h3 class="modal-project-title">{{ selectedProject.title }}</h3>
        <div class="modal-body">
          <div v-if="selectedProject.image" class="modal-image">
            <img :src="selectedProject.image" :alt="selectedProject.title" />
          </div>
          <div class="modal-info">
            <div class="info-section">
              <h4>프로젝트 기간</h4>
              <p>{{ selectedProject.period }}</p>
            </div>
            <div class="info-section">
              <h4>프로젝트 설명</h4>
              <p class="modal-description">{{ selectedProject.description }}</p>
            </div>
            <div class="info-section">
              <h4>사용 기술</h4>
              <div class="modal-tech">
                <span
                  v-for="tech in selectedProject.technologies"
                  :key="tech"
                  class="modal-tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import ProjectCard from './ProjectCard.vue'
import { portfolioData } from '@/data/portfolio'

const { projects } = portfolioData
const showAll = ref(false)
const selectedProject = ref(null)

const displayedProjects = computed(() => {
  return showAll.value ? projects : projects.slice(0, 6)
})

const toggleShowMore = () => {
  showAll.value = !showAll.value
}

const openProjectDetail = (project) => {
  selectedProject.value = project
  // 모달이 열릴 때 body 스크롤 막기
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedProject.value = null
  // 모달이 닫힐 때 body 스크롤 복원
  document.body.style.overflow = 'auto'
}

// 컴포넌트 언마운트 시 스크롤 복원
onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
/* 프로젝트 섹션 - 취미 섹션과 동일한 스타일 */
.projects-section {
  background: #ffffff;
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .projects-section {
    padding: 40px 0;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}

/* 더보기 버튼 스타일 */
.show-more-container {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.show-more-btn {
  background: #f39c12;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.show-more-btn:hover {
  background: #e67e22;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(243, 156, 18, 0.3);
}

/* 모달 스타일 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 0;
}

.modal-content {
  background: white;
  border-radius: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-shadow: none;
}

/* 데스크탑에서는 적당한 크기 */
@media (min-width: 769px) {
  .modal-content {
    max-width: 1000px;
    max-height: 90vh;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .modal-overlay {
    padding: 20px;
  }
}

.modal-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 24px;
  border-bottom: none;
}

.modal-project-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin: 0 0 1.5rem 0;
  padding: 0 24px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: #6c757d;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: #2c3e50;
}

.modal-body {
  padding: 24px;
}

.modal-image {
  margin-bottom: 20px;
  text-align: center;
}

.modal-image img {
  max-width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.modal-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-section h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
}

.info-section p {
  color: #5a6c7d;
  line-height: 1.6;
  margin: 0;
}

.modal-description {
  white-space: pre-line;
  word-wrap: break-word;
}

.modal-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.modal-tech-tag {
  background: #e9ecef;
  color: #495057;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
}

/* 모바일 반응형 모달 */
@media (max-width: 768px) {
  .modal-content {
    border-radius: 0;
    box-shadow: none;
  }

  .modal-header {
    padding: 16px 20px;
  }

  .modal-body {
    padding: 20px;
  }

  .modal-project-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}
</style>
