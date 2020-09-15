import React from 'react';
import { SkillSection } from '../../interfaces/Data';
import { Content } from '../Content';
import { Score } from '../Score';
import { FaStar } from 'react-icons/fa';

interface SkillProps {
    title: string;
    records?: SkillSection[];
}

export const Skill = ({ title, records }: SkillProps) => {
    return (
        <React.Fragment>
            {records && records.length > 0 && (
                <Content title={title} className="text-left hidden-sm-and-down">
                    {records
                        .filter((x, index) => index === 0)
                        .map((item) => {
                            return (
                                <div key={item.name}>
                                    <h4>{item.name}</h4>
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
                            );
                        })}
                </Content>
            )}
        </React.Fragment>
    );
};
