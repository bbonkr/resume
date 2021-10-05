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
                resume: resumeFindOne(where: "(username,eq,bbon)") {
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

    return response;
};

exports.getResume = getResume;

exports.handler = async (event, context) => {
    const response = await getResume('bbon');

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(response),
    };
};
