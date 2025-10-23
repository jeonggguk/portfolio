<template>
  <section id="contact" class="section bg-light">
    <div class="container">
      <h2 class="section-title">연락처</h2>
      <div class="contact-content">
        <div class="contact-info">
          <h3>함께 일하고 싶으시다면 연락주세요!</h3>
          <p>새로운 기회나 협업에 대해 언제든 이야기하고 싶습니다.</p>
          <div class="contact-methods">
            <div class="contact-item">
              <strong>이메일:</strong>
              <a :href="`mailto:${personalInfo.email}`">{{ personalInfo.email }}</a>
            </div>
            <div class="contact-item">
              <strong>깃허브:</strong>
              <a :href="personalInfo.github" target="_blank" rel="noopener noreferrer">
                {{ personalInfo.github }}
              </a>
            </div>
            <div class="contact-item">
              <strong>링크드인:</strong>
              <a :href="personalInfo.linkedin" target="_blank" rel="noopener noreferrer">
                {{ personalInfo.linkedin }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'

const { personalInfo } = portfolioData
</script>

<style scoped>
/* 연락처 섹션 */
.contact-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.contact-info h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.contact-info p {
    color: #666;
    margin-bottom: 2rem;
    font-size: 1.1rem;
}

.contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-item {
    font-size: 1.1rem;
}

.contact-item a {
    color: #3498db;
    text-decoration: none;
}

.contact-item a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .contact-methods {
        align-items: center;
    }
}
</style>
