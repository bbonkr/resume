import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ColorStyles } from '../../interfaces';
import { Data } from '../../interfaces/Data';
import { GenericLink } from '../GenericLink';

interface HomeProps {
    record?: Pick<Data, 'home'> | null;
    title?: string;
    useHero?: boolean;
    heroColor?: ColorStyles;
    showLinks?: boolean;
}

export const Home = ({ record, title, useHero, heroColor, showLinks }: HomeProps) => {
    return (
        <React.Fragment>
            <div>
                {title && <h2>{title}</h2>}
                <ReactMarkdown className="markdown">{record?.home?.intro ?? ''}</ReactMarkdown>
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
