export type MenuKey =
    | 'home'
    | 'meta'
    | 'introduce'
    | 'educations'
    | 'works'
    | 'experiences'
    | 'career'
    | 'portfolios'
    | 'certificates'
    | 'contact';

export interface MenuItem {
    id: MenuKey;
    title: string;
    isHidden?: boolean;
}

export const menus: Record<MenuKey, MenuItem> = {
    home: { id: 'home', title: 'Home' },
    meta: { id: 'meta', title: 'Meta' },
    introduce: { id: 'introduce', title: 'Introduce' },
    educations: { id: 'educations', title: 'Educations', isHidden: true },
    works: { id: 'works', title: 'Works', isHidden: true },
    experiences: { id: 'experiences', title: 'Experiences', isHidden: true },
    career: { id: 'career', title: 'Careers' },
    portfolios: { id: 'portfolios', title: 'Portfolios' },
    certificates: { id: 'certificates', title: 'Certificates' },
    contact: { id: 'contact', title: 'Contact' },
};

export type Menus = typeof menus;
