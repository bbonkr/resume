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
}

export const Resume = ({ data }: ResumeProps) => {
    return (
        <React.Fragment>
            <Header data={data} />
            <Layout className="flex flex-col justify-center items-center min-h-screen">
                <Section id={menus.home.id} className={`section odd `}>
                    <div className="flex flex-col justify-center items-center  py-6 gap-9">
                        <Bio record={data} />

                        <SnsList data={data?.me} />
                    </div>
                </Section>
                <Section id={menus.meta.id} className={`section even`}>
                    <Summary record={data} />
                </Section>
                <Section id={menus.introduce.id} className={`section odd`}>
                    <Home record={data} />
                </Section>

                <Section id={menus.career.id} className={`section even`}>
                    <GeneralList title={menus.educations.title} data={data?.education} />

                    <GeneralList title={menus.works.title} data={data?.career} />

                    <GeneralList title={menus.experiences.title} data={data?.project} />
                </Section>

                <Section id={menus.portfolios.id} className={` section odd`}>
                    <GeneralList title={menus.portfolios.title} data={data?.portfolio} />
                </Section>

                <Section id={menus.certificates.id} className={` section even`}>
                    <GeneralList title={menus.certificates.title} data={data?.certificate} />
                </Section>

                <Section id={menus.contact.id} className={`section odd print:hidden`}>
                    <Contact title={menus.contact.title} data={data} />
                </Section>
            </Layout>
        </React.Fragment>
    );
};
