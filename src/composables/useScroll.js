import { ref, onMounted, onUnmounted } from 'vue'

/**
 * 스크롤 관련 기능을 제공하는 컴포저블
 */
export function useScroll() {
  const activeSection = ref('home')
  
  // 부드러운 스크롤 함수
  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  
  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const sections = document.querySelectorAll('section[id]')
    let current = 'home'
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id')
      }
    })
    
    activeSection.value = current
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  
  return {
    activeSection,
    scrollTo
  }
}
