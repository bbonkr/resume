import React from 'react';
import { FaStar } from 'react-icons/fa';
import { SkillSection } from '../../interfaces/Data';
import { Score } from '../Score';

interface SkillStackProps {
    title: string;
    records: SkillSection[];
}

export const SkillStack = ({ title, records }: SkillStackProps) => {
    return (
        <div className="card mx-0">
            <h2 className="card-title">{title}</h2>
            <div className="d-flex flex-column">
                {records.map((skill) => {
                    return (
                        <div key={`${skill.name}`} className="content ml-0 mr-0">
                            <h3 className="content-title">{skill.name}</h3>
                            {skill.items.map((item) => {
                                return (
                                    <React.Fragment key={item.name}>
                                        <dt>{item.name}</dt>
                                        <dd>
                                            <Score score={item.score} max={5} icon={<FaStar />} />
                                        </dd>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
