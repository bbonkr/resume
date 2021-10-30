import { Handler, HandlerResponse } from '@netlify/functions';
import { GraphQLClient, gql } from 'graphql-request';
import { data } from '../../src/data/data';
import { Content, Maybe, Resume } from '../../src/graphql/sdk';
import { ContentDataRecord, Data, Link, SkillItem, SkillSection } from '../../src/interfaces';
import { ApiException } from '../../src/interfaces/ApiException';

const parseUrl = (maybeUrl: any): string => {
    let url = '';

    if (typeof maybeUrl === 'string') {
        let parsed;
        try {
            parsed = JSON.parse(maybeUrl);
        } catch {
            parsed = '';
        }

        if (typeof parsed === 'string') {
            url = parsed;
        } else {
            if (Array.isArray(parsed)) {
                const firstItem = parsed.find((_, index) => index === 0);
                if (firstItem) {
                    url = firstItem.url;
                }
            } else {
                url = parsed.url;
            }
        }
    }
    console.info('parseUrl: (parsed, raw)', url, maybeUrl);

    return url;
};

const parseContentData = (content?: Maybe<Content>) => {
    if (typeof content === 'undefined' || !content) {
        return content;
    }

    return {
        title: content?.title ?? '',
        records: content?.content_itemList
            ?.filter((item) => item?.disabled !== 1)
            .map((item) => {
                const record: ContentDataRecord = {
                    title: item?.title ?? '',
                    subtitle: item?.subtitle ?? '',
                    period: item?.period ?? '',
                    description: item?.description ?? '',
                    features: item?.content_featureList
                        ?.map((feature) => feature?.title ?? '')
                        .filter(Boolean),
                    images: item?.images
                        ? [{ src: parseUrl(item?.images), alt: item?.title ?? '' }]
                        : undefined,
                    state: item?.state ?? '',
                    tags: item?.content_tagMMList?.map((tag) => tag?.title ?? '').filter(Boolean),
                    links: item?.content_linkList
                        ?.filter((item) => item?.disabled !== 1)
                        .map((item) => {
                            const link: Link = {
                                href: item?.href ?? '',
                                title: item?.title ?? '',
                                icon: item?.icon ?? '',
                                target: item?.target ?? '',
                            };
                            return link;
                        }),
                };

                return record;
            }),
    };
};

const convertResumeToData = (resume: Resume): Data => {
    const home = resume.homeList?.filter((_, index) => index === 0).find((_, index) => index === 0);
    const career = resume.contentList
        ?.filter((x) => x?.title === 'Work')
        .find((_, index) => index === 0);

    const education = resume.contentList
        ?.filter((x) => x?.title === 'Education')
        .find((_, index) => index === 0);

    const project = resume.contentList
        ?.filter((x) => x?.title === 'Project')
        .find((_, index) => index === 0);

    const portfolio = resume.contentList
        ?.filter((x) => x?.title === 'Portfolio')
        .find((_, index) => index === 0);

    const certificate = resume.contentList
        ?.filter((x) => x?.title === 'Certificate')
        .find((_, index) => index === 0);

    const skill = resume.skillList
        ?.filter((x) => x?.title === 'Skill')
        .find((_, index) => index === 0);

    const generated: Data = {
        me: {
            name: resume.name ?? '',
            photo: parseUrl(resume.photo),
        },
        home: {
            title: home?.title ?? '',
            subtitle: home?.subtitle ?? '',
            intro: home?.intro ?? '',
            bio: home?.bio ?? '',
            links: home?.linkList
                ?.filter((linkItem) => linkItem?.disabled !== 1)
                .map((linkItem) => {
                    const link: Link = {
                        href: linkItem?.href ?? '',
                        title: linkItem?.title ?? '',
                        icon: linkItem?.icon ?? '',
                        target: linkItem?.target ?? '',
                    };
                    return link;
                }),
        },
        career: parseContentData(career),
        education: parseContentData(education),
        project: parseContentData(project),
        portfolio: parseContentData(portfolio),
        certificate: parseContentData(certificate),
        skillStack: {
            title: skill?.title ?? '',
            records: skill?.skill_groupList?.map((group) => {
                const section: SkillSection = {
                    name: group?.title ?? '',
                    icon: group?.icon ?? '',
                    items:
                        group?.skill_itemList
                            ?.filter((item) => item?.disabled !== 1)
                            .map((item) => {
                                const skillItem: SkillItem = {
                                    name: item?.title ?? '',
                                    description: item?.description ?? '',
                                    score: 10.0 * ((item?.score ?? 0) / (item?.scoremax ?? 1)),
                                    href: item?.href ?? '',
                                };

                                return skillItem;
                            }) ?? [],
                };

                return section;
            }),
        },
    };
    return generated;
};

const getResume = async (username: string) => {
    const endpoint = process.env.ENDPOINT || '';
    const token = process.env.ACCESSKEY || '';

    const client = new GraphQLClient(endpoint, {
        headers: {
            'xc-token': token,
        },
        timeout: 2000,
    });

    let response;

    try {
        response = await client.request<{ resume: Resume }>(
            gql`
                query getResume($username: String) {
                    resume: resumeFindOne(condition: { username: { eq: $username } }) {
                        name
                        username
                        photo
                        homeList {
                            title
                            subtitle
                            intro
                            bio
                            linkList {
                                title
                                href
                                icon
                                target
                                disabled
                            }
                        }
                        skillList {
                            title
                            skill_groupList {
                                title
                                icon
                                skill_itemList {
                                    title
                                    score
                                    scoremax
                                    description
                                    href
                                    disabled
                                }
                            }
                        }
                        contentList {
                            id
                            title
                            content_itemList {
                                title
                                subtitle
                                period
                                state
                                description
                                disabled
                                images
                                content_featureList {
                                    title
                                }
                                content_tagMMList {
                                    title
                                }
                                content_linkList {
                                    title
                                    href
                                    icon
                                    target
                                    disabled
                                }
                            }
                        }
                    }
                }
            `,
            { username: username },
        );

        const projectItem = response?.resume?.contentList?.find((x: any) => x.title === 'Project');

        if (projectItem) {
            const projectResponse = await client.request(
                gql`
                {
                    items: content_itemList(where: "(parent,eq,${projectItem.id})", limit: 1000) {
                        title
                        subtitle
                        period
                        state
                        description
                        disabled
                        images
                        content_featureList {
                            title
                        }
                        content_tagMMList {
                            title
                        }
                        content_linkList {
                            title
                            href
                            icon
                            target
                            disabled
                        }
                    }
                }
            `,
            );

            projectItem.content_itemList = projectResponse.items;
        }

        const portfolioItem = response?.resume?.contentList?.find(
            (x: any) => x.title === 'Portfolio',
        );

        if (portfolioItem) {
            const portfolioResponse = await client.request(
                gql`
                {
                    items: content_itemList(where: "(parent,eq,${portfolioItem.id})", limit: 1000) {
                        title
                        subtitle
                        period
                        state
                        description
                        disabled
                        images
                        content_featureList {
                            title
                        }
                        content_tagMMList {
                            title
                        }
                        content_linkList {
                            title
                            href
                            icon
                            target
                            disabled
                        }
                    }
                }
            `,
            );

            portfolioItem.content_itemList = portfolioResponse.items;
        }

        // Convert Resume to Data
        return convertResumeToData(response.resume);
    } catch {
        console.error('API unavailable. Use static data');
        return data;
    }
};

exports.getResume = getResume;

const handler: Handler = async (event, context): Promise<HandlerResponse> => {
    let apiError: ApiException;
    // 7 days
    const expiration = 7 * 24 * 60 * 60;
    let responseHeaders: {
        [header: string]: string | number | boolean;
    } = {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': `private, max-age=${expiration}`,
    };

    if (process.env.NODE_ENV !== 'production') {
        responseHeaders = {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': `private, max-age=${expiration}`,
            'Access-Control-Allow-Origin': '*', // Allow from anywhere
        };
    }

    if (event.httpMethod !== 'GET') {
        apiError = {
            statusCode: 400,
            message: `HTTP ${event.httpMethod} does not support`,
            instance: event.path,
        };
        return {
            statusCode: apiError.statusCode,
            headers: responseHeaders,
            body: JSON.stringify(apiError),
        };
    }

    const username = process.env.USERNAME;

    if (!username) {
        apiError = {
            statusCode: 404,
            message: `Resume data does not find`,
            instance: event.path,
        };
        return {
            statusCode: apiError.statusCode,
            headers: responseHeaders,
            body: JSON.stringify(apiError),
        };
    }

    try {
        const response = await getResume(username);
        // throw new Error('TEST');
        return {
            statusCode: 200,
            headers: responseHeaders,
            body: JSON.stringify(response),
        };
    } catch (err) {
        apiError = {
            statusCode: 500,
            message: 'Data could not fetch at this time. Please try later.',
            instance: event.path,
        };
        return {
            statusCode: 500,
            headers: responseHeaders,
            body: JSON.stringify(apiError),
        };
    }
};

export { handler };