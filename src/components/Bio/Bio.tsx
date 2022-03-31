import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Data } from '../../interfaces/Data';

interface BioProps {
    record?: Pick<Data, 'home'> | null;
    title?: string;
    isLoading?: boolean;
}

export const Bio = ({ record, title, isLoading }: BioProps) => {
    if (isLoading) {
        return (
            <div
                key="bio-skelecton"
                className={`flex flex-col justify-center items-center mx-auto w-full animate-pulse`}
            >
                <h2 className="text-lg font-bold my-6">
                    <span className="block w-48 h-9  bg-gray-300"></span>
                </h2>

                <div className="my-3 w-full">
                    <div className="flex flex-col gap-3 justify-center items-center ">
                        <div className=" w-2/3 h-6 bg-gray-300"></div>
                        <div className=" w-3/4 h-6 bg-gray-300"></div>
                        <div className=" w-2/3 h-6 bg-gray-300"></div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={`flex flex-col justify-center items-center mx-auto w-full`}>
            {title && <h2 className="text-lg font-bold my-6">{title}</h2>}

            <div className="my-3">
                <ReactMarkdown className="markdown">{record?.home?.bio ?? ''}</ReactMarkdown>
            </div>
        </div>
    );
};
