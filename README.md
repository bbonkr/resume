# resume

공개 이력서 저장소입니다.

[![Netlify Status](https://api.netlify.com/api/v1/badges/11c14056-8c11-4fa3-98c5-c2187a67bb08/deploy-status)](https://app.netlify.com/sites/awesome-volhard-162d49/deploys)

## 준비

```bash
$ npm install
```

## NPM Scripts

### npm run dev

웹팩 개발 서버로 동작을 확인합니다.

```bash
$ npm run dev
```

### npm run build

게시를 위해 NODE_ENV 환경 변수를 `production`으로 변경 후 빌드합니다.

```bash
$ npm run build
```

### npm run deploy

게시를 위해 NODE_ENV 환경 변수를 `production`으로 변경 후 빌드한 결과물을 ../docs 디렉터리로 복사합니다.

```bash
$ npm run deploy
```

> GitHub pages 를 사용하는 경우 ../docs 디렉터리의 변경사항을 master 브랜치의 docs 디렉터리에 반영하면 깃허브 페이지로 확인할 수 있습니다.

## 사용

포크<small>Fork</small> 후 src/data/data.ts 의 내용을 변경하십시오.

public/ 디렉터리의 파일을 변경하십시오.

-   favicon.ico 사이트 아이콘
-   images/icon.png 사이트 아이콘
-   images/me.png 사용자 이미지

index.html 파일의 내용을 변경하십시오.

-   meta 정보

환경변수 또는 .env 파일

-   Google Analytics 식별자 `GAID=UA-XXXXXXXX-X`

## Docker

### Build on M1

```bash
$ docker build . --tag bbonkr/resume:2.2.6 --platform linux/amd64
```