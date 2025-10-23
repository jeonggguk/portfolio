<template>
  <nav class="navbar">
    <div class="nav-container">
      <h2 class="nav-logo">포트폴리오</h2>
      <ul class="nav-menu">
        <li v-for="item in navItems" :key="item.id">
          <a 
            :href="`#${item.id}`" 
            class="nav-link"
            :class="{ active: activeSection === item.id }"
            @click="scrollTo(item.id)"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useScroll } from '@/composables/useScroll'

const { activeSection, scrollTo } = useScroll()

const navItems = [
  { id: 'home', name: '홈' },
  { id: 'about', name: '소개' },
  { id: 'projects', name: '프로젝트' },
  { id: 'skills', name: '기술' },
  { id: 'contact', name: '연락처' }
]
</script>

<style scoped>
/* 네비게이션 */
.navbar {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.nav-logo {
    color: #2c3e50;
    font-size: 1.5rem;
    font-weight: 700;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
    color: #3498db;
}

@media (max-width: 768px) {
    .nav-menu {
        display: none;
    }
}
</style>
