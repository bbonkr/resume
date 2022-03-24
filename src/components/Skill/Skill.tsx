import React from 'react';
import { SkillSection } from '../../interfaces/Data';
import { Score } from '../Score';
import { FaStar, FaThumbsUp } from 'react-icons/fa';

interface SkillProps {
    title: string;
    records?: SkillSection[] | null;
    filter?: string | number;
}

export const Skill = ({ title, records, filter }: SkillProps) => {
    console.info('Skill', records);
    return (
        <React.Fragment>
            {records &&
                records.length > 0 &&
                records
                    .filter((x, index) =>
                        typeof filter === 'string'
                            ? x.name === filter
                            : typeof filter === 'number'
                            ? index === filter
                            : index === 0,
                    )
                    .map((item) => {
                        return (
                            <div key={item.name}>
                                <h4>{item.name}</h4>
                                <dl className="flex flex-col flex-wrap gap-1 ">
                                    {item.items.map((x) => {
                                        return (
                                            <React.Fragment key={x.name}>
                                                <dt>{x.name}</dt>
                                                <dd className="flex flex-row gap-1">
                                                    <Score
                                                        score={x.score}
                                                        max={10}
                                                        onClassName={`text-blue-600`}
                                                        offClassName={`text-blue-50`}
                                                        icon={
                                                            item.icon === 'like' ? (
                                                                <FaThumbsUp />
                                                            ) : (
                                                                <FaStar />
                                                            )
                                                        }
                                                    />
                                                </dd>
                                            </React.Fragment>
                                        );
                                    })}
                                </dl>
                            </div>
                        );
                    })}
        </React.Fragment>
    );
};
