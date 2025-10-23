import { onMounted } from 'vue'

/**
 * 애니메이션 관련 기능을 제공하는 컴포저블
 */
export function useAnimation() {
  // 페이지 로드 시 애니메이션
  const animateOnLoad = () => {
    const elements = document.querySelectorAll('.project-card, .skill-item')
    elements.forEach((element, index) => {
      element.style.opacity = '0'
      element.style.transform = 'translateY(20px)'
      
      setTimeout(() => {
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
      }, index * 100)
    })
  }
  
  onMounted(() => {
    animateOnLoad()
  })
  
  return {
    animateOnLoad
  }
}
