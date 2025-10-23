# 포트폴리오 웹사이트

Vue 3 + Vite로 구축된 개인 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **Vue 3** - 프론트엔드 프레임워크
- **Vite** - 빌드 도구
- **Composition API** - Vue 3의 최신 API
- **CSS3** - 스타일링
- **GitHub Actions** - 자동 배포

## 📁 프로젝트 구조

```
src/
├── components/          # Vue 컴포넌트
│   ├── Navigation.vue   # 네비게이션
│   ├── Hero.vue        # 메인 히어로 섹션
│   ├── About.vue       # 소개 섹션
│   ├── Projects.vue    # 프로젝트 섹션
│   ├── ProjectCard.vue # 프로젝트 카드 컴포넌트
│   ├── Skills.vue      # 기술 스택 섹션
│   ├── Contact.vue    # 연락처 섹션
│   └── Footer.vue      # 푸터
├── composables/         # Vue 컴포저블
│   ├── useScroll.js    # 스크롤 관련 로직
│   └── useAnimation.js # 애니메이션 로직
├── data/               # 데이터 파일
│   └── portfolio.js   # 포트폴리오 데이터
├── assets/            # 정적 자산
│   └── styles/        # CSS 파일
│       ├── main.css   # 메인 스타일
│       └── components.css # 컴포넌트 스타일
└── App.vue            # 메인 앱 컴포넌트
```

## 🛠️ 개발 환경 설정

### 필수 요구사항
- Node.js 20.x 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 🎨 주요 기능

- **반응형 디자인** - 모바일/태블릿/데스크톱 지원
- **부드러운 스크롤** - 네비게이션 스크롤 효과
- **애니메이션** - 페이지 로드 시 요소별 애니메이션
- **컴포넌트 기반** - 재사용 가능한 Vue 컴포넌트
- **데이터 분리** - 포트폴리오 데이터 중앙 관리

## 📦 배포

GitHub Actions를 통해 자동 배포됩니다:

1. `main` 브랜치에 푸시
2. 자동으로 빌드 실행
3. GitHub Pages에 배포

## 🔧 커스터마이징

### 개인 정보 수정
`src/data/portfolio.js` 파일에서 개인 정보를 수정하세요:

```javascript
export const portfolioData = {
  personalInfo: {
    name: '당신의 이름',
    title: '당신의 직업',
    email: 'your.email@example.com',
    // ...
  }
}
```

### 프로젝트 추가
`portfolioData.projects` 배열에 새 프로젝트를 추가하세요.

### 스타일 수정
`src/assets/styles/` 폴더의 CSS 파일을 수정하세요.

## 📄 라이선스

MIT License