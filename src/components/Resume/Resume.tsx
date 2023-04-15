import * as React from 'react';
import dynamic from 'next/dynamic';
import { type Data } from '../../interfaces';
import { menus } from './menu';

const Bio = dynamic(
    import('../Bio').then((m) => m.Bio),
    { ssr: false },
);
const Home = dynamic(
    import('../Home').then((m) => m.Home),
    { ssr: false },
);
const Section = dynamic(
    import('../Section').then((m) => m.Section),
    { ssr: false },
);
const Summary = dynamic(
    import('../Summary').then((m) => m.Summary),
    { ssr: false },
);
const Contact = dynamic(
    import('./Contact').then((m) => m.Contact),
    { ssr: false },
);
const GeneralList = dynamic(
    import('./GeneralList').then((m) => m.GeneralList),
    { ssr: false },
);
const Header = dynamic(
    import('./Header').then((m) => m.Header),
    { ssr: false },
);
const Layout = dynamic(
    import('./Layout').then((m) => m.Layout),
    { ssr: false },
);
const SnsList = dynamic(
    import('./SnsList').then((m) => m.SnsList),
    { ssr: false },
);

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
