<template>
  <section id="home" class="profile">
    <div class="profile-content">
      <div class="profile-layout">
        <!-- 프로필 사진 영역 -->
        <div class="profile-info">
          <div class="profile-image-container">
            <div class="profile-image">
              <img
                :src="personalInfo.image"
                :alt="personalInfo.name"
                class="profile-img"
                @error="handleImageError"
              />
            </div>
          </div>
        </div>

        <!-- 텍스트 영역 -->
        <div class="profile-text">
          <h1>
            {{ personalInfo.title }} <span class="highlight">{{ personalInfo.name }}</span> 입니다
          </h1>
          <p class="profile-description">
            {{ personalInfo.description }}
          </p>
          <div class="profile-stats">
            <div class="stat">
              <span class="stat-number">{{ about.experience }}</span>
              <span class="stat-label">경력</span>
            </div>
            <div class="stat">
              <span class="stat-number">{{ about.projects }}</span>
              <span class="stat-label">프로젝트</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'

const { personalInfo, about } = portfolioData

// 이미지 로드 에러 처리
const handleImageError = (event) => {
  // 이미지 로드 실패 시 기본 이니셜 표시
  event.target.style.display = 'none'
  const placeholder = event.target.parentElement.querySelector('.profile-placeholder')
  if (placeholder) {
    placeholder.style.display = 'flex'
  }
}
</script>

<style scoped>
/* 포트폴리오 섹션 - 이미지 스타일 적용 */
.profile {
  background: linear-gradient(135deg, #fef7e0 0%, #f4e4bc 100%);
  color: #2c3e50;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-top: 0;
  padding: 60px 0;
}

.profile-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  padding: 0 20px;
  width: 100%;
}

.profile-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 0;
}

/* 프로필 사진 스타일 */
.profile-info {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image-container {
  position: relative;
  display: inline-block;
}

.profile-image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 3;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.profile-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f39c12, #e67e22);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.profile-initial {
  font-size: 4rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.profile-text h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: left;
  white-space: pre-line;
  word-wrap: break-word;
}

.highlight {
  color: #f39c12;
  font-weight: 800;
}

.profile-description {
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-align: left;
  color: #5a6c7d;
  white-space: pre-line;
  word-wrap: break-word;
}

.profile-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 0;
  flex-wrap: wrap;
}

.stat {
  text-align: left;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #f39c12;
  margin-bottom: 0.3rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #5a6c7d;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .profile-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .profile-profile {
    order: -1;
  }

  .profile-image {
    width: 180px;
    height: 180px;
  }

  .profile-text h1 {
    font-size: 2rem;
    text-align: left;
    white-space: pre-line;
  }

  .profile-description {
    text-align: left;
  }

  .profile-stats {
    justify-content: flex-start;
    gap: 2rem;
  }

  .stat {
    text-align: left;
  }

  .stat-number {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .profile-image {
    width: 100px;
    height: 100px;
  }

  .profile-text h1 {
    font-size: 1.8rem;
    text-align: left;
    white-space: pre-line;
  }

  .profile-description {
    font-size: 0.9rem;
    text-align: left;
  }

  .stat-number {
    font-size: 1.5rem;
  }
}
</style>
