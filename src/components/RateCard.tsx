import React, { memo } from 'react';
import { Card, Rate, Icon } from 'antd';

interface RateCardProps {
    name: string;
    description: string;
    icon: string;
    score: number;
}

export const RateCard: React.FC<RateCardProps> = memo(({ name, description, icon, score }) => {
    return (
        <Card>
            <Card.Meta title={<h3>{name}</h3>} description={description} />
            <Rate character={<Icon type={icon || 'heart'} theme="filled" />} defaultValue={score} disabled={true} />
        </Card>
    );
});
