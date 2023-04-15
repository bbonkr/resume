import { Data } from '../interfaces/Data';

const SCORE_BASIS = 5.0;

const calcRate = (score: number) => (score / SCORE_BASIS) * 10.0;

const workAt = {
    i: '(주)아이OO',
    r: '(주)리블OO',
    a: '에어OO',
    c: '클라우드호스OO',
};

export const data: Data = {
    site: {
        name: '구본철',
        nameEn: 'Pon Cheol Ku',
        title: '구본철 이력사항',
        titleEn: 'Resume: Pon Cheol Ku',
        url: 'https://resume.bbon.me',
    },
    me: {
        name: '구본철',
        photo: '/images/me.png',
        twitter: 'bbonkr',
        github: 'bbonkr',
        facebook: 'bbonkr',
        linkedin: 'bbonkr',
        instagram: 'bbonkr',
    },
    home: {
        title: '안녕하세요. 구본철입니다.',
        subtitle: '응용프로그램 개발자',
        intro: `### 개발자

부산의 솔루션 개발기업에서 개발자 경력을 시작했습니다. 

대학교 업무를 위한 ERP 시스템을 Microsoft 의 .NET Framework 기반 응용프로그램 작성하여 납품하는 것을 주요 사업으로 진행하는 기업입니다. 

입사후 8년간 솔루션 개발팀에서 대학교에 파견되어 프로젝트를 진행했습니다. 

### 방송통신대학교

입사후 낮에는 프로젝트를 진행하고 늦은 밤에 온라인 강의를 통해 학사 졸업장을 획득하였습니다. 

컴퓨터 과학 전공에서 얻은 지식은 없어도 무관할 수 있으나, 있으면 더 좋은 소프트웨어의 기반이 될 수 있다는 것을 알게되었습니다.

### 기술연구소

사내 기술연구소를 설립되면서, 선임 연구원으로 선택되어 기존에 진행하던 프로젝트와는 다른 업무와 기술을 사용할 수 있게 되었습니다. 

저에게는 매우 좋은 기회였고, 많은 것을 배울 수 있었습니다. 

그 중 클라우드와 모바일 응용프로그램에 대한 작업 기회가 생긴 것이 가장 좋았습니다.

### 퇴사

주변에서 12년간 근무하는 것에 대한 이야기와 편하게 업무를 진행할 수 있는데, 어려움을 감수하고 새롭게 시작하는 것에 대한 이야기를 많이 들었습니다. 

하지만, 편하게 업무를 진행하는 것보다 앞으로 나아가고 싶었습니다. 

새로운 일에 도전하고 싶어 퇴사를 결정하게 되었습니다.

### 스타트업

새로운 서비스를 시작하시는 스타트업 개발팀과 협업하고 있습니다.

웹 프론트엔드 업무를 리액트로 구현하는 작업을 주로 진행합니다.`,
        bio: `
2007년 3월부터 부산 소재 대학교 업무 솔루션 개발 기업에서 프로젝트를 진행했습니다.

2019년 4월부터 스타트업 개발자, 프리랜서 개발자로 활동하고 있습니다.

[블로그](https://bbon.kr/)에 글을 게시하고, [코드를 지속적으로 작성](https://github.com/bbonkr)하고 있습니다.
`,
        links: [
            { title: 'Blog', href: 'http://bbon.kr', icon: 'home' },
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
        title: 'Education',
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
        title: 'Work',
        records: [
            {
                period: '2007-03',
                title: workAt.i,
                state: '입사',
                description: `
솔루션개발부에 근무

SI 프로젝트 참여

사내 프레임워크 관리
`,
                links: [],
            },
            {
                period: '2019-03',
                title: workAt.i,
                state: '퇴사',
                description: '기술연구소',
                links: [],
            },
            {
                period: '2019-11',
                title: workAt.r,
                state: '입사',
                description: '개발팀',
                links: [],
            },
            {
                period: '2020-03',
                title: workAt.r,
                state: '퇴사',
                description: '개발팀',
                links: [],
            },
            {
                period: '2020-05 ~ 2020-07',
                title: workAt.a,
                state: '완료',
                description: '프론트엔드 개발',
                links: [],
            },
            {
                period: '2022-11 ~ (진행중)',
                title: workAt.c,
                state: '진행중',
                description: `계약직

* 풀타임 프론트엔드, 백엔드 개발 2022-05 ~ (진행중)
* 풀타임 프론트엔드, 백엔드 개발 2021-05 ~ 2022-04
* 풀타임 프론트엔드 개발 2021-02 ~ 2021-04
* 파트타임 프론트엔드 개발 2020-11 ~ 2021-01`,
            },
        ],
    },
    project: {
        title: 'Project',
        records: [
            {
                period: '2020-05~2020-07',
                title: '제주여행 최저가 제공 서비스',
                description: `
제주 여행 최저가 예약 서비스 스타트업에서 프론트엔드 개발을 담당했습니다.

기획 단계에서 모바일 응용프로그램처럼 디자인이 결정되어, 동작이 자연스럽지 않게 개발되었습니다.

Node.js 기반으로 동작하고, Typescript 를 사용하는 React 응용프로그램을 Next.js 프레임워크 기반으로 작성했습니다.

Azure DevOps 에서 버전제어를 관리하고, Azure Pipeline 을 사용해서 Azure WebApp 으로 게시합니다.`,
                tags: [
                    workAt.a,
                    '프리랜서',
                    '프론트엔드',
                    'React',
                    'Next.js',
                    'Azure',
                    'Azure DevOps',
                    'Azure app service',
                    'Azure Pipeline',
                    'Node.js',
                ],
            },
            {
                period: '2019-11~2020-03',
                title: '쇼핑몰 플랫폼 구축',
                description: `
제주 쇼핑몰 플랫폼 스타트업에서 풀스택 개발을 담당했습니다.

기획 단계가 끝나지 않아 프로젝트를 더 이상 진행할 수 없어 퇴사했습니다.

Typescript 로 Node.js 백엔드를 작성했습니다.
TypeORM 을 사용해서 데이터 액세스를 처리했습니다.

관리자 사이트는 백엔드 RESTful API 를 사용하는 React 응용프로그램으로 작성했습니다.

사용자용 모바일 응용프로그램은 Typescript 로 React Native 기반으로 하고, Expo 프레임워크를 사용했습니다.`,
                tags: [
                    workAt.r,
                    'Typescript',
                    'Node.js',
                    'React',
                    'React Native',
                    'Expo',
                    'Docker',
                    'Jenkins',
                ],
            },
            {
                period: '2017-12~2018-08',
                title: '챗봇 빌더',
                description: `
질문과 답변 데이터베이스를 구축하고, 사용자 입력 질문을 자연어 처리를 통해 유효한 답변을 제공하기 위한 기술 연구 개발 프로젝트를 담당했습니다.

Azure QnA Service 로 구현한 후, QnA Service 를 참조해서 Azure Search Service 를 사용하도록 변경했습니다.
                `,
                tags: [
                    workAt.i,
                    '연구개발',
                    'ASP.NET Core',
                    '.NET Core',
                    'C#',
                    'Azure',
                    'Azure SQL Database',
                    'Azure Search Service',
                    'Azure QnA Service',
                    'Azure LUIS',
                    'Azure DevOps',
                ],
            },
            {
                period: '2016-07~2017-10',
                title: '스마트 아이디 카드',
                description: `
고객사의 사용자 정보를 기반으로 모바일 신분증을 제공하는 플랫폼 구축 프로젝트를 담당했습니다.

중앙관리사이트는 Azure WebApp 으로 동작합니다.

고객사 데이터를 모바일 응용프로그램에 제공하기 위한 웹 응용프로그램은 고객사 내에서 동작합니다.

모바일 응용프로그램을 공용으로 사용하고, 사용자는 최초 고객사 코드로 중앙관리사이트에서 데이터 처리를 위한 웹 응용프로그램 구성을 제공받습니다.

웹 응용프로그램은 ASP.NET Core 로 작성되었습니다.

모바일 응용프로그램은 Xamarin으로 작성해서 Google Play, App Store 에 게시했습니다.

중앙 관리사이트는 Azure Pipeline으로 CI/CD 를 구성했습니다.

모바일 응용프로그램은 App Center로 CI/CD를 구성했습니다.`,
                tags: [
                    workAt.i,
                    '연구개발',
                    'C#',
                    'ASP.NET core',
                    '.NET Core',
                    'Azure',
                    'Azure SQL Database',
                    'Azure DevOps',
                    'Azure Pipeline',
                    'Xamarin',
                    'App Center',
                ],
            },
            {
                period: '2015-10',
                title: '.NET Framework Migration 컨설팅',
                description: `고객사 .NET Framework 업그레이드를 위한 컨설팅`,
                tags: [workAt.i, '컨설팅', '.NET Framework'],
            },
            {
                period: '2014-04~2014-10',
                title: 'Microsoft Exchange Server 사용량 분석 서비스',
                description: `
Microsoft Exchange Server 상태 정보를 수집하는 Windows Service

수집된 정보를 분석해서 필요한 데이터를 제공하는 ASP.NET MVC 웹 응용프로그램`,
                tags: [
                    workAt.i,
                    '연구개발',
                    'C#',
                    '.NET Framework',
                    'ASP.NET',
                    'Microsoft Exchange Server',
                    'Windows Service',
                    '데이터 수집',
                    '데이터 분석',
                ],
            },
            {
                period: '2014-03~2014-05',
                title: 'HR-AD 데이터 연계 서비스',
                description: `
HR 데이터를 기반으로 Microsoft Active Directory 사용자 및 조직 정보를 관리합니다.

기술

- Windows Service 형식의 데몬으로 실행되며, 지정된 시각에 데이터를 처리`,
                tags: [
                    workAt.i,
                    '연구개발',
                    'C#',
                    '.NET Framework',
                    'Windows Forms',
                    'Microsoft SQL Server',
                    'Microsoft Active Directory',
                    'T-SQL',
                    'Windows Service',
                ],
            },
            {
                period: '2014-02~2014-03',
                title: '전자우편 송수신 보고 서비스',
                description: `
Microsoft Exchange Server 의 로그를 분석해서 전자우편전송 통계를 제공

기술

- Microsoft Exchange Server 의 Message Tracing Log 수집, 분석
- Exchange Web Service API 사용
- Windows Service 형식의 데몬으로 실행
`,
                tags: [
                    workAt.i,
                    '연구개발',
                    'C#',
                    '.NET Framework',
                    'Windows Forms',
                    'Microsoft Exchange Server',
                    'Windows Service',
                    'SQLite',
                ],
            },
            {
                period: '2012-09~2013-10',
                title: '평택 OO대학교 종합정보시스템 구축',

                description: `
개발팀 소속으로 프로젝트 진행

기술

- .NET Framework 기반의 Windows Forms 데스크톱 응용프로그램
- ASP.NET Web Forms 웹 응용프로그램
- 사내 프레임워크 유지 관리                
                `,
                tags: [
                    workAt.i,
                    'SI',
                    'C#',
                    '.NET Framework',
                    'Windows Forms',
                    'ASP.NET',
                    'Microsoft SQL Server',
                    'WCF',
                ],
            },
        ],
    },
    portfolio: {
        title: 'Portfolio',
        records: [
            {
                period: '2022-10',
                state: '완료',
                title: 'New CS File',
                description: `[![Latest release](https://img.shields.io/github/v/release/bbonkr/vscode-extensions-new-cs-file?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=bbonkr.kr-bbon-vscode-plugins-newcsfile)

[![Build and tag](https://github.com/bbonkr/vscode-extensions-new-cs-file/actions/workflows/build-and-tag.yml/badge.svg)](https://github.com/bbonkr/vscode-extensions-new-cs-file/actions/workflows/build-and-tag.yml) [![create release](https://github.com/bbonkr/vscode-extensions-new-cs-file/actions/workflows/create-release.yml/badge.svg)](https://github.com/bbonkr/vscode-extensions-new-cs-file/actions/workflows/create-release.yml) [![Publish vscode extension](https://github.com/bbonkr/vscode-extensions-new-cs-file/actions/workflows/publish-vscode-extension.yml/badge.svg)](https://github.com/bbonkr/vscode-extensions-new-cs-file/actions/workflows/publish-vscode-extension.yml)

## Features

Create new cs file with namespace.

- Namespace generates from csproj file name or references DefaultNamespace element in csproj file.

`,
                tags: ['vscode', 'vscode-extension', 'typescript', 'c#', 'dotnet', '.NET'],
                links: [
                    {
                        title: 'GitHub: bbonkr/vscode-extensions-new-cs-file',
                        href: 'https://github.com/bbonkr/vscode-extensions-new-cs-file',
                        icon: 'github',
                        target: '_blank',
                    },
                    {
                        title: 'New CS File: Visual Studio Marketplace',
                        href: 'https://marketplace.visualstudio.com/items?itemName=bbonkr.kr-bbon-vscode-plugins-newcsfile',
                        icon: 'site',
                        target: '_blank',
                    },
                ],
            },
            {
                period: '2021-05',
                state: '완료',
                title: 'Bing Today Image Collector',
                description: `Bing.com 에서 제공하는 배경 이미지를 지정된 일정에 수집하고, 수집된 이미지를 출력합니다.

- Scheduled Job
- Backend: ASP.NET Core
- Frontend: React
- Intersection Observer API`,
                tags: ['.NET', 'react', 'c#', 'typescript', 'redux', 'scheduled job', 'docker'],
                links: [
                    {
                        title: 'GitHub: bbonrk/bing-wallpaper',
                        href: 'https://github.com/bbonkr/bing-wallpaper',
                        icon: 'github',
                        target: '_blank',
                    },
                    {
                        title: 'Blog: Bing Today Images Collector',
                        href: 'https://bbon.kr/bing-today-images-collector/',
                        icon: 'blog',
                        target: '_blank',
                    },
                    {
                        title: 'Demo: Bing Today Images Collector',
                        href: 'https://bing-images.bbon.me',
                        icon: 'site',
                        target: '_blank',
                    },
                ],
            },
            {
                period: '2021-02',
                state: '완료',
                title: 'kr.bbon.EntityFrameworkCore.Extensions',
                description: `[![](https://img.shields.io/nuget/v/kr.bbon.EntityFrameworkCore.Extensions)](https://www.nuget.org/packages/kr.bbon.EntityFrameworkCore.Extensions) [![](https://img.shields.io/nuget/dt/kr.bbon.EntityFrameworkCore.Extensions)](https://www.nuget.org/packages/kr.bbon.EntityFrameworkCore.Extensions) ![publish to nuget](https://github.com/bbonkr/kr.bbon.EntityFrameworkCore.Extensions/workflows/publish%20to%20nuget/badge.svg)

Microsoft.EntityFrameworkCore 패키지의 데이터 정렬 기능을 확장합니다.

- Nuget 패키지로 제공,
- EntityFramework 확장`,
                tags: ['nuget', '.NET', 'c#', 'entifyframework'],
                links: [
                    {
                        title: 'Nuget: kr.bbon.EntityFrameworkCore.Extensions',
                        href: 'https://www.nuget.org/packages/kr.bbon.EntityFrameworkCore.Extensions',
                        icon: 'nuget',
                        target: '_blank',
                    },
                    {
                        title: 'GitHub: kr.bbon.EntityFrameworkCore.Extensions',
                        href: 'https://github.com/bbonkr/kr.bbon.EntityFrameworkCore.Extensions',
                        icon: 'github',
                        target: '_blank',
                    },
                ],
            },
            {
                period: '2020-11',
                state: '완료',
                title: '@bbon/css-to-jss',
                description: `[![](https://shields.io/npm/v/@bbon/css-to-jss)](https://www.npmjs.com/package/@bbon/css-to-jss) [![](https://shields.io/npm/dt/@bbon/css-to-jss)](https://www.npmjs.com/package/@bbon/css-to-jss) [![Build and tag](https://github.com/bbonkr/css-to-jss/actions/workflows/build-and-tag.yml/badge.svg)](https://github.com/bbonkr/css-to-jss/actions/workflows/build-and-tag.yml) [![publish NPM](https://github.com/bbonkr/css-to-jss/actions/workflows/publish-npm.yml/badge.svg)](https://github.com/bbonkr/css-to-jss/actions/workflows/publish-npm.yml)

프로젝트에 포함된 css 파일을 css-in-js 적용을 위한 \`<style jsx>\` 코드로 변환하는 CLI 도구입니다.`,
                links: [
                    {
                        title: 'NPM: @bbon/css-to-jss',
                        href: 'https://www.npmjs.com/package/@bbon/css-to-jss',
                        icon: 'npm',
                        target: '_blank',
                    },
                    {
                        title: 'GitHub: @bbon/css-to-jss',
                        href: 'https://github.com/bbonkr/css-to-jss',
                        icon: 'github',
                        target: '_blank',
                    },
                ],
                tags: ['typescript', 'npm', 'cli'],
            },
            {
                period: '2020-09',
                state: '완료',
                title: '@bbon/filedownload',
                description: `[![](https://shields.io/npm/v/@bbon/filedownload)](https://www.npmjs.com/package/@bbon/filedownload) [![](https://shields.io/npm/dt/@bbon/filedownload)](https://www.npmjs.com/package/@bbon/filedownload) [![Build and tag](https://github.com/bbonkr/bbon-filedownload/actions/workflows/build-and-tag.yml/badge.svg)](https://github.com/bbonkr/bbon-filedownload/actions/workflows/build-and-tag.yml) [![publish NPM](https://github.com/bbonkr/bbon-filedownload/actions/workflows/publish-npm.yml/badge.svg)](https://github.com/bbonkr/bbon-filedownload/actions/workflows/publish-npm.yml)

파일 다운로드 코드 조각입니다.`,
                tags: ['typescript', 'npm'],
                links: [
                    {
                        title: 'NPM: @bbonkr/filedownload',
                        href: 'https://www.npmjs.com/package/@bbon/filedownload',
                        icon: 'npm',
                        target: '_blank',
                    },
                    {
                        title: 'GitHub: @bbonkr/filedownload',
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
                description: `[![](https://shields.io/npm/v/@bbon/formatter)](https://www.npmjs.com/package/@bbon/formatter) [![](https://shields.io/npm/dt/@bbon/formatter)](https://www.npmjs.com/package/@bbon/formatter) [![Build and tag](https://github.com/bbonkr/bbon-formatter/actions/workflows/build-and-tag.yml/badge.svg)](https://github.com/bbonkr/bbon-formatter/actions/workflows/build-and-tag.yml) [![publish NPM](https://github.com/bbonkr/bbon-formatter/actions/workflows/publish-npm.yml/badge.svg)](https://github.com/bbonkr/bbon-formatter/actions/workflows/publish-npm.yml)

값을 형식화된 문자열로 처리하기 위한 기능을 제공합니다.`,
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
                period: '2020-04',
                title: 'GUID Generator',
                description: `GUID 생성기
                
- GUID 생성
- GUID 스타일 적용`,
                features: ['GUID 생성', 'GUID 스타일 적용'],
                state: '완료',
                tags: ['react', 'typescript'],
                links: [
                    {
                        title: 'GitHub: guid-generator',
                        href: 'https://github.com/bbonkr/guid-generator',
                        icon: 'github',
                        target: '_blank',
                    },
                    {
                        title: 'GUID Generator',
                        href: 'https://guid.bbon.me/',
                        icon: 'site',
                        target: '_blank',
                    },
                ],
            },
            {
                period: '2020-03',
                title: '공적 마스크 안내',
                state: '완료',
                description: '공적 마스크 구입 요일을 안내하는 모바일 응용프로그램입니다.',
                links: [
                    {
                        title: 'Google Play: 공적 마스크 안내',
                        href: 'https://play.google.com/store/apps/details?id=kr.bbon.whendoibuyamask',
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
                tags: ['react-native', 'expo', 'google play', 'typescript'],
            },
            {
                period: '2020-02',
                state: '완료',
                title: 'Rename App: Electron',
                description: `일정한 규칙으로 관리되는 파일의 이름을 일괄 변경하기 위해 작성한 응용프로그램입니다.

- 입력값으로 치환
- 앞에 추가
- 뒤에 추가
- 정규식으로 치환'
                    `,
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
                period: '2020-01',
                state: '완료',
                title: 'HELP ME! Display:flex',
                description: 'Help for display flex',
                tags: ['css', 'display', 'flex', 'react', 'typescript'],
                links: [
                    {
                        title: 'GitHub: display-flex',
                        href: 'https://github.com/bbonkr/display-flex',
                        icon: 'github',
                        target: '_blank',
                    },
                    {
                        title: 'HELP ME! display:flex',
                        href: 'https://flexbox.bbon.me/',
                        icon: 'site',
                        target: '_blank',
                    },
                ],
            },
            {
                period: '2019-12',
                state: '완료',
                title: 'JSON fomatter',
                description: 'JSON 내용을 보기 좋게 출력합니다.',
                tags: ['json', 'react', 'typescript'],
                links: [
                    {
                        title: 'GitHub: json-formatter',
                        href: 'https://github.com/bbonkr/json-formatter',
                        icon: 'github',
                        target: '_blank',
                    },
                    {
                        title: 'json-formatter',
                        href: 'https://json-formatter.bbon.me/',
                        icon: 'site',
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
                links: [
                    {
                        title: 'Blog Service #2 사이트 (N/A)',
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
                    'javascript',
                ],
            },
            {
                period: '2019-04',
                title: '너와 나의 점수판',
                state: '완료',
                description: `Xamarin.Forms 로 작성된 응용프로그램을 Google Play, Microsoft Store 에 게시합니다.

- 언어 지원 en-US, ko-KR
- 앱 내 구매 In-app purchase (현재 사용하지 않습니다.)
`,
                links: [
                    {
                        title: 'Google Play: 너와 나의 점수판',
                        href: 'https://play.google.com/store/apps/details?id=kr.bbon.ScoreBoard',
                        icon: 'android',
                        target: '_blank',
                    },
                    {
                        title: 'Microsoft Store: 너와 나의 점수판',
                        href: 'https://www.microsoft.com/ko-kr/p/%EB%84%88%EC%99%80-%EB%82%98%EC%9D%98-%EC%A0%90%EC%88%98%ED%8C%90/9p7vpgxbgpwj',
                        icon: 'windows',
                        target: '_blank',
                    },
                ],
                tags: ['xamarin', 'android', 'uwp', 'google play', 'microsoft store'],
            },
            {
                period: '2019-04',
                title: 'File Rename App',
                state: '완료',
                description: `WPF로 작성된 응용프로그램을 Microsoft Store 에 게시합니다.

- Microsoft Store 게시됨`,
                links: [
                    {
                        title: 'Microsoft Store: File Rename App',
                        href: 'https://www.microsoft.com/ko-kr/p/file-rename-app/9n94sf4f30m6?activetab=pivot%3Aoverviewtab#',
                        icon: 'windows',
                    },
                ],
                tags: ['.net framework', 'wpf', 'microsoft store'],
            },
            {
                period: '2019-04',
                title: 'kr.bbon.Xamarin.Forms',
                state: '진행중',
                description: `Xamarin.Forms 프로젝트를 위한 라이브러리입니다. MVVM 으로 응용프로그램을 작성하기 위한 기본 형식을 제공하고, 자주 사용되는 기능을 포함하고 있습니다.

- Nuget 패키지로 제공
- 경량 MVVM 프레임워크 제공
- Content Page 기본형 제공
- App Center 연결 제공`,
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
                tags: ['.NET', '.net standard', 'xamarin', 'nuget', 'open source', 'github'],
            },
            {
                period: '2019-06',
                title: 'Blog Service',
                state: '완료',
                description: `마크다운으로 글을 작성하는 블로그 서비스입니다. 
                    
**Nodejs** 백엔드와 **React** 프론트엔드로 작성되었습니다.
`,
                links: [
                    {
                        title: 'Blog Service (N/A)',
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
                    'javascript',
                ],
            },
            {
                period: '2019-07',
                title: '너와 나의 점수판 React Native',
                state: '완료',
                description: `React Native 를 사용해서 Xamarin.Forms 로 작성된 응용프로그램을 재작성합니다.
                    
- 언어 지원 en-US, ko-KR
- React Native
`,
                links: [
                    {
                        title: 'Google Play: 너와 나의 점수판',
                        href: 'https://play.google.com/store/apps/details?id=kr.bbon.ScoreBoard',
                        icon: 'android',
                    },
                    {
                        title: 'Microsoft Store: 너와 나의 점수판',
                        href: 'https://www.microsoft.com/ko-kr/p/%EB%84%88%EC%99%80-%EB%82%98%EC%9D%98-%EC%A0%90%EC%88%98%ED%8C%90/9p7vpgxbgpwj',
                        icon: 'windows',
                    },
                    {
                        title: 'GitHub: scoreboard',
                        href: 'https://github.com/bbonkr/scoreboard',
                        icon: 'github',
                    },
                ],
                tags: ['typescript', 'react native', 'android', 'ios'],
            },
            {
                period: '2019-07',
                title: 'Blog Service Backend: ASP.NET Core ',
                state: '진행중',
                description: `블로그 서비스의 백엔드를 ASP.NET Core 로 작성합니다.

- ASP.NET Core 
- Entity Framework
- Microsoft SQL Server`,
                links: [
                    {
                        title: 'GitHub: blog-aspnetcore-backend',
                        href: 'https://github.com/bbonkr/blog-aspnetcore-backend',
                        icon: 'github',
                    },
                ],
                tags: ['.NET', 'asp.net core', 'entity framework', 'microsoft sql server'],
            },
            {
                title: 'kr.bbon.AspNetCore',
                period: '2021-03',
                state: '완료',
                description: `[![](https://img.shields.io/nuget/v/kr.bbon.AspNetCore)](https://www.nuget.org/packages/kr.bbon.AspNetCore) [![](https://img.shields.io/nuget/dt/kr.bbon.AspNetCore)](https://www.nuget.org/packages/kr.bbon.AspNetCore) [![publish to nuget](https://github.com/bbonkr/kr.bbon.AspNetCore/actions/workflows/publish-nuget.yml/badge.svg)](https://github.com/bbonkr/kr.bbon.AspNetCore/actions/workflows/publish-nuget.yml)

.NET 5 에서 API 웹 응용프로그램 프로젝트 (webapi 템플릿 기준)를 시작할 때, 반복적으로 작성하던 사항을 패키지로 정리했습니다.`,
                links: [
                    {
                        title: 'GitHub: kr.bbon.AspNetCore',
                        href: 'https://github.com/bbonkr/kr.bbon.AspNetCore',
                        icon: 'github',
                        target: '_blank',
                    },
                    {
                        title: 'Nuget: kr.bbon.AspNetCore',
                        href: 'https://www.nuget.org/packages/kr.bbon.AspNetCore',
                        icon: 'nuget',
                        target: '_blank',
                    },
                ],
                tags: ['.NET', 'asp.net core', 'nuget', 'c#'],
            },
            {
                title: 'kr.bbon.Core',
                period: '2021-06',
                state: '완료',
                description: `[![](https://img.shields.io/nuget/v/kr.bbon.Core)](https://www.nuget.org/packages/kr.bbon.Core) [![](https://img.shields.io/nuget/dt/kr.bbon.Core)](https://www.nuget.org/packages/kr.bbon.Core) [![publish to nuget](https://github.com/bbonkr/kr.bbon.Core/actions/workflows/publish-nuget.yml/badge.svg)](https://github.com/bbonkr/kr.bbon.Core/actions/workflows/publish-nuget.yml)

.NET 5 에서 프로젝트를 시작할 때, 반복적으로 작성하던 사항을 패키지로 정리했습니다.`,
                links: [
                    {
                        title: 'GitHub: kr.bbon.Core',
                        href: 'https://github.com/bbonkr/kr.bbon.Core',
                        icon: 'github',
                        target: '_blank',
                    },
                    {
                        title: 'Nuget: kr.bbon.Core',
                        href: 'https://www.nuget.org/packages/kr.bbon.Core',
                        icon: 'nuget',
                        target: '_blank',
                    },
                ],
                tags: ['.NET', 'nuget', 'c#'],
            },
            {
                title: 'apps.bbon.me',
                period: '2021-08',
                state: '완료',
                description: `간혹 사용되는 기능들을 모아둔 웹 앱입니다.

아래 기능을 제공합니다.

- 문자열 정규화
- GUID 생성기
- JSON 문서 정렬
- QR Code 이미지 생성기`,
                links: [
                    {
                        title: 'GitHub: apps.bbon.me',
                        href: 'https://github.com/bbonkr/apps.bbon.me',
                        icon: 'github',
                        target: '_blank',
                    },
                    {
                        title: 'apps.bbon.me',
                        href: 'https://apps.bbon.me',
                        icon: 'site',
                        target: '_blank',
                    },
                ],
                tags: ['react', 'typescript', 'pwa'],
            },
            {
                title: '@bbon/react-calendar',
                period: '2021-11',
                state: '완료',
                description: `[![npm (scoped)](https://img.shields.io/npm/v/@bbon/react-calendar)](https://www.npmjs.com/package/@bbon/react-calendar) [![npm](https://img.shields.io/npm/dt/@bbon/react-calendar)](https://www.npmjs.com/package/@bbon/react-calendar) [![Build and tag](https://github.com/bbonkr/react-calendar/actions/workflows/build-and-tag.yml/badge.svg)](https://github.com/bbonkr/react-calendar/actions/workflows/build-and-tag.yml) [![publish NPM](https://github.com/bbonkr/react-calendar/actions/workflows/publish-npm.yml/badge.svg)](https://github.com/bbonkr/react-calendar/actions/workflows/publish-npm.yml)

타입스크립트로 작성된 리액트 달력 컴포넌트입니다.
                `,
                links: [
                    {
                        title: 'GitHub: bbonkr/react-calendar',
                        href: 'https://github.com/bbonkr/react-calendar',
                        icon: 'github',
                        target: '_blank',
                    },
                    {
                        title: 'NPM: @bbon/react-calendar',
                        href: 'https://www.npmjs.com/package/@bbon/react-calendar',
                        icon: 'npm',
                        target: 'blank',
                    },
                    {
                        title: 'DEMO: react-calendar',
                        href: 'https://bbon.me/react-calendar',
                        icon: 'site',
                        target: '_blank',
                    },
                ],
            },
            {
                title: 'GitHub Action: Git Tag Check Action',
                period: '2022-01',
                state: '완료',
                description: `[![View on Marketplace: git-tag-check-action](https://img.shields.io/badge/Marketplace-git--tag--check--action-blueviolet)](https://github.com/marketplace/actions/git-tag-check-action) [![출시 버전](https://img.shields.io/github/v/release/bbonkr/git-tag-check-action?display_name=tag&style=flat-square&include_prereleases)](https://github.com/bbonkr/git-tag-check-action/releases)
                
입력된 태그가 깃 git 원격저장소에 존재하는지 조회한 후 있으면 입력된 태그를 반환하고, 찾을 수 없으면 빈 문자열을 반환하는 단계를 제공합니다.`,
                links: [
                    {
                        title: 'GitHub: bbonkr/git-tag-check-action',
                        href: 'https://github.com/bbonkr/git-tag-check-action',
                        icon: 'github',
                        target: '_blank',
                    },
                    {
                        title: 'Marketplace: git-tag-check-action',
                        href: 'https://github.com/marketplace/actions/git-tag-check-action',
                        icon: 'github',
                        target: '_blank',
                    },
                    {
                        title: 'GitHub Action: Git Tag Check Action',
                        href: 'https://bbon.kr/github-action-git-tag-check-action/',
                        icon: 'blog',
                        target: '_blank',
                    },
                ],
            },
            {
                title: 'GitHub Action: Get Version Action',
                period: '2022-01',
                state: '완료',
                description: `[![View on Marketplace: get-version-action](https://img.shields.io/badge/Marketplace-get--version--action-blueviolet)](https://github.com/marketplace/actions/get-version-action) [![출시 버전](https://img.shields.io/github/v/release/bbonkr/get-version-action?display_name=tag&style=flat-square&include_prereleases)](https://github.com/bbonkr/get-version-action/releases)
                
NPM package.json 또는 c# SDK 스타일 프로젝트 파일의 version 문자열을 추출하는 깃허브 액션입니다.`,
                links: [
                    {
                        title: 'GitHub: bbonkr/get-version-action',
                        href: 'https://github.com/bbonkr/get-version-action',
                        icon: 'github',
                        target: '_blank',
                    },
                    {
                        title: 'Marketplace: get-version-action',
                        href: 'https://github.com/marketplace/actions/get-version-action',
                        icon: 'github',
                        target: '_blank',
                    },
                    {
                        title: 'GitHub Action: Get Version Action',
                        href: 'https://bbon.kr/github-action-get-version-action/',
                        icon: 'blog',
                        target: '_blank',
                    },
                ],
            },
        ],
    },
    skillStack: {
        title: 'Skill',
        records: [
            {
                name: '프로그램 언어',
                icon: 'star',
                items: [
                    {
                        name: 'C#',
                        description: '',
                        score: calcRate(4.5),
                    },
                    {
                        name: 'Javascript',
                        description: '',
                        score: calcRate(4.5),
                    },
                    {
                        name: 'Typescript',
                        description: '',
                        score: calcRate(4.0),
                    },
                    {
                        name: 'Python',
                        description: '',
                        score: calcRate(2.0),
                    },
                    {
                        name: 'SQL',
                        description: '',
                        score: calcRate(4.0),
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
                        score: calcRate(5.0),
                        href: 'https://dotnet.microsoft.com/',
                    },
                    {
                        name: '.NET',
                        description: '',
                        score: calcRate(4.0),
                        href: 'https://dotnet.microsoft.com/',
                    },
                    {
                        name: 'Xamarin.Forms',
                        description: '',
                        score: calcRate(4.0),
                        href: 'https://docs.microsoft.com/ko-kr/xamarin/',
                    },
                    {
                        name: 'Node.js',
                        description: '',
                        score: calcRate(3.5),
                        href: '',
                    },
                    {
                        name: 'React',
                        description: '',
                        score: calcRate(3.5),
                        href: 'https://reactjs.org/',
                    },
                    // {
                    //     name: 'Express',
                    //     description: '',
                    //     score: calcRate(3.0),
                    //     href: 'https://expressjs.com/',
                    // },
                    // {
                    //     name: 'Django',
                    //     description: '',
                    //     score: calcRate(1.5),
                    //     href: 'https://www.djangoproject.com/',
                    // },
                ],
            },
            {
                name: '클라우드 경험',
                items: [
                    {
                        name: 'Azure',
                        description: '',
                        score: calcRate(3.0),
                    },
                    {
                        name: 'AWS',
                        description: '',
                        score: calcRate(2.5),
                    },
                    {
                        name: 'Google Cloud',
                        description: '',
                        score: calcRate(1.5),
                    },
                ],
            },
            {
                name: 'DevOps tools',
                items: [
                    {
                        name: 'GitHub Actions',
                        description: '',
                        score: calcRate(3.0),
                    },
                    {
                        name: 'Azure DevOps',
                        description: '',
                        score: calcRate(3.5),
                    },
                    {
                        name: 'Docker',
                        description: '',
                        score: calcRate(3.2),
                    },
                ],
            },
        ],
    },
    certificate: {
        title: 'Certificate',
        records: [
            {
                title: '정보처리기사',
                period: '2011-09',
                images: [
                    {
                        src: '/images/engineer-information-processing-masked.png',
                        alt: '정보처리기사',
                    },
                ],
                tags: ['한국산업인력공단'],
            },
            {
                title: 'MCPD Microsoft Certified Professional Developer',
                period: '2011-07',
                images: [
                    {
                        src: '/images/6130286952_afb362be2f.jpg',
                        alt: 'MCPD Microsoft Certified Professional Developer',
                    },
                ],
                tags: ['mcp', 'microsoft'],
            },
            {
                title: 'MCTS Microsoft Certified Technology Specialist',
                subtitle: '',
                period: '2011-07',
                images: [
                    {
                        src: '/images/6130287190_b65fe0397f.jpg',
                        alt: 'MCTS Microsoft Certified Technology Specialist',
                    },
                ],
                tags: ['mcp', 'microsoft'],
            },
            {
                title: 'MCP Microsoft Certified Professional',
                period: '2008-12',
                images: [
                    {
                        src: '/images/6130287398_4140350a09.jpg',
                        alt: 'MCP Microsoft Certified Professional',
                    },
                ],
                tags: ['mcp', 'microsoft'],
            },
            {
                title: 'MCTS : .NET Framework 4. Windows(R) Application',
                period: '2011-07',
                images: [
                    {
                        src: '/images/6130287728_95da378380.jpg',
                        alt: 'MCTS : .NET Framework 4. Windows(R) Application',
                    },
                ],
                tags: ['mcp', 'microsoft'],
            },
            {
                title: 'MCTS : .Net Framework 3.5. Windows Forms Apllications',
                period: '2011-07',
                images: [
                    {
                        src: '/images/6130288270_c653c5b644.jpg',
                        alt: 'MCTS : .Net Framework 3.5. Windows Forms Apllications',
                    },
                ],
                tags: ['mcp', 'microsoft'],
            },
        ],
    },
};
