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
                <html lang="ko" prefix="og: http://ogp.me/ns#" />
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, viewport-fit=cover"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="author" content="bbonkr" />
                <meta property="og:title" content={siteTitle} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${data?.site?.url}`} />
                <meta property="og:image" content={`${data?.site?.url}/images/me.png`} />
                <meta property="og:description" content={siteTitle} />
                <meta property="og:site_name" content={siteTitle} />
                <meta name="msapplication-TileImage" content="/images/bbon-icon-144.png" />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta name="twitter:card" content="summary" />
                {data?.me?.twitter && (
                    <React.Fragment>
                        <meta name="twitter:site" content={`@${data?.me?.twitter}`} />
                        <meta name="twitter:creator" content={`@${data.me?.twitter}`} />
                    </React.Fragment>
                )}
                <link rel="icon" type="image/png" sizes="16x16" href="/images/bbon-icon-16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/bbon-icon-32.png" />
                <link rel="icon" type="image/png" sizes="48x48" href="/images/bbon-icon-48.png" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="196x196"
                    href="/images/bbon-icon-196.png"
                />
                <link rel="apple-touch-icon" sizes="57x57" href="/images/bbon-icon-57.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/images/bbon-icon-72.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/images/bbon-icon-114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/images/bbon-icon-120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/images/bbon-icon-144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/images/bbon-icon-152.png" />
                <link rel="manifest" href="/manifest.webmanifest" />
                <title>{siteTitle}</title>
                <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
            </Head>
            <Resume data={data ?? undefined} />
        </React.Fragment>
    );
};

export default HomePage;
