// THIS FILE IS GENERATED, DO NOT EDIT!
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
import { ClientError } from 'graphql-request/dist/types';
import useSWR, { ConfigInterface as SWRConfigInterface, keyInterface as SWRKeyInterface } from 'swr';
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

export type ConditionString = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  like?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag = {
  _and?: Maybe<Array<Maybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>>>;
  _not?: Maybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  _or?: Maybe<Array<Maybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>>>;
  content_itemRead?: Maybe<Conditioncontent_Item>;
  content_tagRead?: Maybe<Conditioncontent_Tag>;
  xa1__content_item_p_id?: Maybe<ConditionString>;
  xa1__content_tag_c_id?: Maybe<ConditionString>;
};

export type Conditioncontent = {
  _and?: Maybe<Array<Maybe<Conditioncontent>>>;
  _not?: Maybe<Conditioncontent>;
  _or?: Maybe<Array<Maybe<Conditioncontent>>>;
  content_itemList?: Maybe<Conditioncontent_Item>;
  created_at?: Maybe<ConditionString>;
  id?: Maybe<ConditionString>;
  owner?: Maybe<ConditionString>;
  resumeRead?: Maybe<Conditionresume>;
  title?: Maybe<ConditionString>;
  updated_at?: Maybe<ConditionString>;
};

export type Conditioncontent_Feature = {
  _and?: Maybe<Array<Maybe<Conditioncontent_Feature>>>;
  _not?: Maybe<Conditioncontent_Feature>;
  _or?: Maybe<Array<Maybe<Conditioncontent_Feature>>>;
  content_itemRead?: Maybe<Conditioncontent_Item>;
  created_at?: Maybe<ConditionString>;
  id?: Maybe<ConditionString>;
  title?: Maybe<ConditionString>;
  updated_at?: Maybe<ConditionString>;
  xa1__content_item_id?: Maybe<ConditionString>;
};

export type Conditioncontent_Item = {
  _and?: Maybe<Array<Maybe<Conditioncontent_Item>>>;
  _nc_m2m_xa1__content_item_xa1__content_tagList?: Maybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  _not?: Maybe<Conditioncontent_Item>;
  _or?: Maybe<Array<Maybe<Conditioncontent_Item>>>;
  contentRead?: Maybe<Conditioncontent>;
  content_featureList?: Maybe<Conditioncontent_Feature>;
  content_linkList?: Maybe<Conditioncontent_Link>;
  created_at?: Maybe<ConditionString>;
  description?: Maybe<ConditionString>;
  disabled?: Maybe<ConditionString>;
  id?: Maybe<ConditionString>;
  images?: Maybe<ConditionString>;
  parent?: Maybe<ConditionString>;
  period?: Maybe<ConditionString>;
  state?: Maybe<ConditionString>;
  subtitle?: Maybe<ConditionString>;
  title?: Maybe<ConditionString>;
  updated_at?: Maybe<ConditionString>;
};

export type Conditioncontent_Link = {
  _and?: Maybe<Array<Maybe<Conditioncontent_Link>>>;
  _not?: Maybe<Conditioncontent_Link>;
  _or?: Maybe<Array<Maybe<Conditioncontent_Link>>>;
  content_itemRead?: Maybe<Conditioncontent_Item>;
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

export type Conditioncontent_Tag = {
  _and?: Maybe<Array<Maybe<Conditioncontent_Tag>>>;
  _nc_m2m_xa1__content_item_xa1__content_tagList?: Maybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  _not?: Maybe<Conditioncontent_Tag>;
  _or?: Maybe<Array<Maybe<Conditioncontent_Tag>>>;
  created_at?: Maybe<ConditionString>;
  id?: Maybe<ConditionString>;
  title?: Maybe<ConditionString>;
  updated_at?: Maybe<ConditionString>;
};

export type Conditionhome = {
  _and?: Maybe<Array<Maybe<Conditionhome>>>;
  _not?: Maybe<Conditionhome>;
  _or?: Maybe<Array<Maybe<Conditionhome>>>;
  bio?: Maybe<ConditionString>;
  created_at?: Maybe<ConditionString>;
  id?: Maybe<ConditionString>;
  intro?: Maybe<ConditionString>;
  linkList?: Maybe<Conditionlink>;
  owner?: Maybe<ConditionString>;
  resumeRead?: Maybe<Conditionresume>;
  subtitle?: Maybe<ConditionString>;
  title?: Maybe<ConditionString>;
  updated_at?: Maybe<ConditionString>;
};

export type Conditionlink = {
  _and?: Maybe<Array<Maybe<Conditionlink>>>;
  _not?: Maybe<Conditionlink>;
  _or?: Maybe<Array<Maybe<Conditionlink>>>;
  created_at?: Maybe<ConditionString>;
  disabled?: Maybe<ConditionString>;
  homeRead?: Maybe<Conditionhome>;
  href?: Maybe<ConditionString>;
  icon?: Maybe<ConditionString>;
  id?: Maybe<ConditionString>;
  target?: Maybe<ConditionString>;
  title?: Maybe<ConditionString>;
  updated_at?: Maybe<ConditionString>;
  xa1__home_id?: Maybe<ConditionString>;
};

export type Conditionresume = {
  _and?: Maybe<Array<Maybe<Conditionresume>>>;
  _not?: Maybe<Conditionresume>;
  _or?: Maybe<Array<Maybe<Conditionresume>>>;
  contentList?: Maybe<Conditioncontent>;
  created_at?: Maybe<ConditionString>;
  homeList?: Maybe<Conditionhome>;
  id?: Maybe<ConditionString>;
  name?: Maybe<ConditionString>;
  photo?: Maybe<ConditionString>;
  skillList?: Maybe<Conditionskill>;
  updated_at?: Maybe<ConditionString>;
  username?: Maybe<ConditionString>;
};

export type Conditionskill = {
  _and?: Maybe<Array<Maybe<Conditionskill>>>;
  _not?: Maybe<Conditionskill>;
  _or?: Maybe<Array<Maybe<Conditionskill>>>;
  created_at?: Maybe<ConditionString>;
  id?: Maybe<ConditionString>;
  owner?: Maybe<ConditionString>;
  resumeRead?: Maybe<Conditionresume>;
  skill_groupList?: Maybe<Conditionskill_Group>;
  title?: Maybe<ConditionString>;
  updated_at?: Maybe<ConditionString>;
};

export type Conditionskill_Group = {
  _and?: Maybe<Array<Maybe<Conditionskill_Group>>>;
  _not?: Maybe<Conditionskill_Group>;
  _or?: Maybe<Array<Maybe<Conditionskill_Group>>>;
  created_at?: Maybe<ConditionString>;
  icon?: Maybe<ConditionString>;
  id?: Maybe<ConditionString>;
  skillRead?: Maybe<Conditionskill>;
  skill_itemList?: Maybe<Conditionskill_Item>;
  title?: Maybe<ConditionString>;
  updated_at?: Maybe<ConditionString>;
  xa1__skill_id?: Maybe<ConditionString>;
};

export type Conditionskill_Item = {
  _and?: Maybe<Array<Maybe<Conditionskill_Item>>>;
  _not?: Maybe<Conditionskill_Item>;
  _or?: Maybe<Array<Maybe<Conditionskill_Item>>>;
  created_at?: Maybe<ConditionString>;
  description?: Maybe<ConditionString>;
  disabled?: Maybe<ConditionString>;
  href?: Maybe<ConditionString>;
  id?: Maybe<ConditionString>;
  parent?: Maybe<ConditionString>;
  score?: Maybe<ConditionString>;
  scoremax?: Maybe<ConditionString>;
  skill_groupRead?: Maybe<Conditionskill_Group>;
  title?: Maybe<ConditionString>;
  updated_at?: Maybe<ConditionString>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _nc_m2m_xa1__content_item_xa1__content_tagCreate?: Maybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  _nc_m2m_xa1__content_item_xa1__content_tagCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _nc_m2m_xa1__content_item_xa1__content_tagDelete?: Maybe<Scalars['Int']>;
  _nc_m2m_xa1__content_item_xa1__content_tagDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _nc_m2m_xa1__content_item_xa1__content_tagUpdate?: Maybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  _nc_m2m_xa1__content_item_xa1__content_tagUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  contentCreate?: Maybe<Content>;
  contentCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  contentDelete?: Maybe<Scalars['Int']>;
  contentDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  contentUpdate?: Maybe<Content>;
  contentUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  content_featureCreate?: Maybe<Content_Feature>;
  content_featureCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  content_featureDelete?: Maybe<Scalars['Int']>;
  content_featureDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  content_featureUpdate?: Maybe<Content_Feature>;
  content_featureUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  content_itemCreate?: Maybe<Content_Item>;
  content_itemCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  content_itemDelete?: Maybe<Scalars['Int']>;
  content_itemDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  content_itemUpdate?: Maybe<Content_Item>;
  content_itemUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  content_linkCreate?: Maybe<Content_Link>;
  content_linkCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  content_linkDelete?: Maybe<Scalars['Int']>;
  content_linkDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  content_linkUpdate?: Maybe<Content_Link>;
  content_linkUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  content_tagCreate?: Maybe<Content_Tag>;
  content_tagCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  content_tagDelete?: Maybe<Scalars['Int']>;
  content_tagDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  content_tagUpdate?: Maybe<Content_Tag>;
  content_tagUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  homeCreate?: Maybe<Home>;
  homeCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  homeDelete?: Maybe<Scalars['Int']>;
  homeDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  homeUpdate?: Maybe<Home>;
  homeUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  linkCreate?: Maybe<Link>;
  linkCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  linkDelete?: Maybe<Scalars['Int']>;
  linkDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  linkUpdate?: Maybe<Link>;
  linkUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  resumeCreate?: Maybe<Resume>;
  resumeCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  resumeDelete?: Maybe<Scalars['Int']>;
  resumeDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  resumeUpdate?: Maybe<Resume>;
  resumeUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  skillCreate?: Maybe<Skill>;
  skillCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  skillDelete?: Maybe<Scalars['Int']>;
  skillDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  skillUpdate?: Maybe<Skill>;
  skillUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  skill_groupCreate?: Maybe<Skill_Group>;
  skill_groupCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  skill_groupDelete?: Maybe<Scalars['Int']>;
  skill_groupDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  skill_groupUpdate?: Maybe<Skill_Group>;
  skill_groupUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  skill_itemCreate?: Maybe<Skill_Item>;
  skill_itemCreateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  skill_itemDelete?: Maybe<Scalars['Int']>;
  skill_itemDeleteBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
  skill_itemUpdate?: Maybe<Skill_Item>;
  skill_itemUpdateBulk?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type Mutation_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagCreateArgs = {
  data?: Maybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagInput>;
};


export type Mutation_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagCreateBulkArgs = {
  data?: Maybe<Array<Maybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagInput>>>;
};


export type Mutation_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagDeleteArgs = {
  id?: Maybe<Scalars['String']>;
};


export type Mutation_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagDeleteBulkArgs = {
  data?: Maybe<Array<Maybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagInput>>>;
};


export type Mutation_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagUpdateArgs = {
  data?: Maybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagInput>;
  id?: Maybe<Scalars['String']>;
};


export type Mutation_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagUpdateBulkArgs = {
  data?: Maybe<Array<Maybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagInput>>>;
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


export type MutationContentUpdateArgs = {
  data?: Maybe<ContentInput>;
  id?: Maybe<Scalars['String']>;
};


export type MutationContentUpdateBulkArgs = {
  data?: Maybe<Array<Maybe<ContentInput>>>;
};


export type MutationContent_FeatureCreateArgs = {
  data?: Maybe<Content_FeatureInput>;
};


export type MutationContent_FeatureCreateBulkArgs = {
  data?: Maybe<Array<Maybe<Content_FeatureInput>>>;
};


export type MutationContent_FeatureDeleteArgs = {
  id?: Maybe<Scalars['String']>;
};


export type MutationContent_FeatureDeleteBulkArgs = {
  data?: Maybe<Array<Maybe<Content_FeatureInput>>>;
};


export type MutationContent_FeatureUpdateArgs = {
  data?: Maybe<Content_FeatureInput>;
  id?: Maybe<Scalars['String']>;
};


export type MutationContent_FeatureUpdateBulkArgs = {
  data?: Maybe<Array<Maybe<Content_FeatureInput>>>;
};


export type MutationContent_ItemCreateArgs = {
  data?: Maybe<Content_ItemInput>;
};


export type MutationContent_ItemCreateBulkArgs = {
  data?: Maybe<Array<Maybe<Content_ItemInput>>>;
};


export type MutationContent_ItemDeleteArgs = {
  id?: Maybe<Scalars['String']>;
};


export type MutationContent_ItemDeleteBulkArgs = {
  data?: Maybe<Array<Maybe<Content_ItemInput>>>;
};


export type MutationContent_ItemUpdateArgs = {
  data?: Maybe<Content_ItemInput>;
  id?: Maybe<Scalars['String']>;
};


export type MutationContent_ItemUpdateBulkArgs = {
  data?: Maybe<Array<Maybe<Content_ItemInput>>>;
};


export type MutationContent_LinkCreateArgs = {
  data?: Maybe<Content_LinkInput>;
};


export type MutationContent_LinkCreateBulkArgs = {
  data?: Maybe<Array<Maybe<Content_LinkInput>>>;
};


export type MutationContent_LinkDeleteArgs = {
  id?: Maybe<Scalars['String']>;
};


export type MutationContent_LinkDeleteBulkArgs = {
  data?: Maybe<Array<Maybe<Content_LinkInput>>>;
};


export type MutationContent_LinkUpdateArgs = {
  data?: Maybe<Content_LinkInput>;
  id?: Maybe<Scalars['String']>;
};


export type MutationContent_LinkUpdateBulkArgs = {
  data?: Maybe<Array<Maybe<Content_LinkInput>>>;
};


export type MutationContent_TagCreateArgs = {
  data?: Maybe<Content_TagInput>;
};


export type MutationContent_TagCreateBulkArgs = {
  data?: Maybe<Array<Maybe<Content_TagInput>>>;
};


export type MutationContent_TagDeleteArgs = {
  id?: Maybe<Scalars['String']>;
};


export type MutationContent_TagDeleteBulkArgs = {
  data?: Maybe<Array<Maybe<Content_TagInput>>>;
};


export type MutationContent_TagUpdateArgs = {
  data?: Maybe<Content_TagInput>;
  id?: Maybe<Scalars['String']>;
};


export type MutationContent_TagUpdateBulkArgs = {
  data?: Maybe<Array<Maybe<Content_TagInput>>>;
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


export type MutationSkillUpdateArgs = {
  data?: Maybe<SkillInput>;
  id?: Maybe<Scalars['String']>;
};


export type MutationSkillUpdateBulkArgs = {
  data?: Maybe<Array<Maybe<SkillInput>>>;
};


export type MutationSkill_GroupCreateArgs = {
  data?: Maybe<Skill_GroupInput>;
};


export type MutationSkill_GroupCreateBulkArgs = {
  data?: Maybe<Array<Maybe<Skill_GroupInput>>>;
};


export type MutationSkill_GroupDeleteArgs = {
  id?: Maybe<Scalars['String']>;
};


export type MutationSkill_GroupDeleteBulkArgs = {
  data?: Maybe<Array<Maybe<Skill_GroupInput>>>;
};


export type MutationSkill_GroupUpdateArgs = {
  data?: Maybe<Skill_GroupInput>;
  id?: Maybe<Scalars['String']>;
};


export type MutationSkill_GroupUpdateBulkArgs = {
  data?: Maybe<Array<Maybe<Skill_GroupInput>>>;
};


export type MutationSkill_ItemCreateArgs = {
  data?: Maybe<Skill_ItemInput>;
};


export type MutationSkill_ItemCreateBulkArgs = {
  data?: Maybe<Array<Maybe<Skill_ItemInput>>>;
};


export type MutationSkill_ItemDeleteArgs = {
  id?: Maybe<Scalars['String']>;
};


export type MutationSkill_ItemDeleteBulkArgs = {
  data?: Maybe<Array<Maybe<Skill_ItemInput>>>;
};


export type MutationSkill_ItemUpdateArgs = {
  data?: Maybe<Skill_ItemInput>;
  id?: Maybe<Scalars['String']>;
};


export type MutationSkill_ItemUpdateBulkArgs = {
  data?: Maybe<Array<Maybe<Skill_ItemInput>>>;
};

export type Query = {
  __typename?: 'Query';
  _nc_m2m_xa1__content_item_xa1__content_tagAggregate?: Maybe<Array<Maybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagAggregate>>>;
  _nc_m2m_xa1__content_item_xa1__content_tagCount?: Maybe<Scalars['Int']>;
  _nc_m2m_xa1__content_item_xa1__content_tagDistinct?: Maybe<Array<Maybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>>>;
  _nc_m2m_xa1__content_item_xa1__content_tagDistribution?: Maybe<Array<Maybe<Distribution>>>;
  _nc_m2m_xa1__content_item_xa1__content_tagExists?: Maybe<Scalars['Boolean']>;
  _nc_m2m_xa1__content_item_xa1__content_tagFindOne?: Maybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  _nc_m2m_xa1__content_item_xa1__content_tagGroupBy?: Maybe<Array<Maybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagGroupBy>>>;
  _nc_m2m_xa1__content_item_xa1__content_tagList?: Maybe<Array<Maybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>>>;
  _nc_m2m_xa1__content_item_xa1__content_tagRead?: Maybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  contentAggregate?: Maybe<Array<Maybe<ContentAggregate>>>;
  contentCount?: Maybe<Scalars['Int']>;
  contentDistinct?: Maybe<Array<Maybe<Content>>>;
  contentDistribution?: Maybe<Array<Maybe<Distribution>>>;
  contentExists?: Maybe<Scalars['Boolean']>;
  contentFindOne?: Maybe<Content>;
  contentGroupBy?: Maybe<Array<Maybe<ContentGroupBy>>>;
  contentList?: Maybe<Array<Maybe<Content>>>;
  contentRead?: Maybe<Content>;
  content_featureAggregate?: Maybe<Array<Maybe<Content_FeatureAggregate>>>;
  content_featureCount?: Maybe<Scalars['Int']>;
  content_featureDistinct?: Maybe<Array<Maybe<Content_Feature>>>;
  content_featureDistribution?: Maybe<Array<Maybe<Distribution>>>;
  content_featureExists?: Maybe<Scalars['Boolean']>;
  content_featureFindOne?: Maybe<Content_Feature>;
  content_featureGroupBy?: Maybe<Array<Maybe<Content_FeatureGroupBy>>>;
  content_featureList?: Maybe<Array<Maybe<Content_Feature>>>;
  content_featureRead?: Maybe<Content_Feature>;
  content_itemAggregate?: Maybe<Array<Maybe<Content_ItemAggregate>>>;
  content_itemCount?: Maybe<Scalars['Int']>;
  content_itemDistinct?: Maybe<Array<Maybe<Content_Item>>>;
  content_itemDistribution?: Maybe<Array<Maybe<Distribution>>>;
  content_itemExists?: Maybe<Scalars['Boolean']>;
  content_itemFindOne?: Maybe<Content_Item>;
  content_itemGroupBy?: Maybe<Array<Maybe<Content_ItemGroupBy>>>;
  content_itemList?: Maybe<Array<Maybe<Content_Item>>>;
  content_itemRead?: Maybe<Content_Item>;
  content_linkAggregate?: Maybe<Array<Maybe<Content_LinkAggregate>>>;
  content_linkCount?: Maybe<Scalars['Int']>;
  content_linkDistinct?: Maybe<Array<Maybe<Content_Link>>>;
  content_linkDistribution?: Maybe<Array<Maybe<Distribution>>>;
  content_linkExists?: Maybe<Scalars['Boolean']>;
  content_linkFindOne?: Maybe<Content_Link>;
  content_linkGroupBy?: Maybe<Array<Maybe<Content_LinkGroupBy>>>;
  content_linkList?: Maybe<Array<Maybe<Content_Link>>>;
  content_linkRead?: Maybe<Content_Link>;
  content_tagAggregate?: Maybe<Array<Maybe<Content_TagAggregate>>>;
  content_tagCount?: Maybe<Scalars['Int']>;
  content_tagDistinct?: Maybe<Array<Maybe<Content_Tag>>>;
  content_tagDistribution?: Maybe<Array<Maybe<Distribution>>>;
  content_tagExists?: Maybe<Scalars['Boolean']>;
  content_tagFindOne?: Maybe<Content_Tag>;
  content_tagGroupBy?: Maybe<Array<Maybe<Content_TagGroupBy>>>;
  content_tagList?: Maybe<Array<Maybe<Content_Tag>>>;
  content_tagRead?: Maybe<Content_Tag>;
  homeAggregate?: Maybe<Array<Maybe<HomeAggregate>>>;
  homeCount?: Maybe<Scalars['Int']>;
  homeDistinct?: Maybe<Array<Maybe<Home>>>;
  homeDistribution?: Maybe<Array<Maybe<Distribution>>>;
  homeExists?: Maybe<Scalars['Boolean']>;
  homeFindOne?: Maybe<Home>;
  homeGroupBy?: Maybe<Array<Maybe<HomeGroupBy>>>;
  homeList?: Maybe<Array<Maybe<Home>>>;
  homeRead?: Maybe<Home>;
  linkAggregate?: Maybe<Array<Maybe<LinkAggregate>>>;
  linkCount?: Maybe<Scalars['Int']>;
  linkDistinct?: Maybe<Array<Maybe<Link>>>;
  linkDistribution?: Maybe<Array<Maybe<Distribution>>>;
  linkExists?: Maybe<Scalars['Boolean']>;
  linkFindOne?: Maybe<Link>;
  linkGroupBy?: Maybe<Array<Maybe<LinkGroupBy>>>;
  linkList?: Maybe<Array<Maybe<Link>>>;
  linkRead?: Maybe<Link>;
  m2mNotChildren?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  m2mNotChildrenCount?: Maybe<Scalars['JSON']>;
  nocodb_health?: Maybe<Scalars['String']>;
  resumeAggregate?: Maybe<Array<Maybe<ResumeAggregate>>>;
  resumeCount?: Maybe<Scalars['Int']>;
  resumeDistinct?: Maybe<Array<Maybe<Resume>>>;
  resumeDistribution?: Maybe<Array<Maybe<Distribution>>>;
  resumeExists?: Maybe<Scalars['Boolean']>;
  resumeFindOne?: Maybe<Resume>;
  resumeGroupBy?: Maybe<Array<Maybe<ResumeGroupBy>>>;
  resumeList?: Maybe<Array<Maybe<Resume>>>;
  resumeRead?: Maybe<Resume>;
  skillAggregate?: Maybe<Array<Maybe<SkillAggregate>>>;
  skillCount?: Maybe<Scalars['Int']>;
  skillDistinct?: Maybe<Array<Maybe<Skill>>>;
  skillDistribution?: Maybe<Array<Maybe<Distribution>>>;
  skillExists?: Maybe<Scalars['Boolean']>;
  skillFindOne?: Maybe<Skill>;
  skillGroupBy?: Maybe<Array<Maybe<SkillGroupBy>>>;
  skillList?: Maybe<Array<Maybe<Skill>>>;
  skillRead?: Maybe<Skill>;
  skill_groupAggregate?: Maybe<Array<Maybe<Skill_GroupAggregate>>>;
  skill_groupCount?: Maybe<Scalars['Int']>;
  skill_groupDistinct?: Maybe<Array<Maybe<Skill_Group>>>;
  skill_groupDistribution?: Maybe<Array<Maybe<Distribution>>>;
  skill_groupExists?: Maybe<Scalars['Boolean']>;
  skill_groupFindOne?: Maybe<Skill_Group>;
  skill_groupGroupBy?: Maybe<Array<Maybe<Skill_GroupGroupBy>>>;
  skill_groupList?: Maybe<Array<Maybe<Skill_Group>>>;
  skill_groupRead?: Maybe<Skill_Group>;
  skill_itemAggregate?: Maybe<Array<Maybe<Skill_ItemAggregate>>>;
  skill_itemCount?: Maybe<Scalars['Int']>;
  skill_itemDistinct?: Maybe<Array<Maybe<Skill_Item>>>;
  skill_itemDistribution?: Maybe<Array<Maybe<Distribution>>>;
  skill_itemExists?: Maybe<Scalars['Boolean']>;
  skill_itemFindOne?: Maybe<Skill_Item>;
  skill_itemGroupBy?: Maybe<Array<Maybe<Skill_ItemGroupBy>>>;
  skill_itemList?: Maybe<Array<Maybe<Skill_Item>>>;
  skill_itemRead?: Maybe<Skill_Item>;
};


export type Query_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type Query_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagCountArgs = {
  condition?: Maybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  conditionGraph?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type Query_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagDistinctArgs = {
  column_name?: Maybe<Scalars['String']>;
  condition?: Maybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type Query_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagDistributionArgs = {
  column_name: Scalars['String'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
  steps?: Maybe<Scalars['String']>;
};


export type Query_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagExistsArgs = {
  id: Scalars['String'];
};


export type Query_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagFindOneArgs = {
  condition?: Maybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  where?: Maybe<Scalars['String']>;
};


export type Query_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagGroupByArgs = {
  fields?: Maybe<Scalars['String']>;
  having?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type Query_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagListArgs = {
  condition?: Maybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  conditionGraph?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type Query_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagReadArgs = {
  id: Scalars['String'];
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
  condition?: Maybe<Conditioncontent>;
  conditionGraph?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContentDistinctArgs = {
  column_name?: Maybe<Scalars['String']>;
  condition?: Maybe<Conditioncontent>;
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


export type QueryContentFindOneArgs = {
  condition?: Maybe<Conditioncontent>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContentGroupByArgs = {
  fields?: Maybe<Scalars['String']>;
  having?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryContentListArgs = {
  condition?: Maybe<Conditioncontent>;
  conditionGraph?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContentReadArgs = {
  id: Scalars['String'];
};


export type QueryContent_FeatureAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryContent_FeatureCountArgs = {
  condition?: Maybe<Conditioncontent_Feature>;
  conditionGraph?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContent_FeatureDistinctArgs = {
  column_name?: Maybe<Scalars['String']>;
  condition?: Maybe<Conditioncontent_Feature>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContent_FeatureDistributionArgs = {
  column_name: Scalars['String'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
  steps?: Maybe<Scalars['String']>;
};


export type QueryContent_FeatureExistsArgs = {
  id: Scalars['String'];
};


export type QueryContent_FeatureFindOneArgs = {
  condition?: Maybe<Conditioncontent_Feature>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContent_FeatureGroupByArgs = {
  fields?: Maybe<Scalars['String']>;
  having?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryContent_FeatureListArgs = {
  condition?: Maybe<Conditioncontent_Feature>;
  conditionGraph?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContent_FeatureReadArgs = {
  id: Scalars['String'];
};


export type QueryContent_ItemAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryContent_ItemCountArgs = {
  condition?: Maybe<Conditioncontent_Item>;
  conditionGraph?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContent_ItemDistinctArgs = {
  column_name?: Maybe<Scalars['String']>;
  condition?: Maybe<Conditioncontent_Item>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContent_ItemDistributionArgs = {
  column_name: Scalars['String'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
  steps?: Maybe<Scalars['String']>;
};


export type QueryContent_ItemExistsArgs = {
  id: Scalars['String'];
};


export type QueryContent_ItemFindOneArgs = {
  condition?: Maybe<Conditioncontent_Item>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContent_ItemGroupByArgs = {
  fields?: Maybe<Scalars['String']>;
  having?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryContent_ItemListArgs = {
  condition?: Maybe<Conditioncontent_Item>;
  conditionGraph?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContent_ItemReadArgs = {
  id: Scalars['String'];
};


export type QueryContent_LinkAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryContent_LinkCountArgs = {
  condition?: Maybe<Conditioncontent_Link>;
  conditionGraph?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContent_LinkDistinctArgs = {
  column_name?: Maybe<Scalars['String']>;
  condition?: Maybe<Conditioncontent_Link>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContent_LinkDistributionArgs = {
  column_name: Scalars['String'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
  steps?: Maybe<Scalars['String']>;
};


export type QueryContent_LinkExistsArgs = {
  id: Scalars['String'];
};


export type QueryContent_LinkFindOneArgs = {
  condition?: Maybe<Conditioncontent_Link>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContent_LinkGroupByArgs = {
  fields?: Maybe<Scalars['String']>;
  having?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryContent_LinkListArgs = {
  condition?: Maybe<Conditioncontent_Link>;
  conditionGraph?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContent_LinkReadArgs = {
  id: Scalars['String'];
};


export type QueryContent_TagAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryContent_TagCountArgs = {
  condition?: Maybe<Conditioncontent_Tag>;
  conditionGraph?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContent_TagDistinctArgs = {
  column_name?: Maybe<Scalars['String']>;
  condition?: Maybe<Conditioncontent_Tag>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContent_TagDistributionArgs = {
  column_name: Scalars['String'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
  steps?: Maybe<Scalars['String']>;
};


export type QueryContent_TagExistsArgs = {
  id: Scalars['String'];
};


export type QueryContent_TagFindOneArgs = {
  condition?: Maybe<Conditioncontent_Tag>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContent_TagGroupByArgs = {
  fields?: Maybe<Scalars['String']>;
  having?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryContent_TagListArgs = {
  condition?: Maybe<Conditioncontent_Tag>;
  conditionGraph?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryContent_TagReadArgs = {
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
  condition?: Maybe<Conditionhome>;
  conditionGraph?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryHomeDistinctArgs = {
  column_name?: Maybe<Scalars['String']>;
  condition?: Maybe<Conditionhome>;
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
  condition?: Maybe<Conditionhome>;
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
  condition?: Maybe<Conditionhome>;
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
  condition?: Maybe<Conditionlink>;
  conditionGraph?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryLinkDistinctArgs = {
  column_name?: Maybe<Scalars['String']>;
  condition?: Maybe<Conditionlink>;
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
  condition?: Maybe<Conditionlink>;
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
  condition?: Maybe<Conditionlink>;
  conditionGraph?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryLinkReadArgs = {
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


export type QueryResumeAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryResumeCountArgs = {
  condition?: Maybe<Conditionresume>;
  conditionGraph?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QueryResumeDistinctArgs = {
  column_name?: Maybe<Scalars['String']>;
  condition?: Maybe<Conditionresume>;
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
  condition?: Maybe<Conditionresume>;
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
  condition?: Maybe<Conditionresume>;
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
  condition?: Maybe<Conditionskill>;
  conditionGraph?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QuerySkillDistinctArgs = {
  column_name?: Maybe<Scalars['String']>;
  condition?: Maybe<Conditionskill>;
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
  condition?: Maybe<Conditionskill>;
  where?: Maybe<Scalars['String']>;
};


export type QuerySkillGroupByArgs = {
  fields?: Maybe<Scalars['String']>;
  having?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QuerySkillListArgs = {
  condition?: Maybe<Conditionskill>;
  conditionGraph?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QuerySkillReadArgs = {
  id: Scalars['String'];
};


export type QuerySkill_GroupAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QuerySkill_GroupCountArgs = {
  condition?: Maybe<Conditionskill_Group>;
  conditionGraph?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QuerySkill_GroupDistinctArgs = {
  column_name?: Maybe<Scalars['String']>;
  condition?: Maybe<Conditionskill_Group>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QuerySkill_GroupDistributionArgs = {
  column_name: Scalars['String'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
  steps?: Maybe<Scalars['String']>;
};


export type QuerySkill_GroupExistsArgs = {
  id: Scalars['String'];
};


export type QuerySkill_GroupFindOneArgs = {
  condition?: Maybe<Conditionskill_Group>;
  where?: Maybe<Scalars['String']>;
};


export type QuerySkill_GroupGroupByArgs = {
  fields?: Maybe<Scalars['String']>;
  having?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QuerySkill_GroupListArgs = {
  condition?: Maybe<Conditionskill_Group>;
  conditionGraph?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QuerySkill_GroupReadArgs = {
  id: Scalars['String'];
};


export type QuerySkill_ItemAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QuerySkill_ItemCountArgs = {
  condition?: Maybe<Conditionskill_Item>;
  conditionGraph?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QuerySkill_ItemDistinctArgs = {
  column_name?: Maybe<Scalars['String']>;
  condition?: Maybe<Conditionskill_Item>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QuerySkill_ItemDistributionArgs = {
  column_name: Scalars['String'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
  steps?: Maybe<Scalars['String']>;
};


export type QuerySkill_ItemExistsArgs = {
  id: Scalars['String'];
};


export type QuerySkill_ItemFindOneArgs = {
  condition?: Maybe<Conditionskill_Item>;
  where?: Maybe<Scalars['String']>;
};


export type QuerySkill_ItemGroupByArgs = {
  fields?: Maybe<Scalars['String']>;
  having?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QuerySkill_ItemListArgs = {
  condition?: Maybe<Conditionskill_Item>;
  conditionGraph?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type QuerySkill_ItemReadArgs = {
  id: Scalars['String'];
};

export type _Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag = {
  __typename?: '_nc_m2m_xa1__content_item_xa1__content_tag';
  content_itemRead?: Maybe<Content_Item>;
  content_tagRead?: Maybe<Content_Tag>;
  xa1__content_item_p_id?: Maybe<Scalars['Int']>;
  xa1__content_tag_c_id?: Maybe<Scalars['Int']>;
};


export type _Nc_M2m_Xa1__Content_Item_Xa1__Content_TagContent_ItemReadArgs = {
  id?: Maybe<Scalars['String']>;
};


export type _Nc_M2m_Xa1__Content_Item_Xa1__Content_TagContent_TagReadArgs = {
  id?: Maybe<Scalars['String']>;
};

export type _Nc_M2m_Xa1__Content_Item_Xa1__Content_TagAggregate = {
  __typename?: '_nc_m2m_xa1__content_item_xa1__content_tagAggregate';
  avg?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  xa1__content_item_p_id?: Maybe<Scalars['Int']>;
  xa1__content_tag_c_id?: Maybe<Scalars['Int']>;
};

export type _Nc_M2m_Xa1__Content_Item_Xa1__Content_TagGroupBy = {
  __typename?: '_nc_m2m_xa1__content_item_xa1__content_tagGroupBy';
  count?: Maybe<Scalars['Int']>;
  xa1__content_item_p_id?: Maybe<Scalars['Int']>;
  xa1__content_tag_c_id?: Maybe<Scalars['Int']>;
};

export type _Nc_M2m_Xa1__Content_Item_Xa1__Content_TagInput = {
  xa1__content_item_p_id?: Maybe<Scalars['Int']>;
  xa1__content_tag_c_id?: Maybe<Scalars['Int']>;
};

export type Content = {
  __typename?: 'content';
  content_itemCount?: Maybe<Scalars['Int']>;
  content_itemList?: Maybe<Array<Maybe<Content_Item>>>;
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['Int']>;
  resumeRead?: Maybe<Resume>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};


export type ContentResumeReadArgs = {
  id?: Maybe<Scalars['String']>;
};

export type ContentAggregate = {
  __typename?: 'contentAggregate';
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

export type ContentGroupBy = {
  __typename?: 'contentGroupBy';
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

export type Content_Feature = {
  __typename?: 'content_feature';
  content_itemRead?: Maybe<Content_Item>;
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  xa1__content_item_id?: Maybe<Scalars['Int']>;
};


export type Content_FeatureContent_ItemReadArgs = {
  id?: Maybe<Scalars['String']>;
};

export type Content_FeatureAggregate = {
  __typename?: 'content_featureAggregate';
  avg?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  xa1__content_item_id?: Maybe<Scalars['Int']>;
};

export type Content_FeatureGroupBy = {
  __typename?: 'content_featureGroupBy';
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  xa1__content_item_id?: Maybe<Scalars['Int']>;
};

export type Content_FeatureInput = {
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  xa1__content_item_id?: Maybe<Scalars['Int']>;
};

export type Content_Item = {
  __typename?: 'content_item';
  _nc_m2m_xa1__content_item_xa1__content_tagCount?: Maybe<Scalars['Int']>;
  _nc_m2m_xa1__content_item_xa1__content_tagList?: Maybe<Array<Maybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>>>;
  contentRead?: Maybe<Content>;
  content_featureCount?: Maybe<Scalars['Int']>;
  content_featureList?: Maybe<Array<Maybe<Content_Feature>>>;
  content_linkCount?: Maybe<Scalars['Int']>;
  content_linkList?: Maybe<Array<Maybe<Content_Link>>>;
  content_tagMMList?: Maybe<Array<Maybe<Content_Tag>>>;
  created_at?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Scalars['Int']>;
  period?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};


export type Content_ItemContentReadArgs = {
  id?: Maybe<Scalars['String']>;
};

export type Content_ItemAggregate = {
  __typename?: 'content_itemAggregate';
  avg?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<Scalars['JSON']>;
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

export type Content_ItemGroupBy = {
  __typename?: 'content_itemGroupBy';
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Scalars['Int']>;
  period?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type Content_ItemInput = {
  created_at?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Scalars['Int']>;
  period?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type Content_Link = {
  __typename?: 'content_link';
  content_itemRead?: Maybe<Content_Item>;
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


export type Content_LinkContent_ItemReadArgs = {
  id?: Maybe<Scalars['String']>;
};

export type Content_LinkAggregate = {
  __typename?: 'content_linkAggregate';
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

export type Content_LinkGroupBy = {
  __typename?: 'content_linkGroupBy';
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

export type Content_LinkInput = {
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

export type Content_Tag = {
  __typename?: 'content_tag';
  _nc_m2m_xa1__content_item_xa1__content_tagCount?: Maybe<Scalars['Int']>;
  _nc_m2m_xa1__content_item_xa1__content_tagList?: Maybe<Array<Maybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>>>;
  content_itemMMList?: Maybe<Array<Maybe<Content_Item>>>;
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type Content_TagAggregate = {
  __typename?: 'content_tagAggregate';
  avg?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type Content_TagGroupBy = {
  __typename?: 'content_tagGroupBy';
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type Content_TagInput = {
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type Distribution = {
  __typename?: 'distribution';
  count?: Maybe<Scalars['Int']>;
  range?: Maybe<Scalars['String']>;
};

export type Home = {
  __typename?: 'home';
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  intro?: Maybe<Scalars['String']>;
  linkCount?: Maybe<Scalars['Int']>;
  linkList?: Maybe<Array<Maybe<Link>>>;
  owner?: Maybe<Scalars['Int']>;
  resumeRead?: Maybe<Resume>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};


export type HomeResumeReadArgs = {
  id?: Maybe<Scalars['String']>;
};

export type HomeAggregate = {
  __typename?: 'homeAggregate';
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
  __typename?: 'homeGroupBy';
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
  __typename?: 'link';
  created_at?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Int']>;
  homeRead?: Maybe<Home>;
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
  __typename?: 'linkAggregate';
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
  __typename?: 'linkGroupBy';
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

export type Resume = {
  __typename?: 'resume';
  contentCount?: Maybe<Scalars['Int']>;
  contentList?: Maybe<Array<Maybe<Content>>>;
  created_at?: Maybe<Scalars['String']>;
  homeCount?: Maybe<Scalars['Int']>;
  homeList?: Maybe<Array<Maybe<Home>>>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['JSON']>;
  skillCount?: Maybe<Scalars['Int']>;
  skillList?: Maybe<Array<Maybe<Skill>>>;
  updated_at?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type ResumeAggregate = {
  __typename?: 'resumeAggregate';
  avg?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['JSON']>;
  sum?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type ResumeGroupBy = {
  __typename?: 'resumeGroupBy';
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['JSON']>;
  updated_at?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type ResumeInput = {
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['JSON']>;
  updated_at?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type Skill = {
  __typename?: 'skill';
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['Int']>;
  resumeRead?: Maybe<Resume>;
  skill_groupCount?: Maybe<Scalars['Int']>;
  skill_groupList?: Maybe<Array<Maybe<Skill_Group>>>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};


export type SkillResumeReadArgs = {
  id?: Maybe<Scalars['String']>;
};

export type SkillAggregate = {
  __typename?: 'skillAggregate';
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

export type SkillGroupBy = {
  __typename?: 'skillGroupBy';
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['Int']>;
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

export type Skill_Group = {
  __typename?: 'skill_group';
  created_at?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  skillRead?: Maybe<Skill>;
  skill_itemCount?: Maybe<Scalars['Int']>;
  skill_itemList?: Maybe<Array<Maybe<Skill_Item>>>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  xa1__skill_id?: Maybe<Scalars['Int']>;
};


export type Skill_GroupSkillReadArgs = {
  id?: Maybe<Scalars['String']>;
};

export type Skill_GroupAggregate = {
  __typename?: 'skill_groupAggregate';
  avg?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  xa1__skill_id?: Maybe<Scalars['Int']>;
};

export type Skill_GroupGroupBy = {
  __typename?: 'skill_groupGroupBy';
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  xa1__skill_id?: Maybe<Scalars['Int']>;
};

export type Skill_GroupInput = {
  created_at?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  xa1__skill_id?: Maybe<Scalars['Int']>;
};

export type Skill_Item = {
  __typename?: 'skill_item';
  created_at?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  scoremax?: Maybe<Scalars['Int']>;
  skill_groupRead?: Maybe<Skill_Group>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};


export type Skill_ItemSkill_GroupReadArgs = {
  id?: Maybe<Scalars['String']>;
};

export type Skill_ItemAggregate = {
  __typename?: 'skill_itemAggregate';
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

export type Skill_ItemGroupBy = {
  __typename?: 'skill_itemGroupBy';
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

export type Skill_ItemInput = {
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



export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  const sdk = getSdk(client, withWrapper);
  return {
    ...sdk,

  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;