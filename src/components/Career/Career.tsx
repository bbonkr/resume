import React from 'react';
import { Data } from '../../interfaces/Data';

interface CareerProps {
    record: Data;
}

export const Career = ({ record }: CareerProps) => {
    const { career } = record;

    return (
        <div className="card">
            <h2 className="card-title">Career</h2>
            <div className="d-flex flex-column">
                {career
                    .sort((a, b) => (a.period > b.period ? -1 : 1))
                    .map((x) => {
                        return (
                            <div key={x.period} className="">
                                <p>{x.title}</p>
                                <p>
                                    {x.period} {x.state}
                                </p>
                                <p>{x.description}</p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
