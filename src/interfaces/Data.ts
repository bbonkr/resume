export interface Data {
    me: Me;
    home: Home;
    bio: string;
    education: ContentData;
    career: ContentData;
    portfolio: ContentData;
    skillStack: TechSection[];
}

export interface Link {
    title: string;
    href: string;
    icon?: 'home' | 'blog' | 'github' | 'mail' | 'site' | 'android' | 'ios' | 'windows' | '';
    target?: string | '_blank' | '_self';
}

export interface Home {
    title: string;
    subtitle: string;
    intro: string;
    links: Link[];
}

export interface Education extends ContentDataRecord {
    state: '입학' | '졸업';
}

export interface Me {
    name: string;
    photo: string;
}

export interface Career extends ContentDataRecord {
    state: '입사' | '퇴사' | '완료';
}

export interface Portfolio extends ContentDataRecord {
    state: '완료' | '진행중';
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

interface ContentData {
    title: string;
    records: ContentDataRecord[];
}

export interface ContentDataRecord {
    period: string;
    title: string;
    state?: string;
    description?: string;
    features?: string[];
    tags?: string[];
    links?: Link[];
}
