import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Data } from '../../interfaces/Data';
import { GenericLink } from '../GenericLink';

interface BioProps {
    record?: Pick<Data, 'home'> | null;
    title?: string;
}

export const Bio = ({ record, title }: BioProps) => {
    return (
        <div className={`flex flex-col justify-center items-center mx-auto`}>
            {title && <h2 className="text-lg font-bold my-6">{title}</h2>}
            <div className="my-3">
                <ReactMarkdown className="markdown">{record?.home?.bio ?? ''}</ReactMarkdown>

                {record?.home?.links && record?.home.links.length > 0 && (
                    <ul className="flex flex-row flex-wrap justify-center items-center gap-3 my-6">
                        {record?.home.links.map((x) => {
                            return (
                                <li className="mx-3 flex-1" key={x.href}>
                                    <GenericLink
                                        className="flex justify-center items-center"
                                        record={x}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};
