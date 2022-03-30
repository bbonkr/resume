import * as React from 'react';
import axios from 'axios';
import { Data } from '../interfaces';
import Head from 'next/head';
import { Resume } from '../components/Resume';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
    const url = `${process.env.HOST}/api/resume`;
    const response = await axios.get<Data>(url);

    if (response.status === 200) {
        return {
            props: {
                data: response.data,
            },
        };
    } else {
        return {
            notFound: true,
        };
    }
};

interface HomePageProps {
    data: Data | null;
}

const HomePage = ({ data }: HomePageProps) => {
    const siteTitle = `${data?.site?.title} | ${data?.site?.titleEn}`;
    return (
        <React.Fragment>
            <Head>
                <meta property="og:title" content={siteTitle} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${data?.site?.url}`} />
                <meta property="og:image" content={`${data?.site?.url}/images/me.png`} />
                <meta property="og:description" content={siteTitle} />
                <meta property="og:site_name" content={siteTitle} />

                {data?.me?.twitter && (
                    <meta name="twitter:site" content={`@${data?.me?.twitter}`} />
                )}

                {data?.me?.twitter && (
                    <meta name="twitter:creator" content={`@${data.me?.twitter}`} />
                )}

                <title>{siteTitle}</title>
            </Head>
            <Resume data={data ?? undefined} />
        </React.Fragment>
    );
};

export default HomePage;
