// THIS FILE IS GENERATED, DO NOT EDIT!
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
import { ClientError } from 'graphql-request/dist/types';
import useSWR, {
    ConfigInterface as SWRConfigInterface,
    keyInterface as SWRKeyInterface,
} from 'swr';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    JSON: unknown;
};

export type ConditionBoolean = {
    eq?: Maybe<Scalars['Boolean']>;
    neq?: Maybe<Scalars['Boolean']>;
};

export type ConditionContent = {
    ContentFeatureList?: Maybe<ConditionContentFeature>;
    ContentItemList?: Maybe<ConditionContentItem>;
    ContentTagList?: Maybe<ConditionContentTag>;
    ResumeRead?: Maybe<ConditionResume>;
    _and?: Maybe<Array<Maybe<ConditionContent>>>;
    _not?: Maybe<ConditionContent>;
    _or?: Maybe<Array<Maybe<ConditionContent>>>;
    created_at?: Maybe<ConditionString>;
    id?: Maybe<ConditionString>;
    owner?: Maybe<ConditionString>;
    title?: Maybe<ConditionString>;
    updated_at?: Maybe<ConditionString>;
};

export type ConditionContentFeature = {
    ContentItemRead?: Maybe<ConditionContentItem>;
    ContentRead?: Maybe<ConditionContent>;
    _and?: Maybe<Array<Maybe<ConditionContentFeature>>>;
    _not?: Maybe<ConditionContentFeature>;
    _or?: Maybe<Array<Maybe<ConditionContentFeature>>>;
    created_at?: Maybe<ConditionString>;
    id?: Maybe<ConditionString>;
    parent?: Maybe<ConditionString>;
    title?: Maybe<ConditionString>;
    updated_at?: Maybe<ConditionString>;
    xa1__content_item_id?: Maybe<ConditionString>;
};

export type ConditionContentItem = {
    ContentFeatureList?: Maybe<ConditionContentFeature>;
    ContentLinkList?: Maybe<ConditionContentLink>;
    ContentRead?: Maybe<ConditionContent>;
    _and?: Maybe<Array<Maybe<ConditionContentItem>>>;
    _not?: Maybe<ConditionContentItem>;
    _or?: Maybe<Array<Maybe<ConditionContentItem>>>;
    created_at?: Maybe<ConditionString>;
    description?: Maybe<ConditionString>;
    disabled?: Maybe<ConditionString>;
    id?: Maybe<ConditionString>;
    images?: Maybe<ConditionString>;
    m2mContentItem_ContentTagList?: Maybe<Conditionm2mContentItem_ContentTag>;
    parent?: Maybe<ConditionString>;
    period?: Maybe<ConditionString>;
    state?: Maybe<ConditionString>;
    subtitle?: Maybe<ConditionString>;
    title?: Maybe<ConditionString>;
    updated_at?: Maybe<ConditionString>;
};

export type ConditionContentLink = {
    ContentItemRead?: Maybe<ConditionContentItem>;
    _and?: Maybe<Array<Maybe<ConditionContentLink>>>;
    _not?: Maybe<ConditionContentLink>;
    _or?: Maybe<Array<Maybe<ConditionContentLink>>>;
    created_at?: Maybe<ConditionString>;
    disabled?: Maybe<ConditionString>;
    href?: Maybe<ConditionString>;
    icon?: Maybe<ConditionString>;
    id?: Maybe<ConditionString>;
    target?: Maybe<ConditionString>;
    title?: Maybe<ConditionString>;
    updated_at?: Maybe<ConditionString>;
    xa1__content_item_id?: Maybe<ConditionString>;
};

export type ConditionContentTag = {
    ContentRead?: Maybe<ConditionContent>;
    _and?: Maybe<Array<Maybe<ConditionContentTag>>>;
    _not?: Maybe<ConditionContentTag>;
    _or?: Maybe<Array<Maybe<ConditionContentTag>>>;
    created_at?: Maybe<ConditionString>;
    id?: Maybe<ConditionString>;
    m2mContentItem_ContentTagList?: Maybe<Conditionm2mContentItem_ContentTag>;
    parent?: Maybe<ConditionString>;
    title?: Maybe<ConditionString>;
    updated_at?: Maybe<ConditionString>;
};

export type ConditionFloat = {
    eq?: Maybe<Scalars['Float']>;
    ge?: Maybe<Scalars['Float']>;
    gt?: Maybe<Scalars['Float']>;
    in?: Maybe<Array<Maybe<Scalars['Float']>>>;
    le?: Maybe<Scalars['Float']>;
    lt?: Maybe<Scalars['Float']>;
    neq?: Maybe<Scalars['Float']>;
    nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ConditionHome = {
    LinkList?: Maybe<ConditionLink>;
    ResumeRead?: Maybe<ConditionResume>;
    _and?: Maybe<Array<Maybe<ConditionHome>>>;
    _not?: Maybe<ConditionHome>;
    _or?: Maybe<Array<Maybe<ConditionHome>>>;
    bio?: Maybe<ConditionString>;
    created_at?: Maybe<ConditionString>;
    id?: Maybe<ConditionString>;
    intro?: Maybe<ConditionString>;
    owner?: Maybe<ConditionString>;
    subtitle?: Maybe<ConditionString>;
    title?: Maybe<ConditionString>;
    updated_at?: Maybe<ConditionString>;
};

export type ConditionInt = {
    eq?: Maybe<Scalars['Int']>;
    ge?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    in?: Maybe<Array<Maybe<Scalars['Int']>>>;
    le?: Maybe<Scalars['Int']>;
    lt?: Maybe<Scalars['Int']>;
    neq?: Maybe<Scalars['Int']>;
    nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ConditionLink = {
    HomeRead?: Maybe<ConditionHome>;
    _and?: Maybe<Array<Maybe<ConditionLink>>>;
    _not?: Maybe<ConditionLink>;
    _or?: Maybe<Array<Maybe<ConditionLink>>>;
    created_at?: Maybe<ConditionString>;
    disabled?: Maybe<ConditionString>;
    href?: Maybe<ConditionString>;
    icon?: Maybe<ConditionString>;
    id?: Maybe<ConditionString>;
    target?: Maybe<ConditionString>;
    title?: Maybe<ConditionString>;
    updated_at?: Maybe<ConditionString>;
    xa1__home_id?: Maybe<ConditionString>;
};

export type ConditionResume = {
    ContentList?: Maybe<ConditionContent>;
    HomeList?: Maybe<ConditionHome>;
    SkillList?: Maybe<ConditionSkill>;
    _and?: Maybe<Array<Maybe<ConditionResume>>>;
    _not?: Maybe<ConditionResume>;
    _or?: Maybe<Array<Maybe<ConditionResume>>>;
    created_at?: Maybe<ConditionString>;
    id?: Maybe<ConditionString>;
    name?: Maybe<ConditionString>;
    photo?: Maybe<ConditionString>;
    updated_at?: Maybe<ConditionString>;
    username?: Maybe<ConditionString>;
};

export type ConditionSkill = {
    ResumeRead?: Maybe<ConditionResume>;
    SkillGroupList?: Maybe<ConditionSkillGroup>;
    _and?: Maybe<Array<Maybe<ConditionSkill>>>;
    _not?: Maybe<ConditionSkill>;
    _or?: Maybe<Array<Maybe<ConditionSkill>>>;
    created_at?: Maybe<ConditionString>;
    id?: Maybe<ConditionString>;
    owner?: Maybe<ConditionString>;
    title?: Maybe<ConditionString>;
    updated_at?: Maybe<ConditionString>;
};

export type ConditionSkillGroup = {
    SkillItemList?: Maybe<ConditionSkillItem>;
    SkillRead?: Maybe<ConditionSkill>;
    _and?: Maybe<Array<Maybe<ConditionSkillGroup>>>;
    _not?: Maybe<ConditionSkillGroup>;
    _or?: Maybe<Array<Maybe<ConditionSkillGroup>>>;
    created_at?: Maybe<ConditionString>;
    icon?: Maybe<ConditionString>;
    id?: Maybe<ConditionString>;
    parent?: Maybe<ConditionString>;
    title?: Maybe<ConditionString>;
    updated_at?: Maybe<ConditionString>;
};

export type ConditionSkillItem = {
    SkillGroupRead?: Maybe<ConditionSkillGroup>;
    _and?: Maybe<Array<Maybe<ConditionSkillItem>>>;
    _not?: Maybe<ConditionSkillItem>;
    _or?: Maybe<Array<Maybe<ConditionSkillItem>>>;
    created_at?: Maybe<ConditionString>;
    description?: Maybe<ConditionString>;
    disabled?: Maybe<ConditionString>;
    href?: Maybe<ConditionString>;
    id?: Maybe<ConditionString>;
    parent?: Maybe<ConditionString>;
    score?: Maybe<ConditionString>;
    scoremax?: Maybe<ConditionString>;
    title?: Maybe<ConditionString>;
    updated_at?: Maybe<ConditionString>;
};

export type ConditionString = {
    eq?: Maybe<Scalars['String']>;
    in?: Maybe<Array<Maybe<Scalars['String']>>>;
    like?: Maybe<Scalars['String']>;
    neq?: Maybe<Scalars['String']>;
    nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ConditionZ_Test = {
    Z_Test_ItemList?: Maybe<ConditionZ_Test_Item>;
    _and?: Maybe<Array<Maybe<ConditionZ_Test>>>;
    _not?: Maybe<ConditionZ_Test>;
    _or?: Maybe<Array<Maybe<ConditionZ_Test>>>;
    created_at?: Maybe<ConditionString>;
    id?: Maybe<ConditionString>;
    single?: Maybe<ConditionString>;
    title?: Maybe<ConditionString>;
    title5?: Maybe<ConditionString>;
    updated_at?: Maybe<ConditionString>;
};

export type ConditionZ_Test_Item = {
    Z_TestRead?: Maybe<ConditionZ_Test>;
    Z_Test_Item_oList?: Maybe<ConditionZ_Test_Item_O>;
    _and?: Maybe<Array<Maybe<ConditionZ_Test_Item>>>;
    _not?: Maybe<ConditionZ_Test_Item>;
    _or?: Maybe<Array<Maybe<ConditionZ_Test_Item>>>;
    created_at?: Maybe<ConditionString>;
    id?: Maybe<ConditionString>;
    title?: Maybe<ConditionString>;
    title5?: Maybe<ConditionString>;
    updated_at?: Maybe<ConditionString>;
};

export type ConditionZ_Test_Item_O = {
    Z_Test_ItemRead?: Maybe<ConditionZ_Test_Item>;
    _and?: Maybe<Array<Maybe<ConditionZ_Test_Item_O>>>;
    _not?: Maybe<ConditionZ_Test_Item_O>;
    _or?: Maybe<Array<Maybe<ConditionZ_Test_Item_O>>>;
    created_at?: Maybe<ConditionString>;
    description?: Maybe<ConditionString>;
    id?: Maybe<ConditionString>;
    owner?: Maybe<ConditionString>;
    title?: Maybe<ConditionString>;
    updated_at?: Maybe<ConditionString>;
};

export type Conditionm2mContentItem_ContentTag = {
    ContentItemPId?: Maybe<ConditionString>;
    ContentItemRead?: Maybe<ConditionContentItem>;
    ContentTagCId?: Maybe<ConditionString>;
    ContentTagRead?: Maybe<ConditionContentTag>;
    _and?: Maybe<Array<Maybe<Conditionm2mContentItem_ContentTag>>>;
    _not?: Maybe<Conditionm2mContentItem_ContentTag>;
    _or?: Maybe<Array<Maybe<Conditionm2mContentItem_ContentTag>>>;
};

export type Conditionm2mContentItem_Link = {
    ContentItemPId?: Maybe<ConditionString>;
    LinkCId?: Maybe<ConditionString>;
    _and?: Maybe<Array<Maybe<Conditionm2mContentItem_Link>>>;
    _not?: Maybe<Conditionm2mContentItem_Link>;
    _or?: Maybe<Array<Maybe<Conditionm2mContentItem_Link>>>;
};

export type Conditionm2mHome_Link = {
    HomePId?: Maybe<ConditionString>;
    LinkCId?: Maybe<ConditionString>;
    _and?: Maybe<Array<Maybe<Conditionm2mHome_Link>>>;
    _not?: Maybe<Conditionm2mHome_Link>;
    _or?: Maybe<Array<Maybe<Conditionm2mHome_Link>>>;
};

export type Content = {
    __typename?: 'Content';
    ContentFeatureCount?: Maybe<Scalars['Int']>;
    ContentFeatureList?: Maybe<Array<Maybe<ContentFeature>>>;
    ContentItemCount?: Maybe<Scalars['Int']>;
    ContentItemList?: Maybe<Array<Maybe<ContentItem>>>;
    ContentTagCount?: Maybe<Scalars['Int']>;
    ContentTagList?: Maybe<Array<Maybe<ContentTag>>>;
    ResumeRead?: Maybe<Resume>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    owner?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type ContentResumeReadArgs = {
    id?: Maybe<Scalars['String']>;
};

export type ContentAggregate = {
    __typename?: 'ContentAggregate';
    avg?: Maybe<Scalars['Float']>;
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    owner?: Maybe<Scalars['Int']>;
    sum?: Maybe<Scalars['Float']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type ContentFeature = {
    __typename?: 'ContentFeature';
    ContentItemRead?: Maybe<ContentItem>;
    ContentRead?: Maybe<Content>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    parent?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
    xa1__content_item_id?: Maybe<Scalars['Int']>;
};

export type ContentFeatureContentItemReadArgs = {
    id?: Maybe<Scalars['String']>;
};

export type ContentFeatureContentReadArgs = {
    id?: Maybe<Scalars['String']>;
};

export type ContentFeatureAggregate = {
    __typename?: 'ContentFeatureAggregate';
    avg?: Maybe<Scalars['Float']>;
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    parent?: Maybe<Scalars['Int']>;
    sum?: Maybe<Scalars['Float']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
    xa1__content_item_id?: Maybe<Scalars['Int']>;
};

export type ContentFeatureGroupBy = {
    __typename?: 'ContentFeatureGroupBy';
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    parent?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
    xa1__content_item_id?: Maybe<Scalars['Int']>;
};

export type ContentFeatureInput = {
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    parent?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
    xa1__content_item_id?: Maybe<Scalars['Int']>;
};

export type ContentGroupBy = {
    __typename?: 'ContentGroupBy';
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    owner?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type ContentInput = {
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    owner?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type ContentItem = {
    __typename?: 'ContentItem';
    ContentFeatureCount?: Maybe<Scalars['Int']>;
    ContentFeatureList?: Maybe<Array<Maybe<ContentFeature>>>;
    ContentLinkCount?: Maybe<Scalars['Int']>;
    ContentLinkList?: Maybe<Array<Maybe<ContentLink>>>;
    ContentRead?: Maybe<Content>;
    ContentTagMMList?: Maybe<Array<Maybe<ContentTag>>>;
    created_at?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['Int']>;
    images?: Maybe<Scalars['String']>;
    m2mContentItem_ContentTagCount?: Maybe<Scalars['Int']>;
    m2mContentItem_ContentTagList?: Maybe<Array<Maybe<M2mContentItem_ContentTag>>>;
    parent?: Maybe<Scalars['Int']>;
    period?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
    subtitle?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type ContentItemContentReadArgs = {
    id?: Maybe<Scalars['String']>;
};

export type ContentItemAggregate = {
    __typename?: 'ContentItemAggregate';
    avg?: Maybe<Scalars['Float']>;
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['Int']>;
    images?: Maybe<Scalars['String']>;
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    parent?: Maybe<Scalars['Int']>;
    period?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
    subtitle?: Maybe<Scalars['String']>;
    sum?: Maybe<Scalars['Float']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type ContentItemGroupBy = {
    __typename?: 'ContentItemGroupBy';
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['Int']>;
    images?: Maybe<Scalars['String']>;
    parent?: Maybe<Scalars['Int']>;
    period?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
    subtitle?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type ContentItemInput = {
    created_at?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['Int']>;
    images?: Maybe<Scalars['String']>;
    parent?: Maybe<Scalars['Int']>;
    period?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
    subtitle?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type ContentLink = {
    __typename?: 'ContentLink';
    ContentItemRead?: Maybe<ContentItem>;
    created_at?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Int']>;
    href?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    target?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
    xa1__content_item_id?: Maybe<Scalars['Int']>;
};

export type ContentLinkContentItemReadArgs = {
    id?: Maybe<Scalars['String']>;
};

export type ContentLinkAggregate = {
    __typename?: 'ContentLinkAggregate';
    avg?: Maybe<Scalars['Float']>;
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Int']>;
    href?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    sum?: Maybe<Scalars['Float']>;
    target?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
    xa1__content_item_id?: Maybe<Scalars['Int']>;
};

export type ContentLinkGroupBy = {
    __typename?: 'ContentLinkGroupBy';
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Int']>;
    href?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    target?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
    xa1__content_item_id?: Maybe<Scalars['Int']>;
};

export type ContentLinkInput = {
    created_at?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Int']>;
    href?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    target?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
    xa1__content_item_id?: Maybe<Scalars['Int']>;
};

export type ContentTag = {
    __typename?: 'ContentTag';
    ContentItemMMList?: Maybe<Array<Maybe<ContentItem>>>;
    ContentRead?: Maybe<Content>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    m2mContentItem_ContentTagCount?: Maybe<Scalars['Int']>;
    m2mContentItem_ContentTagList?: Maybe<Array<Maybe<M2mContentItem_ContentTag>>>;
    parent?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type ContentTagContentReadArgs = {
    id?: Maybe<Scalars['String']>;
};

export type ContentTagAggregate = {
    __typename?: 'ContentTagAggregate';
    avg?: Maybe<Scalars['Float']>;
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    parent?: Maybe<Scalars['Int']>;
    sum?: Maybe<Scalars['Float']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type ContentTagGroupBy = {
    __typename?: 'ContentTagGroupBy';
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    parent?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type ContentTagInput = {
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    parent?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type Home = {
    __typename?: 'Home';
    LinkCount?: Maybe<Scalars['Int']>;
    LinkList?: Maybe<Array<Maybe<Link>>>;
    ResumeRead?: Maybe<Resume>;
    bio?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    intro?: Maybe<Scalars['String']>;
    owner?: Maybe<Scalars['Int']>;
    subtitle?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type HomeResumeReadArgs = {
    id?: Maybe<Scalars['String']>;
};

export type HomeAggregate = {
    __typename?: 'HomeAggregate';
    avg?: Maybe<Scalars['Float']>;
    bio?: Maybe<Scalars['String']>;
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    intro?: Maybe<Scalars['String']>;
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    owner?: Maybe<Scalars['Int']>;
    subtitle?: Maybe<Scalars['String']>;
    sum?: Maybe<Scalars['Float']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type HomeGroupBy = {
    __typename?: 'HomeGroupBy';
    bio?: Maybe<Scalars['String']>;
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    intro?: Maybe<Scalars['String']>;
    owner?: Maybe<Scalars['Int']>;
    subtitle?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type HomeInput = {
    bio?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    intro?: Maybe<Scalars['String']>;
    owner?: Maybe<Scalars['Int']>;
    subtitle?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type Link = {
    __typename?: 'Link';
    HomeRead?: Maybe<Home>;
    created_at?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Int']>;
    href?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    target?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
    xa1__home_id?: Maybe<Scalars['Int']>;
};

export type LinkHomeReadArgs = {
    id?: Maybe<Scalars['String']>;
};

export type LinkAggregate = {
    __typename?: 'LinkAggregate';
    avg?: Maybe<Scalars['Float']>;
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Int']>;
    href?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    sum?: Maybe<Scalars['Float']>;
    target?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
    xa1__home_id?: Maybe<Scalars['Int']>;
};

export type LinkGroupBy = {
    __typename?: 'LinkGroupBy';
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Int']>;
    href?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    target?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
    xa1__home_id?: Maybe<Scalars['Int']>;
};

export type LinkInput = {
    created_at?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Int']>;
    href?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    target?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
    xa1__home_id?: Maybe<Scalars['Int']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    ContentCreate?: Maybe<Content>;
    ContentCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    ContentDelete?: Maybe<Scalars['Int']>;
    ContentDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    ContentFeatureCreate?: Maybe<ContentFeature>;
    ContentFeatureCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    ContentFeatureDelete?: Maybe<Scalars['Int']>;
    ContentFeatureDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    ContentFeatureUpdate?: Maybe<ContentFeature>;
    ContentFeatureUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    ContentItemCreate?: Maybe<ContentItem>;
    ContentItemCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    ContentItemDelete?: Maybe<Scalars['Int']>;
    ContentItemDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    ContentItemUpdate?: Maybe<ContentItem>;
    ContentItemUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    ContentLinkCreate?: Maybe<ContentLink>;
    ContentLinkCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    ContentLinkDelete?: Maybe<Scalars['Int']>;
    ContentLinkDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    ContentLinkUpdate?: Maybe<ContentLink>;
    ContentLinkUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    ContentTagCreate?: Maybe<ContentTag>;
    ContentTagCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    ContentTagDelete?: Maybe<Scalars['Int']>;
    ContentTagDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    ContentTagUpdate?: Maybe<ContentTag>;
    ContentTagUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    ContentUpdate?: Maybe<Content>;
    ContentUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    HomeCreate?: Maybe<Home>;
    HomeCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    HomeDelete?: Maybe<Scalars['Int']>;
    HomeDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    HomeUpdate?: Maybe<Home>;
    HomeUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    LinkCreate?: Maybe<Link>;
    LinkCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    LinkDelete?: Maybe<Scalars['Int']>;
    LinkDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    LinkUpdate?: Maybe<Link>;
    LinkUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    ResumeCreate?: Maybe<Resume>;
    ResumeCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    ResumeDelete?: Maybe<Scalars['Int']>;
    ResumeDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    ResumeUpdate?: Maybe<Resume>;
    ResumeUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    SkillCreate?: Maybe<Skill>;
    SkillCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    SkillDelete?: Maybe<Scalars['Int']>;
    SkillDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    SkillGroupCreate?: Maybe<SkillGroup>;
    SkillGroupCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    SkillGroupDelete?: Maybe<Scalars['Int']>;
    SkillGroupDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    SkillGroupUpdate?: Maybe<SkillGroup>;
    SkillGroupUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    SkillItemCreate?: Maybe<SkillItem>;
    SkillItemCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    SkillItemDelete?: Maybe<Scalars['Int']>;
    SkillItemDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    SkillItemUpdate?: Maybe<SkillItem>;
    SkillItemUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    SkillUpdate?: Maybe<Skill>;
    SkillUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    Z_TestCreate?: Maybe<Z_Test>;
    Z_TestCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    Z_TestDelete?: Maybe<Scalars['Int']>;
    Z_TestDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    Z_TestUpdate?: Maybe<Z_Test>;
    Z_TestUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    Z_Test_ItemCreate?: Maybe<Z_Test_Item>;
    Z_Test_ItemCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    Z_Test_ItemDelete?: Maybe<Scalars['Int']>;
    Z_Test_ItemDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    Z_Test_ItemUpdate?: Maybe<Z_Test_Item>;
    Z_Test_ItemUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    Z_Test_Item_oCreate?: Maybe<Z_Test_Item_O>;
    Z_Test_Item_oCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    Z_Test_Item_oDelete?: Maybe<Scalars['Int']>;
    Z_Test_Item_oDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    Z_Test_Item_oUpdate?: Maybe<Z_Test_Item_O>;
    Z_Test_Item_oUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    m2mContentItem_ContentTagCreate?: Maybe<M2mContentItem_ContentTag>;
    m2mContentItem_ContentTagCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    m2mContentItem_ContentTagDelete?: Maybe<Scalars['Int']>;
    m2mContentItem_ContentTagDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    m2mContentItem_ContentTagUpdate?: Maybe<M2mContentItem_ContentTag>;
    m2mContentItem_ContentTagUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    m2mContentItem_LinkCreate?: Maybe<M2mContentItem_Link>;
    m2mContentItem_LinkCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    m2mContentItem_LinkDelete?: Maybe<Scalars['Int']>;
    m2mContentItem_LinkDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    m2mContentItem_LinkUpdate?: Maybe<M2mContentItem_Link>;
    m2mContentItem_LinkUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    m2mHome_LinkCreate?: Maybe<M2mHome_Link>;
    m2mHome_LinkCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    m2mHome_LinkDelete?: Maybe<Scalars['Int']>;
    m2mHome_LinkDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
    m2mHome_LinkUpdate?: Maybe<M2mHome_Link>;
    m2mHome_LinkUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type MutationContentCreateArgs = {
    data?: Maybe<ContentInput>;
};

export type MutationContentCreateBulkArgs = {
    data?: Maybe<Array<Maybe<ContentInput>>>;
};

export type MutationContentDeleteArgs = {
    id?: Maybe<Scalars['String']>;
};

export type MutationContentDeleteBulkArgs = {
    data?: Maybe<Array<Maybe<ContentInput>>>;
};

export type MutationContentFeatureCreateArgs = {
    data?: Maybe<ContentFeatureInput>;
};

export type MutationContentFeatureCreateBulkArgs = {
    data?: Maybe<Array<Maybe<ContentFeatureInput>>>;
};

export type MutationContentFeatureDeleteArgs = {
    id?: Maybe<Scalars['String']>;
};

export type MutationContentFeatureDeleteBulkArgs = {
    data?: Maybe<Array<Maybe<ContentFeatureInput>>>;
};

export type MutationContentFeatureUpdateArgs = {
    data?: Maybe<ContentFeatureInput>;
    id?: Maybe<Scalars['String']>;
};

export type MutationContentFeatureUpdateBulkArgs = {
    data?: Maybe<Array<Maybe<ContentFeatureInput>>>;
};

export type MutationContentItemCreateArgs = {
    data?: Maybe<ContentItemInput>;
};

export type MutationContentItemCreateBulkArgs = {
    data?: Maybe<Array<Maybe<ContentItemInput>>>;
};

export type MutationContentItemDeleteArgs = {
    id?: Maybe<Scalars['String']>;
};

export type MutationContentItemDeleteBulkArgs = {
    data?: Maybe<Array<Maybe<ContentItemInput>>>;
};

export type MutationContentItemUpdateArgs = {
    data?: Maybe<ContentItemInput>;
    id?: Maybe<Scalars['String']>;
};

export type MutationContentItemUpdateBulkArgs = {
    data?: Maybe<Array<Maybe<ContentItemInput>>>;
};

export type MutationContentLinkCreateArgs = {
    data?: Maybe<ContentLinkInput>;
};

export type MutationContentLinkCreateBulkArgs = {
    data?: Maybe<Array<Maybe<ContentLinkInput>>>;
};

export type MutationContentLinkDeleteArgs = {
    id?: Maybe<Scalars['String']>;
};

export type MutationContentLinkDeleteBulkArgs = {
    data?: Maybe<Array<Maybe<ContentLinkInput>>>;
};

export type MutationContentLinkUpdateArgs = {
    data?: Maybe<ContentLinkInput>;
    id?: Maybe<Scalars['String']>;
};

export type MutationContentLinkUpdateBulkArgs = {
    data?: Maybe<Array<Maybe<ContentLinkInput>>>;
};

export type MutationContentTagCreateArgs = {
    data?: Maybe<ContentTagInput>;
};

export type MutationContentTagCreateBulkArgs = {
    data?: Maybe<Array<Maybe<ContentTagInput>>>;
};

export type MutationContentTagDeleteArgs = {
    id?: Maybe<Scalars['String']>;
};

export type MutationContentTagDeleteBulkArgs = {
    data?: Maybe<Array<Maybe<ContentTagInput>>>;
};

export type MutationContentTagUpdateArgs = {
    data?: Maybe<ContentTagInput>;
    id?: Maybe<Scalars['String']>;
};

export type MutationContentTagUpdateBulkArgs = {
    data?: Maybe<Array<Maybe<ContentTagInput>>>;
};

export type MutationContentUpdateArgs = {
    data?: Maybe<ContentInput>;
    id?: Maybe<Scalars['String']>;
};

export type MutationContentUpdateBulkArgs = {
    data?: Maybe<Array<Maybe<ContentInput>>>;
};

export type MutationHomeCreateArgs = {
    data?: Maybe<HomeInput>;
};

export type MutationHomeCreateBulkArgs = {
    data?: Maybe<Array<Maybe<HomeInput>>>;
};

export type MutationHomeDeleteArgs = {
    id?: Maybe<Scalars['String']>;
};

export type MutationHomeDeleteBulkArgs = {
    data?: Maybe<Array<Maybe<HomeInput>>>;
};

export type MutationHomeUpdateArgs = {
    data?: Maybe<HomeInput>;
    id?: Maybe<Scalars['String']>;
};

export type MutationHomeUpdateBulkArgs = {
    data?: Maybe<Array<Maybe<HomeInput>>>;
};

export type MutationLinkCreateArgs = {
    data?: Maybe<LinkInput>;
};

export type MutationLinkCreateBulkArgs = {
    data?: Maybe<Array<Maybe<LinkInput>>>;
};

export type MutationLinkDeleteArgs = {
    id?: Maybe<Scalars['String']>;
};

export type MutationLinkDeleteBulkArgs = {
    data?: Maybe<Array<Maybe<LinkInput>>>;
};

export type MutationLinkUpdateArgs = {
    data?: Maybe<LinkInput>;
    id?: Maybe<Scalars['String']>;
};

export type MutationLinkUpdateBulkArgs = {
    data?: Maybe<Array<Maybe<LinkInput>>>;
};

export type MutationResumeCreateArgs = {
    data?: Maybe<ResumeInput>;
};

export type MutationResumeCreateBulkArgs = {
    data?: Maybe<Array<Maybe<ResumeInput>>>;
};

export type MutationResumeDeleteArgs = {
    id?: Maybe<Scalars['String']>;
};

export type MutationResumeDeleteBulkArgs = {
    data?: Maybe<Array<Maybe<ResumeInput>>>;
};

export type MutationResumeUpdateArgs = {
    data?: Maybe<ResumeInput>;
    id?: Maybe<Scalars['String']>;
};

export type MutationResumeUpdateBulkArgs = {
    data?: Maybe<Array<Maybe<ResumeInput>>>;
};

export type MutationSkillCreateArgs = {
    data?: Maybe<SkillInput>;
};

export type MutationSkillCreateBulkArgs = {
    data?: Maybe<Array<Maybe<SkillInput>>>;
};

export type MutationSkillDeleteArgs = {
    id?: Maybe<Scalars['String']>;
};

export type MutationSkillDeleteBulkArgs = {
    data?: Maybe<Array<Maybe<SkillInput>>>;
};

export type MutationSkillGroupCreateArgs = {
    data?: Maybe<SkillGroupInput>;
};

export type MutationSkillGroupCreateBulkArgs = {
    data?: Maybe<Array<Maybe<SkillGroupInput>>>;
};

export type MutationSkillGroupDeleteArgs = {
    id?: Maybe<Scalars['String']>;
};

export type MutationSkillGroupDeleteBulkArgs = {
    data?: Maybe<Array<Maybe<SkillGroupInput>>>;
};

export type MutationSkillGroupUpdateArgs = {
    data?: Maybe<SkillGroupInput>;
    id?: Maybe<Scalars['String']>;
};

export type MutationSkillGroupUpdateBulkArgs = {
    data?: Maybe<Array<Maybe<SkillGroupInput>>>;
};

export type MutationSkillItemCreateArgs = {
    data?: Maybe<SkillItemInput>;
};

export type MutationSkillItemCreateBulkArgs = {
    data?: Maybe<Array<Maybe<SkillItemInput>>>;
};

export type MutationSkillItemDeleteArgs = {
    id?: Maybe<Scalars['String']>;
};

export type MutationSkillItemDeleteBulkArgs = {
    data?: Maybe<Array<Maybe<SkillItemInput>>>;
};

export type MutationSkillItemUpdateArgs = {
    data?: Maybe<SkillItemInput>;
    id?: Maybe<Scalars['String']>;
};

export type MutationSkillItemUpdateBulkArgs = {
    data?: Maybe<Array<Maybe<SkillItemInput>>>;
};

export type MutationSkillUpdateArgs = {
    data?: Maybe<SkillInput>;
    id?: Maybe<Scalars['String']>;
};

export type MutationSkillUpdateBulkArgs = {
    data?: Maybe<Array<Maybe<SkillInput>>>;
};

export type MutationZ_TestCreateArgs = {
    data?: Maybe<Z_TestInput>;
};

export type MutationZ_TestCreateBulkArgs = {
    data?: Maybe<Array<Maybe<Z_TestInput>>>;
};

export type MutationZ_TestDeleteArgs = {
    id?: Maybe<Scalars['String']>;
};

export type MutationZ_TestDeleteBulkArgs = {
    data?: Maybe<Array<Maybe<Z_TestInput>>>;
};

export type MutationZ_TestUpdateArgs = {
    data?: Maybe<Z_TestInput>;
    id?: Maybe<Scalars['String']>;
};

export type MutationZ_TestUpdateBulkArgs = {
    data?: Maybe<Array<Maybe<Z_TestInput>>>;
};

export type MutationZ_Test_ItemCreateArgs = {
    data?: Maybe<Z_Test_ItemInput>;
};

export type MutationZ_Test_ItemCreateBulkArgs = {
    data?: Maybe<Array<Maybe<Z_Test_ItemInput>>>;
};

export type MutationZ_Test_ItemDeleteArgs = {
    id?: Maybe<Scalars['String']>;
};

export type MutationZ_Test_ItemDeleteBulkArgs = {
    data?: Maybe<Array<Maybe<Z_Test_ItemInput>>>;
};

export type MutationZ_Test_ItemUpdateArgs = {
    data?: Maybe<Z_Test_ItemInput>;
    id?: Maybe<Scalars['String']>;
};

export type MutationZ_Test_ItemUpdateBulkArgs = {
    data?: Maybe<Array<Maybe<Z_Test_ItemInput>>>;
};

export type MutationZ_Test_Item_OCreateArgs = {
    data?: Maybe<Z_Test_Item_OInput>;
};

export type MutationZ_Test_Item_OCreateBulkArgs = {
    data?: Maybe<Array<Maybe<Z_Test_Item_OInput>>>;
};

export type MutationZ_Test_Item_ODeleteArgs = {
    id?: Maybe<Scalars['String']>;
};

export type MutationZ_Test_Item_ODeleteBulkArgs = {
    data?: Maybe<Array<Maybe<Z_Test_Item_OInput>>>;
};

export type MutationZ_Test_Item_OUpdateArgs = {
    data?: Maybe<Z_Test_Item_OInput>;
    id?: Maybe<Scalars['String']>;
};

export type MutationZ_Test_Item_OUpdateBulkArgs = {
    data?: Maybe<Array<Maybe<Z_Test_Item_OInput>>>;
};

export type MutationM2mContentItem_ContentTagCreateArgs = {
    data?: Maybe<M2mContentItem_ContentTagInput>;
};

export type MutationM2mContentItem_ContentTagCreateBulkArgs = {
    data?: Maybe<Array<Maybe<M2mContentItem_ContentTagInput>>>;
};

export type MutationM2mContentItem_ContentTagDeleteArgs = {
    id?: Maybe<Scalars['String']>;
};

export type MutationM2mContentItem_ContentTagDeleteBulkArgs = {
    data?: Maybe<Array<Maybe<M2mContentItem_ContentTagInput>>>;
};

export type MutationM2mContentItem_ContentTagUpdateArgs = {
    data?: Maybe<M2mContentItem_ContentTagInput>;
    id?: Maybe<Scalars['String']>;
};

export type MutationM2mContentItem_ContentTagUpdateBulkArgs = {
    data?: Maybe<Array<Maybe<M2mContentItem_ContentTagInput>>>;
};

export type MutationM2mContentItem_LinkCreateArgs = {
    data?: Maybe<M2mContentItem_LinkInput>;
};

export type MutationM2mContentItem_LinkCreateBulkArgs = {
    data?: Maybe<Array<Maybe<M2mContentItem_LinkInput>>>;
};

export type MutationM2mContentItem_LinkDeleteArgs = {
    id?: Maybe<Scalars['String']>;
};

export type MutationM2mContentItem_LinkDeleteBulkArgs = {
    data?: Maybe<Array<Maybe<M2mContentItem_LinkInput>>>;
};

export type MutationM2mContentItem_LinkUpdateArgs = {
    data?: Maybe<M2mContentItem_LinkInput>;
    id?: Maybe<Scalars['String']>;
};

export type MutationM2mContentItem_LinkUpdateBulkArgs = {
    data?: Maybe<Array<Maybe<M2mContentItem_LinkInput>>>;
};

export type MutationM2mHome_LinkCreateArgs = {
    data?: Maybe<M2mHome_LinkInput>;
};

export type MutationM2mHome_LinkCreateBulkArgs = {
    data?: Maybe<Array<Maybe<M2mHome_LinkInput>>>;
};

export type MutationM2mHome_LinkDeleteArgs = {
    id?: Maybe<Scalars['String']>;
};

export type MutationM2mHome_LinkDeleteBulkArgs = {
    data?: Maybe<Array<Maybe<M2mHome_LinkInput>>>;
};

export type MutationM2mHome_LinkUpdateArgs = {
    data?: Maybe<M2mHome_LinkInput>;
    id?: Maybe<Scalars['String']>;
};

export type MutationM2mHome_LinkUpdateBulkArgs = {
    data?: Maybe<Array<Maybe<M2mHome_LinkInput>>>;
};

export type Query = {
    __typename?: 'Query';
    ContentAggregate?: Maybe<Array<Maybe<ContentAggregate>>>;
    ContentCount?: Maybe<Scalars['Int']>;
    ContentDistinct?: Maybe<Array<Maybe<Content>>>;
    ContentDistribution?: Maybe<Array<Maybe<Distribution>>>;
    ContentExists?: Maybe<Scalars['Boolean']>;
    ContentFeatureAggregate?: Maybe<Array<Maybe<ContentFeatureAggregate>>>;
    ContentFeatureCount?: Maybe<Scalars['Int']>;
    ContentFeatureDistinct?: Maybe<Array<Maybe<ContentFeature>>>;
    ContentFeatureDistribution?: Maybe<Array<Maybe<Distribution>>>;
    ContentFeatureExists?: Maybe<Scalars['Boolean']>;
    ContentFeatureFindOne?: Maybe<ContentFeature>;
    ContentFeatureGroupBy?: Maybe<Array<Maybe<ContentFeatureGroupBy>>>;
    ContentFeatureList?: Maybe<Array<Maybe<ContentFeature>>>;
    ContentFeatureRead?: Maybe<ContentFeature>;
    ContentFindOne?: Maybe<Content>;
    ContentGroupBy?: Maybe<Array<Maybe<ContentGroupBy>>>;
    ContentItemAggregate?: Maybe<Array<Maybe<ContentItemAggregate>>>;
    ContentItemCount?: Maybe<Scalars['Int']>;
    ContentItemDistinct?: Maybe<Array<Maybe<ContentItem>>>;
    ContentItemDistribution?: Maybe<Array<Maybe<Distribution>>>;
    ContentItemExists?: Maybe<Scalars['Boolean']>;
    ContentItemFindOne?: Maybe<ContentItem>;
    ContentItemGroupBy?: Maybe<Array<Maybe<ContentItemGroupBy>>>;
    ContentItemList?: Maybe<Array<Maybe<ContentItem>>>;
    ContentItemRead?: Maybe<ContentItem>;
    ContentLinkAggregate?: Maybe<Array<Maybe<ContentLinkAggregate>>>;
    ContentLinkCount?: Maybe<Scalars['Int']>;
    ContentLinkDistinct?: Maybe<Array<Maybe<ContentLink>>>;
    ContentLinkDistribution?: Maybe<Array<Maybe<Distribution>>>;
    ContentLinkExists?: Maybe<Scalars['Boolean']>;
    ContentLinkFindOne?: Maybe<ContentLink>;
    ContentLinkGroupBy?: Maybe<Array<Maybe<ContentLinkGroupBy>>>;
    ContentLinkList?: Maybe<Array<Maybe<ContentLink>>>;
    ContentLinkRead?: Maybe<ContentLink>;
    ContentList?: Maybe<Array<Maybe<Content>>>;
    ContentRead?: Maybe<Content>;
    ContentTagAggregate?: Maybe<Array<Maybe<ContentTagAggregate>>>;
    ContentTagCount?: Maybe<Scalars['Int']>;
    ContentTagDistinct?: Maybe<Array<Maybe<ContentTag>>>;
    ContentTagDistribution?: Maybe<Array<Maybe<Distribution>>>;
    ContentTagExists?: Maybe<Scalars['Boolean']>;
    ContentTagFindOne?: Maybe<ContentTag>;
    ContentTagGroupBy?: Maybe<Array<Maybe<ContentTagGroupBy>>>;
    ContentTagList?: Maybe<Array<Maybe<ContentTag>>>;
    ContentTagRead?: Maybe<ContentTag>;
    HomeAggregate?: Maybe<Array<Maybe<HomeAggregate>>>;
    HomeCount?: Maybe<Scalars['Int']>;
    HomeDistinct?: Maybe<Array<Maybe<Home>>>;
    HomeDistribution?: Maybe<Array<Maybe<Distribution>>>;
    HomeExists?: Maybe<Scalars['Boolean']>;
    HomeFindOne?: Maybe<Home>;
    HomeGroupBy?: Maybe<Array<Maybe<HomeGroupBy>>>;
    HomeList?: Maybe<Array<Maybe<Home>>>;
    HomeRead?: Maybe<Home>;
    LinkAggregate?: Maybe<Array<Maybe<LinkAggregate>>>;
    LinkCount?: Maybe<Scalars['Int']>;
    LinkDistinct?: Maybe<Array<Maybe<Link>>>;
    LinkDistribution?: Maybe<Array<Maybe<Distribution>>>;
    LinkExists?: Maybe<Scalars['Boolean']>;
    LinkFindOne?: Maybe<Link>;
    LinkGroupBy?: Maybe<Array<Maybe<LinkGroupBy>>>;
    LinkList?: Maybe<Array<Maybe<Link>>>;
    LinkRead?: Maybe<Link>;
    ResumeAggregate?: Maybe<Array<Maybe<ResumeAggregate>>>;
    ResumeCount?: Maybe<Scalars['Int']>;
    ResumeDistinct?: Maybe<Array<Maybe<Resume>>>;
    ResumeDistribution?: Maybe<Array<Maybe<Distribution>>>;
    ResumeExists?: Maybe<Scalars['Boolean']>;
    ResumeFindOne?: Maybe<Resume>;
    ResumeGroupBy?: Maybe<Array<Maybe<ResumeGroupBy>>>;
    ResumeList?: Maybe<Array<Maybe<Resume>>>;
    ResumeRead?: Maybe<Resume>;
    SkillAggregate?: Maybe<Array<Maybe<SkillAggregate>>>;
    SkillCount?: Maybe<Scalars['Int']>;
    SkillDistinct?: Maybe<Array<Maybe<Skill>>>;
    SkillDistribution?: Maybe<Array<Maybe<Distribution>>>;
    SkillExists?: Maybe<Scalars['Boolean']>;
    SkillFindOne?: Maybe<Skill>;
    SkillGroupAggregate?: Maybe<Array<Maybe<SkillGroupAggregate>>>;
    SkillGroupBy?: Maybe<Array<Maybe<SkillGroupBy>>>;
    SkillGroupCount?: Maybe<Scalars['Int']>;
    SkillGroupDistinct?: Maybe<Array<Maybe<SkillGroup>>>;
    SkillGroupDistribution?: Maybe<Array<Maybe<Distribution>>>;
    SkillGroupExists?: Maybe<Scalars['Boolean']>;
    SkillGroupFindOne?: Maybe<SkillGroup>;
    SkillGroupGroupBy?: Maybe<Array<Maybe<SkillGroupGroupBy>>>;
    SkillGroupList?: Maybe<Array<Maybe<SkillGroup>>>;
    SkillGroupRead?: Maybe<SkillGroup>;
    SkillItemAggregate?: Maybe<Array<Maybe<SkillItemAggregate>>>;
    SkillItemCount?: Maybe<Scalars['Int']>;
    SkillItemDistinct?: Maybe<Array<Maybe<SkillItem>>>;
    SkillItemDistribution?: Maybe<Array<Maybe<Distribution>>>;
    SkillItemExists?: Maybe<Scalars['Boolean']>;
    SkillItemFindOne?: Maybe<SkillItem>;
    SkillItemGroupBy?: Maybe<Array<Maybe<SkillItemGroupBy>>>;
    SkillItemList?: Maybe<Array<Maybe<SkillItem>>>;
    SkillItemRead?: Maybe<SkillItem>;
    SkillList?: Maybe<Array<Maybe<Skill>>>;
    SkillRead?: Maybe<Skill>;
    Z_TestAggregate?: Maybe<Array<Maybe<Z_TestAggregate>>>;
    Z_TestCount?: Maybe<Scalars['Int']>;
    Z_TestDistinct?: Maybe<Array<Maybe<Z_Test>>>;
    Z_TestDistribution?: Maybe<Array<Maybe<Distribution>>>;
    Z_TestExists?: Maybe<Scalars['Boolean']>;
    Z_TestFindOne?: Maybe<Z_Test>;
    Z_TestGroupBy?: Maybe<Array<Maybe<Z_TestGroupBy>>>;
    Z_TestList?: Maybe<Array<Maybe<Z_Test>>>;
    Z_TestRead?: Maybe<Z_Test>;
    Z_Test_ItemAggregate?: Maybe<Array<Maybe<Z_Test_ItemAggregate>>>;
    Z_Test_ItemCount?: Maybe<Scalars['Int']>;
    Z_Test_ItemDistinct?: Maybe<Array<Maybe<Z_Test_Item>>>;
    Z_Test_ItemDistribution?: Maybe<Array<Maybe<Distribution>>>;
    Z_Test_ItemExists?: Maybe<Scalars['Boolean']>;
    Z_Test_ItemFindOne?: Maybe<Z_Test_Item>;
    Z_Test_ItemGroupBy?: Maybe<Array<Maybe<Z_Test_ItemGroupBy>>>;
    Z_Test_ItemList?: Maybe<Array<Maybe<Z_Test_Item>>>;
    Z_Test_ItemRead?: Maybe<Z_Test_Item>;
    Z_Test_Item_oAggregate?: Maybe<Array<Maybe<Z_Test_Item_OAggregate>>>;
    Z_Test_Item_oCount?: Maybe<Scalars['Int']>;
    Z_Test_Item_oDistinct?: Maybe<Array<Maybe<Z_Test_Item_O>>>;
    Z_Test_Item_oDistribution?: Maybe<Array<Maybe<Distribution>>>;
    Z_Test_Item_oExists?: Maybe<Scalars['Boolean']>;
    Z_Test_Item_oFindOne?: Maybe<Z_Test_Item_O>;
    Z_Test_Item_oGroupBy?: Maybe<Array<Maybe<Z_Test_Item_OGroupBy>>>;
    Z_Test_Item_oList?: Maybe<Array<Maybe<Z_Test_Item_O>>>;
    Z_Test_Item_oRead?: Maybe<Z_Test_Item_O>;
    m2mContentItem_ContentTagAggregate?: Maybe<Array<Maybe<M2mContentItem_ContentTagAggregate>>>;
    m2mContentItem_ContentTagCount?: Maybe<Scalars['Int']>;
    m2mContentItem_ContentTagDistinct?: Maybe<Array<Maybe<M2mContentItem_ContentTag>>>;
    m2mContentItem_ContentTagDistribution?: Maybe<Array<Maybe<Distribution>>>;
    m2mContentItem_ContentTagExists?: Maybe<Scalars['Boolean']>;
    m2mContentItem_ContentTagFindOne?: Maybe<M2mContentItem_ContentTag>;
    m2mContentItem_ContentTagGroupBy?: Maybe<Array<Maybe<M2mContentItem_ContentTagGroupBy>>>;
    m2mContentItem_ContentTagList?: Maybe<Array<Maybe<M2mContentItem_ContentTag>>>;
    m2mContentItem_ContentTagRead?: Maybe<M2mContentItem_ContentTag>;
    m2mContentItem_LinkAggregate?: Maybe<Array<Maybe<M2mContentItem_LinkAggregate>>>;
    m2mContentItem_LinkCount?: Maybe<Scalars['Int']>;
    m2mContentItem_LinkDistinct?: Maybe<Array<Maybe<M2mContentItem_Link>>>;
    m2mContentItem_LinkDistribution?: Maybe<Array<Maybe<Distribution>>>;
    m2mContentItem_LinkExists?: Maybe<Scalars['Boolean']>;
    m2mContentItem_LinkFindOne?: Maybe<M2mContentItem_Link>;
    m2mContentItem_LinkGroupBy?: Maybe<Array<Maybe<M2mContentItem_LinkGroupBy>>>;
    m2mContentItem_LinkList?: Maybe<Array<Maybe<M2mContentItem_Link>>>;
    m2mContentItem_LinkRead?: Maybe<M2mContentItem_Link>;
    m2mHome_LinkAggregate?: Maybe<Array<Maybe<M2mHome_LinkAggregate>>>;
    m2mHome_LinkCount?: Maybe<Scalars['Int']>;
    m2mHome_LinkDistinct?: Maybe<Array<Maybe<M2mHome_Link>>>;
    m2mHome_LinkDistribution?: Maybe<Array<Maybe<Distribution>>>;
    m2mHome_LinkExists?: Maybe<Scalars['Boolean']>;
    m2mHome_LinkFindOne?: Maybe<M2mHome_Link>;
    m2mHome_LinkGroupBy?: Maybe<Array<Maybe<M2mHome_LinkGroupBy>>>;
    m2mHome_LinkList?: Maybe<Array<Maybe<M2mHome_Link>>>;
    m2mHome_LinkRead?: Maybe<M2mHome_Link>;
    m2mNotChildren?: Maybe<Array<Maybe<Scalars['JSON']>>>;
    m2mNotChildrenCount?: Maybe<Scalars['JSON']>;
    nocodb_health?: Maybe<Scalars['String']>;
};

export type QueryContentAggregateArgs = {
    column_name: Scalars['String'];
    func: Scalars['String'];
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryContentCountArgs = {
    condition?: Maybe<ConditionContent>;
    conditionGraph?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentDistinctArgs = {
    column_name?: Maybe<Scalars['String']>;
    condition?: Maybe<ConditionContent>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentDistributionArgs = {
    column_name: Scalars['String'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
    steps?: Maybe<Scalars['String']>;
};

export type QueryContentExistsArgs = {
    id: Scalars['String'];
};

export type QueryContentFeatureAggregateArgs = {
    column_name: Scalars['String'];
    func: Scalars['String'];
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryContentFeatureCountArgs = {
    condition?: Maybe<ConditionContentFeature>;
    conditionGraph?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentFeatureDistinctArgs = {
    column_name?: Maybe<Scalars['String']>;
    condition?: Maybe<ConditionContentFeature>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentFeatureDistributionArgs = {
    column_name: Scalars['String'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
    steps?: Maybe<Scalars['String']>;
};

export type QueryContentFeatureExistsArgs = {
    id: Scalars['String'];
};

export type QueryContentFeatureFindOneArgs = {
    condition?: Maybe<ConditionContentFeature>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentFeatureGroupByArgs = {
    fields?: Maybe<Scalars['String']>;
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryContentFeatureListArgs = {
    condition?: Maybe<ConditionContentFeature>;
    conditionGraph?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentFeatureReadArgs = {
    id: Scalars['String'];
};

export type QueryContentFindOneArgs = {
    condition?: Maybe<ConditionContent>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentGroupByArgs = {
    fields?: Maybe<Scalars['String']>;
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryContentItemAggregateArgs = {
    column_name: Scalars['String'];
    func: Scalars['String'];
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryContentItemCountArgs = {
    condition?: Maybe<ConditionContentItem>;
    conditionGraph?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentItemDistinctArgs = {
    column_name?: Maybe<Scalars['String']>;
    condition?: Maybe<ConditionContentItem>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentItemDistributionArgs = {
    column_name: Scalars['String'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
    steps?: Maybe<Scalars['String']>;
};

export type QueryContentItemExistsArgs = {
    id: Scalars['String'];
};

export type QueryContentItemFindOneArgs = {
    condition?: Maybe<ConditionContentItem>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentItemGroupByArgs = {
    fields?: Maybe<Scalars['String']>;
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryContentItemListArgs = {
    condition?: Maybe<ConditionContentItem>;
    conditionGraph?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentItemReadArgs = {
    id: Scalars['String'];
};

export type QueryContentLinkAggregateArgs = {
    column_name: Scalars['String'];
    func: Scalars['String'];
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryContentLinkCountArgs = {
    condition?: Maybe<ConditionContentLink>;
    conditionGraph?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentLinkDistinctArgs = {
    column_name?: Maybe<Scalars['String']>;
    condition?: Maybe<ConditionContentLink>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentLinkDistributionArgs = {
    column_name: Scalars['String'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
    steps?: Maybe<Scalars['String']>;
};

export type QueryContentLinkExistsArgs = {
    id: Scalars['String'];
};

export type QueryContentLinkFindOneArgs = {
    condition?: Maybe<ConditionContentLink>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentLinkGroupByArgs = {
    fields?: Maybe<Scalars['String']>;
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryContentLinkListArgs = {
    condition?: Maybe<ConditionContentLink>;
    conditionGraph?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentLinkReadArgs = {
    id: Scalars['String'];
};

export type QueryContentListArgs = {
    condition?: Maybe<ConditionContent>;
    conditionGraph?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentReadArgs = {
    id: Scalars['String'];
};

export type QueryContentTagAggregateArgs = {
    column_name: Scalars['String'];
    func: Scalars['String'];
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryContentTagCountArgs = {
    condition?: Maybe<ConditionContentTag>;
    conditionGraph?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentTagDistinctArgs = {
    column_name?: Maybe<Scalars['String']>;
    condition?: Maybe<ConditionContentTag>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentTagDistributionArgs = {
    column_name: Scalars['String'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
    steps?: Maybe<Scalars['String']>;
};

export type QueryContentTagExistsArgs = {
    id: Scalars['String'];
};

export type QueryContentTagFindOneArgs = {
    condition?: Maybe<ConditionContentTag>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentTagGroupByArgs = {
    fields?: Maybe<Scalars['String']>;
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryContentTagListArgs = {
    condition?: Maybe<ConditionContentTag>;
    conditionGraph?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryContentTagReadArgs = {
    id: Scalars['String'];
};

export type QueryHomeAggregateArgs = {
    column_name: Scalars['String'];
    func: Scalars['String'];
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryHomeCountArgs = {
    condition?: Maybe<ConditionHome>;
    conditionGraph?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryHomeDistinctArgs = {
    column_name?: Maybe<Scalars['String']>;
    condition?: Maybe<ConditionHome>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryHomeDistributionArgs = {
    column_name: Scalars['String'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
    steps?: Maybe<Scalars['String']>;
};

export type QueryHomeExistsArgs = {
    id: Scalars['String'];
};

export type QueryHomeFindOneArgs = {
    condition?: Maybe<ConditionHome>;
    where?: Maybe<Scalars['String']>;
};

export type QueryHomeGroupByArgs = {
    fields?: Maybe<Scalars['String']>;
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryHomeListArgs = {
    condition?: Maybe<ConditionHome>;
    conditionGraph?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryHomeReadArgs = {
    id: Scalars['String'];
};

export type QueryLinkAggregateArgs = {
    column_name: Scalars['String'];
    func: Scalars['String'];
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryLinkCountArgs = {
    condition?: Maybe<ConditionLink>;
    conditionGraph?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryLinkDistinctArgs = {
    column_name?: Maybe<Scalars['String']>;
    condition?: Maybe<ConditionLink>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryLinkDistributionArgs = {
    column_name: Scalars['String'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
    steps?: Maybe<Scalars['String']>;
};

export type QueryLinkExistsArgs = {
    id: Scalars['String'];
};

export type QueryLinkFindOneArgs = {
    condition?: Maybe<ConditionLink>;
    where?: Maybe<Scalars['String']>;
};

export type QueryLinkGroupByArgs = {
    fields?: Maybe<Scalars['String']>;
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryLinkListArgs = {
    condition?: Maybe<ConditionLink>;
    conditionGraph?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryLinkReadArgs = {
    id: Scalars['String'];
};

export type QueryResumeAggregateArgs = {
    column_name: Scalars['String'];
    func: Scalars['String'];
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryResumeCountArgs = {
    condition?: Maybe<ConditionResume>;
    conditionGraph?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryResumeDistinctArgs = {
    column_name?: Maybe<Scalars['String']>;
    condition?: Maybe<ConditionResume>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryResumeDistributionArgs = {
    column_name: Scalars['String'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
    steps?: Maybe<Scalars['String']>;
};

export type QueryResumeExistsArgs = {
    id: Scalars['String'];
};

export type QueryResumeFindOneArgs = {
    condition?: Maybe<ConditionResume>;
    where?: Maybe<Scalars['String']>;
};

export type QueryResumeGroupByArgs = {
    fields?: Maybe<Scalars['String']>;
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryResumeListArgs = {
    condition?: Maybe<ConditionResume>;
    conditionGraph?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryResumeReadArgs = {
    id: Scalars['String'];
};

export type QuerySkillAggregateArgs = {
    column_name: Scalars['String'];
    func: Scalars['String'];
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QuerySkillCountArgs = {
    condition?: Maybe<ConditionSkill>;
    conditionGraph?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QuerySkillDistinctArgs = {
    column_name?: Maybe<Scalars['String']>;
    condition?: Maybe<ConditionSkill>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QuerySkillDistributionArgs = {
    column_name: Scalars['String'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
    steps?: Maybe<Scalars['String']>;
};

export type QuerySkillExistsArgs = {
    id: Scalars['String'];
};

export type QuerySkillFindOneArgs = {
    condition?: Maybe<ConditionSkill>;
    where?: Maybe<Scalars['String']>;
};

export type QuerySkillGroupAggregateArgs = {
    column_name: Scalars['String'];
    func: Scalars['String'];
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QuerySkillGroupByArgs = {
    fields?: Maybe<Scalars['String']>;
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QuerySkillGroupCountArgs = {
    condition?: Maybe<ConditionSkillGroup>;
    conditionGraph?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QuerySkillGroupDistinctArgs = {
    column_name?: Maybe<Scalars['String']>;
    condition?: Maybe<ConditionSkillGroup>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QuerySkillGroupDistributionArgs = {
    column_name: Scalars['String'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
    steps?: Maybe<Scalars['String']>;
};

export type QuerySkillGroupExistsArgs = {
    id: Scalars['String'];
};

export type QuerySkillGroupFindOneArgs = {
    condition?: Maybe<ConditionSkillGroup>;
    where?: Maybe<Scalars['String']>;
};

export type QuerySkillGroupGroupByArgs = {
    fields?: Maybe<Scalars['String']>;
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QuerySkillGroupListArgs = {
    condition?: Maybe<ConditionSkillGroup>;
    conditionGraph?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QuerySkillGroupReadArgs = {
    id: Scalars['String'];
};

export type QuerySkillItemAggregateArgs = {
    column_name: Scalars['String'];
    func: Scalars['String'];
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QuerySkillItemCountArgs = {
    condition?: Maybe<ConditionSkillItem>;
    conditionGraph?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QuerySkillItemDistinctArgs = {
    column_name?: Maybe<Scalars['String']>;
    condition?: Maybe<ConditionSkillItem>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QuerySkillItemDistributionArgs = {
    column_name: Scalars['String'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
    steps?: Maybe<Scalars['String']>;
};

export type QuerySkillItemExistsArgs = {
    id: Scalars['String'];
};

export type QuerySkillItemFindOneArgs = {
    condition?: Maybe<ConditionSkillItem>;
    where?: Maybe<Scalars['String']>;
};

export type QuerySkillItemGroupByArgs = {
    fields?: Maybe<Scalars['String']>;
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QuerySkillItemListArgs = {
    condition?: Maybe<ConditionSkillItem>;
    conditionGraph?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QuerySkillItemReadArgs = {
    id: Scalars['String'];
};

export type QuerySkillListArgs = {
    condition?: Maybe<ConditionSkill>;
    conditionGraph?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QuerySkillReadArgs = {
    id: Scalars['String'];
};

export type QueryZ_TestAggregateArgs = {
    column_name: Scalars['String'];
    func: Scalars['String'];
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryZ_TestCountArgs = {
    condition?: Maybe<ConditionZ_Test>;
    conditionGraph?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryZ_TestDistinctArgs = {
    column_name?: Maybe<Scalars['String']>;
    condition?: Maybe<ConditionZ_Test>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryZ_TestDistributionArgs = {
    column_name: Scalars['String'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
    steps?: Maybe<Scalars['String']>;
};

export type QueryZ_TestExistsArgs = {
    id: Scalars['String'];
};

export type QueryZ_TestFindOneArgs = {
    condition?: Maybe<ConditionZ_Test>;
    where?: Maybe<Scalars['String']>;
};

export type QueryZ_TestGroupByArgs = {
    fields?: Maybe<Scalars['String']>;
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryZ_TestListArgs = {
    condition?: Maybe<ConditionZ_Test>;
    conditionGraph?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryZ_TestReadArgs = {
    id: Scalars['String'];
};

export type QueryZ_Test_ItemAggregateArgs = {
    column_name: Scalars['String'];
    func: Scalars['String'];
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryZ_Test_ItemCountArgs = {
    condition?: Maybe<ConditionZ_Test_Item>;
    conditionGraph?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryZ_Test_ItemDistinctArgs = {
    column_name?: Maybe<Scalars['String']>;
    condition?: Maybe<ConditionZ_Test_Item>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryZ_Test_ItemDistributionArgs = {
    column_name: Scalars['String'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
    steps?: Maybe<Scalars['String']>;
};

export type QueryZ_Test_ItemExistsArgs = {
    id: Scalars['String'];
};

export type QueryZ_Test_ItemFindOneArgs = {
    condition?: Maybe<ConditionZ_Test_Item>;
    where?: Maybe<Scalars['String']>;
};

export type QueryZ_Test_ItemGroupByArgs = {
    fields?: Maybe<Scalars['String']>;
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryZ_Test_ItemListArgs = {
    condition?: Maybe<ConditionZ_Test_Item>;
    conditionGraph?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryZ_Test_ItemReadArgs = {
    id: Scalars['String'];
};

export type QueryZ_Test_Item_OAggregateArgs = {
    column_name: Scalars['String'];
    func: Scalars['String'];
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryZ_Test_Item_OCountArgs = {
    condition?: Maybe<ConditionZ_Test_Item_O>;
    conditionGraph?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryZ_Test_Item_ODistinctArgs = {
    column_name?: Maybe<Scalars['String']>;
    condition?: Maybe<ConditionZ_Test_Item_O>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryZ_Test_Item_ODistributionArgs = {
    column_name: Scalars['String'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
    steps?: Maybe<Scalars['String']>;
};

export type QueryZ_Test_Item_OExistsArgs = {
    id: Scalars['String'];
};

export type QueryZ_Test_Item_OFindOneArgs = {
    condition?: Maybe<ConditionZ_Test_Item_O>;
    where?: Maybe<Scalars['String']>;
};

export type QueryZ_Test_Item_OGroupByArgs = {
    fields?: Maybe<Scalars['String']>;
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryZ_Test_Item_OListArgs = {
    condition?: Maybe<ConditionZ_Test_Item_O>;
    conditionGraph?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryZ_Test_Item_OReadArgs = {
    id: Scalars['String'];
};

export type QueryM2mContentItem_ContentTagAggregateArgs = {
    column_name: Scalars['String'];
    func: Scalars['String'];
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryM2mContentItem_ContentTagCountArgs = {
    condition?: Maybe<Conditionm2mContentItem_ContentTag>;
    conditionGraph?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryM2mContentItem_ContentTagDistinctArgs = {
    column_name?: Maybe<Scalars['String']>;
    condition?: Maybe<Conditionm2mContentItem_ContentTag>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryM2mContentItem_ContentTagDistributionArgs = {
    column_name: Scalars['String'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
    steps?: Maybe<Scalars['String']>;
};

export type QueryM2mContentItem_ContentTagExistsArgs = {
    id: Scalars['String'];
};

export type QueryM2mContentItem_ContentTagFindOneArgs = {
    condition?: Maybe<Conditionm2mContentItem_ContentTag>;
    where?: Maybe<Scalars['String']>;
};

export type QueryM2mContentItem_ContentTagGroupByArgs = {
    fields?: Maybe<Scalars['String']>;
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryM2mContentItem_ContentTagListArgs = {
    condition?: Maybe<Conditionm2mContentItem_ContentTag>;
    conditionGraph?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryM2mContentItem_ContentTagReadArgs = {
    id: Scalars['String'];
};

export type QueryM2mContentItem_LinkAggregateArgs = {
    column_name: Scalars['String'];
    func: Scalars['String'];
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryM2mContentItem_LinkCountArgs = {
    condition?: Maybe<Conditionm2mContentItem_Link>;
    conditionGraph?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryM2mContentItem_LinkDistinctArgs = {
    column_name?: Maybe<Scalars['String']>;
    condition?: Maybe<Conditionm2mContentItem_Link>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryM2mContentItem_LinkDistributionArgs = {
    column_name: Scalars['String'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
    steps?: Maybe<Scalars['String']>;
};

export type QueryM2mContentItem_LinkExistsArgs = {
    id: Scalars['String'];
};

export type QueryM2mContentItem_LinkFindOneArgs = {
    condition?: Maybe<Conditionm2mContentItem_Link>;
    where?: Maybe<Scalars['String']>;
};

export type QueryM2mContentItem_LinkGroupByArgs = {
    fields?: Maybe<Scalars['String']>;
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryM2mContentItem_LinkListArgs = {
    condition?: Maybe<Conditionm2mContentItem_Link>;
    conditionGraph?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryM2mContentItem_LinkReadArgs = {
    id: Scalars['String'];
};

export type QueryM2mHome_LinkAggregateArgs = {
    column_name: Scalars['String'];
    func: Scalars['String'];
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryM2mHome_LinkCountArgs = {
    condition?: Maybe<Conditionm2mHome_Link>;
    conditionGraph?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryM2mHome_LinkDistinctArgs = {
    column_name?: Maybe<Scalars['String']>;
    condition?: Maybe<Conditionm2mHome_Link>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryM2mHome_LinkDistributionArgs = {
    column_name: Scalars['String'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
    steps?: Maybe<Scalars['String']>;
};

export type QueryM2mHome_LinkExistsArgs = {
    id: Scalars['String'];
};

export type QueryM2mHome_LinkFindOneArgs = {
    condition?: Maybe<Conditionm2mHome_Link>;
    where?: Maybe<Scalars['String']>;
};

export type QueryM2mHome_LinkGroupByArgs = {
    fields?: Maybe<Scalars['String']>;
    having?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
};

export type QueryM2mHome_LinkListArgs = {
    condition?: Maybe<Conditionm2mHome_Link>;
    conditionGraph?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Scalars['String']>;
};

export type QueryM2mHome_LinkReadArgs = {
    id: Scalars['String'];
};

export type QueryM2mNotChildrenArgs = {
    assoc: Scalars['String'];
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    parent: Scalars['String'];
    pid: Scalars['String'];
};

export type QueryM2mNotChildrenCountArgs = {
    assoc: Scalars['String'];
    parent: Scalars['String'];
    pid: Scalars['String'];
};

export type Resume = {
    __typename?: 'Resume';
    ContentCount?: Maybe<Scalars['Int']>;
    ContentList?: Maybe<Array<Maybe<Content>>>;
    HomeCount?: Maybe<Scalars['Int']>;
    HomeList?: Maybe<Array<Maybe<Home>>>;
    SkillCount?: Maybe<Scalars['Int']>;
    SkillList?: Maybe<Array<Maybe<Skill>>>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    photo?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
};

export type ResumeAggregate = {
    __typename?: 'ResumeAggregate';
    avg?: Maybe<Scalars['Float']>;
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    name?: Maybe<Scalars['String']>;
    photo?: Maybe<Scalars['String']>;
    sum?: Maybe<Scalars['Float']>;
    updated_at?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
};

export type ResumeGroupBy = {
    __typename?: 'ResumeGroupBy';
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    photo?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
};

export type ResumeInput = {
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    photo?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
};

export type Skill = {
    __typename?: 'Skill';
    ResumeRead?: Maybe<Resume>;
    SkillGroupCount?: Maybe<Scalars['Int']>;
    SkillGroupList?: Maybe<Array<Maybe<SkillGroup>>>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    owner?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type SkillResumeReadArgs = {
    id?: Maybe<Scalars['String']>;
};

export type SkillAggregate = {
    __typename?: 'SkillAggregate';
    avg?: Maybe<Scalars['Float']>;
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    owner?: Maybe<Scalars['Int']>;
    sum?: Maybe<Scalars['Float']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type SkillGroup = {
    __typename?: 'SkillGroup';
    SkillItemCount?: Maybe<Scalars['Int']>;
    SkillItemList?: Maybe<Array<Maybe<SkillItem>>>;
    SkillRead?: Maybe<Skill>;
    created_at?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    parent?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type SkillGroupSkillReadArgs = {
    id?: Maybe<Scalars['String']>;
};

export type SkillGroupAggregate = {
    __typename?: 'SkillGroupAggregate';
    avg?: Maybe<Scalars['Float']>;
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    parent?: Maybe<Scalars['Int']>;
    sum?: Maybe<Scalars['Float']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type SkillGroupBy = {
    __typename?: 'SkillGroupBy';
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    owner?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type SkillGroupGroupBy = {
    __typename?: 'SkillGroupGroupBy';
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    parent?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type SkillGroupInput = {
    created_at?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    parent?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type SkillInput = {
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    owner?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type SkillItem = {
    __typename?: 'SkillItem';
    SkillGroupRead?: Maybe<SkillGroup>;
    created_at?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Int']>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    parent?: Maybe<Scalars['Int']>;
    score?: Maybe<Scalars['Int']>;
    scoremax?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type SkillItemSkillGroupReadArgs = {
    id?: Maybe<Scalars['String']>;
};

export type SkillItemAggregate = {
    __typename?: 'SkillItemAggregate';
    avg?: Maybe<Scalars['Float']>;
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Int']>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    parent?: Maybe<Scalars['Int']>;
    score?: Maybe<Scalars['Int']>;
    scoremax?: Maybe<Scalars['Int']>;
    sum?: Maybe<Scalars['Float']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type SkillItemGroupBy = {
    __typename?: 'SkillItemGroupBy';
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Int']>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    parent?: Maybe<Scalars['Int']>;
    score?: Maybe<Scalars['Int']>;
    scoremax?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type SkillItemInput = {
    created_at?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Int']>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    parent?: Maybe<Scalars['Int']>;
    score?: Maybe<Scalars['Int']>;
    scoremax?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type Z_Test = {
    __typename?: 'Z_Test';
    Z_Test_ItemCount?: Maybe<Scalars['Int']>;
    Z_Test_ItemList?: Maybe<Array<Maybe<Z_Test_Item>>>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    single?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    title5?: Maybe<Scalars['JSON']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type Z_TestAggregate = {
    __typename?: 'Z_TestAggregate';
    avg?: Maybe<Scalars['Float']>;
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    single?: Maybe<Scalars['String']>;
    sum?: Maybe<Scalars['Float']>;
    title?: Maybe<Scalars['String']>;
    title5?: Maybe<Scalars['JSON']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type Z_TestGroupBy = {
    __typename?: 'Z_TestGroupBy';
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    single?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    title5?: Maybe<Scalars['JSON']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type Z_TestInput = {
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    single?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    title5?: Maybe<Scalars['JSON']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type Z_Test_Item = {
    __typename?: 'Z_Test_Item';
    Z_TestRead?: Maybe<Z_Test>;
    Z_Test_Item_oCount?: Maybe<Scalars['Int']>;
    Z_Test_Item_oList?: Maybe<Array<Maybe<Z_Test_Item_O>>>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    title5?: Maybe<Scalars['Int']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type Z_Test_ItemZ_TestReadArgs = {
    id?: Maybe<Scalars['String']>;
};

export type Z_Test_ItemAggregate = {
    __typename?: 'Z_Test_ItemAggregate';
    avg?: Maybe<Scalars['Float']>;
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    sum?: Maybe<Scalars['Float']>;
    title?: Maybe<Scalars['String']>;
    title5?: Maybe<Scalars['Int']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type Z_Test_ItemGroupBy = {
    __typename?: 'Z_Test_ItemGroupBy';
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    title5?: Maybe<Scalars['Int']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type Z_Test_ItemInput = {
    created_at?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    title5?: Maybe<Scalars['Int']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type Z_Test_Item_O = {
    __typename?: 'Z_Test_Item_o';
    Z_Test_ItemRead?: Maybe<Z_Test_Item>;
    created_at?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    owner?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type Z_Test_Item_OZ_Test_ItemReadArgs = {
    id?: Maybe<Scalars['String']>;
};

export type Z_Test_Item_OAggregate = {
    __typename?: 'Z_Test_Item_oAggregate';
    avg?: Maybe<Scalars['Float']>;
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    owner?: Maybe<Scalars['Int']>;
    sum?: Maybe<Scalars['Float']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type Z_Test_Item_OGroupBy = {
    __typename?: 'Z_Test_Item_oGroupBy';
    count?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    owner?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type Z_Test_Item_OInput = {
    created_at?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    owner?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type Distribution = {
    __typename?: 'distribution';
    count?: Maybe<Scalars['Int']>;
    range?: Maybe<Scalars['String']>;
};

export type M2mContentItem_ContentTag = {
    __typename?: 'm2mContentItem_ContentTag';
    ContentItemPId?: Maybe<Scalars['Int']>;
    ContentItemRead?: Maybe<ContentItem>;
    ContentTagCId?: Maybe<Scalars['Int']>;
    ContentTagRead?: Maybe<ContentTag>;
};

export type M2mContentItem_ContentTagContentItemReadArgs = {
    id?: Maybe<Scalars['String']>;
};

export type M2mContentItem_ContentTagContentTagReadArgs = {
    id?: Maybe<Scalars['String']>;
};

export type M2mContentItem_ContentTagAggregate = {
    __typename?: 'm2mContentItem_ContentTagAggregate';
    ContentItemPId?: Maybe<Scalars['Int']>;
    ContentTagCId?: Maybe<Scalars['Int']>;
    avg?: Maybe<Scalars['Float']>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    sum?: Maybe<Scalars['Float']>;
};

export type M2mContentItem_ContentTagGroupBy = {
    __typename?: 'm2mContentItem_ContentTagGroupBy';
    ContentItemPId?: Maybe<Scalars['Int']>;
    ContentTagCId?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
};

export type M2mContentItem_ContentTagInput = {
    ContentItemPId?: Maybe<Scalars['Int']>;
    ContentTagCId?: Maybe<Scalars['Int']>;
};

export type M2mContentItem_Link = {
    __typename?: 'm2mContentItem_Link';
    ContentItemPId?: Maybe<Scalars['Int']>;
    LinkCId?: Maybe<Scalars['Int']>;
};

export type M2mContentItem_LinkAggregate = {
    __typename?: 'm2mContentItem_LinkAggregate';
    ContentItemPId?: Maybe<Scalars['Int']>;
    LinkCId?: Maybe<Scalars['Int']>;
    avg?: Maybe<Scalars['Float']>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    sum?: Maybe<Scalars['Float']>;
};

export type M2mContentItem_LinkGroupBy = {
    __typename?: 'm2mContentItem_LinkGroupBy';
    ContentItemPId?: Maybe<Scalars['Int']>;
    LinkCId?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
};

export type M2mContentItem_LinkInput = {
    ContentItemPId?: Maybe<Scalars['Int']>;
    LinkCId?: Maybe<Scalars['Int']>;
};

export type M2mHome_Link = {
    __typename?: 'm2mHome_Link';
    HomePId?: Maybe<Scalars['Int']>;
    LinkCId?: Maybe<Scalars['Int']>;
};

export type M2mHome_LinkAggregate = {
    __typename?: 'm2mHome_LinkAggregate';
    HomePId?: Maybe<Scalars['Int']>;
    LinkCId?: Maybe<Scalars['Int']>;
    avg?: Maybe<Scalars['Float']>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    sum?: Maybe<Scalars['Float']>;
};

export type M2mHome_LinkGroupBy = {
    __typename?: 'm2mHome_LinkGroupBy';
    HomePId?: Maybe<Scalars['Int']>;
    LinkCId?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
};

export type M2mHome_LinkInput = {
    HomePId?: Maybe<Scalars['Int']>;
    LinkCId?: Maybe<Scalars['Int']>;
};

export type SdkFunctionWrapper = <T>(
    action: (requestHeaders?: Record<string, string>) => Promise<T>,
    operationName: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
    return {};
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(
    client: GraphQLClient,
    withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
    const sdk = getSdk(client, withWrapper);
    return {
        ...sdk,
    };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;
