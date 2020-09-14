import React from 'react';
import { Data } from '../../interfaces/Data';

interface EducationProps {
    record: Data;
}

export const Education = ({ record }: EducationProps) => {
    const { education } = record;

    return (
        <div className="card">
            <h2 className="card-title">Education</h2>
            <div className="d-flex flex-column">
                {education
                    .sort((a, b) => (a.period > b.period ? -1 : 1))
                    .map((x) => {
                        return (
                            <div key={x.period} className="">
                                <p>{x.title}</p>
                                <p>
                                    {x.period} {x.state}
                                </p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
