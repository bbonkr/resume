import React from 'react';
import { FaStar, FaThumbsUp } from 'react-icons/fa';
import { SkillSection } from '../../interfaces';
import { Card } from '../Layouts';
import { Score } from '../Score';

interface SkillStackSectionProps {
    record?: SkillSection;
    iconOnClassName?: string;
}

export const SkillStackSection = ({ record, iconOnClassName }: SkillStackSectionProps) => {
    if (!record) {
        return <React.Fragment></React.Fragment>;
    }

    const icon = record.icon === 'like' ? <FaThumbsUp /> : <FaStar />;

    return (
        <div className="column" key={record?.name}>
            <Card title={record?.name} classNames={['mb-4']}>
                {record?.items.map((item) => {
                    return (
                        <React.Fragment key={item.name}>
                            <dl>
                                <dt>{item.name}</dt>
                                <dd>
                                    <Score
                                        score={item.score}
                                        max={10}
                                        icon={icon}
                                        onClassName={iconOnClassName}
                                    />
                                </dd>
                            </dl>
                        </React.Fragment>
                    );
                })}
            </Card>
        </div>
    );
};
