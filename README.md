## [React] 디자인시스템 FOCUS 챌린지
[챌린지주소](https://www.numble.it/ad330222-fbe1-4bbb-9b2b-23ea21b965af)

### 🎇 챌린지 미션
#### 1️⃣ 디자인 시스템을 적용해서 Class101의 메인 페이지 구현
> [Class101-Design-Systme](https://ui.class101.dev/)
> 
#### 2️⃣ 다음의 조건을 지켜주세요
> **1. React 사용** <br/>
> **2. Javascript 보다는 Typescript 사용**<br/>
> **3. 서버에 배포할 것**
> 
#### 3️⃣ 결과물 제출 형식
> [결과물 제출 요건](https://www.numble.it/09cd83e3-66d8-468e-a736-601b677e1ae6)
> 
<br/>

---

### 🏓 SKILLS
<img src="https://img.shields.io/badge/-TypeScript-000000?style=flat&logo=TypeScript" /> <img src="https://img.shields.io/badge/-React-000000?style=flat&logo=React" /> <img src="https://img.shields.io/badge/-Storybook-000000?style=flat&logo=Storybook" /> <img src="https://img.shields.io/badge/-Heroku-000000?style=flat&logo=Heroku" /> <img src="https://img.shields.io/badge/-styledcomponents-000000?style=flat&logo=styledcomponents" /> <img src="https://img.shields.io/badge/-yarn-000000?style=flat&logo=yarn" /> <img src="https://img.shields.io/badge/-vercel-000000?style=flat&logo=vercel" />

---

### 🗂 Design-Pattern
![image](https://user-images.githubusercontent.com/63432381/149485812-72b274a1-2096-4638-b2ac-ace72b77d720.png)

* components : 컴포넌트 작성 폴더
* static : global style + data 저장 폴더
* stories : 스토리북 작성 폴더
* App.tsx : 메인 페이지

--- 

### 📃 Reasons Why
* __react-slick__ - Class101 UI 디자인 시스템에서 제공하는 Carousel에서 발생한 오류로 인해 react-slick 사용 (대중적이며 레퍼런스가 많다)
* __storybook__ - FE UI 테스트 도구로 작성한 컴포넌트를 단위 테스트 하기 위해 사용
* __yarn__ - 이전까지 npm을 사용했지만 yarn이 package를 병렬 설치하기 때문에 퍼포먼스가 많이 차이난다. 또한 자동으로 lock 파일을 설치해주기 때문에 보안에서도 우수하다고 판단했다.
* __React__ - __Next__ 가 아닌 React를 사용한 이유는 SSR이 필요없고 SEO 최적화도 크게 신경쓸 필요가 없기 때문이다.
* __Vercel & Heroku__ - 처음에는 이미 사용한 경험이 있는 Heroku를 이용해서 배포했지만 Vercel도 써보고 싶었다. 그런데 배포 과정이 Vercel이 훨씬 간단하고 속도도 빠르다. 무엇보다 github repository에 머지가 되는 순간 자동으로 배포를 해준다. 너무 편하다.

---

### 😊 What I Feel
요구사항을 정확하게 파악하고 UI를 짜는게 생각보다 어려웠다.
디자인 시스템을 사용해서 개발했지만 해당 디자인 시스템을 개발한 개발자가 어떤 의도로 코드를 작성했는지 파악해야 하고 분석이 제대로 되어있지 않으면
내 생각과는 너무나 상반되는 결과가 나왔다. [Card 에서 특히...]

누군가 코드를 최적화하는 가장 좋은 방법이 다른 사람이 짠 코드를 가져다가 쓰는 것이라고 했다. 
하지만 다른 사람의 코드를 정확하게 분석하지 않고 사용한다면 오히려 더 안좋은 결과를 초래할 수 있다는 것을 많이 느낀 챌린지었다.

---

### 😥 What I Regret
아쉬운 점은 처음 마음 먹었던 것처럼 이슈 관리나 블로그 작성을 제대로 하지 못했다는 것이다.
물론 협업이 아니라 이슈 관리를 제대로 안 한것이 큰 문제는 아니지만 그래도 협업 하는 것처럼 이슈 관리를 하고 싶었다.
블로그 작성도 바쁘다는 핑계로 많이 소홀했던 것 같다.

이번 경험을 거울 삼아 이슈 관리, 블로그 작성을 더 성실하게 하도록 하자...!
