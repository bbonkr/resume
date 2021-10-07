const { GraphQLClient, gql } = require('graphql-request');

const getResume = async (name) => {
    const endpoint = process.env.ENDPOINT || '';
    const token = process.env.ACCESSKEY || '';

    const client = new GraphQLClient(endpoint, {
        headers: {
            'xc-token': token,
        },
    });

    const response = await client.request(
        gql`
            {
                resume: resumeFindOne(where: "(username,eq,${name})") {
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
    );

    const projectItem = response.resume.contentList.find((x) => x.title === 'Project');

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

    const portfolioItem = response.resume.contentList.find((x) => x.title === 'Portfolio');

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

    return response;
};

exports.getResume = getResume;

exports.handler = async (event, context) => {
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
