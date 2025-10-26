/**
 * 이미지
 */
import profileImage from '@/assets/images/profile/profile.jpg'
import projectImg1 from '@/assets/images/projects/projectImg1.png'
import projectImg2 from '@/assets/images/projects/projectImg2.png'
import projectImg3 from '@/assets/images/projects/projectImg3.png'
import projectImg4 from '@/assets/images/projects/projectImg4.png'
import creativeImg1 from '@/assets/images/creative/creativeImg1.png'
import creativeVideo1Sub from '@/assets/images/creative/creativeVideo1Sub.mp4'
import creativeImg2 from '@/assets/images/creative/creativeImg2.png'
import creativeImg2Sub from '@/assets/images/creative/creativeImg2Sub.png'
import creativeImg3 from '@/assets/images/creative/creativeImg3.png'
/**
 * 데이터
 */
export const portfolioData = {
  // 개인 정보
  personalInfo: {
    name: '최정욱',
    title: '식지 않는 서버처럼,\n식지 않는 열정 BOY',
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
      title: '스타벅스 온라인스토어, 백오피스',
      period: '2025.01 ~ 현재',
      service:
        '고객이 앱을 통해 텀블러, 키링 등 다양한 상품을 주문하는 스타벅스 온라인스토어 서비스입니다.\n프로모션 시 최대 동시 접속자 1만 명 이상이 몰리는 고트래픽 B2C 플랫폼입니다.',
      description:
        '• B2C, B2B 서비스 운영중입니다.\n• MSA 기반 구조로 운영하고있으며, 결제/회원/외부 API 연동을 하고있습니다.\n• 일평균 매출 약 10억원 규모의 커머스 플랫폼 운영\n• 실시간 주문, 매출 검증 시스템 모니터링\n• Redis 상품, 프로모션, 재고관리에 적용\n• 주문·결제 프로세스 개발',
      highlights:
        '• 상품 관리/주문/결제 모듈 전반의 핵심 기능 개발 및 운영을 담당 하고있습니다.\n• 프로모션 시 급증하는 트래픽 상황에 대응하기 위해 상품 및 주문 검증 로직을 개선하고, 실시간 서비스 품질 유지와 장애 대응 자동화에 집중했습니다.\n• Spring Boot 기반 백엔드와 React, Next.js 프론트엔드 간 데이터 통신 구조를 표준화했습니다.\n• 시스템 모니터링 및 장애 자동화 알림을 통해 즉각 대응이 가능하도록 운영 효율성을 강화했으며, 유지보수 효율을 30% 이상 개선했습니다.',
      technologies: [
        'Java',
        'Spring Boot',
        'Spring Batch',
        'MSA',
        'React',
        'Next.js',
        'MySQL',
        'Redis',
        'Argo CD',
        'git',
      ],
      image: projectImg1,
    },
    {
      id: 2,
      title: '폴바셋 크라운오더, 백오피스',
      period: '2023.02 ~ 2024.12',
      service:
        '고객이 앱으로 음료를 주문 하는 크라운오더, 대고객 시스템 관리에 필요한 백오피스 시스템입니다.',
      description:
        '• MSA 기반 구조 FO, BO 시스템 구축\n• B2C 통합 서비스 구조 설계, 운영 효율성 향상\n• Redis 클러스터 구성/적용\n• QR기반 통합바코드 결제 시스템 개발',
      highlights:
        '• MSA 기반 구조로 회원, 주문, 결제, 공통 서비스를 분리했습니다. 유지보수성 및 확장성을 크게 높였습니다.\n• Redis 클러스터 구성 및 시스템에 적용했습니다. 상품과 프로모션에 적용하였으며 DB 대비 응답속도를 개선하였으며, 데이터 캐싱 효율성도 높였습니다.\n• QR기반 통합바코드 결제 시스템 개발을 하였으며 매장 POS 결제 시 오류율 0% 유지했습니다.',
      technologies: [
        'Java',
        'Spring Boot',
        'Spring Batch',
        'MSA',
        'Vue.js',
        'MSSQL',
        'Nginx',
        'WebtoB',
        'JEUS',
        'Redis',
        'Jenkins',
        'git',
      ],
      image: projectImg2,
    },
    {
      id: 3,
      title: '신세계백화점 비대면 결제, 푸드오더',
      period: '2023.04 ~ 2024.12',
      service:
        '신세계 백화점 앱 내 웹뷰 기반으로 제공하는 서비스 입니다.\n• 비대면결제 : 고객이 매장 방문 없이 상품 결제를 하는 서비스\n • 푸드오더 : 입점 매장, 식사 주문 및 결제를 진행하는 푸드오더 서비스',
      description:
        '• 웹뷰 기반 결제 서비스 신규 구축 및 전국 점포 확장 적용\n• 나이스페이먼츠, 카카오 간편결제 등 외부결제 API 연동 및 트랜잭션 안정화\n• Vue.js기반 프론트 전면 구축, 백엔드 통합 설계',
      highlights:
        '외부 결제 API 연동(가상계좌, 신용카드, 간편결제 등) 다중 결제수단을 지원한 API 구조 설계 및 예외처리 로직을 구현 했습니다.\n• 비대면결제의 경우 백엔드와의 REST API 통신 및 결제 흐름 제어 로직 처리를 위한 Vue.js 기반 프론트 구조를 직접 설계/개발 했습니다.\n• 그리고 비대면결제 서비스 적용 후 고객 반응이 좋아 전국 대부분의 백화점으로 확대 적용되었습니다.',
      technologies: [
        'Java',
        'Spring Boot',
        'Vue.js',
        'JSP',
        'MSSQL',
        'WebtoB',
        'JEUS',
        'Jenkins',
        'git',
      ],
      image: projectImg3,
    },
    {
      id: 4,
      title: '모바일 백오피스 시스템 구축',
      period: '2023.02 ~ 2024.12',
      service:
        '기존 PC 기반 백오피스 시스템(상품관리, 발주, POS 매출 관리 등)을 모바일 환경에 최적화한 웹뷰형 시스템으로 재구축한 시스템입니다.',
      description:
        '• Java, Vue.js 기반 FE, BE 전 구간 단독 개발 및 운영\n• PC 백오피스 시스템을 모바일 친화적 UX으로 재설계',
      highlights:
        '• 팀내 주요 고객사에서 사용 중인 백오피스 시스템을 모바일 환경에서도 동일하게 활용할 수 있도록 재구축한 시스템입니다.\n• POS, 상품관리, 발주, 매출 등 유통사의 핵심 기능을 모바일에서도 접근 가능하도록 Spring Boot 기반 API 서버와 Vue.js 프론트엔드 구조를 직접 설계했습니다.\n• 개발 초기에는 백오피스 업무 프로세스에 대한 이해 부족으로 시행착오가 있었지만, 직접 기획/설계/개발/운영 전 과정을 수행하면서 도메인 지식과 시스템 전반의 구조 이해도를 크게 향상시켰습니다.\n• 시스템 오픈 후 사용자 만족도 90% 이상 달성, 타 점포에서 도입 요청도 다수 받았습니다.',
      technologies: [
        'Java',
        'Spring Boot',
        'Vue.js',
        'MSSQL',
        'Nginx',
        'WebtoB',
        'JEUS',
        'Jenkins',
        'git',
        'Figma',
      ],
      image: projectImg4,
    },
    {
      id: 5,
      title: '재무시스템 U2L 전환, EOS 고도화',
      period: '2022.08 ~ 2022.12',
      service: '신세계아이앤씨 사내 재무시스템 입니다.',
      description:
        '• Unix → Linux 전환(Unix->Linux)\n• Oracle 버전 EOS 대응을 위한 시스템 코드, 환경 개선 수행',
      highlights:
        '• 재무시스템 U2L(Unix → Linux) 전환 및 Oracle EOS 버전업 대응했습니다.\n• PreparedStatement 기반 SQL 구조 개선 하였고, findbug, 소나큐브를 통해 검출된 SQL 취약점 100% 제거했습니다.\n• 다중 DB 환경에서 Datasource 구분 로직을 수정 했습니다.(오류율 0건 유지)',
      technologies: ['Java', 'Spring', 'HTML', 'CSS', 'Javascript', 'JSP', 'Oracle'],
    },
    {
      id: 6,
      title: '이마트 차세대시스템 ERP',
      period: '2022.03 ~ 2022.08',
      service:
        '이마트 차세대 ERP 시스템 구축 및 SAP 연동 프로젝트 입니다.\n• SAP 회계 모듈과의 데이터 연동 인터페이스 구축\n• 본사 및 점포별 회계 분개 처리 기능 개발',
      description:
        '• 상품권 관리 시스템, SAP 회계 모듈과의 데이터 연동 I/F 개발\n• 본사 및 점포별 회계 분개 처리 자동화 기능 개발',
      highlights:
        '• 상품권 데이터와 SAP 회계 모듈 간 양방향 인터페이스 구현했습니다.\n• 본사, 점포 회계분개 자동화 처리를 통해 기존 수작업 대비 처리속도 2배 이상 향상시켰습니다.\n• DB 정합성 검증 프로시저를 추가하요 오류율을 줄였습니다.',
      technologies: ['Java', 'Spring', 'HTML', 'CSS', 'Javascript', 'JSP', 'Nexacro', 'Oracle'],
    },
    {
      id: 7,
      title: '신세계인터내셔날 SMO',
      period: '2021.09 ~ 2022.03',
      service:
        '신세계인터내셔날 모바일 ERP 플랫폼(SMO) 입니다.\n• ERP 기반 업무(단순업무관리·공사입찰) 모바일화',
      description:
        '• ERP의 단순업무관리, 공사입찰 기능을 모바일에서도 수행할 수 있도록 화면과 로직을 재설계\n• 권한(Role) 기반 화면 제어로 협력사·매장·관리자 간 업무 흐름 통합\n • 바코드 스캔을 통한 실시간 데이터 관리 기능 추가',
      highlights:
        '• 모바일에 특화된 전용 기능을 구현 했습니다.(이미지 관리, 댓글 기능, 동영상 업로드/다운로드)\n특히 동영상 업로드 기능은 모바일 접근권한 제약으로 인해 파일 업로드/다운로드 구조로 대체 구현하였고, video 확장자만 허용하도록 보안 로직을 추가했습니다.\n• 사용자 만족도 조사에서 업무 접근성 50% 향상 평가를 받았습니다',
      technologies: ['Java', 'Spring', 'HTML', 'CSS', 'Javascript', 'JSP', 'Oracle'],
    },
    {
      id: 8,
      title: '부산항만공사 eAccount 프로젝트',
      period: '2021.04 ~ 2021.09',
      service: '부산항만공사의 e-Accounting(전자회계) 시스템입니다.',
      description:
        '• SAP, 그룹웨어와 실시간으로 연동하는 전표 처리 플랫폼을 개발\n• 수입·지출 전표 자동생성, 결재(상신) 프로세스, SAP 연동 까지 전 과정의 I/F 로직을 구현',
      highlights:
        '• ERP 에서 SAP 시스템과 연동하여 전표를 생성하고, 그룹웨어 상신 시 ERP 전표 상태를 동기화하는 구조를 구현했습니다.\n• 전표 유형(표준, 가지급금, 고정자산취득, 원천징수 등)에 따른 화면·로직을 설계/개발 했습니다.\n• Spring Boot 기반의 신규 아키텍처를 처음 경험했으며, JPA·Bean 자동주입 구조를 활용해 생산성과 유지보수성을 개선했습니다.',
      technologies: [
        'Java',
        'Spring Boot',
        'HTML',
        'CSS',
        'Javascript',
        'JSP',
        'PostgreSQL',
        'TOAST UI Grid',
        'UbiForm 리포트',
      ],
    },
    {
      id: 9,
      title: 'GS리테일 나만의냉장고 와인25',
      period: '2020.07 ~ 2020.10',
      service: 'GS리테일의 모바일 앱 나만의냉장고, 와인25 대고객 서비스입니다.',
      description:
        '• 나만의냉장고, 와인25 고도화\n• 정산/매출/상품관리 프로세스 개선 및 ERP 연동 자동화 배치 개발\n• 백오피스에서 관리되는 상품정보를 앱과 실시간 연동\n• 매출 배치, 미수령 알림톡, 품절제어 로직 개선',
      highlights:
        '• 도시락·와인 상품 정산 로직 분리\n• 자동매출 배치 개선 → 미수령 기간 3일→7일 확장\n• 고객 미수령 안내에 대한 효율성 개선(기존 문자에서 알림톡으로 전환)',
      technologies: ['HTML', 'CSS', 'Javascript', 'JSP', 'Oracle'],
    },
    {
      id: 10,
      title: '신세계인터내셔날 ERP',
      period: '2018.01 ~ 2020.06, 2020.11 ~ 2021.01',
      service: '신세계인터내셔날 차세대 ERP 시스템입니다.',
      description:
        '• JAJU 계약시스템 연동\n• CRM/멤버십/POS 연동\n• WMS(물류관리) 고도화\n• Viewer 전환, 레거시 Flash 기반 기능을 웹(HTML5/JavaScript)로 전환',
      highlights:
        '• 2018년부터 약 3년간 ERP, WMS, CRM, SCM 등 주요 업무 시스템의 기능 개선, 외부 시스템 연동(API)을 담당했습니다.\n• JAJU 계약시스템 및 자동발주/입고예정 로직 개선으로 현업 담당자의 업무 처리효율을 향상시켰습니다.\n• 신규 협력사 분리(J1~J8)에 따라 로직 통합 및 프로세스를 개선했습니다.\n• CRM 데이터를 ERP 내에서 바로 활용할 수 있도록 개선했습니다.\n• ERP, WMS 간 실시간 입출고 데이터 연동 로직, batch를 개발 하였으며 물류처리 속도를 향상 시켰습니다.\n• Adobe Flash 기술지원 종료 대응을 위해 ERP 시스템 내 Flash 기반 기능(OZ Report, Multi Upload)을 HTML5로 완전 전환 했으며 호환성을 100% 확보 했습니다.',
      technologies: ['Java', 'Spring', 'WebSquare', 'Javascript', 'Oracle', 'OZ Report'],
    },
    {
      id: 11,
      title: '신세계아이앤씨 블라썸, 구매시스템',
      period: '2017.07 ~ 2017.12',
      service: '신세계아이앤씨 사내에서 사용하는 통합정보시스템입니다.(블라썸)',
      description:
        '• 그룹 내 관계사 및 협력사를 대상으로 한 구매·배부·서비스 관리 시스템 신규 개발\n• 관계사 간의 서비스 요청·배부·교환 및 철거 이력 관리 로직 개발',
      highlights:
        '• 신세계아이앤씨의 통합정보시스템(Blossom) 2차 구축 프로젝트로, Spring 기반 업무관리 모듈을 개발했습니다.\n• 리얼그리드를 활용한 데이터 처리, UI 구성을 했으며 조회속도를 크게 개선 시켰습니다.\n• Oracle·MSSQL·MySQL 혼합 환경이었지만, ANSI 표준 SQL으로 처리했습니다.\n• 이 프로젝트는 단순한 개발자가 아닌 시스템 구조와 업무 로직을 이해하며 설계할 수 있는 개발자로의 저의 첫 출발점입니다.',
      technologies: ['Java', 'Spring', 'Javascript', 'Oracle', 'MSSQL', 'MySQL', '리얼그리드'],
    },
  ],

  // 취미/토이프로젝트 데이터
  hobbies: [
    {
      id: 1,
      name: '백홈: 집으로 돌아가',
      genre: '캐주얼 아케이드',
      service:
        '“똥피하기” 게임을 모티브로 한 캐주얼 아케이드 게임으로, 장애물을 피하며 집으로 돌아가는 여정을 표현한 1인 개발 프로젝트입니다.',
      description:
        "• 첫 번째 개인 개발작으로, 단순한 '똥피하기'류 게임을 모티브로 제작했습니다.\n• 책과 유튜브를 통해 독학으로 Unity와 C#을 익혀 론칭까지 완주했습니다.\n• 단순하지만 반복 플레이에 몰입감을 주는 구조로 설계했습니다.",
      highlights:
        '• 처음으로 Unity와 C#을 접하며, 기획·디자인·개발·출시 전 과정을 혼자 수행한 게임 프로젝트입니다. 책과 유튜브 강의를 통해 기본기를 익히며, “무조건 완성”을 목표로 개발을 진행했습니다.\n• 장애물의 움직임과 충돌 판정은 Unity의 Physics 2D 엔진을 활용했고, UI·사운드·캐릭터 애니메이션까지 직접 구성했습니다.\n• 처음에는 물리 연산과 오브젝트 충돌 관리에서 시행착오가 많았지만, 자체 디버깅과 반복 테스트를 통해 문제 해결 능력을 향상시킬 수 있었습니다.\n• 기획에서 론칭까지의 과정을 거치며 스스로 능력을 입증할 수 있는 프로젝트였습니다.',
      technologies: ['Unity', 'C#', 'Google Leaderboard'],
      image: creativeImg1,
      subVideo: creativeVideo1Sub,
      subVideoText: '캐릭터의 애니메이션, 사운드 적용',
      githubUrl: 'https://github.com/jeonggguk/backhome.git',
    },
    {
      id: 2,
      name: '소프트 피쉬',
      genre: '캐주얼 아케이드',
      service:
        '인디게임 열풍 속에서 제작된 캐주얼 아케이드 게임으로, 물고기를 조작해 장애물을 피하고 코인을 수집하는 방식의 원터치 힐링형 게임입니다.',
      description:
        "• 인디게임 붐 시기에 '한 손으로 즐길 수 있는 간단한 힐링 게임'을 목표로 개발했습니다.\n• 물고기가 장애물을 피해 코인을 모으고, 수집한 코인으로 캐릭터를 구매하는 구조를 구현했습니다.",
      highlights:
        '• “얼마나 빠르게 완성할 수 있을까?”라는 목표로, 기획부터 개발·테스트·출시까지 2주라는 짧은 기간에 진행한 프로젝트입니다.\n• 물고기가 장애물을 피하며 코인을 모으고, 획득한 코인으로 새로운 캐릭터를 해금할 수 있도록 설계했습니다.\n• 출시 후 다수의 자잘한 버그가 발견되어, 많은 피드백을 바탕으로 지속적인 업데이트와 품질 개선 루프를 경험했습니다. 이 과정에서 개발 일정 관리, 릴리즈 사이클의 중요성을 체득했습니다.',
      technologies: ['Unity', 'C#', 'Google Leaderboard'],
      image: creativeImg2,
      subImage: creativeImg2Sub,
      subImageText: '수집한 코인으로 다양한 캐릭터를 구매하도록 구현',
      githubUrl: 'https://github.com/jeonggguk/softFish.git',
    },
    {
      id: 3,
      name: '장작쪼개기',
      genre: '캐주얼 아케이드',
      service: '• 장작을 던지고 반으로 쪼개는 간단한 구조의 캐주얼 아케이드 게임입니다.',
      description:
        '• Unity의 스켈레톤 애니메이션 기능을 활용해 자연스러운 캐릭터 움직임을 구현했습니다.\n• 단순한 조작감 속에서도 시각적 완성도를 높이기 위한 도전',
      highlights:
        '• 이전 게임들에서는 캐릭터 움직임에 큰 비중을 두지 않았지만, 이번 프로젝트에서는 Unity의 스켈레톤 기능을 사용하여 애니메이션의 자연스러움에 신경을 썼습니다.\n• 캐릭터 디자인과 뼈대 구조를 직접 설계하고, 모션을 제어했습니다.',
      technologies: ['Unity', 'C#', 'Google Leaderboard'],
      image: creativeImg3,
      githubUrl: 'https://github.com/jeonggguk/splitFirewood.git',
    },
  ],
}
