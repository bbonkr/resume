import React from 'react';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { ColorStyles } from '../../interfaces';
import { Data } from '../../interfaces/Data';
import { GenericLink } from '../GenericLink';
import { Card, Section } from '../Layouts';

interface HomeProps {
    record?: Pick<Data, 'home'> | null;
    title?: string;
    useHero?: boolean;
    heroColor?: ColorStyles;
}

export const Home = ({ record, title, useHero, heroColor }: HomeProps) => {
    return (
        <React.Fragment>
            <Helmet title={title ?? record?.home?.title} />
            <Section
                title={record?.home?.title}
                subtitle={record?.home?.subtitle}
                useHero={useHero}
                heroColor={heroColor}
            />
            <Section>
                <Card classNames={[]}>
                    <ReactMarkdown children={record?.home?.intro ?? ''} />
                    {record?.home?.links && record?.home.links.length > 0 && (
                        <React.Fragment>
                            <hr />
                            <div className="is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
                                {record?.home.links.map((x) => {
                                    return (
                                        <div className="mr-4" key={x.href}>
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
