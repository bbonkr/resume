import { Data } from '../interfaces/Data';

export const data: Data = {
    me: {
        name: '구본철',
        photo: '/public/me.png',
    },
    home: {
        title: '안녕하세요. 구본철입니다.',
        subtitle: '응용프로그램 개발자',
        intro:
            '저는 응용프로그램 개발자입니다. 필요한 기능을 설계하고 구현하는 것을 좋아합니다. ❤️',
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
    bio: `12년 근무중 **.NET 응용프로그램 개발팀**으로 8년, **기술연구소**에서 4년 근무했습니다. \n
백엔드는 ASP.NET Core, 모바일 응용프로그램은 Android /iOS 로 접근하기 보다 Xamarin.Forms 로 크로스 플랫폼으로 진행하는 것을 선호합니다.\n
최근 Node.js 백엔드와 React 프론트엔드에 관심을 갖고 있습니다.\n
업무진행은 능동적으로 처리하는 것을 선호하며, 대화가 잘 되는 팀과 함께 일을 진행해보고 싶습니다.\n
서비스 기획이 준비되고, 해당 서비스의 분석, 설계, 구현이 필요한 팀을 찾고 있습니다.\n
최소 기능 제품으로 시작해서 마지막까지 팀원과 함게 하고 싶습니다.`,

    education: {
        title: 'Educations',
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
        title: 'Career',
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
        title: 'Portfolio',
        records: [
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
                        icon: '',
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
    skillStack: [
        {
            name: 'Programming Languages',
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
            name: 'Frameworks',
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
            name: 'Cloud Platforms Experience',
            items: [
                {
                    name: 'Azure',
                    description: '',
                    score: 2.0,
                },
                {
                    name: 'AWS',
                    description: '',
                    score: 1.5,
                },
                {
                    name: 'Google Cloud',
                    description: '',
                    score: 1.5,
                },
            ],
        },
    ],
};
