import React, { Fragment } from 'react';
import { ContentWrapper } from '../components/ContentWrapper';
import { LinkAnchor } from '../components/LinkAnchor';
import { Home as HomeModel } from '../interfaces/Data';

interface HomeProps {
    record: HomeModel;
}

export const Home: React.FC<HomeProps> = ({ record }) => {
    return (
        <ContentWrapper>
            {/* <Card>
                <p>{record.intro}</p>

                {record.links && record.links.length > 0 && (
                    <div>
                        <h4>관련 사이트</h4>
                        <ul>
                            {record.links.map((link, linkIndex) => {
                                return (
                                    <li key={`${linkIndex}`}>
                                        <LinkAnchor
                                            title={link.title}
                                            href={link.href}
                                            icon={link.icon || 'link'}
                                            target={link.target}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </Card> */}
        </ContentWrapper>
    );
};
