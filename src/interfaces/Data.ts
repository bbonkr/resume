export interface Data {
    me: Me;
    home: Home;
    bio: string;
    education: ContentData[];
    career: ContentData[];
    portfolio: ContentData[];
    techStack: TechSection[];
}

export interface Link {
    title: string;
    href: string;
    icon?: 'home' | 'blog' | 'github' | 'mail' | 'site' | 'android' | 'ios' | 'windows' | '';
    target?: string;
}

export interface Home {
    title: string;
    subtitle: string;
    intro: string;
    links: Link[];
}

// export interface Bio {
//     contents: string[];
// }

export interface Education {
    period: string;
    title: string;
    state: '입학' | '졸업';
    description: string;
    links: Link[];
}

export interface Me {
    name: string;
    photo: string;
}

export interface Career {
    period: string;
    title: string;
    state: '입사' | '퇴사' | '완료';
    description: string;
    links: Link[];
}

export interface Portfolio {
    period: string;
    title: string;
    state: '완료' | '진행중';
    description: string;
    features: string[];
    tags: string[];
    links: Link[];
}

export interface TechSection {
    name: string;
    icon?: string;
    items: Tech[];
}

export interface Tech {
    name: string;
    description: string;
    score: number;
    href?: string;
}

export interface ContentData {
    period: string;
    title: string;
    state?: string;
    description?: string;
    features?: string[];
    tags?: string[];
    links?: Link[];
}
