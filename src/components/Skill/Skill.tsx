import React from 'react';
import { SkillSection } from '../../interfaces/Data';
import { ScoreBar } from '../Score';

interface SkillProps {
    title: string;
    records?: SkillSection[] | null;
    filter?: string | number;
    className?: string;
}

export const Skill = ({ title, className, records, filter }: SkillProps) => {
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
                            <div className={`${className}`} key={item.name}>
                                <h4 className="font-semibold">{item.name}</h4>
                                <dl className="flex flex-col flex-wrap gap-1 ">
                                    {item.items.map((x) => {
                                        return (
                                            <React.Fragment key={x.name}>
                                                <dt className="font-bold">{x.name}</dt>
                                                <dd className="flex flex-row gap-1 h-8 bg-slate-400 dark:bg-slate-500 relative">
                                                    <ScoreBar
                                                        className="h-8 bg-slate-900 dark:bg-slate-200"
                                                        value={x.score}
                                                        maxValue={10}
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
