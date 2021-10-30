import { Handler } from '@netlify/functions';
import { GraphQLClient, gql } from 'graphql-request';
import { data } from '../../src/data/data';
import { Resume } from '../../src/graphql/sdk';

// const convertDataToResume = (): { resume: Resume } => {
//     const resume: Resume = {
//         name: data.me?.name,
//         username: data.me?.name,
//         photo: data.me?.photo,
//         homeList: data.home ? [data.home] : [],
//         skillList: data.skillStack ? [data.skillStack] : [],
//         contentList: [
//             data.career ?? null,
//             data.education ?? null,
//             data.portfolio ?? null,
//             data.project ?? null,
//         ],
//         id: 1,
//     };

//     return { resume };
// };

const getResume = async (name: string) => {
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
            { username: name },
        );

        throw new Error('TEST');

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
    } catch {
        // throw new Error('API unavailable.');
        console.error('API unavailable. Use static data');
        // return convertDataToResume();
        return data;
    }

    return response;
};

exports.getResume = getResume;

const handler: Handler = async (event, context) => {
    try {
        const response = await getResume('bbon');

        // 7 days
        const expiration = 7 * 24 * 60 * 60;

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                // 'Cache-Control': `private, s-maxage=${expiration}, max-age=0`,
                'Cache-Control': `private, max-age=${expiration}`,
                'Access-Control-Allow-Origin': '*', // Allow from anywhere
            },
            body: JSON.stringify(response),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: 'Data could not fetch at this time. Please try later.',
        };
    }
};

export { handler };
