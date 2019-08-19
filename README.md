# resume

공개 이력서 저장소입니다.


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

../docs 디렉터리의 변경사항을 master 브랜치의 docs 디렉터리에 반영하면 https://bbon.me/resume 페이지에서 확인할 수 있습니다.


## 사용

포크<small>Fork</small> 후 /src/data/data.json 의 내용을 변경하십시오.

/src/public/ 디렉터리의 파일을 변경하십시오.

- favicon.ico 사이트 아이콘
- icon.png 사이트 아이콘
- me-300x300.png 사용자 이미지

index.html 파일의 내용을 변경하십시오.
- Google Analytics 관련 코드