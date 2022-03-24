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
}

export const Summary = ({ record, title }: SummaryProps) => {
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
        .sort((a, b) => (a.rank > b.rank ? -1 : 1))
        .filter((_, index) => index === 0)
        .forEach((x) => {
            maxRank = x.rank;
        });

    projectTags
        .sort((a, b) => (a.rank < b.rank ? -1 : 1))
        .forEach((x) => {
            const percentage = ((maxRank - (x.rank - 1)) / maxRank) * 100;

            if (percentage > 80) {
                x.color = 'border-blue-600 bg-blue-100';
                x.size = 'px-3 py-2';
            } else if (percentage > 60) {
                x.color = 'border-blue-400 bg-blue-100';
                x.size = 'px-3 py-2';
            } else {
                x.color = 'border-blue-200 bg-blue-100';
                x.size = 'px-3 py-2';
            }
            x.size = 'px-3 py-2';
        });

    return (
        <React.Fragment>
            <div className="flex flex-col justify-center items-center gap-9">
                <div
                    className={`flex flex-col md:flex-row justify-around sm:justify-center items-start py-3 gap-9`}
                >
                    <MainPicture record={record} />

                    <Skill
                        records={record?.skillStack?.records}
                        title={record?.skillStack?.title?.toUpperCase() ?? ''}
                        filter={0}
                    />

                    <Skill
                        records={record?.skillStack?.records}
                        title={record?.skillStack?.title?.toUpperCase() ?? ''}
                        filter={1}
                    />
                </div>

                <div className="flex flex-row justify-center items-start flex-wrap gap-3 py-3">
                    {projectTags &&
                        projectTags.length > 0 &&
                        projectTags
                            .sort((a, b) => (a.count > b.count ? -1 : 1))
                            .map((tag) => (
                                <span
                                    key={tag.tag}
                                    className={`border-2 rounded-lg ring-2 ring-blue-100 tag ${
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
