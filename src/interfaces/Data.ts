export type Data = {
    site?: SiteInfo | null;
    me?: Me | null;
    home?: Home | null;
    education?: ContentData | null;
    career?: ContentData | null;
    project?: ContentData | null;
    portfolio?: ContentData | null;
    skillStack?: SkillContentData | null;
    certificate?: ContentData | null;
};

export type LinKIcon =
    | 'home'
    | 'blog'
    | 'github'
    | 'mail'
    | 'site'
    | 'android'
    | 'ios'
    | 'windows'
    | 'npm'
    | 'nuget'
    | string;

export type LinkTarget = string | '_blank' | '_self';

type DataSourceType = 'static' | 'nocodb';

export interface SiteInfo {
    name?: string;
    nameEn?: string;
    title?: string;
    titleEn?: string;
    url?: string;
    sourceType?: DataSourceType;
}

export type Link = {
    title: string;
    href: string;
    icon?: LinKIcon;
    target?: LinkTarget;
};

export type Home = {
    title: string;
    subtitle?: string;
    intro?: string;
    bio?: string;
    links?: Link[];
};

export type Education = ContentDataRecord & {
    state: '입학' | '졸업';
};

export type Me = {
    name: string;
    photo?: string;
    twitter?: string;
    github?: string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
};

export type Career = ContentDataRecord & {
    state: '입사' | '퇴사' | '완료';
};

export type Portfolio = ContentDataRecord & {
    state: '완료' | '진행중';
};

export type SkillContentData = {
    title: string;
    records?: SkillSection[];
};

export type SkillSection = {
    name: string;
    icon?: string;
    items: SkillItem[];
};

export type SkillItem = {
    name: string;
    description: string;
    score: number;
    href?: string;
};

export type ContentData = {
    title: string;
    records?: ContentDataRecord[];
};

type ImageData = {
    src: string;
    alt: string;
};

export type ContentDataRecord = {
    period: string;
    title: string;
    subtitle?: string;
    state?: string;
    description?: string;
    features?: string[];
    tags?: string[];
    links?: Link[];
    images?: ImageData[];
};
