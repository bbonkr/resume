import { GraphQLClient, gql } from 'graphql-request';
import { useCallback, useEffect, useState } from 'react';
import useSWR, { Key } from 'swr';
import { Content, Maybe, Resume } from '../../graphql/sdk';
import { ContentDataRecord, Data, Link, SkillItem, SkillSection, Home } from '../../interfaces';

export const useGraphQL = <TResponseData>(key: Key | [Key], query: string) => {
    const endpoint = process.env.ENDPOINT ?? '';
    const token = process.env.ACCESSKEY ?? '';

    const client = new GraphQLClient(endpoint, {
        headers: {
            'xc-token': token,
        },
    });

    return useSWR<TResponseData>(key, (_) => client.request<TResponseData>(query));
};

export type UseGraphQL = ReturnType<typeof useGraphQL>;

export const useGraphQLResumeData = () => {
    const [resumeId, setResumeId] = useState<number>();
    const [resumeData, setResumeData] = useState<Data | null>(null);

    const endpoint = process.env.ENDPOINT ?? '';
    const token = process.env.ACCESSKEY ?? '';

    const client = new GraphQLClient(endpoint, {
        headers: {
            'xc-token': token,
        },
    });

    const { data, isValidating, error } = useSWR<{
        resume: Resume;
    }>('get-resume', (_) =>
        client.request(
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
        ),
    );

    const parseUrl = useCallback((maybeUrl: any) => {
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
    }, []);

    const parseContentData = useCallback((content?: Maybe<Content>) => {
        if (typeof content === 'undefined' || !content) {
            return content;
        }

        return {
            title: content?.title ?? '',
            records: content?.ContentItemList?.map((item) => {
                const record: ContentDataRecord = {
                    title: item?.title ?? '',
                    subtitle: item?.subtitle ?? '',
                    period: item?.period ?? '',
                    description: item?.description ?? '',
                    features: item?.ContentFeatureList?.map(
                        (feature) => feature?.title ?? '',
                    ).filter(Boolean),
                    images: item?.images
                        ? [{ src: parseUrl(item?.images), alt: item?.title ?? '' }]
                        : undefined,
                    state: item?.state ?? '',
                    tags: item?.ContentTagMMList?.map((tag) => tag?.title ?? '').filter(Boolean),
                    links: item?.ContentLinkList?.map((item) => {
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
    }, []);

    useEffect(() => {
        console.info('[SWR] data:', data);
        if (data) {
            setResumeData((_) => {
                const home = data.resume.HomeList?.filter((_, index) => index === 0).find(
                    (_, index) => index === 0,
                );
                const career = data.resume.ContentList?.filter((x) => x?.title === 'Work').find(
                    (_, index) => index === 0,
                );

                const education = data.resume.ContentList?.filter(
                    (x) => x?.title === 'Education',
                ).find((_, index) => index === 0);

                const project = data.resume.ContentList?.filter((x) => x?.title === 'Project').find(
                    (_, index) => index === 0,
                );

                const portfolio = data.resume.ContentList?.filter(
                    (x) => x?.title === 'Portfolio',
                ).find((_, index) => index === 0);

                const certificate = data.resume.ContentList?.filter(
                    (x) => x?.title === 'Certificate',
                ).find((_, index) => index === 0);

                const skill = data.resume.SkillList?.filter((x) => x?.title === 'Skill').find(
                    (_, index) => index === 0,
                );

                const generated: Data = {
                    me: {
                        name: data.resume.name ?? '',
                        photo: parseUrl(data.resume.photo),
                    },
                    home: {
                        title: home?.title ?? '',
                        subtitle: home?.subtitle ?? '',
                        intro: home?.intro ?? '',
                        bio: home?.bio ?? '',
                        links: home?.LinkList?.map((linkItem) => {
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
                        records: skill?.SkillGroupList?.map((group) => {
                            const section: SkillSection = {
                                name: group?.title ?? '',
                                icon: group?.icon ?? '',
                                items:
                                    group?.SkillItemList?.map((item) => {
                                        const skillItem: SkillItem = {
                                            name: item?.title ?? '',
                                            description: item?.description ?? '',
                                            score: item?.score ?? 0 / (item?.scoremax ?? 1),
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
            });
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            console.info('[SWR ERROR]', error);
        }
    }, [error]);

    return {
        isLoading: isValidating,
        resume: resumeData,
    };
};

export type UseGraphQLResumeData = ReturnType<typeof useGraphQLResumeData>;
