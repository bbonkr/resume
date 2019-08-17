import React from 'react';
import { Card, Divider, Rate, Row, Col, Icon } from 'antd';
import ContentWrapper from '~/components/ContentWrapper';
import RateCardList from '~/components/RateCardList';
import Data from '~/data/bbon.json';
const { categories } = Data.techStack;

const TechStack = () => {
    return (
        <ContentWrapper>
            <Card>
                <Card.Meta title={<h1>Tech Stack</h1>} />
                <Divider dashed={true} />
                <RateCardList data={categories} />

                {categories &&
                    categories.length > 0 &&
                    categories.map(category => {
                        return (
                            <div
                                key={category.name}
                                style={{ marginBottom: '2.0rem' }}>
                                <h3>{category.name}</h3>
                                <Row type="flex" justify="start" gutter={16}>
                                    {category.items.map(item => {
                                        return (
                                            <Col
                                                xs={24}
                                                sm={12}
                                                md={8}
                                                key={item.name}
                                                style={{
                                                    marginTop: '0.7rem',
                                                }}>
                                                <Card>
                                                    <Card.Meta
                                                        title={
                                                            <h3>{item.name}</h3>
                                                        }
                                                        description={
                                                            item.description
                                                        }
                                                    />
                                                    <Rate
                                                        character={
                                                            <Icon
                                                                type={
                                                                    category.icon ||
                                                                    'heart'
                                                                }
                                                                theme="filled"
                                                            />
                                                        }
                                                        defaultValue={
                                                            item.score
                                                        }
                                                        disabled={true}
                                                    />
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </div>
                        );
                    })}
            </Card>
        </ContentWrapper>
    );
};

export default TechStack;
