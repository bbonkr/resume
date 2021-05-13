import React from 'react';
import { Helmet } from 'react-helmet';
import { FaStar } from 'react-icons/fa';
import { ColorStyles, TextColorStyles } from '../../interfaces';
import { SkillContentData } from '../../interfaces/Data';
import { Card, Section } from '../Layouts';
import { Score } from '../Score';

interface SkillStackProps {
    title: string;
    record?: SkillContentData;
    useHero?: boolean;
    heroColor?: ColorStyles;
    iconColor?: TextColorStyles;
}

export const SkillStack = ({ title, record, useHero, heroColor, iconColor }: SkillStackProps) => {
    return (
        <React.Fragment>
            <Helmet title={title ?? record?.title} />
            <Section title={title ?? record?.title} useHero={useHero} heroColor={heroColor} />
            {record && record.records && record.records.length > 0 && (
                <Section>
                    <div className="columns">
                        {record.records.map((skill) => {
                            return (
                                <div className="column" key={skill.name}>
                                    <Card title={skill.name} classNames={['mb-4']}>
                                        {skill.items.map((item) => {
                                            return (
                                                <React.Fragment key={item.name}>
                                                    <dt>{item.name}</dt>
                                                    <dd>
                                                        <Score
                                                            score={item.score}
                                                            max={5}
                                                            icon={<FaStar />}
                                                            onClassName={iconColor}
                                                        />
                                                    </dd>
                                                </React.Fragment>
                                            );
                                        })}
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </Section>
            )}
        </React.Fragment>
    );
};
