export type MenuKey = 'hello' | 'meta' | 'introduce';

export interface MenuItem {
    id: MenuKey;
    title: string;
}

export const menus: Record<MenuKey, MenuItem> = {
    hello: { id: 'hello', title: 'Hello' },
    meta: { id: 'meta', title: 'Meta' },
    introduce: { id: 'introduce', title: 'Introduce' },
};

export type Menus = typeof menus;
