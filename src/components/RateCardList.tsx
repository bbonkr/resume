import React, { Fragment, memo } from 'react';
import { RateCard } from './RateCard';
import { TechSection as TechSectionModel } from '../interfaces/Data';

interface RateCardListProps {
    records: TechSectionModel[];
}

export const RateCardList = memo(({ records }: RateCardListProps) => {
    return (
        <Fragment>
            {!!records &&
                records.length > 0 &&
                records.map((category) => {
                    const { name, items, icon } = category;
                    return (
                        <div key={name} style={{ marginBottom: '2.0rem' }}>
                            <h3>{name}</h3>
                            {/* <Row type="flex" justify="start" gutter={16}>
                                {items.map(item => {
                                    return (
                                        <Col
                                            xs={24}
                                            sm={12}
                                            md={8}
                                            key={item.name}
                                            style={{
                                                marginTop: '0.7rem',
                                            }}
                                        >
                                            <RateCard
                                                name={item.name}
                                                description={item.description}
                                                score={item.score}
                                                icon={icon || 'heart'}
                                            />
                                        </Col>
                                    );
                                })}
                            </Row> */}
                        </div>
                    );
                })}
        </Fragment>
    );
});
