import * as React from 'react';
import { Data } from '../../interfaces';
import { Section } from '../Section';
import { Header } from './Header';
import { Layout } from './Layout';

interface ResumeProps {
    data?: Data;
}

export const Resume = ({ data }: ResumeProps) => {
    return (
        <React.Fragment>
            <Header data={data} />
            <Layout className="flex flex-col justify-center items-center min-h-screen">
                <Section id="sample1" className="bg-green-600 h-screen w-full p-6 py-16">
                    <div className="pt-8">
                        <h1>{data?.site?.title} #1</h1>
                    </div>
                </Section>
                <Section id="sample2" className="bg-blue-500 h-screen w-full p-6 py-16">
                    <div className="pt-8">
                        <h1>{data?.site?.title} #2</h1>
                    </div>
                </Section>
                <Section id="sample3" className="bg-red-500 h-screen w-full p-6 py-16">
                    <div className="pt-8">
                        <h1>{data?.site?.title} #2</h1>
                    </div>
                </Section>
            </Layout>
        </React.Fragment>
    );
};
