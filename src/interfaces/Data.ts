export interface Data {
    me: Me;
    home: Home;
    bio: Bio;
    education: Education[];
    career: Career[];
    portfolio: Portfolio[];
    techStack: TechSection[];
}

export interface Link {
    title: string;
    href: string;
    icon: string;
    target?: string;
}

export interface Home {
    title: string;
    subtitle: string;
    intro: string;
    links: Link[];
}

export interface Bio {
    contents: string[];
}

export interface Education {
    date: string;
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
    date: string;
    title: string;
    state: '입사' | '퇴사';
    description: string;
    links: Link[];
}

export interface Portfolio {
    date: string;
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
