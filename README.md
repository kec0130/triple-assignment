# 트리플 2022 공개채용 과제 전형

- 트리플 홈페이지의 한 섹션 구현하기
- [배포 페이지](https://kec0130.github.io/triple-assignment/)

## 로컬 실행 방법

```
$ https://kec0130.github.io/triple-assignment/
$ cd triple-assignment
$ npm install
$ npm start
```

## 프로젝트 구조

```
src
├─ assets                     # 이미지 파일 저장
├─ components                 # 2회 이상 반복적으로 사용되는 UI를 컴포넌트로 분리
│  ├─ AwardItem.tsx               # 수상 내역
│  └─ MetricItem.tsx              # 지표 문구
├─ hooks                      # 주요 비즈니스 로직을 훅으로 분리
│  └─ useCountUp.ts               # 지표 문구의 숫자가 올라가는 로직
├─ routes                     # 페이지 단위의 구분
│  └─ index.tsx                   # App에 해당하는 메인 페이지
├─ styles                     # 스타일 정의
│  │  ├─ base                     # reset, 폰트 등 기본 스타일 정의
│  │  ├─ constants                # 전역에서 사용되는 컬러 팔레트 등을 정의
│  │  └─ shared                   # 여러 컴포넌트에서 반복적으로 사용되는 스타일 분리
│  └─ index.tsx                   # base 스타일을 토대로 GlobalStyle 정의
└─ index.tsx
```

## 기술 스택과 선택 이유

### React & TypeScript

TypeScript는 정적 타입을 지원하므로 컴파일 단계에서 오류를 포착할 수 있는 장점이 있습니다. 그리고 IDE 상에서 타입이 추론되어 관련 메서드를 자동완성해주는 기능을 사용할 수 있어 편리합니다.

### Styled Components

저는 개인적으로 SCSS를 선호하는 편이지만, 트리플 개발팀은 styled components를 사용하고 있고 `eslint-config-triple`도 styled components에 맞게 설정되어 있어서 해당 스택을 사용했습니다. 평소 자주 사용하지 않았던 styled components를 사용해보면서 느낀 장단점은 다음과 같습니다.

#### 장점

- styled components만 설치하면 다른 라이브러리 없이도 간편하게 SCSS 문법을 사용할 수 있다.
- CSS-in-JS 방식으로 컴포넌트의 스타일을 같은 파일 내에서 관리하여 별도의 CSS 파일을 관리할 필요가 없다.
- 유니크한 className을 자동으로 생성해주기 때문에 className을 고민할 필요가 없다.

#### 단점

- 프로젝트의 규모가 커지면 스타일 코드도 늘어나서 파일의 길이가 길어지게 된다. 그렇다고 스타일 코드를 별도 파일로 분리하게 되면 CSS-in-JS의 의미가 사라져 SCSS와 별 차이가 없어지게 된다.
- className에 랜덤한 문자열이 들어가서 의미를 부여할 수 없다. 조건에 따라 의미 있는 className을 부여하고 스타일 관련 로직을 전부 CSS에 위임하는 편이 코드가 더 깔끔해진다. 게다가 CSS 모듈을 사용하면 className이 겹칠 걱정도 없다.
- JSX에 HTML 태그 대신 styled components로 정의한 변수명을 사용해야 해서 마크업을 한 눈에 알아보기 어렵고 시맨틱 태그를 사용하기 어려워진다.

#### 결론

이번 과제를 수행하며 위와 같은 장단점을 느꼈고, 결론적으로 styled components는 규모가 작은 프로젝트에서 간편하게 사용하기에 적합하다는 느낌을 받았습니다. 따라서 CSS 전처리기 관련 라이브러리를 추가로 설치하고 컴파일 옵션을 설정해야 하는 번거로움이 있더라도 SCSS를 사용하는 것이 규모가 큰 프로젝트에서는 더 효율적일 것 같습니다.
