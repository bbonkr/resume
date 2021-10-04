import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ColorStyles, TextColorStyles } from '../../interfaces';
import { SkillContentData } from '../../interfaces/Data';
import { Section } from '../Layouts';
import { SkillStackSection } from './Section';

interface SkillStackProps {
    title: string;
    record?: SkillContentData | null;
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
                            return <SkillStackSection record={skill} iconOnClassName={iconColor} />;
                        })}
                    </div>
                </Section>
            )}
        </React.Fragment>
    );
};
