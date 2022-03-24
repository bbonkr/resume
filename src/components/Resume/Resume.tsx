import * as React from 'react';
import { Data } from '../../interfaces';
import { Bio } from '../Bio';
import { Home } from '../Home';
import { Section } from '../Section';
import { Summary } from '../Summary';
import { Header } from './Header';
import { Layout } from './Layout';
import { MenuKey, Menus, menus } from './menu';

interface ResumeProps {
    data?: Data;
}

export const Resume = ({ data }: ResumeProps) => {
    const getBackgroundColor = React.useCallback((records: Menus, id: MenuKey) => {
        const index = Object.values(records).findIndex((x) => x.id === id);

        let className = '';
        if (index < 0) {
            className = 'bg-red-600 dark:bg-red-400 text-slate-50';
        } else if (index % 2 === 1) {
            className = 'bg-slate-200 dark:bg-slate-900';
        } else {
            className = 'bg-slate-100 dark:bg-slate-800';
        }

        console.info('getBackgroundColor', id, index, className);

        return className;
    }, []);

    return (
        <React.Fragment>
            <Header data={data} />
            <Layout className="flex flex-col justify-center items-center min-h-screen">
                <Section
                    id={menus.hello.id}
                    className={`flex flex-col justify-center items-center min-h-screen w-full p-6 py-16 ${getBackgroundColor(
                        menus,
                        menus.hello.id,
                    )}`}
                >
                    <Bio record={data} />
                </Section>
                <Section
                    id={menus.meta.id}
                    className={`bg-slate-100 dark:bg-slate-800 min-h-screen w-full p-6 py-16 ${getBackgroundColor(
                        menus,
                        menus.meta.id,
                    )}`}
                >
                    <Summary record={data} />
                </Section>
                <Section
                    id={menus.introduce.id}
                    className={`flex flex-col justify-center items-center min-h-screen w-full p-6 py-16 md:px-16 ${getBackgroundColor(
                        menus,
                        menus.introduce.id,
                    )}`}
                >
                    <Home record={data} />
                </Section>
            </Layout>
        </React.Fragment>
    );
};
