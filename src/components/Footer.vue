<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 {{ personalInfo.name }}. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'

const { personalInfo } = portfolioData
</script>

<style scoped>
/* 푸터 */
.footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 2rem 0;
}
</style>
