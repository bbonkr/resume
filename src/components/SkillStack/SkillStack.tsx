import React from 'react';
import { FaStar } from 'react-icons/fa';
import { ColorStyles } from '../../interfaces';
import { SkillSection } from '../../interfaces/Data';
import { Card, Section } from '../Layouts';
import { Score } from '../Score';

interface SkillStackProps {
    title: string;
    records?: SkillSection[];
    useHero?: boolean;
    heroColor?: ColorStyles;
}

export const SkillStack = ({ title, records, useHero, heroColor }: SkillStackProps) => {
    return (
        <React.Fragment>
            <Section title={title} useHero={useHero} heroColor={heroColor} />
            {records && records.length > 0 && (
                <Section>
                    <div className="columns">
                        {records.map((skill) => {
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
