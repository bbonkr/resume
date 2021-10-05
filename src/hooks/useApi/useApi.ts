import { useCallback, useEffect, useState } from 'react';
import { data as staticData } from '../../data/data';
import useSWR from 'swr';
import { Content, Maybe, Resume } from '../../graphql/sdk';
import { ContentDataRecord, Data, Link, SkillItem, SkillSection } from '../../interfaces';
import Axios from 'axios';

export const useApi = () => {
    const endpoint = process.env.API ?? '';

    const [resumeData, setResumeData] = useState<Data | null>(() =>
        !endpoint ? staticData : null,
    );

    const { data, isValidating, error } = useSWR<{
        resume: Resume;
    }>(
        'get-resume',
        (_) =>
            Axios.get<{
                resume: Resume;
            }>(endpoint).then((res) => res.data),
        {
            shouldRetryOnError: false,
            isPaused: () => !endpoint,
        },
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
                        tags: item?.content_tagMMList
                            ?.map((tag) => tag?.title ?? '')
                            .filter(Boolean),
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
    }, []);

    useEffect(() => {
        if (data) {
            setResumeData((_) => {
                const home = data.resume.homeList
                    ?.filter((_, index) => index === 0)
                    .find((_, index) => index === 0);
                const career = data.resume.contentList
                    ?.filter((x) => x?.title === 'Work')
                    .find((_, index) => index === 0);

                const education = data.resume.contentList
                    ?.filter((x) => x?.title === 'Education')
                    .find((_, index) => index === 0);

                const project = data.resume.contentList
                    ?.filter((x) => x?.title === 'Project')
                    .find((_, index) => index === 0);

                const portfolio = data.resume.contentList
                    ?.filter((x) => x?.title === 'Portfolio')
                    .find((_, index) => index === 0);

                const certificate = data.resume.contentList
                    ?.filter((x) => x?.title === 'Certificate')
                    .find((_, index) => index === 0);

                const skill = data.resume.skillList
                    ?.filter((x) => x?.title === 'Skill')
                    .find((_, index) => index === 0);

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
                                                score:
                                                    10.0 *
                                                    ((item?.score ?? 0) / (item?.scoremax ?? 1)),
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
            if (error.response.status === 404) {
                console.info('Use static data source.');
            } else {
                console.info('[SWR ERROR]', error);
            }
        }
    }, [error]);

    return {
        isLoading: isValidating,
        resume: resumeData,
    };
};

export type UseApi = ReturnType<typeof useApi>;
