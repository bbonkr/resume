/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { ContentData } from '../../interfaces';
import { GenericLink } from '../GenericLink';
import { Picture } from './Picture';
import { Markdown } from '../Markdown';

interface GeneralListProps {
    title?: string;
    data?: ContentData | null;
    isLoading?: boolean;
}

export const GeneralList = ({ title, data, isLoading }: GeneralListProps) => {
    if (isLoading) {
        return (
            <div
                key="generallist-skelecton"
                className="w-full flex flex-col md:flex-row justify-center items-start my-9 border-b-2 border-slate-500 dark:border-slate-400 last:border-0 animate-pulse"
            >
                <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-end px-9 py-9 md:max-w-xs ">
                    <h2 className="font-semibold">
                        <span className="block w-48 h-6 bg-gray-300"></span>
                    </h2>
                </div>
                <div className="w-full md:w-2/3 flex flex-col justify-center items-start break-words">
                    {Array(2)
                        .fill(0)
                        .map((item, index) => {
                            return (
                                <div
                                    key={`${item}-${index}`}
                                    className="my-9 break-words w-full max-w-full"
                                >
                                    <h3 className="font-bold break-words overflow-ellipsis">
                                        <span className="block w-64 h-6 bg-gray-300"></span>
                                    </h3>
                                    <p className="text-sm my-1">
                                        <span className="block w-full h-6 bg-gray-300"></span>
                                    </p>
                                    <p>
                                        <span className="block w-full h-6 bg-gray-300"></span>
                                    </p>

                                    <div>
                                        {Array(2)
                                            .fill(0)
                                            .map((link, index) => {
                                                return (
                                                    <div className="py-2" key={`${link}-${index}`}>
                                                        <span className="w-1/3 h-8 block bg-gray-300"></span>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }

    return (
        <div
            className={`${
                isLoading ? 'animate-pulse' : ''
            } w-full flex flex-col md:flex-row justify-center items-start my-9 border-b-2 border-slate-500 dark:border-slate-400 last:border-0`}
        >
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-end px-9 py-9 md:max-w-xs ">
                <h2 className="font-semibold"> {title ?? data?.title}</h2>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center items-start break-words">
                {data?.records?.map((item) => {
                    return (
                        <div
                            key={`${item.title}-${item.state}`}
                            className="my-9 break-words max-w-full"
                        >
                            <h3 className="font-bold break-words overflow-ellipsis">
                                {item.title}
                            </h3>
                            <p className="text-sm">
                                {item.period} {item.state}
                            </p>
                            {item.description && (
                                <Markdown className="markdown" markdown={item.description} />
                            )}

                            {item.links && (
                                <ul>
                                    {item.links.map((link) => {
                                        return (
                                            <li className="py-2" key={link.href}>
                                                <GenericLink
                                                    className="flex flex-row justify-start items-center max-w-full"
                                                    record={link}
                                                />
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}

                            {item.images && (
                                <ul className="max-w-full">
                                    {item.images.map((img) => {
                                        return (
                                            <li key={img.src} className="py-2">
                                                {/* <Image
                                                    src={img.src}
                                                    alt={img.alt}
                                                    width={300}
                                                    height={300}
                                                    objectFit="cover"
                                                    loading="lazy"
                                                /> */}
                                                {/* <img
                                                    src={img.src}
                                                    alt={img.alt}
                                                    title={img.alt}
                                                    loading="lazy"
                                                /> */}
                                                <Picture
                                                    imageProps={{
                                                        src: img.src,
                                                        alt: img.alt,
                                                        title: img.alt,
                                                        loading: 'lazy',
                                                    }}
                                                />
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}

                            {item.tags && (
                                <div className="flex flex-row flex-wrap gap-3 pt-3 dark:opacity-70">
                                    {item.tags.map((tag) => {
                                        return (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 rounded-lg border-2 border-blue-200 bg-blue-100 dark:border-blue-500 dark:bg-blue-800"
                                            >
                                                {tag}
                                            </span>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
