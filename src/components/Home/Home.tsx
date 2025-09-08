import React from 'react';

import { ColorStyles } from '../../interfaces';
import { Data } from '../../interfaces/Data';
import { GenericLink } from '../GenericLink';
import { Markdown } from '../Markdown';

interface HomeProps {
    record?: Pick<Data, 'home'> | null;
    title?: string;
    useHero?: boolean;
    heroColor?: ColorStyles;
    showLinks?: boolean;
    isLoading?: boolean;
}

export const Home = ({ record, title, useHero, heroColor, showLinks, isLoading }: HomeProps) => {
    if (isLoading) {
        return (
            <div
                key="home-skelecton"
                className="flex flex-row justify-center items-center flex-wrap my-6 gap-9"
            >
                {Array(2)
                    .fill(0)
                    .map((item, index) => (
                        <div
                            key={`home-skelecton-${index}`}
                            className="flex animate-pulse flex-row items-center w-full h-full justify-center "
                        >
                            <div className="flex-1 flex flex-col gap-3">
                                <div className="w-64 bg-gray-300 h-6 rounded-md "></div>
                                <div className="w-full bg-gray-300 h-6 rounded-md "></div>
                                <div className="w-4/5 bg-gray-300 h-6 rounded-md "></div>
                                <div className="w-2/3 bg-gray-300 h-6 rounded-md "></div>
                                <div className="w-full bg-gray-300 h-6 rounded-md "></div>
                            </div>
                        </div>
                    ))}
            </div>
        );
    }

    return (
        <React.Fragment>
            <div
                className={`${
                    isLoading ? 'animate-pulse' : ''
                } w-full flex flex-col md:flex-row justify-center items-start my-9 border-b-2 border-slate-500 dark:border-slate-400 last:border-0`}
            >
                {title && <h2>{title}</h2>}
                <Markdown className="markdown" markdown={record?.home?.intro} />

                {showLinks && record?.home?.links && record?.home.links.length > 0 && (
                    <React.Fragment>
                        <ul className="flex flex-row justify-center items-center flex-wrap my-6 gap-3">
                            {record?.home.links.map((x) => {
                                return (
                                    <li className="mr-4" key={x.href}>
                                        <GenericLink className="flex" record={x} />
                                    </li>
                                );
                            })}
                        </ul>
                    </React.Fragment>
                )}
            </div>
        </React.Fragment>
    );
};
