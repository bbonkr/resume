import React from 'react';
import { SkillSection } from '../../interfaces/Data';
import { Content } from '../Content';
import { Score } from '../Score';
import { FaStar } from 'react-icons/fa';
import { Card, Container } from '../Layouts';
import { CardContent } from '../CardContent';

interface SkillProps {
    title: string;
    records?: SkillSection[];
}

export const Skill = ({ title, records }: SkillProps) => {
    return (
        <React.Fragment>
            {records && records.length > 0 && (
                <Container title={title} className="" fullWidth>
                    {records
                        .filter((x, index) => index === 0)
                        .map((item) => {
                            return (
                                <Card className="col" key={item.name}>
                                    <div key={item.name}>
                                        <h6>{item.name}</h6>
                                        <dl>
                                            {item.items.map((x) => {
                                                return (
                                                    <React.Fragment key={x.name}>
                                                        <dt>{x.name}</dt>
                                                        <dd>
                                                            <Score
                                                                score={x.score}
                                                                max={5}
                                                                icon={<FaStar />}
                                                            />
                                                        </dd>
                                                    </React.Fragment>
                                                );
                                            })}
                                        </dl>
                                    </div>
                                </Card>
                            );
                        })}
                </Container>
            )}
        </React.Fragment>
    );
};
