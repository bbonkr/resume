import { gql, GraphQLClient } from 'graphql-request';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Content, Resume } from '../../graphql/sdk';
import { ContentDataRecord, Data, Link, SiteInfo, SkillItem, SkillSection } from '../../interfaces';
import { data } from '../../data/data';
import { DataService } from './DataService';

export class NocodbDataService implements DataService {
    private parseUrl(maybeUrl: any): string {
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
        // console.info('parseUrl: (parsed, raw)', url, maybeUrl);

        return url;
    }

    private parseContentData(content?: Maybe<Content>) {
        if (typeof content === 'undefined' || !content) {
            return content;
        }

        return {
            title: content?.title ?? '',
            records: content?.content_itemList
                ?.filter((item) => item?.disabled !== 1)
                .sort((a, b) => ((a?.period ?? '') > (b?.period ?? '') ? -1 : 1))
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
                            ? [{ src: this.parseUrl(item?.images), alt: item?.title ?? '' }]
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
    }

    private convertResumeToData(resume: Resume): Data {
        const site: SiteInfo = {
            name: resume.name ?? '',
            nameEn: resume.name_en ?? '',
            title: resume.site_title ?? '',
            titleEn: resume.site_title_en ?? '',
            url: resume.url ?? '',
        };

        const home = resume.homeList
            ?.filter((_, index) => index === 0)
            .find((_, index) => index === 0);
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
            site: site,
            me: {
                name: resume.name ?? '',
                photo: this.parseUrl(resume.photo),
                twitter: resume.twitter ?? undefined,
                facebook: resume.facebook ?? undefined,
                github: resume.github ?? undefined,
                linkedin: resume.linkedin ?? undefined,
                instagram: resume.instagram ?? undefined,
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
            career: this.parseContentData(career),
            education: this.parseContentData(education),
            project: this.parseContentData(project),
            portfolio: this.parseContentData(portfolio),
            certificate: this.parseContentData(certificate),
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

        if (generated.site) {
            generated.site.sourceType = 'nocodb';
        }

        return generated;
    }

    public getResume = async (username: string) => {
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
                            name_en
                            site_title
                            site_title_en
                            url
                            twitter
                            github
                            facebook
                            linkedin
                            instagram
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

            const projectItem = response?.resume?.contentList?.find(
                (x: any) => x.title === 'Project',
            );

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
            return this.convertResumeToData(response.resume);
        } catch {
            console.error('API unavailable. Use static data');
            return data;
        }
    };
}
