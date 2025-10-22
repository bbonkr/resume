import * as React from 'react';

import Head from 'next/head';

import { type GetStaticProps } from 'next';

import { Resume } from '../components/Resume';
import { type Data } from '../interfaces';
import { ResumeBackendDataService } from '../libs/DataService/ResumeBackendDataService';

interface HomePageProps {
    data: Data;
}

const HomePage = ({ data }: HomePageProps) => {
    const siteTitle = data?.site ? `${data?.site?.title} | ${data?.site?.titleEn}` : '이력사항';
    const twitterHandle = data?.me?.twitter;

    return (
        <React.Fragment>
            <Head>
                <title>{siteTitle}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, viewport-fit=cover"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="author" content="bbonkr" />
                <meta property="og:type" content="website" />
                <meta name="msapplication-TileImage" content="/images/bbon-icon-144.png" />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />

                <meta property="og:title" content={siteTitle} />
                <meta property="og:url" content={`${data?.site?.url}`} />
                <meta property="og:image" content={`${data?.site?.url}/images/me.png`} />
                <meta property="og:description" content={siteTitle} />
                <meta property="og:site_name" content={siteTitle} />
                <meta name="theme-color" content="#f6f9fb" />
                <meta name="theme-color" content="#f6f9fb" media="(prefers-color-scheme: light)" />
                <meta name="theme-color" content="#0d1220" media="(prefers-color-scheme: dark)" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/images/bbon-icon-16.png"
                    key="icon-/images/bbon-icon-16.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/images/bbon-icon-32.png"
                    key="icon-/images/bbon-icon-32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="48x48"
                    href="/images/bbon-icon-48.png"
                    key="icon-/images/bbon-icon-48.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="196x196"
                    href="/images/bbon-icon-196.png"
                    key="icon-/images/bbon-icon-196.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/images/bbon-icon-57.png"
                    key="apple-touch-icon-57"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/images/bbon-icon-72.png"
                    key="apple-touch-icon-72"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/images/bbon-icon-114.png"
                    key="apple-touch-icon-114"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/images/bbon-icon-120.png"
                    key="apple-touch-icon-120"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/images/bbon-icon-144.png"
                    key="apple-touch-icon-144"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/images/bbon-icon-152.png"
                    key="apple-touch-icon-152"
                />
                <link rel="manifest" href="/manifest.webmanifest" />

                <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
            </Head>

            {twitterHandle && (
                <Head>
                    <meta name="twitter:site" content={`@${twitterHandle}`} />
                    <meta name="twitter:creator" content={`@${twitterHandle}`} />
                    <meta name="twitter:card" content="summary" />
                </Head>
            )}

            <Resume data={data ?? undefined} isLoading={false} />
        </React.Fragment>
    );
};

export default HomePage;

export const getStaticProps: GetStaticProps<{ data: Data }> = async () => {
    const dataService = new ResumeBackendDataService();
    const data = await dataService.getResume('');
    if (data) {
        return {
            props: {
                data,
            },
            revalidate: 10 * 1000, // 10 seconds
        };
    }
    return {
        notFound: true,
    };
};
