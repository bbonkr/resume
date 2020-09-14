import React from 'react';
import { Data } from '../../interfaces/Data';
import { Career } from '../Career';
import { Content } from '../Content';
import { Education } from '../Education';
import { Home } from '../Home';
import { Portfolio } from '../Portfolio';
interface RightPaneProps {
    record: Data;
}
export const RightPane = ({ record }: RightPaneProps) => {
    return (
        <div className="col-md-8">
            <Content>
                <Home record={record} />
                <Education record={record} />
                <Career record={record} />
                <Portfolio record={record} />
            </Content>
        </div>
    );
};
