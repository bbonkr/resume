import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ColorStyles } from '../../interfaces';
import { Data } from '../../interfaces/Data';
import { GenericLink } from '../GenericLink';
import { Card, Section } from '../Layouts';

interface HomeProps {
    record: Data;
    useHero?: boolean;
    heroColor?: ColorStyles;
}

export const Home = ({ record, useHero, heroColor }: HomeProps) => {
    const { home } = record;
    return (
        <React.Fragment>
            <Section
                title={record.home.title}
                subtitle={record.home.subtitle}
                useHero={useHero}
                heroColor={heroColor}
            />
            <Section>
                <Card classNames={[]}>
                    <ReactMarkdown source={record.home.intro ?? ''} />
                    {home.links && home.links.length > 0 && (
                        <React.Fragment>
                            <hr />
                            <div className="d-flex flex-row justify-content-center flex-wrap mt-10">
                                {home.links.map((x) => {
                                    return (
                                        <div className="mr-20" key={x.href}>
                                            <GenericLink record={x} />
                                        </div>
                                    );
                                })}
                            </div>
                        </React.Fragment>
                    )}
                </Card>
            </Section>
        </React.Fragment>
    );
};
