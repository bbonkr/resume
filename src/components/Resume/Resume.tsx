import * as React from 'react';
import { Data } from '../../interfaces';
import { Bio } from '../Bio';
import { Home } from '../Home';
import { Section } from '../Section';
import { Summary } from '../Summary';
import { Contact } from './Contact';
import { GeneralList } from './GeneralList';
import { Header } from './Header';
import { Layout } from './Layout';
import { menus } from './menu';
import { SnsList } from './SnsList';

interface ResumeProps {
    data?: Data;
    isLoading?: boolean;
}

export const Resume = ({ data, isLoading }: ResumeProps) => {
    return (
        <React.Fragment>
            <Header data={data} isLoading={isLoading} />
            <Layout className="flex flex-col justify-center items-center min-h-screen">
                <Section id={menus.home.id} className={`section odd `}>
                    <div className="flex flex-col justify-center items-center  py-6 gap-9">
                        <Bio record={data} isLoading={isLoading} />

                        <SnsList data={data?.me} isLoading={isLoading} />
                    </div>
                </Section>
                <Section id={menus.meta.id} className={`section even`}>
                    <Summary record={data} isLoading={isLoading} />
                </Section>
                <Section id={menus.introduce.id} className={`section odd`}>
                    <Home record={data} isLoading={isLoading} />
                </Section>

                <Section id={menus.career.id} className={`section even`}>
                    <GeneralList
                        title={menus.educations.title}
                        data={data?.education}
                        isLoading={isLoading}
                    />

                    <GeneralList
                        title={menus.works.title}
                        data={data?.career}
                        isLoading={isLoading}
                    />

                    <GeneralList
                        title={menus.experiences.title}
                        data={data?.project}
                        isLoading={isLoading}
                    />
                </Section>

                <Section id={menus.portfolios.id} className={` section odd`}>
                    <GeneralList
                        title={menus.portfolios.title}
                        data={data?.portfolio}
                        isLoading={isLoading}
                    />
                </Section>

                <Section id={menus.certificates.id} className={` section even`}>
                    <GeneralList
                        title={menus.certificates.title}
                        data={data?.certificate}
                        isLoading={isLoading}
                    />
                </Section>

                <Section id={menus.contact.id} className={`section odd print:hidden`}>
                    <Contact title={menus.contact.title} data={data} isLoading={isLoading} />
                </Section>
            </Layout>
        </React.Fragment>
    );
};
