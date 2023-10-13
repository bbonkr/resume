import React from 'react';
import { SkillSection } from '../../interfaces/Data';
import { ScoreBar } from '../Score';

interface SkillProps {
    title: string;
    records?: SkillSection[] | null;
    filter?: string | number;
    className?: string;
    isLoading?: boolean;
}

export const Skill = ({ title, className, records, filter, isLoading }: SkillProps) => {
    return (
        <React.Fragment>
            {isLoading ? (
                <div key="skill-skelecton" className=" w-full flex flex-col space-y-3">
                    <div className="w-full bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-full h-6 rounded-md "></div>
                    <div className="w-full bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-4/5 bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-2/3 bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-full bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-full bg-gray-300 h-6 rounded-md "></div>
                </div>
            ) : (
                records &&
                records.length > 0 &&
                records
                    .slice()
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
                                                        maxValue={x.scoreMax ?? 10}
                                                    />
                                                </dd>
                                            </React.Fragment>
                                        );
                                    })}
                                </dl>
                            </div>
                        );
                    })
            )}
        </React.Fragment>
    );
};
