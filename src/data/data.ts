import { Data } from '../interfaces/Data';

export const data: Data = {
    me: {
        name: '구본철',
        photo: '/public/me.png',
    },
    home: {
        title: '안녕하세요. 구본철입니다.',
        subtitle: '응용프로그램 개발자',
        intro: `
### 개발자

부산의 솔루션 개발기업에서 개발자 경력을 시작했습니다. 

대학교 업무를 위한 ERP 시스템을 Microsoft 의 .NET Framework 기반 응용프로그램 작성하여 납품하는 것을 주요 사업으로 진행하는 기업입니다. 

입사후 8년간 솔루션 개발팀에서 대학교에 파견되어 프로젝트를 진행했습니다. 

### 방송통신대학교

입사후, 불평등한 대우가 싫어 낮에는 프로젝트를 진행하고 늦은 밤에 온라인 강의를 통해 학사 졸업장을 획득하였습니다. 

컴퓨터 과학 전공에서 얻은 지식은 없어도 무관할 수 있으나, 있으면 더 좋은 소프트웨어의 기반이 될 수 있다는 것을 알게되었습니다.

### 기술연구소

사내 기술연구소를 설립되면서, 선임 연구원으로 선택되어 기존에 진행하던 프로젝트와는 다른 업무와 기술을 사용할 수 있게 되었습니다. 

저에게는 매우 좋은 기회였고, 많은 것을 배울 수 있었습니다. 

그 중 클라우드와 모바일 응용프로그램에 대한 작업 기회가 생긴 것이 가장 좋았습니다.

### 퇴사

주변에서 12년간 근무하는 것에 대한 이야기와 편하게 업무를 진행할 수 있는데, 어려움을 감수하고 새롭게 시작하는 것에 대한 이야기를 많이 들었습니다. 

하지만, 편하게 업무를 진행하는 것보다 앞으로 나아가고 싶었습니다. 

힘들고 어렵더라도 새로운 일에 도전하고 싶어 퇴사를 결정하게 되었습니다.
        `,
        bio: `
2007년 3월부터 부산 소재 대학교 업무 솔루션 개발 기업에서 프로젝트를 진행했습니다.

2019년 3월부터 스타트업 개발자, 프리랜서 개발자로 활동하고 있습니다.

[블로그](https://bbon.kr/)에 글을 게시하고, [코드를 지속적으로 작성](https://github.com/bbonkr)하고 있습니다.`,
        links: [
            { title: '블로그', href: 'http://bbon.kr', icon: 'home' },
            {
                title: 'GitHub',
                href: 'https://github.com/bbonkr',
                icon: 'github',
            },
            {
                title: '전자메일',
                href: 'mailto:bbon@bbon.kr',
                icon: 'mail',
                target: '_self',
            },
        ],
    },
    education: {
        title: '교육',
        records: [
            {
                period: '2008-03',
                title: '한국방송통신대학교',
                state: '입학',
                description: '컴퓨터과학',
                links: [],
            },
            {
                period: '2012-02',
                title: '한국방송통신대학교',
                state: '졸업',
                description: '컴퓨터과학',
                links: [],
            },
        ],
    },
    career: {
        title: '경험',
        records: [
            {
                period: '2007-03',
                title: '(주)아이OO',
                state: '입사',
                description: '솔루션개발부',
                links: [],
            },
            {
                period: '2019-03',
                title: '(주)아이OO',
                state: '퇴사',
                description: '기술연구소',
                links: [],
            },
            {
                period: '2019-11',
                title: '(주)리블OO',
                state: '입사',
                description: '개발팀',
                links: [],
            },
            {
                period: '2020-03',
                title: '(주)리블OO',
                state: '퇴사',
                description: '개발팀',
                links: [],
            },
            {
                period: '2020-05~2020-07',
                title: '에어OO',
                state: '완료',
                description: '프론트엔드 개발',
                links: [],
            },
        ],
    },
    portfolio: {
        title: '미니 프로젝트',
        records: [
            {
                period: '2020-09',
                state: '완료',
                title: '@bbon/filedownload',
                description: '파일 다운로드 코드 조각입니다.',
                features: ['typescript', 'npm'],
                tags: ['typescript', 'npm'],
                links: [
                    {
                        title: '@bbonkr/filedownload',
                        href: 'https://www.npmjs.com/package/@bbon/filedownload',
                        icon: 'npm',
                        target: '_blank',
                    },
                    {
                        title: '@bbonkr/filedownload',
                        href: 'https://github.com/bbonkr/bbon-filedownload',
                        icon: 'github',
                        target: '_blank',
                    },
                    {
                        title: 'Demo: filedownload',
                        href: 'https://bbon.me/bbon-filedownload-sample/',
                        icon: 'site',
                        target: '_blank',
                    },
                ],
            },
            {
                period: '2020-04',
                title: '@bbon/fomatter',
                description: '값을 형식화된 문자열로 처리하기 위한 기능을 제공합니다.',
                features: ['typescript', 'npm'],
                state: '완료',
                tags: ['typescript', 'npm'],
                links: [
                    {
                        title: 'npm: @bbon/formatter',
                        href: 'https://www.npmjs.com/package/@bbon/formatter',
                        icon: 'npm',
                        target: '_blank',
                    },
                    {
                        title: 'GitHub: @bbon/formatter',
                        href: 'https://github.com/bbonkr/bbon-formatter',
                        icon: 'github',
                        target: '_blank',
                    },
                ],
            },
            {
                period: '2020-03',
                title: '공적 마스크 안내',
                state: '완료',
                description: '공적 마스크 구입 요일을 안내하는 모바일 응용프로그램입니다.',
                features: ['Android', 'React Native', 'Expo', 'Google Play'],
                links: [
                    {
                        title: '구글 플레이',
                        href:
                            'https://play.google.com/store/apps/details?id=kr.bbon.whendoibuyamask',
                        icon: 'android',
                        target: '_blank',
                    },
                    {
                        title: 'GitHub: When do I buy a mask',
                        href: 'https://github.com/bbonkr/when-do-i-buy-a-mask',
                        icon: 'github',
                        target: '_blank',
                    },
                ],
                tags: ['react-native', 'expo', 'google-play', 'typescript'],
            },
            {
                period: '2020-02',
                state: '완료',
                title: 'Rename App: Electron',
                description:
                    '일정한 규칙으로 관리되는 파일의 이름을 일괄 변경하기 위해 작성한 응용프로그램입니다.',
                features: ['입력값으로 치환', '앞에 추가', '뒤에 추기', '정규식으로 치환'],
                tags: ['electron', 'react', 'typescript', 'windows', 'macos'],
                links: [
                    {
                        title: 'GitHub: renameapp',
                        href: 'https://github.com/bbonkr/renameapp',
                        icon: 'github',
                        target: '_blank',
                    },
                ],
            },
            {
                period: '2019-10',
                title: 'Blog Service #2',
                state: '완료',
                description:
                    '마크다운으로 글을 작성하는 블로그 서비스입니다.  Nodejs 백엔드와 React 프론트엔드를 타입스크립트로 작성했습니다.',
                features: [
                    'Nodejs Backend',
                    'express.js',
                    'passport.js',
                    'Sequelize.js',
                    'React Frontend',
                    'Next.js',
                    'Styled Component',
                    'Redux',
                    'Redux-saga',
                ],
                links: [
                    {
                        title: '데모 사이트',
                        href: 'https://blog-service.bbon.me/',
                        icon: 'home',
                        target: '_blank',
                    },
                    {
                        title: 'GitHub: Blog service backend',
                        href: 'https://github.com/bbonkr/blog-node-backend',
                        icon: 'github',
                        target: '_blank',
                    },
                    {
                        title: 'GitHub: Blog service frontend',
                        href: 'https://github.com/bbonkr/react-blog-frontend',
                        icon: 'github',
                        target: '_blank',
                    },
                ],
                tags: [
                    'nodejs',
                    'express.js',
                    'passport.js',
                    'sequelize',
                    'react',
                    'next.js',
                    'redux',
                    'redux-saga',
                    'styled-component',
                ],
            },
            {
                period: '2019-04',
                title: '너와 나의 점수판',
                state: '완료',
                description:
                    'Xamarin.Forms 로 작성된 응용프로그램을 Google Play, Microsoft Store 에 게시합니다.',
                features: [
                    '언어 지원 en-US, ko-KR',
                    '앱 내 구매 In-app purchase (현재 사용하지 않습니다.)',
                ],
                links: [
                    {
                        title: 'Google Play',
                        href: 'https://play.google.com/store/apps/details?id=kr.bbon.ScoreBoard',
                        icon: 'android',
                        target: '_blank',
                    },
                    {
                        title: 'Microsoft Store',
                        href:
                            'https://www.microsoft.com/ko-kr/p/%EB%84%88%EC%99%80-%EB%82%98%EC%9D%98-%EC%A0%90%EC%88%98%ED%8C%90/9p7vpgxbgpwj',
                        icon: 'windows',
                        target: '_blank',
                    },
                ],
                tags: ['xamarin', 'android', 'uwp', 'google-play', 'microsoft-store'],
            },
            {
                period: '2019-04',
                title: 'File Rename App',
                state: '완료',
                description: 'WPF로 작성된 응용프로그램을 Microsoft Store 에 게시합니다.',
                features: ['Microsoft Store 게시됨'],
                links: [
                    {
                        title: 'Microsoft Store',
                        href:
                            'https://www.microsoft.com/ko-kr/p/file-rename-app/9n94sf4f30m6?activetab=pivot%3Aoverviewtab#',
                        icon: 'windows',
                    },
                ],
                tags: ['.net-framework', 'wpf', 'microsoft-store'],
            },
            {
                period: '2019-04',
                title: 'kr.bbon.Xamarin.Forms',
                state: '진행중',
                description:
                    'Xamarin.Forms 프로젝트를 위한 라이브러리입니다. MVVM 으로 응용프로그램을 작성하기 위한 기본 형식을 제공하고, 자주 사용되는 기능을 포함하고 있습니다.',
                features: [
                    'Nuget 패키지로 제공',
                    '경량 MVVM 프레임워크 제공',
                    'Content Page 기본형 제공',
                    'App Center 연결 제공',
                ],
                links: [
                    {
                        title: 'nuget.org: kr.bbon.Xamarin.Forms',
                        href: 'https://www.nuget.org/packages/kr.bbon.Xamarin.Forms',
                        icon: 'nuget',
                        target: '_blank',
                    },
                    {
                        title: 'GitHub: kr.bbon.Xamarin.Forms',
                        href: 'https://github.com/bbonkr/kr.bbon.Xamarin.Forms',
                        icon: 'github',
                        target: '_blank',
                    },
                ],
                tags: ['.net-standard', 'xamarin', 'nuget', 'open-source', 'github'],
            },
            {
                period: '2019-06',
                title: 'Blog Service',
                state: '완료',
                description:
                    '마크다운으로 글을 작성하는 블로그 서비스입니다. Nodejs 백엔드와 React 프론트엔드로 작성되었습니다.',
                features: [
                    'Nodejs Backend',
                    'express.js',
                    'passport.js',
                    'Sequelize.js',
                    'React Frontend',
                    'Next.js',
                    'Styled Component',
                    'Redux',
                    'Redux-saga',
                ],
                links: [
                    {
                        title: '데모 사이트',
                        href: 'https://sample-blog.bbon.me',
                        icon: 'home',
                    },
                    {
                        title: 'GitHub: nodeblog',
                        href: 'https://github.com/bbonkr/nodeblog',
                        icon: 'github',
                    },
                ],
                tags: [
                    'nodejs',
                    'sequelize',
                    'react',
                    'next.js',
                    'redux',
                    'redux-saga',
                    'styled-component',
                ],
            },
            {
                period: '2019-07',
                title: '너와 나의 점수판 React Native',
                state: '완료',
                description:
                    'React Native 를 사용해서 Xamarin.Forms 로 작성된 응용프로그램을 재작성합니다.',
                features: ['언어 지원 en-US, ko-KR', 'React Native'],
                links: [
                    {
                        title: 'Google Play',
                        href: 'https://play.google.com/store/apps/details?id=kr.bbon.ScoreBoard',
                        icon: 'android',
                    },
                    {
                        title: 'Microsoft Store',
                        href:
                            'https://www.microsoft.com/ko-kr/p/%EB%84%88%EC%99%80-%EB%82%98%EC%9D%98-%EC%A0%90%EC%88%98%ED%8C%90/9p7vpgxbgpwj',
                        icon: 'windows',
                    },
                    {
                        title: 'GitHub: scoreboard',
                        href: 'https://github.com/bbonkr/scoreboard',
                        icon: 'github',
                    },
                ],
                tags: ['react-native', 'android', 'ios'],
            },
            {
                period: '2019-07',
                title: 'Blog Service Backend: ASP.NET Core ',
                state: '진행중',
                description: '블로그 서비스의 백엔드를 ASP.NET Core 로 작성합니다.',
                features: ['ASP.NET Core', 'Entity Framewor', 'Microsoft SQL Server'],
                links: [
                    {
                        title: 'GitHub: blog-aspnetcore-backend',
                        href: 'https://github.com/bbonkr/blog-aspnetcore-backend',
                        icon: 'github',
                    },
                ],
                tags: ['asp.net-core', 'entity-framework', 'microsoft-sql-server'],
            },
        ],
    },
    skillStack: {
        title: '',
        records: [
            {
                name: '프로그램 언어',
                icon: 'star',
                items: [
                    {
                        name: 'C#',
                        description: '',
                        score: 5.0,
                    },
                    {
                        name: 'Javascript',
                        description: '',
                        score: 4.5,
                    },
                    {
                        name: 'Typescript',
                        description: '',
                        score: 4.0,
                    },
                    {
                        name: 'Python',
                        description: '',
                        score: 3.0,
                    },
                    {
                        name: 'SQL',
                        description: '',
                        score: 4.0,
                    },
                ],
            },
            {
                name: '프레임워크',
                icon: 'like',
                items: [
                    {
                        name: '.NET Framework',
                        description: '',
                        score: 5.0,
                        href: 'https://dotnet.microsoft.com/',
                    },
                    {
                        name: '.NET Core',
                        description: '',
                        score: 4.0,
                        href: 'https://dotnet.microsoft.com/',
                    },
                    {
                        name: 'Xamarin.Forms',
                        description: '',
                        score: 4.0,
                        href: 'https://docs.microsoft.com/ko-kr/xamarin/',
                    },
                    {
                        name: 'Node.js',
                        description: '',
                        score: 3.5,
                        href: '',
                    },
                    {
                        name: 'React',
                        description: '',
                        score: 3.5,
                        href: 'https://reactjs.org/',
                    },
                    {
                        name: 'Express',
                        description: '',
                        score: 3.0,
                        href: 'https://expressjs.com/',
                    },
                    {
                        name: 'Django',
                        description: '',
                        score: 2.5,
                        href: 'https://www.djangoproject.com/',
                    },
                ],
            },
            {
                name: '클라우드 경험',
                items: [
                    {
                        name: 'Azure',
                        description: '',
                        score: 3.0,
                    },
                    {
                        name: 'AWS',
                        description: '',
                        score: 2.5,
                    },
                    {
                        name: 'Google Cloud',
                        description: '',
                        score: 2.5,
                    },
                ],
            },
        ],
    },
};
