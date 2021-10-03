import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ColorStyles, SizeStyles } from '../../interfaces';
import { Data } from '../../interfaces/Data';
import { Bio } from '../Bio';
import { Content, Section } from '../Layouts';
import { MainPicture } from '../MainPicture';
import { Skill } from '../Skill';

interface Tag {
    tag: string;
    count: number;
    rank: number;
    color?: ColorStyles;
    size?: SizeStyles;
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
                x.color = 'is-link';
                x.size = 'is-large';
            } else if (percentage > 60) {
                x.color = 'is-info';
                x.size = 'is-medium';
            } else {
                x.color = undefined;
            }
        });

    return (
        <React.Fragment>
            <Helmet title={title} />
            <Section
                title={record?.home?.title}
                subtitle={record?.home?.subtitle}
                useHero
                heroColor="is-info"
            />
            <Section>
                <div className={`columns`}>
                    <div className="column is-one-quarter">
                        <MainPicture record={record} />
                    </div>
                    <div className="column">
                        <Bio record={record} title={'about me'.toUpperCase()} />
                    </div>
                    <div className="column">
                        <Skill
                            records={record?.skillStack?.records}
                            title={record?.skillStack?.title?.toUpperCase() ?? ''}
                        />
                    </div>
                </div>
                <div className="columns">
                    {projectTags && projectTags.length > 0 && (
                        <Content>
                            <Section title={'Tags'.toUpperCase()} classNames={['column', 'tags']}>
                                {projectTags
                                    .sort((a, b) => (a.count > b.count ? -1 : 1))
                                    .map((tag) => (
                                        <span
                                            key={tag.tag}
                                            className={`tag ${tag.color ?? ''} ${tag.size ?? ''}`}
                                        >
                                            {tag.tag.toUpperCase()}
                                        </span>
                                    ))}
                            </Section>
                        </Content>
                    )}
                </div>
            </Section>
        </React.Fragment>
    );
};
