<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">Contact</h3>
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <a :href="`mailto:${personalInfo.email}`" class="contact-link">{{
                personalInfo.email
              }}</a>
            </div>
            <div class="contact-item">
              <span class="contact-icon">🐙</span>
              <a
                :href="personalInfo.github"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-link"
                >{{ personalInfo.github }}</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="copyright">© 2025 Choi Jeonguk. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'

const { personalInfo } = portfolioData
</script>

<style scoped>
.footer {
  background: #2c3e50;
  color: #ffffff;
  padding: 60px 0 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #f39c12;
  margin-bottom: 20px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* 데스크탑에서 한 줄로 표시 */
@media (min-width: 769px) {
  .contact-info {
    flex-direction: row;
    gap: 30px;
  }
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.contact-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.contact-link {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #f39c12;
}

.quick-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  color: #bdc3c7;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #f39c12;
}

.footer-description {
  color: #bdc3c7;
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
}

.footer-bottom {
  border-top: 1px solid #34495e;
  padding-top: 20px;
  text-align: center;
}

.copyright {
  color: #95a5a6;
  font-size: 0.9rem;
  margin: 0;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-title {
    font-size: 1.1rem;
  }

  .contact-info {
    gap: 12px;
  }

  .quick-links {
    gap: 10px;
  }
}
</style>
