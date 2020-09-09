import React, { memo } from 'react';
import { Card, Rate } from 'antd';
import Icon from '@ant-design/icons';

interface RateCardProps {
    name: string;
    description: string;
    icon: string;
    score: number;
}

export const RateCard = memo(({ name, description, icon, score }: RateCardProps) => {
    return (
        <Card>
            <Card.Meta title={<h3>{name}</h3>} description={description} />
            <Rate character={(<Icon type={icon || 'heart'}
                // theme="filled"
            />)} defaultValue={score} disabled={true} />
        </Card>
    );
});
