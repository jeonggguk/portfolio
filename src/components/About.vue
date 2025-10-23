<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">소개</h2>
      <div class="about-content">
        <div class="about-text">
          <p v-for="(paragraph, index) in about.description" :key="index">
            {{ paragraph }}
          </p>
        </div>
        <div class="about-image">
          <div class="profile-placeholder">
            <p>프로필 사진</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'

const { about } = portfolioData
</script>

<style scoped>
/* 소개 섹션 */
.about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    align-items: center;
}

.about-text p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: #666;
}

.profile-placeholder {
    width: 200px;
    height: 200px;
    background-color: #e9ecef;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    color: #666;
}

@media (max-width: 768px) {
    .about-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
}
</style>
