import axios from 'axios';

import { ContentDataRecord, Data, DataOrigin, SkillSection } from '../../interfaces';

import { DataService } from './DataService';

export interface ResumeBackendModel<TData> {
    data: TData;
}

export interface AuthenticateUserWithPasswordResultModel {
    authenticateUserWithPassword: AuthenticateUserWithPasswordModel;
}

export interface AuthenticateUserWithPasswordItemModel {
    id: string;
    name: string;
}

export interface AuthenticateUserWithPasswordModel {
    sessionToken?: string;
    item?: AuthenticateUserWithPasswordItemModel;
    message?: string;
}

export interface UserResultModel {
    user: UserModel;
}

export interface ImageDetailModel {
    url: string;
    filesize?: number;
    width?: number;
    height?: number;
}

export interface LinkDataModel {
    title: string;
    href: string;
    icon?: string;
    target?: string;
}

export interface ImageDataModel {
    altText: string;
    image: ImageDetailModel;
}

export interface ContentCategoryModel {
    id: string;
    name: string;
    order: number;
}

export interface SkillCategoryModel {
    id: string;
    name: string;
    icon?: string;
    order: number;
}

export interface SkillModel {
    category?: SkillCategoryModel;
    title: string;
    description?: string;
    score?: number;
    scoreMax?: number;
    href?: string;
    links?: LinkDataModel[];
    tags?: TagModel[];
}

export interface AboutMeModel {
    title: string;
    subtitle?: string;
    name: string;
    nameEn: string;
    intro?: string;
    bio?: string;
    siteTitle?: string;
    siteTitleEn?: string;
    url?: string;
    twitter?: string;
    github?: string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
}

export interface TagModel {
    name: string;
}

export interface ContentModel {
    category: ContentCategoryModel;
    title: string;
    subtitle?: string;
    period: string;
    state: string;
    description?: string;
    images?: ImageDataModel[];
    links?: LinkDataModel[];
    tags?: TagModel[];
}

export type UserModel = {
    name: string;
    email?: string;
    avatar?: ImageDataModel;
    links?: LinkDataModel[];
    aboutMe?: AboutMeModel;
    contentCategories?: ContentCategoryModel[];
    contents?: ContentModel[];
    skillCategories?: SkillCategoryModel[];
    skills?: SkillModel[];
};

export class ResumeBackendDataService implements DataService {
    public async getResume(username: string): Promise<Data | undefined> {
        let user: UserModel | undefined;
        let dataSource: DataOrigin = 'online';

        try {
            user = await this.getData();

            dataSource = 'online';
        } catch (err) {
            if (err instanceof Error) {
                const fallback = process.env.DATA_FALLBACK ?? '';

                if (fallback) {
                    const response = await axios.get(fallback, {
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                        },
                        responseType: 'json',
                    });

                    user = response.data;
                    dataSource = 'fallback';
                }
            }
        }

        if (!user) {
            return undefined;
        }

        const data: Data = {
            origin: dataSource,
            site: {
                name: user?.aboutMe?.name,
                nameEn: user?.aboutMe?.nameEn,
                sourceType: 'keystone',
                title: user?.aboutMe?.siteTitle,
                titleEn: user?.aboutMe?.siteTitleEn,
                url: user?.aboutMe?.url,
            },
            me: {
                name: user?.name ?? '',
                facebook: user?.aboutMe?.facebook,
                twitter: user?.aboutMe?.twitter,
                github: user?.aboutMe?.github,
                instagram: user?.aboutMe?.instagram,
                linkedin: user?.aboutMe?.linkedin,
                photo: user?.avatar,
            },
            home: {
                title: user?.aboutMe?.title ?? '',
                subtitle: user?.aboutMe?.subtitle,
                bio: user?.aboutMe?.bio,
                intro: user?.aboutMe?.intro,
                links: user?.links?.map((l) => ({
                    title: l.title,
                    href: l.href,
                    icon: l.icon,
                    target: l.target,
                })),
            },
            education: this.filterContent(user?.contents ?? [], 'Education'),
            career: this.filterContent(user?.contents ?? [], 'Work'),
            project: this.filterContent(user?.contents ?? [], 'Project'),
            portfolio: this.filterContent(user?.contents ?? [], 'Portfolio'),
            certificate: this.filterContent(user?.contents ?? [], 'Certificate'),
            skillStack: {
                title: 'Skill',

                records: user?.skillCategories?.map((category) => {
                    const section: SkillSection = {
                        name: category.name,
                        icon: category.icon ?? null,
                        items:
                            user?.skills
                                ?.filter((skill) => skill.category?.id === category.id)
                                .map((skill) => ({
                                    name: skill.title,
                                    href: skill.href ?? '',
                                    score: skill.score ?? 0,
                                    scoreMax: skill.scoreMax,
                                    description: skill.description ?? '',
                                })) ?? [],
                    };

                    return section;
                }),
            },
        };

        return data;
    }

    private filterContent(source: ContentModel[], categoryName: string) {
        return {
            title: categoryName,
            records: source
                ?.filter((x) => x.category.name === categoryName)
                .map((x) => {
                    const content: ContentDataRecord = {
                        title: x.title,
                        period: x.period,
                        description: x.description,
                        images: x.images?.map((image) => ({ ...image })),
                        links: x.links?.map((link) => ({ ...link })),
                        state: x.state,
                        subtitle: x.subtitle,
                        tags: x.tags?.map((tag) => tag.name),
                    };

                    return content;
                }),
        };
    }

    private isSuccess(statusCode: number): boolean {
        return 200 <= statusCode && statusCode < 300;
    }

    private async getAccessToken(): Promise<string | undefined> {
        const endpoint = process.env.ENDPOINT ?? '';
        const username = process.env.ACCESSUSER ?? '';
        const accessKey = process.env.ACCESSKEY ?? '';

        const query = `mutation($email: String!, $password: String!)  {
  authenticateUserWithPassword(email: $email, password: $password) {
    ... on UserAuthenticationWithPasswordSuccess {
      sessionToken
      item {
        id
        name
      }
    }
    ... on UserAuthenticationWithPasswordFailure {
      message
    }
  }
}`;

        const variables = {
            email: username,
            password: accessKey,
        };

        const requestBody = {
            query,
            variables,
        };

        const response = await axios.post<
            ResumeBackendModel<AuthenticateUserWithPasswordResultModel>
        >(endpoint, requestBody);

        if (this.isSuccess(response.status)) {
            return response.data?.data?.authenticateUserWithPassword?.sessionToken;
        }

        return undefined;
    }

    private async getData(): Promise<UserModel | undefined> {
        const accessToken = await this.getAccessToken();

        if (!accessToken) {
            throw new Error('Authorization failed');
        }

        const endpoint = process.env.ENDPOINT ?? '';
        const username = process.env.USERNAME ?? '';

        if (!endpoint || !username) {
            throw new Error('Environment variable does not set');
        }

        const query = `query User($where: UserWhereUniqueInput!) {
  user(where: $where) {
    name
    email
    
    avatar {
      altText
      image {
        url
        filesize
        width
        height
      }  
    }
    links(where: {published:{equals:true}}) {
      title
      href
      icon
      target
    }

    aboutMe: ownedAboutMe {
      title
      subtitle
      name
      nameEn
      intro
      bio
      siteTitle
      siteTitleEn
      url
      twitter
      github
      facebook
      linkedin
      instagram
    }

    contentCategories:ownedContentCategories(where: {published: {equals: true}} orderBy: {order: asc}) {
      id
      name
      order
    }

    contents: ownedContents(where: {AND:[      
      {published: {equals: true}}
    ]}) {
      category{
        id
        name
        order

      }
      title
      subtitle
      period
      state
      description
      images {
        altText
        image {
          url
          filesize
          width
          height          
        }
      }
      links(where: {published:{equals:true}}) {
        title
        href
        icon
        target
      }
      tags {
        name
      }
    }

    skillCategories: ownedSkillCategories(where: {published: {equals:true}} orderBy: {order: asc}) {
      id
      name
      icon
      order
    } 

    skills: ownedSkills(where: {published:{equals:true}} ) {
      category{
        id
        name
        order
      }
      title
      description
      score
      scoreMax
      href
      links(where: {published:{equals:true}}) {
        title
        href
        icon
        target
      }
      tags {
        name
      }      
    }

  }
}`;

        const variables = {
            where: {
                username: username,
            },
        };

        const requestBody = {
            query,
            variables,
        };

        const response = await axios.post<ResumeBackendModel<UserResultModel>>(
            endpoint,
            requestBody,
            {
                headers: { Authorization: `Bearer ${accessToken}` },
            },
        );

        if (this.isSuccess(response.status)) {
            console.info('fallback', response.status);
            return response.data.data.user;
        } else {
            throw new Error('Backend not responding');
        }
    }
}
