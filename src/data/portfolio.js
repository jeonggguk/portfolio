/**
 * 이미지
 */
import profileImage from '@/assets/images/profile/profile.jpg'
import projectImg1 from '@/assets/images/projects/projectImg1.png'
import projectImg2 from '@/assets/images/projects/projectImg2.png'
import projectImg3 from '@/assets/images/projects/projectImg3.png'
import projectImg4 from '@/assets/images/projects/projectImg4.png'
import creativeImg1 from '@/assets/images/projects/creativeImg1.png'
import creativeImg2 from '@/assets/images/projects/creativeImg2.png'
import creativeImg3 from '@/assets/images/projects/creativeImg3.png'
import creativeImg4 from '@/assets/images/projects/creativeImg4.png'
/**
 * 데이터
 */
export const portfolioData = {
  // 개인 정보
  personalInfo: {
    name: '최정욱',
    title: '식지 않는 서버처럼,\n끈기 있는 개발자',
    description:
      '8년간 유통·커머스 분야의 대규모 시스템을 구축한 Java 백엔드 개발자입니다.\n국내 주요 프랜차이즈 및 유통사의 B2C, B2B 서비스를 운영하며 트래픽 대응과 API 구조화를 경험했습니다.\n복잡한 요구사항 속에서도 안정성과 효율을 함께 구현하는 것이 저의 강점입니다.',
    image: profileImage,
    email: 'choijungwook.dev@gmail.com',
    github: 'https://github.com/choijungwook',
  },

  // 소개 내용
  about: {
    experience: '8년',
    projects: '20+',
  },

  // 스킬 데이터
  techStack: [
    {
      id: 1,
      name: 'java',
      description:
        '8년간 백엔드 개발의 중심 언어로 사용해왔습니다. Spring Framework와 Spring Boot 기반의 서비스, API 서버, Batch 시스템을 다수 구축했습니다. 대규모 트래픽 환경에서 외부 API 연동 및 안정성을 유지했습니다. 현재는 MSA 아키텍처 기반 서비스 운영 경험을 바탕으로 구조 설계를 학습하며, 서비스 확장성과 장애 대응 효율을 높이는 방향에 집중하고 있습니다.',
    },
    {
      id: 2,
      name: 'database',
      description:
        'oracle, mssql, mariadb, mysql 등 다양한 DBMS 환경에서 데이터 무결성과 처리속도 최적화를 중심으로 개발했습니다. 실제 서비스 환경에서 사용자에게 더 빠르고 안정적인 서비스를 제공하기 위해 지속적으로 성능 개선 포인트를 직접 분석·개선하고 있습니다.',
    },
    {
      id: 3,
      name: 'frontend (vue.js, react)',
      description:
        'Vue.js와 React 기반의 대고객(FO) 및 백오피스(BO) 화면을 개발했습니다. REST API 연동 구조 설계, 재사용 컴포넌트 설계를 통해 개발 생산성과 운영 효율을 높였습니다. 특히 Vue.js는 독학으로 습득 후 실제 상용 서비스에 적용한 경험이 있으며, 백엔드와의 완성도 높은 연동을 위해 프론트 구조 이해를 강점으로 활용하고 있습니다.',
    },
  ],

  // 프로젝트 목록 - 기업용 커뮤니케이션 시스템 중심
  projects: [
    {
      id: 1,
      title: '스타벅스 온라인스토어 시스템',
      description:
        '대규모 커머스 플랫폼 구축 및 운영\n• 대용량 트래픽 처리 및 실시간 재고 관리 시스템 구현\n• RESTful API 설계 및 마이크로서비스 아키텍처 적용\n• 고가용성 확보를 위한 로드밸런싱 및 캐싱 전략 수립\n• 성과: 일 평균 10만 건 이상 주문 처리, 99.9% 가용성 달성',
      period: '2025.01 ~ 현재',
      technologies: [
        'Java',
        'Spring Boot',
        'Spring Batch',
        'Microservices',
        'React',
        'Next.js',
        'MySQL',
        'Redis',
      ],
      image: projectImg1,
    },
    {
      id: 2,
      title: '폴바셋 모바일 앱 구축',
      description:
        '엔터프라이즈급 모바일 애플리케이션 구축\n• 사용자 경험 최적화를 위한 반응형 UI/UX 구현\n• 실시간 데이터 동기화 및 푸시 알림 시스템 개발\n• 보안 강화를 위한 JWT 토큰 기반 인증 시스템 구축\n• 성과: 사용자 만족도 95% 달성, 앱스토어 4.8점 평점',
      period: '2023.02 ~ 2024.12',
      technologies: ['Java', 'Spring Boot', 'Vue.js', 'MSSQL', 'Nginx', 'WebtoB', 'JEUS'],
      image: projectImg2,
    },
    {
      id: 3,
      title: '신세계백화점 비대면결제 시스템 구축',
      description:
        '디지털 전환을 위한 결제 인프라 구축\n• 안전한 결제 프로세스 및 실시간 거래 모니터링 시스템\n• 다양한 결제 수단 통합 및 PCI DSS 보안 표준 준수\n• 고객 데이터 보호를 위한 암호화 및 토큰화 기술 적용\n• 성과: 결제 성공률 99.5% 달성, 보안 사고 0건',
      period: '2023.09 ~ 2024.02',
      technologies: ['Java', 'Spring Boot', 'Vue.js', 'MSSQL', 'WebtoB', 'JEUS'],
      image: projectImg3,
    },
    {
      id: 4,
      title: '신세계아이앤씨 모바일 백오피스 시스템 구축',
      description:
        '기업 내부 커뮤니케이션 및 업무 효율성 향상 시스템\n• 관리자용 모바일 애플리케이션으로 업무 프로세스 디지털화\n• 실시간 협업 도구 및 문서 공유 시스템 구현\n• 사용자 권한 관리 및 보안 정책 적용\n• 성과: 업무 처리 시간 30% 단축, 사용자 만족도 90% 달성',
      period: '2023.04 ~ 2024.12',
      technologies: ['Java', 'Spring Boot', 'Vue.js', 'MSSQL', 'Nginx', 'WebtoB', 'JEUS'],
      image: projectImg4,
    },
    {
      id: 5,
      title: '신세계백화점 푸드오더',
      description:
        '백화점 내 푸드코트 주문 시스템 구축 및 운영\n• 실시간 주문 처리 및 재고 관리 시스템 구현\n• 다중 결제 수단 지원 및 쿠폰 시스템 연동\n• 모바일 최적화 UI/UX 및 푸시 알림 서비스\n• 성과: 주문 처리량 200% 증가, 고객 대기시간 50% 단축',
      period: '2023.04 ~ 2024.12',
      technologies: [
        'Java',
        'Spring Boot',
        'HTML',
        'CSS',
        'Javascript',
        'JSP',
        'MSSQL',
        'WebtoB',
        'JEUS',
      ],
    },
    {
      id: 6,
      title: '이마트 쓱고우',
      description:
        '이마트 모바일 쇼핑 플랫폼 운영 및 최적화\n• 모바일 쇼핑 경험 개선을 위한 UI/UX 최적화\n• 실시간 재고 관리 및 주문 처리 시스템 운영\n• 사용자 행동 분석 및 개인화 추천 시스템 구현\n• 성과: 모바일 주문 비율 40% 증가, 사용자 만족도 88% 달성',
      period: '2023.02 ~ 2023.04',
      technologies: ['Java', 'Spring Boot', 'Vue.js', 'MSSQL', 'WebtoB', 'JEUS'],
    },
    {
      id: 7,
      title: '신세계아이앤씨 재무시스템 U2L 및 EOS',
      description:
        '재무 시스템 업그레이드 및 EOS 마이그레이션\n• 기존 시스템에서 신규 시스템으로 데이터 마이그레이션\n• 재무 프로세스 자동화 및 보고서 시스템 구축\n• 데이터 무결성 보장 및 성능 최적화\n• 성과: 재무 처리 시간 50% 단축, 데이터 정확도 99.9% 달성',
      period: '2022.08 ~ 2022.12',
      technologies: ['Java', 'Spring', 'HTML', 'CSS', 'Javascript', 'JSP', 'Oracle', 'Unix'],
    },
    {
      id: 8,
      title: '이마트 차세대시스템 ERP 구축',
      description:
        '대규모 유통업체 ERP 시스템 구축\n• 재고 관리, 주문 처리, 회계 시스템 통합 구축\n• 대용량 데이터 처리 및 실시간 동기화 시스템 구현\n• 사용자 권한 관리 및 보안 정책 적용\n• 성과: 시스템 처리 속도 300% 향상, 데이터 정확도 99.8% 달성',
      period: '2022.03 ~ 2022.08',
      technologies: ['Java', 'Spring', 'HTML', 'CSS', 'Javascript', 'JSP', 'Oracle', 'Unix'],
    },
    {
      id: 9,
      title: '신세계인터내셔날 SMO 바코드재고조회',
      description:
        'SMO 시스템 바코드 기반 재고 관리 기능 개발\n• 바코드 스캔을 통한 실시간 재고 조회 시스템 구현\n• 모바일 최적화된 재고 관리 인터페이스 개발\n• 재고 데이터 실시간 동기화 및 알림 시스템 구축\n• 성과: 재고 조회 시간 70% 단축, 재고 정확도 95% 달성',
      period: '2022.01 ~ 2022.03',
      technologies: ['Java', 'Spring', 'HTML', 'CSS', 'Javascript', 'JSP', 'Oracle', 'Unix'],
    },
    {
      id: 10,
      title: '신세계인터내셔날 SMO 기능개선',
      description:
        'SMO 시스템 기능 개선 및 사용자 경험 향상\n• 기존 기능의 성능 최적화 및 사용자 인터페이스 개선\n• 데이터 처리 속도 향상을 위한 쿼리 최적화\n• 사용자 피드백 반영을 통한 기능 개선\n• 성과: 시스템 응답 속도 40% 향상, 사용자 만족도 85% 달성',
      period: '2021.09 ~ 2022.01',
      technologies: ['Java', 'Spring', 'HTML', 'CSS', 'Javascript', 'JSP', 'Oracle', 'Unix'],
    },
    {
      id: 11,
      title: '부산항만공사 eAccount 프로젝트',
      description:
        '공공기관 전자결재 및 회계 시스템 구축\n• 전자결재 워크플로우 및 문서 관리 시스템 구현\n• PostgreSQL 기반 데이터베이스 설계 및 최적화\n• 보안 강화를 위한 다중 인증 시스템 구축\n• 성과: 결재 처리 시간 60% 단축, 문서 보안성 100% 확보',
      period: '2021.04 ~ 2021.09',
      technologies: [
        'Java',
        'Spring Boot',
        'HTML',
        'CSS',
        'Javascript',
        'JSP',
        'PostgreSQL',
        'Unix',
      ],
    },
    {
      id: 12,
      title: '신세계인터내셔날 Viewer 전환 및 Flash 제거',
      description:
        '레거시 Flash 기반 시스템을 현대적 웹 기술로 전환\n• Flash 기반 뷰어를 HTML5/JavaScript 기반으로 전환\n• 사용자 경험 개선을 위한 반응형 인터페이스 구현\n• 브라우저 호환성 확보 및 보안 강화\n• 성과: 브라우저 호환성 100% 달성, 로딩 속도 50% 향상',
      period: '2020.11 ~ 2021.01',
      technologies: ['Java', 'Spring', 'WebSquare', 'Javascript', 'Oracle', 'Unix'],
    },
    {
      id: 13,
      title: 'GS리테일 나만의냉장고 와인25 고도화',
      description:
        'GS리테일 와인 서비스 고도화 및 사용자 경험 개선\n• 와인 추천 알고리즘 개선 및 개인화 서비스 구현\n• 모바일 최적화된 와인 쇼핑 경험 제공\n• 사용자 행동 분석을 통한 서비스 개선\n• 성과: 와인 판매량 30% 증가, 사용자 재방문율 25% 향상',
      period: '2020.07 ~ 2020.10',
      technologies: ['HTML', 'CSS', 'Javascript', 'JSP', 'Oracle', 'Unix'],
    },
    {
      id: 14,
      title: '신세계인터내셔날 JAJU 계약시스템 연동',
      description:
        'JAJU 브랜드 계약 관리 시스템 구축 및 연동\n• 계약서 관리 및 승인 워크플로우 시스템 구현\n• 문서 자동화 및 전자서명 연동 시스템 개발\n• 계약 데이터 통합 관리 및 분석 시스템 구축\n• 성과: 계약 처리 시간 60% 단축, 문서 관리 효율성 80% 향상',
      period: '2019.12 ~ 2020.06',
      technologies: ['Java', 'Spring', 'WebSquare', 'Javascript', 'Oracle', 'Unix'],
    },
    {
      id: 15,
      title: '이마트 청계천점 EOS 개선',
      description:
        '이마트 청계천점 EOS 시스템 개선 및 최적화\n• 기존 EOS 시스템의 성능 개선 및 안정성 강화\n• 사용자 인터페이스 개선 및 업무 프로세스 최적화\n• 데이터 처리 속도 향상 및 오류 감소\n• 성과: 시스템 안정성 95% 향상, 업무 처리 시간 30% 단축',
      period: '2019.10 ~ 2019.12',
      technologies: ['Java', 'Spring', 'WebSquare', 'Javascript', 'Oracle', 'Unix'],
    },
    {
      id: 16,
      title: '신세계인터내셔날 CRM 프로젝트',
      description:
        '고객 관계 관리 시스템 구축 및 운영\n• 고객 데이터 통합 관리 및 분석 시스템 구현\n• 마케팅 자동화 및 고객 세분화 기능 개발\n• 실시간 대시보드 및 리포팅 시스템 구축\n• 성과: 고객 만족도 25% 향상, 마케팅 효율성 40% 증가',
      period: '2019.02 ~ 2019.09',
      technologies: ['Java', 'Spring', 'WebSquare', 'Javascript', 'Oracle', 'Unix'],
    },
    {
      id: 17,
      title: '신세계인터내셔날 WMS 프로젝트',
      description:
        '창고 관리 시스템(WMS) 구축 및 최적화\n• 창고 운영 프로세스 자동화 및 효율성 향상\n• 재고 추적 및 관리 시스템 구현\n• 창고 작업자 생산성 향상을 위한 모바일 인터페이스 개발\n• 성과: 창고 처리량 35% 증가, 재고 정확도 98% 달성',
      period: '2018.11 ~ 2019.01',
      technologies: ['Java', 'Spring', 'WebSquare', 'Javascript', 'Oracle', 'Unix'],
    },
    {
      id: 18,
      title: '신세계인터내셔날 코스메틱 ERP 기능개선 프로젝트',
      description:
        '코스메틱 브랜드 ERP 시스템 기능 개선 및 확장\n• 코스메틱 특화 재고 관리 및 유통기한 관리 시스템 구현\n• 브랜드별 맞춤형 재고 관리 프로세스 개발\n• 실시간 재고 모니터링 및 알림 시스템 구축\n• 성과: 재고 손실 40% 감소, 재고 회전율 25% 향상',
      period: '2018.05 ~ 2018.10',
      technologies: ['Java', 'Spring', 'Nexacro', 'Javascript', 'Oracle', 'Unix'],
    },
    {
      id: 19,
      title: '신세계인터내셔날 ERP 기능개선',
      description:
        '기존 ERP 시스템 기능 개선 및 성능 최적화\n• ERP 시스템의 사용자 경험 개선 및 업무 프로세스 최적화\n• 데이터 처리 성능 향상 및 시스템 안정성 강화\n• 사용자 교육 및 지원 시스템 구축\n• 성과: 시스템 응답 속도 50% 향상, 사용자 만족도 90% 달성',
      period: '2018.04 ~ 2018.10',
      technologies: ['Java', 'Spring', 'WebSquare', 'Javascript', 'Oracle', 'Unix'],
    },
    {
      id: 20,
      title: '신세계인터내셔날 차세대시스템 저장물 프로젝트',
      description:
        '차세대 시스템 저장물 관리 시스템 구축\n• 디지털 저장물 관리 및 아카이브 시스템 구현\n• 저장물 검색 및 분류 시스템 개발\n• 장기 보존을 위한 데이터 무결성 보장 시스템 구축\n• 성과: 저장물 검색 시간 80% 단축, 데이터 보존률 99.5% 달성',
      period: '2018.01 ~ 2018.03',
      technologies: ['Java', 'Spring', 'WebSquare', 'Javascript', 'Oracle', 'Unix'],
    },
    {
      id: 21,
      title: '신세계아이앤씨 블라썸 구매시스템 구축/개발',
      description:
        '블라썸 브랜드 전용 구매 관리 시스템 구축\n• 브랜드 특화 구매 프로세스 및 승인 워크플로우 구현\n• 공급업체 관리 및 계약 관리 시스템 개발\n• 구매 데이터 분석 및 리포팅 시스템 구축\n• 성과: 구매 처리 시간 45% 단축, 구매 비용 15% 절감',
      period: '2017.07 ~ 2017.12',
      technologies: ['Java', 'Spring', 'HTML', 'CSS', 'Javascript', 'JSP', 'Oracle', 'Unix'],
    },
  ],

  // 취미/토이프로젝트 데이터
  hobbies: [
    {
      id: 1,
      name: '백홈: 집으로 돌아가',
      genre: '캐주얼 아케이드',
      description:
        "첫 번째 개인 개발작으로, 단순한 '똥피하기'류 게임을 모티브로 제작했습니다.\n책과 유튜브를 통해 독학으로 Unity와 C#을 익혀 론칭까지 완주했습니다.",
      technologies: ['Unity', 'C#', 'Google Leaderboard'],
      image: creativeImg1,
    },
    {
      id: 2,
      name: '소프트 피쉬',
      genre: '캐주얼 아케이드',
      description:
        "인디게임 붐 시기에 '한 손으로 즐길 수 있는 간단한 힐링 게임'을 목표로 개발했습니다.\n물고기가 장애물을 피해 코인을 모으고, 수집한 코인으로 캐릭터를 구매하는 구조를 구현했습니다.",
      technologies: ['Unity', 'C#', 'Google Leaderboard'],
      image: creativeImg2,
    },
    {
      id: 3,
      name: '스파이더',
      genre: '슈팅',
      description:
        '거미를 조작해 해충을 제압하는 슈팅 게임으로, 디자인 중심의 게임 제작에 도전했습니다.\n웹툰학원에서 드로잉을 배우고 와콤을 익혀 직접 그래픽을 제작했습니다.',
      technologies: ['Unity', 'C#', 'Google Leaderboard'],
      image: creativeImg3,
    },
    {
      id: 4,
      name: '장작쪼개기',
      genre: '캐주얼 아케이드',
      description:
        '단순한 조작 구조 속에서 캐릭터의 자연스러운 움직임 표현을 목표로 개발했습니다.\nUnity의 스켈레톤 애니메이션 기능을 활용해 캐릭터에 생동감을 부여했습니다.',
      technologies: ['Unity', 'C#', 'Google Leaderboard'],
      image: creativeImg4,
    },
  ],
}
