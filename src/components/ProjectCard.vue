<template>
  <div class="project-card">
    <div v-if="project.image" class="project-image">
      <img
        :src="project.image"
        :alt="project.title"
        class="project-img"
        @error="handleImageError"
      />
    </div>
    <div class="project-content">
      <h3 class="project-title">{{ project.title }}</h3>
      <p v-if="project.period" class="project-period">{{ project.period }}</p>
      <p class="project-description">{{ project.description }}</p>
      <div class="project-tech">
        <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
          {{ tech }}
        </span>
      </div>
      <div class="project-actions">
        <span @click="openDetail" class="detail-text">프로젝트 내용 상세보기→</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['open-detail'])

// 이미지 로드 에러 처리
const handleImageError = (event) => {
  // 이미지 로드 실패 시 기본 이미지로 대체
  event.target.src = '/images/default-project.jpg'
}

// 상세보기 열기
const openDetail = () => {
  emit('open-detail', props.project)
}
</script>

<style scoped>
/* 프로젝트 카드 - 미묘한 강조 효과 */
.project-card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #f39c12, #e67e22);
  opacity: 0.8;
}

.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: #f39c12;
}

.project-image {
  height: 300px;
  margin-bottom: 1rem;
  border-radius: 6px;
  overflow: hidden;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.8rem;
}

.project-description {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #5a6c7d;
  margin-bottom: 1rem;
  white-space: pre-line;
  word-wrap: break-word;
}

.project-period {
  font-size: 0.85rem;
  color: #5a6c7d;
  margin-bottom: 1rem;
  text-align: left;
}

.project-tech {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  margin-top: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 4px;
  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.project-tech::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.tech-tag {
  display: inline-block;
  background: #e9ecef;
  color: #495057;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  flex-shrink: 0;
  white-space: nowrap;
}

.project-actions {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.detail-text {
  color: #6c757d;
  font-size: 0.8rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
}

.detail-text:hover {
  color: #2c3e50;
  text-decoration: underline;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .project-card {
    padding: 1.2rem;
  }

  .project-image {
    height: 150px;
  }

  .project-title {
    font-size: 1.1rem;
  }

  .project-description {
    font-size: 0.85rem;
  }
}
</style>
