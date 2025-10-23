/**
 * 포트폴리오 데이터
 */
export const portfolioData = {
  // 개인 정보
  personalInfo: {
    name: 'Choi Jeonguk',
    title: '풀스택 개발자 & 창의적인 문제 해결사',
    email: 'your.email@example.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile'
  },
  
  // 소개 내용
  about: {
    description: [
      '안녕하세요! 저는 열정적인 개발자입니다. 사용자 경험을 중시하며, 효율적이고 확장 가능한 웹 애플리케이션을 만드는 것을 좋아합니다.',
      '새로운 기술을 배우고 적용하는 것을 즐기며, 팀워크를 통해 더 나은 결과를 만들어내는 것을 추구합니다.'
    ]
  },
  
  // 프로젝트 목록
  projects: [
    {
      id: 1,
      title: '프로젝트 1',
      description: '첫 번째 프로젝트에 대한 설명입니다. 사용한 기술과 주요 기능을 간단히 설명해주세요.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: '프로젝트 2',
      description: '두 번째 프로젝트에 대한 설명입니다. 해결한 문제와 달성한 결과를 설명해주세요.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      codeUrl: '#'
    }
  ],
  
  // 기술 스택
  skills: {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js'],
    backend: ['Node.js', 'Python', 'Express', 'Django'],
    database: ['MySQL', 'MongoDB', 'PostgreSQL'],
    tools: ['Git', 'Docker', 'AWS', 'VS Code']
  }
}
