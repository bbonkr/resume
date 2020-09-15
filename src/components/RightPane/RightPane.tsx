import React from 'react';
import { Data } from '../../interfaces/Data';
import { CardContent } from '../CardContent';
import { Content } from '../Content';
import { Home } from '../Home';
import { SkillStack } from '../SkillStack';

interface RightPaneProps {
    record: Data;
}
export const RightPane = ({ record }: RightPaneProps) => {
    return (
        <div className="col-md-8">
            <Content>
                <Home record={record} />
                <SkillStack {...record.skillStack} />
                <CardContent {...record.education} />
                <CardContent {...record.career} />
                <CardContent {...record.project} />
                <CardContent {...record.portfolio} />
            </Content>
        </div>
    );
};
