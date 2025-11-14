# Korean Writing Feedback Web

> 2025-2 컴퓨터공학과 졸업 프로젝트

<br>

외국인 학습자를 위한 한국어 쓰기 피드백 플랫폼의 웹 프론트엔드입니다. 초기 UI 스켈레톤 및 컴포넌트 구조는 Lovable의 **Prompt-driven UI Generation**을 기반으로 작성되었습니다.

본 서비스는 **RAG(Retrieval-Augmented Generation)** 기반 백엔드 API를 통해 **글의 문맥에 대한 전반적인 피드백**과 **문장별 문법 오류 교정 & 피드백에 대한 설명**을 제공할 예정입니다.

<br>

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버
npm run dev
# → http://localhost:5173

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

<br>

## UI 미리보기

<img src="./public/example.png" alt="ui-example" />