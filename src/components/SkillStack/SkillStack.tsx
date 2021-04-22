import React from 'react';
import { FaStar } from 'react-icons/fa';
import { SkillSection } from '../../interfaces/Data';
import { Card, Container } from '../Layouts';
import { Score } from '../Score';

interface SkillStackProps {
    title: string;
    records?: SkillSection[];
}

export const SkillStack = ({ title, records }: SkillStackProps) => {
    return (
        <React.Fragment>
            {records && records.length > 0 && (
                <Container title={title} fullWidth>
                    {records.map((skill) => {
                        return (
                            <Card title={skill.name} className="mb-3" key={skill.name}>
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
                        );
                    })}
                </Container>
            )}
        </React.Fragment>
    );
};
