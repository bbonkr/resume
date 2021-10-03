const { GraphQLClient, gql } = require('graphql-request');

exports.handler = async (event) => {
    // const subject = event.queryStringParameters.name || 'World';

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
                resume: ResumeFindOne(where: "(username,eq,bbon)") {
                    name
                    username
                    photo
                    HomeList {
                        title
                        subtitle
                        intro
                        bio
                        LinkList {
                            title
                            href
                            icon
                            target
                            disabled
                        }
                    }
                    ContentList {
                        title
                        ContentItemList {
                            title
                            subtitle
                            period
                            state
                            description
                            disabled
                            images
                            ContentFeatureList {
                                title
                            }
                            ContentTagMMList {
                                title
                            }
                            ContentLinkList {
                                title
                                href
                                icon
                                target
                                disabled
                            }
                        }
                    }
                    SkillList {
                        title
                        SkillGroupList {
                            title
                            icon
                            SkillItemList {
                                title
                                score
                                scoremax
                                description
                                href
                                disabled
                            }
                        }
                    }
                }
            }
        `,
    );

    return {
        statusCode: 200,
        body: response,
    };
};
