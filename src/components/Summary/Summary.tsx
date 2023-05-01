import React from 'react';

import { Data } from '../../interfaces/Data';

import { MainPicture } from '../MainPicture';
import { Skill } from '../Skill';

interface Tag {
    tag: string;
    count: number;
    rank: number;
    color?: string; //ColorStyles;
    size?: string; //SizeStyles;
}

interface SummaryProps {
    record?: Data | null;
    title?: string;
    isLoading?: boolean;
}

export const Summary = ({ record, title, isLoading }: SummaryProps) => {
    if (isLoading) {
        return (
            <div
                key="summary-skelecton"
                className="animate-pulse flex flex-col justify-center items-center gap-9"
            >
                <div className=" flex flex-col md:flex-row justify-center items-center md:items-start sm:justify-center py-3 gap-12 w-full">
                    <div className="flex flex-shrink-0 w-300 h-300 bg-gray-300 rounded-full"></div>

                    <div className=" w-full flex flex-col space-y-3">
                        <div className="w-full bg-gray-300 h-8 rounded-md "></div>
                        <div className="w-full h-6 rounded-md "></div>
                        <div className="w-full bg-gray-300 h-8 rounded-md "></div>
                        <div className="w-4/5 bg-gray-300 h-8 rounded-md "></div>
                        <div className="w-2/3 bg-gray-300 h-8 rounded-md "></div>
                        <div className="w-full bg-gray-300 h-8 rounded-md "></div>
                        <div className="w-full bg-gray-300 h-8 rounded-md "></div>
                    </div>

                    <div className=" w-full flex flex-col space-y-3">
                        <div className="w-full bg-gray-300 h-8 rounded-md "></div>
                        <div className="w-full h-6 rounded-md "></div>
                        <div className="w-full bg-gray-300 h-8 rounded-md "></div>
                        <div className="w-4/5 bg-gray-300 h-8 rounded-md "></div>
                        <div className="w-2/3 bg-gray-300 h-8 rounded-md "></div>
                        <div className="w-full bg-gray-300 h-8 rounded-md "></div>
                        <div className="w-full bg-gray-300 h-8 rounded-md "></div>
                    </div>
                </div>

                <div className="flex flex-row flex-wrap justify-center items-stretch w-full h-full mt-9 gap-6">
                    {Array(6)
                        .fill(0)
                        .map((item, index) => (
                            <div key={index} className="w-32 bg-gray-300 h-10 rounded-md "></div>
                        ))}
                </div>
            </div>
        );
    }

    const projectTags: Tag[] = [];
    record?.project?.records?.forEach((x) => {
        x.tags?.forEach((tag) => {
            const found = projectTags.find((x) => x.tag.toLowerCase() === tag.toLowerCase());
            if (found) {
                found.count += 1;
            } else {
                projectTags.push({ tag: tag, count: 1, rank: 0, color: 'is-primary' });
            }
        });
    });

    record?.portfolio?.records?.forEach((x) => {
        x.tags?.forEach((tag) => {
            const found = projectTags.find((x) => x.tag.toLowerCase() === tag.toLowerCase());
            if (found) {
                found.count += 1;
            } else {
                projectTags.push({ tag: tag, count: 1, rank: 0, color: 'is-primary' });
            }
        });
    });

    projectTags
        .slice()
        .sort((a, b) => (a.count > b.count ? -1 : 1))
        .forEach((x, index, arr) => {
            if (index === 0) {
                x.rank = 1;
            } else {
                const prevRank = arr[index - 1].rank;
                const prevCount = arr[index - 1].count;
                if (prevCount > x.count) {
                    x.rank = prevRank + 1;
                } else {
                    x.rank = prevRank;
                }
            }
        });

    let maxRank = 0;
    projectTags
        .slice()
        .sort((a, b) => (a.rank > b.rank ? -1 : 1))
        .filter((_, index) => index === 0)
        .forEach((x) => {
            maxRank = x.rank;
        });

    projectTags
        .slice()
        .sort((a, b) => (a.rank < b.rank ? -1 : 1))
        .forEach((x) => {
            const percentage = ((maxRank - (x.rank - 1)) / maxRank) * 100;

            if (percentage > 80) {
                x.color = 'border-blue-600 bg-blue-600 dark:bg-blue-900 dark:ring-blue-300';
                x.size = 'px-3 py-2';
            } else if (percentage > 60) {
                x.color = 'border-blue-300 bg-blue-300 dark:bg-blue-700 dark:ring-blue-400';
                x.size = 'px-3 py-2';
            } else if (percentage > 40) {
                x.color = 'border-blue-200 bg-blue-200 dark:bg-blue-600 dark:ring-blue-400';
                x.size = 'px-3 py-2';
            } else {
                x.color = 'border-blue-100 bg-blue-100 dark:bg-blue-500 dark:ring-blue-400';
                x.size = 'px-3 py-2';
            }
            x.size = 'px-3 py-2';
        });

    return (
        <React.Fragment>
            <div className={`flex flex-col justify-center items-center gap-9 `}>
                <div
                    className={`flex flex-col md:flex-row justify-center items-center md:items-start sm:justify-center py-3 gap-12 w-full`}
                >
                    {isLoading ? (
                        <div
                            key="main-picture-skelecton"
                            className="flex flex-shrink-0 w-300 h-300 bg-gray-300 rounded-full"
                        ></div>
                    ) : (
                        <MainPicture record={record} className="rounded-full flex-1 w-300 h-300" />
                    )}

                    <Skill
                        records={record?.skillStack?.records}
                        title={record?.skillStack?.title?.toUpperCase() ?? ''}
                        filter={0}
                        className="flex-1 w-full"
                        isLoading={isLoading}
                    />

                    <Skill
                        records={record?.skillStack?.records}
                        title={record?.skillStack?.title?.toUpperCase() ?? ''}
                        filter={1}
                        className="flex-1 w-full"
                        isLoading={isLoading}
                    />
                </div>

                <div className="flex flex-row justify-center items-start flex-wrap gap-3 py-3">
                    {isLoading
                        ? Array(6)
                              .fill(0)
                              .map((_, index) => (
                                  <span
                                      key={`summary-tag-${index + 1}-skelecton`}
                                      className={`block w-24 h-9 bg-gray-300`}
                                  ></span>
                              ))
                        : projectTags &&
                          projectTags.length > 0 &&
                          projectTags
                              .slice()
                              .sort((a, b) => (a.count > b.count ? -1 : 1))
                              .filter((x) => x.count > 1)
                              .map((tag) => (
                                  <span
                                      key={tag.tag}
                                      className={`border-1 rounded-lg ring-2 ring-blue-100 tag ${
                                          tag.color ?? ''
                                      } ${tag.size ?? ''}`}
                                  >
                                      {tag.tag.toUpperCase()}
                                  </span>
                              ))}
                </div>
            </div>
        </React.Fragment>
    );
};
