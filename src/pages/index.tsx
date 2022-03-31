import * as React from 'react';
import { Data } from '../interfaces';
import Head from 'next/head';
import { Resume } from '../components/Resume';
import useSWR from 'swr';
import axios from 'axios';

const HomePage = () => {
    const { data, error, isValidating } = useSWR<Data, Error>(
        '/api/resume',
        async (url) => {
            // await new Promise((resolve, reject) => {
            //     window.setTimeout(resolve, 5000);
            // });

            const response = await axios.get<Data>(url);
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
            return response.data;
        },
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        },
    );

    React.useEffect(() => {
        if (error) {
            console.error(error);
        }
    }, [error]);

    const siteTitle = data?.site ? `${data?.site?.title} | ${data?.site?.titleEn}` : '이력사항';

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
                <meta name="twitter:card" content="summary" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/bbon-icon-16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/bbon-icon-32.png" />
                <link rel="icon" type="image/png" sizes="48x48" href="/images/bbon-icon-48.png" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="196x196"
                    href="/images/bbon-icon-196.png"
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

                <body className="bg-slate-50 dark:bg-slate-900" />
                <html lang="ko" prefix="og: http://ogp.me/ns#" />
            </Head>
            <Resume data={data ?? undefined} isLoading={isValidating} />
        </React.Fragment>
    );
};

export default HomePage;
