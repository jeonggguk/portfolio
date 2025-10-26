<template>
  <section id="hobby" class="hobby-section">
    <div class="container">
      <h2 class="section-title">Side Projects</h2>
      <div class="hobby-grid">
        <div v-for="hobby in displayedHobbies" :key="hobby.id" class="hobby-card">
          <div v-if="hobby.image" class="hobby-image">
            <img :src="hobby.image" :alt="hobby.name" class="hobby-img" @error="handleImageError" />
          </div>
          <div class="hobby-content">
            <h3 class="hobby-title">{{ hobby.name }}</h3>
            <p v-if="hobby.genre" class="hobby-genre">{{ hobby.genre }}</p>
            <p class="hobby-description">{{ hobby.description }}</p>
            <div class="hobby-tech">
              <span v-for="tech in hobby.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
            <div class="hobby-actions">
              <span @click="openDetail(hobby)" class="detail-text">상세보기→</span>
            </div>
          </div>
        </div>
      </div>
      <div class="show-more-container">
        <button @click="toggleShowMore" class="show-more-btn">
          {{ showAll ? '취미 접기' : '취미 더보기' }}
        </button>
      </div>
    </div>

    <!-- 취미 상세 모달 -->
    <div v-if="selectedHobby" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <button @click="closeModal" class="close-btn">&times;</button>
        </div>
        <h3 class="modal-project-title">{{ selectedHobby.name }}</h3>
        <div class="modal-body">
          <div v-if="selectedHobby.image" class="modal-image">
            <img :src="selectedHobby.image" :alt="selectedHobby.name" class="modal-img" />
          </div>
          <div class="modal-info">
            <div v-if="selectedHobby.genre" class="info-section">
              <h4>🎮 Genre</h4>
              <p>{{ selectedHobby.genre }}</p>
            </div>
            <div class="info-section">
              <h4>📝 Description</h4>
              <p class="modal-description">{{ selectedHobby.description }}</p>
            </div>
            <div v-if="selectedHobby.subImage || selectedHobby.subVideo" class="modal-sub-media">
              <video
                v-if="selectedHobby.subVideo"
                :src="selectedHobby.subVideo"
                class="modal-sub-video"
                controls
                preload="metadata"
              >
                브라우저가 비디오를 지원하지 않습니다.
              </video>
              <img
                v-if="selectedHobby.subImage"
                :src="selectedHobby.subImage"
                :alt="selectedHobby.name + ' 추가 이미지'"
                class="modal-sub-img"
              />
              <p
                v-if="selectedHobby.subImageText || selectedHobby.subVideoText"
                class="modal-sub-media-text"
              >
                {{ selectedHobby.subImageText || selectedHobby.subVideoText }}
              </p>
            </div>
            <div v-if="selectedHobby.Highlights || selectedHobby.highlights" class="info-section">
              <h4>⭐ Key Highlights</h4>
              <p class="modal-description">
                {{ selectedHobby.Highlights || selectedHobby.highlights }}
              </p>
            </div>
            <div class="info-section">
              <h4>🛠️ Tech Stack</h4>
              <div class="modal-tech">
                <span v-for="tech in selectedHobby.technologies" :key="tech" class="modal-tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>
            <div v-if="selectedHobby.githubUrl" class="info-section">
              <h4>🔗 GitHub Repository</h4>
              <a
                :href="selectedHobby.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="github-link"
              >
                <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                GitHub에서 코드 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onUnmounted, onMounted } from 'vue'
import { portfolioData } from '@/data/portfolio'

const { hobbies } = portfolioData
const showAll = ref(false)
const selectedHobby = ref(null)

const displayedHobbies = computed(() => {
  return showAll.value ? hobbies : hobbies.slice(0, 2)
})

const toggleShowMore = () => {
  showAll.value = !showAll.value
}

const openDetail = (hobby) => {
  selectedHobby.value = hobby
  // 모달이 열릴 때 body 스크롤 막기
  document.body.style.overflow = 'hidden'
  // 히스토리에 상태 추가
  history.pushState({ modal: true }, '', window.location.href)
}

const closeModal = () => {
  selectedHobby.value = null
  // 모달이 닫힐 때 body 스크롤 복원
  document.body.style.overflow = 'auto'
}

// 이미지 로드 에러 처리
const handleImageError = (event) => {
  // 이미지 로드 실패 시 기본 이미지로 대체
  event.target.src = '/images/default-project.jpg'
}

// 뒤로가기 버튼 처리
const handlePopState = (event) => {
  if (selectedHobby.value) {
    closeModal()
  }
}

// 컴포넌트 마운트 시 이벤트 리스너 추가
onMounted(() => {
  window.addEventListener('popstate', handlePopState)
})

// 컴포넌트 언마운트 시 스크롤 복원 및 이벤트 리스너 제거
onUnmounted(() => {
  document.body.style.overflow = 'auto'
  window.removeEventListener('popstate', handlePopState)
})
</script>

<style scoped>
/* 취미 섹션 스타일 */
.hobby-section {
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

.hobby-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.hobby-card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.hobby-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #f39c12, #e67e22);
  opacity: 0.8;
}

.hobby-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: #f39c12;
}

.hobby-image {
  height: 200px;
  margin-bottom: 1rem;
  border-radius: 6px;
  overflow: hidden;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hobby-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.hobby-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.hobby-genre {
  font-size: 0.85rem;
  color: #5a6c7d;
  margin-bottom: 1rem;
  text-align: left;
}

.hobby-description {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #5a6c7d;
  margin-bottom: 1rem;
  white-space: pre-line;
  word-wrap: break-word;
}

.hobby-tech {
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

.hobby-tech::-webkit-scrollbar {
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

.hobby-actions {
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
  transition: color 0.2s ease;
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

.modal-img {
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

.modal-sub-media {
  margin: 20px 0;
  text-align: center;
}

.modal-sub-img {
  max-width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.modal-sub-video {
  max-width: 100%;
  height: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.modal-sub-media-text {
  margin-top: 8px;
  font-size: 0.9rem;
  color: #6c757d;
  text-align: center;
  font-style: italic;
  line-height: 1.4;
}

.github-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.github-link:hover {
  color: #ffffff;
  background-color: #2c3e50;
  border-color: #2c3e50;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(44, 62, 80, 0.3);
}

.github-icon {
  width: 20px;
  height: 20px;
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

  .modal-project-title {
    font-size: 2rem;
  }
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

/* 반응형 디자인 */
@media (max-width: 768px) {
  .hobby-section {
    padding: 40px 0;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .hobby-grid {
    grid-template-columns: 1fr;
  }

  .hobby-card {
    padding: 1.2rem;
  }

  .hobby-image {
    height: 150px;
  }

  .hobby-title {
    font-size: 1.1rem;
  }

  .hobby-description {
    font-size: 0.85rem;
  }
}
</style>
