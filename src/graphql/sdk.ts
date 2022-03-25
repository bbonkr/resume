// THIS FILE IS GENERATED, DO NOT EDIT!
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
import { ClientError } from 'graphql-request/dist/types';
import useSWR, { SWRConfiguration as SWRConfigInterface, Key as SWRKeyInterface } from 'swr';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type ConditionFloat = {
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ConditionInt = {
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ConditionString = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag = {
  _and?: InputMaybe<Array<InputMaybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>>>;
  _not?: InputMaybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  _or?: InputMaybe<Array<InputMaybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>>>;
  content_itemRead?: InputMaybe<Conditioncontent_Item>;
  content_tagRead?: InputMaybe<Conditioncontent_Tag>;
  xa1__content_item_p_id?: InputMaybe<ConditionString>;
  xa1__content_tag_c_id?: InputMaybe<ConditionString>;
};

export type Conditioncontent = {
  _and?: InputMaybe<Array<InputMaybe<Conditioncontent>>>;
  _not?: InputMaybe<Conditioncontent>;
  _or?: InputMaybe<Array<InputMaybe<Conditioncontent>>>;
  content_itemList?: InputMaybe<Conditioncontent_Item>;
  created_at?: InputMaybe<ConditionString>;
  id?: InputMaybe<ConditionString>;
  owner?: InputMaybe<ConditionString>;
  resumeRead?: InputMaybe<Conditionresume>;
  title?: InputMaybe<ConditionString>;
  updated_at?: InputMaybe<ConditionString>;
};

export type Conditioncontent_Feature = {
  _and?: InputMaybe<Array<InputMaybe<Conditioncontent_Feature>>>;
  _not?: InputMaybe<Conditioncontent_Feature>;
  _or?: InputMaybe<Array<InputMaybe<Conditioncontent_Feature>>>;
  content_itemRead?: InputMaybe<Conditioncontent_Item>;
  created_at?: InputMaybe<ConditionString>;
  id?: InputMaybe<ConditionString>;
  title?: InputMaybe<ConditionString>;
  updated_at?: InputMaybe<ConditionString>;
  xa1__content_item_id?: InputMaybe<ConditionString>;
};

export type Conditioncontent_Item = {
  _and?: InputMaybe<Array<InputMaybe<Conditioncontent_Item>>>;
  _nc_m2m_xa1__content_item_xa1__content_tagList?: InputMaybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  _not?: InputMaybe<Conditioncontent_Item>;
  _or?: InputMaybe<Array<InputMaybe<Conditioncontent_Item>>>;
  contentRead?: InputMaybe<Conditioncontent>;
  content_featureList?: InputMaybe<Conditioncontent_Feature>;
  content_linkList?: InputMaybe<Conditioncontent_Link>;
  created_at?: InputMaybe<ConditionString>;
  description?: InputMaybe<ConditionString>;
  disabled?: InputMaybe<ConditionString>;
  id?: InputMaybe<ConditionString>;
  images?: InputMaybe<ConditionString>;
  parent?: InputMaybe<ConditionString>;
  period?: InputMaybe<ConditionString>;
  state?: InputMaybe<ConditionString>;
  subtitle?: InputMaybe<ConditionString>;
  title?: InputMaybe<ConditionString>;
  updated_at?: InputMaybe<ConditionString>;
};

export type Conditioncontent_Link = {
  _and?: InputMaybe<Array<InputMaybe<Conditioncontent_Link>>>;
  _not?: InputMaybe<Conditioncontent_Link>;
  _or?: InputMaybe<Array<InputMaybe<Conditioncontent_Link>>>;
  content_itemRead?: InputMaybe<Conditioncontent_Item>;
  created_at?: InputMaybe<ConditionString>;
  disabled?: InputMaybe<ConditionString>;
  href?: InputMaybe<ConditionString>;
  icon?: InputMaybe<ConditionString>;
  id?: InputMaybe<ConditionString>;
  target?: InputMaybe<ConditionString>;
  title?: InputMaybe<ConditionString>;
  updated_at?: InputMaybe<ConditionString>;
  xa1__content_item_id?: InputMaybe<ConditionString>;
};

export type Conditioncontent_Tag = {
  _and?: InputMaybe<Array<InputMaybe<Conditioncontent_Tag>>>;
  _nc_m2m_xa1__content_item_xa1__content_tagList?: InputMaybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  _not?: InputMaybe<Conditioncontent_Tag>;
  _or?: InputMaybe<Array<InputMaybe<Conditioncontent_Tag>>>;
  created_at?: InputMaybe<ConditionString>;
  id?: InputMaybe<ConditionString>;
  title?: InputMaybe<ConditionString>;
  updated_at?: InputMaybe<ConditionString>;
};

export type Conditionhome = {
  _and?: InputMaybe<Array<InputMaybe<Conditionhome>>>;
  _not?: InputMaybe<Conditionhome>;
  _or?: InputMaybe<Array<InputMaybe<Conditionhome>>>;
  bio?: InputMaybe<ConditionString>;
  created_at?: InputMaybe<ConditionString>;
  id?: InputMaybe<ConditionString>;
  intro?: InputMaybe<ConditionString>;
  linkList?: InputMaybe<Conditionlink>;
  owner?: InputMaybe<ConditionString>;
  resumeRead?: InputMaybe<Conditionresume>;
  subtitle?: InputMaybe<ConditionString>;
  title?: InputMaybe<ConditionString>;
  updated_at?: InputMaybe<ConditionString>;
};

export type Conditionlink = {
  _and?: InputMaybe<Array<InputMaybe<Conditionlink>>>;
  _not?: InputMaybe<Conditionlink>;
  _or?: InputMaybe<Array<InputMaybe<Conditionlink>>>;
  created_at?: InputMaybe<ConditionString>;
  disabled?: InputMaybe<ConditionString>;
  homeRead?: InputMaybe<Conditionhome>;
  href?: InputMaybe<ConditionString>;
  icon?: InputMaybe<ConditionString>;
  id?: InputMaybe<ConditionString>;
  target?: InputMaybe<ConditionString>;
  title?: InputMaybe<ConditionString>;
  updated_at?: InputMaybe<ConditionString>;
  xa1__home_id?: InputMaybe<ConditionString>;
};

export type Conditionresume = {
  _and?: InputMaybe<Array<InputMaybe<Conditionresume>>>;
  _not?: InputMaybe<Conditionresume>;
  _or?: InputMaybe<Array<InputMaybe<Conditionresume>>>;
  contentList?: InputMaybe<Conditioncontent>;
  created_at?: InputMaybe<ConditionString>;
  facebook?: InputMaybe<ConditionString>;
  github?: InputMaybe<ConditionString>;
  homeList?: InputMaybe<Conditionhome>;
  id?: InputMaybe<ConditionString>;
  instagram?: InputMaybe<ConditionString>;
  linkedin?: InputMaybe<ConditionString>;
  name?: InputMaybe<ConditionString>;
  name_en?: InputMaybe<ConditionString>;
  photo?: InputMaybe<ConditionString>;
  site_title?: InputMaybe<ConditionString>;
  site_title_en?: InputMaybe<ConditionString>;
  skillList?: InputMaybe<Conditionskill>;
  twitter?: InputMaybe<ConditionString>;
  updated_at?: InputMaybe<ConditionString>;
  url?: InputMaybe<ConditionString>;
  username?: InputMaybe<ConditionString>;
};

export type Conditionskill = {
  _and?: InputMaybe<Array<InputMaybe<Conditionskill>>>;
  _not?: InputMaybe<Conditionskill>;
  _or?: InputMaybe<Array<InputMaybe<Conditionskill>>>;
  created_at?: InputMaybe<ConditionString>;
  id?: InputMaybe<ConditionString>;
  owner?: InputMaybe<ConditionString>;
  resumeRead?: InputMaybe<Conditionresume>;
  skill_groupList?: InputMaybe<Conditionskill_Group>;
  title?: InputMaybe<ConditionString>;
  updated_at?: InputMaybe<ConditionString>;
};

export type Conditionskill_Group = {
  _and?: InputMaybe<Array<InputMaybe<Conditionskill_Group>>>;
  _not?: InputMaybe<Conditionskill_Group>;
  _or?: InputMaybe<Array<InputMaybe<Conditionskill_Group>>>;
  created_at?: InputMaybe<ConditionString>;
  icon?: InputMaybe<ConditionString>;
  id?: InputMaybe<ConditionString>;
  skillRead?: InputMaybe<Conditionskill>;
  skill_itemList?: InputMaybe<Conditionskill_Item>;
  title?: InputMaybe<ConditionString>;
  updated_at?: InputMaybe<ConditionString>;
  xa1__skill_id?: InputMaybe<ConditionString>;
};

export type Conditionskill_Item = {
  _and?: InputMaybe<Array<InputMaybe<Conditionskill_Item>>>;
  _not?: InputMaybe<Conditionskill_Item>;
  _or?: InputMaybe<Array<InputMaybe<Conditionskill_Item>>>;
  created_at?: InputMaybe<ConditionString>;
  description?: InputMaybe<ConditionString>;
  disabled?: InputMaybe<ConditionString>;
  href?: InputMaybe<ConditionString>;
  id?: InputMaybe<ConditionString>;
  parent?: InputMaybe<ConditionString>;
  score?: InputMaybe<ConditionString>;
  scoremax?: InputMaybe<ConditionString>;
  skill_groupRead?: InputMaybe<Conditionskill_Group>;
  title?: InputMaybe<ConditionString>;
  updated_at?: InputMaybe<ConditionString>;
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
  data?: InputMaybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagInput>;
};


export type Mutation_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagCreateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagInput>>>;
};


export type Mutation_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagDeleteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type Mutation_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagDeleteBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagInput>>>;
};


export type Mutation_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagUpdateArgs = {
  data?: InputMaybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type Mutation_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagUpdateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagInput>>>;
};


export type MutationContentCreateArgs = {
  data?: InputMaybe<ContentInput>;
};


export type MutationContentCreateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<ContentInput>>>;
};


export type MutationContentDeleteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationContentDeleteBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<ContentInput>>>;
};


export type MutationContentUpdateArgs = {
  data?: InputMaybe<ContentInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type MutationContentUpdateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<ContentInput>>>;
};


export type MutationContent_FeatureCreateArgs = {
  data?: InputMaybe<Content_FeatureInput>;
};


export type MutationContent_FeatureCreateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Content_FeatureInput>>>;
};


export type MutationContent_FeatureDeleteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationContent_FeatureDeleteBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Content_FeatureInput>>>;
};


export type MutationContent_FeatureUpdateArgs = {
  data?: InputMaybe<Content_FeatureInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type MutationContent_FeatureUpdateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Content_FeatureInput>>>;
};


export type MutationContent_ItemCreateArgs = {
  data?: InputMaybe<Content_ItemInput>;
};


export type MutationContent_ItemCreateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Content_ItemInput>>>;
};


export type MutationContent_ItemDeleteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationContent_ItemDeleteBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Content_ItemInput>>>;
};


export type MutationContent_ItemUpdateArgs = {
  data?: InputMaybe<Content_ItemInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type MutationContent_ItemUpdateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Content_ItemInput>>>;
};


export type MutationContent_LinkCreateArgs = {
  data?: InputMaybe<Content_LinkInput>;
};


export type MutationContent_LinkCreateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Content_LinkInput>>>;
};


export type MutationContent_LinkDeleteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationContent_LinkDeleteBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Content_LinkInput>>>;
};


export type MutationContent_LinkUpdateArgs = {
  data?: InputMaybe<Content_LinkInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type MutationContent_LinkUpdateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Content_LinkInput>>>;
};


export type MutationContent_TagCreateArgs = {
  data?: InputMaybe<Content_TagInput>;
};


export type MutationContent_TagCreateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Content_TagInput>>>;
};


export type MutationContent_TagDeleteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationContent_TagDeleteBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Content_TagInput>>>;
};


export type MutationContent_TagUpdateArgs = {
  data?: InputMaybe<Content_TagInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type MutationContent_TagUpdateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Content_TagInput>>>;
};


export type MutationHomeCreateArgs = {
  data?: InputMaybe<HomeInput>;
};


export type MutationHomeCreateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<HomeInput>>>;
};


export type MutationHomeDeleteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationHomeDeleteBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<HomeInput>>>;
};


export type MutationHomeUpdateArgs = {
  data?: InputMaybe<HomeInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type MutationHomeUpdateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<HomeInput>>>;
};


export type MutationLinkCreateArgs = {
  data?: InputMaybe<LinkInput>;
};


export type MutationLinkCreateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<LinkInput>>>;
};


export type MutationLinkDeleteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationLinkDeleteBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<LinkInput>>>;
};


export type MutationLinkUpdateArgs = {
  data?: InputMaybe<LinkInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type MutationLinkUpdateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<LinkInput>>>;
};


export type MutationResumeCreateArgs = {
  data?: InputMaybe<ResumeInput>;
};


export type MutationResumeCreateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<ResumeInput>>>;
};


export type MutationResumeDeleteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationResumeDeleteBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<ResumeInput>>>;
};


export type MutationResumeUpdateArgs = {
  data?: InputMaybe<ResumeInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type MutationResumeUpdateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<ResumeInput>>>;
};


export type MutationSkillCreateArgs = {
  data?: InputMaybe<SkillInput>;
};


export type MutationSkillCreateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<SkillInput>>>;
};


export type MutationSkillDeleteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationSkillDeleteBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<SkillInput>>>;
};


export type MutationSkillUpdateArgs = {
  data?: InputMaybe<SkillInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type MutationSkillUpdateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<SkillInput>>>;
};


export type MutationSkill_GroupCreateArgs = {
  data?: InputMaybe<Skill_GroupInput>;
};


export type MutationSkill_GroupCreateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Skill_GroupInput>>>;
};


export type MutationSkill_GroupDeleteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationSkill_GroupDeleteBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Skill_GroupInput>>>;
};


export type MutationSkill_GroupUpdateArgs = {
  data?: InputMaybe<Skill_GroupInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type MutationSkill_GroupUpdateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Skill_GroupInput>>>;
};


export type MutationSkill_ItemCreateArgs = {
  data?: InputMaybe<Skill_ItemInput>;
};


export type MutationSkill_ItemCreateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Skill_ItemInput>>>;
};


export type MutationSkill_ItemDeleteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationSkill_ItemDeleteBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Skill_ItemInput>>>;
};


export type MutationSkill_ItemUpdateArgs = {
  data?: InputMaybe<Skill_ItemInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type MutationSkill_ItemUpdateBulkArgs = {
  data?: InputMaybe<Array<InputMaybe<Skill_ItemInput>>>;
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
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type Query_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagCountArgs = {
  condition?: InputMaybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type Query_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagDistinctArgs = {
  column_name?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type Query_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagDistributionArgs = {
  column_name: Scalars['String'];
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  step?: InputMaybe<Scalars['Int']>;
  steps?: InputMaybe<Scalars['String']>;
};


export type Query_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagExistsArgs = {
  id: Scalars['String'];
};


export type Query_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagFindOneArgs = {
  condition?: InputMaybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  where?: InputMaybe<Scalars['String']>;
};


export type Query_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagGroupByArgs = {
  fields?: InputMaybe<Scalars['String']>;
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type Query_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagListArgs = {
  condition?: InputMaybe<Condition_Nc_M2m_Xa1__Content_Item_Xa1__Content_Tag>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type Query_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagReadArgs = {
  id: Scalars['String'];
};


export type QueryContentAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryContentCountArgs = {
  condition?: InputMaybe<Conditioncontent>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContentDistinctArgs = {
  column_name?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Conditioncontent>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContentDistributionArgs = {
  column_name: Scalars['String'];
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  step?: InputMaybe<Scalars['Int']>;
  steps?: InputMaybe<Scalars['String']>;
};


export type QueryContentExistsArgs = {
  id: Scalars['String'];
};


export type QueryContentFindOneArgs = {
  condition?: InputMaybe<Conditioncontent>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContentGroupByArgs = {
  fields?: InputMaybe<Scalars['String']>;
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryContentListArgs = {
  condition?: InputMaybe<Conditioncontent>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContentReadArgs = {
  id: Scalars['String'];
};


export type QueryContent_FeatureAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryContent_FeatureCountArgs = {
  condition?: InputMaybe<Conditioncontent_Feature>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContent_FeatureDistinctArgs = {
  column_name?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Conditioncontent_Feature>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContent_FeatureDistributionArgs = {
  column_name: Scalars['String'];
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  step?: InputMaybe<Scalars['Int']>;
  steps?: InputMaybe<Scalars['String']>;
};


export type QueryContent_FeatureExistsArgs = {
  id: Scalars['String'];
};


export type QueryContent_FeatureFindOneArgs = {
  condition?: InputMaybe<Conditioncontent_Feature>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContent_FeatureGroupByArgs = {
  fields?: InputMaybe<Scalars['String']>;
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryContent_FeatureListArgs = {
  condition?: InputMaybe<Conditioncontent_Feature>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContent_FeatureReadArgs = {
  id: Scalars['String'];
};


export type QueryContent_ItemAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryContent_ItemCountArgs = {
  condition?: InputMaybe<Conditioncontent_Item>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContent_ItemDistinctArgs = {
  column_name?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Conditioncontent_Item>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContent_ItemDistributionArgs = {
  column_name: Scalars['String'];
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  step?: InputMaybe<Scalars['Int']>;
  steps?: InputMaybe<Scalars['String']>;
};


export type QueryContent_ItemExistsArgs = {
  id: Scalars['String'];
};


export type QueryContent_ItemFindOneArgs = {
  condition?: InputMaybe<Conditioncontent_Item>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContent_ItemGroupByArgs = {
  fields?: InputMaybe<Scalars['String']>;
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryContent_ItemListArgs = {
  condition?: InputMaybe<Conditioncontent_Item>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContent_ItemReadArgs = {
  id: Scalars['String'];
};


export type QueryContent_LinkAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryContent_LinkCountArgs = {
  condition?: InputMaybe<Conditioncontent_Link>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContent_LinkDistinctArgs = {
  column_name?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Conditioncontent_Link>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContent_LinkDistributionArgs = {
  column_name: Scalars['String'];
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  step?: InputMaybe<Scalars['Int']>;
  steps?: InputMaybe<Scalars['String']>;
};


export type QueryContent_LinkExistsArgs = {
  id: Scalars['String'];
};


export type QueryContent_LinkFindOneArgs = {
  condition?: InputMaybe<Conditioncontent_Link>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContent_LinkGroupByArgs = {
  fields?: InputMaybe<Scalars['String']>;
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryContent_LinkListArgs = {
  condition?: InputMaybe<Conditioncontent_Link>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContent_LinkReadArgs = {
  id: Scalars['String'];
};


export type QueryContent_TagAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryContent_TagCountArgs = {
  condition?: InputMaybe<Conditioncontent_Tag>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContent_TagDistinctArgs = {
  column_name?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Conditioncontent_Tag>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContent_TagDistributionArgs = {
  column_name: Scalars['String'];
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  step?: InputMaybe<Scalars['Int']>;
  steps?: InputMaybe<Scalars['String']>;
};


export type QueryContent_TagExistsArgs = {
  id: Scalars['String'];
};


export type QueryContent_TagFindOneArgs = {
  condition?: InputMaybe<Conditioncontent_Tag>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContent_TagGroupByArgs = {
  fields?: InputMaybe<Scalars['String']>;
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryContent_TagListArgs = {
  condition?: InputMaybe<Conditioncontent_Tag>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryContent_TagReadArgs = {
  id: Scalars['String'];
};


export type QueryHomeAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryHomeCountArgs = {
  condition?: InputMaybe<Conditionhome>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryHomeDistinctArgs = {
  column_name?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Conditionhome>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryHomeDistributionArgs = {
  column_name: Scalars['String'];
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  step?: InputMaybe<Scalars['Int']>;
  steps?: InputMaybe<Scalars['String']>;
};


export type QueryHomeExistsArgs = {
  id: Scalars['String'];
};


export type QueryHomeFindOneArgs = {
  condition?: InputMaybe<Conditionhome>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryHomeGroupByArgs = {
  fields?: InputMaybe<Scalars['String']>;
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryHomeListArgs = {
  condition?: InputMaybe<Conditionhome>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryHomeReadArgs = {
  id: Scalars['String'];
};


export type QueryLinkAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryLinkCountArgs = {
  condition?: InputMaybe<Conditionlink>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryLinkDistinctArgs = {
  column_name?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Conditionlink>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryLinkDistributionArgs = {
  column_name: Scalars['String'];
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  step?: InputMaybe<Scalars['Int']>;
  steps?: InputMaybe<Scalars['String']>;
};


export type QueryLinkExistsArgs = {
  id: Scalars['String'];
};


export type QueryLinkFindOneArgs = {
  condition?: InputMaybe<Conditionlink>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryLinkGroupByArgs = {
  fields?: InputMaybe<Scalars['String']>;
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryLinkListArgs = {
  condition?: InputMaybe<Conditionlink>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryLinkReadArgs = {
  id: Scalars['String'];
};


export type QueryM2mNotChildrenArgs = {
  assoc: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
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
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryResumeCountArgs = {
  condition?: InputMaybe<Conditionresume>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryResumeDistinctArgs = {
  column_name?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Conditionresume>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryResumeDistributionArgs = {
  column_name: Scalars['String'];
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  step?: InputMaybe<Scalars['Int']>;
  steps?: InputMaybe<Scalars['String']>;
};


export type QueryResumeExistsArgs = {
  id: Scalars['String'];
};


export type QueryResumeFindOneArgs = {
  condition?: InputMaybe<Conditionresume>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryResumeGroupByArgs = {
  fields?: InputMaybe<Scalars['String']>;
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryResumeListArgs = {
  condition?: InputMaybe<Conditionresume>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryResumeReadArgs = {
  id: Scalars['String'];
};


export type QuerySkillAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerySkillCountArgs = {
  condition?: InputMaybe<Conditionskill>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QuerySkillDistinctArgs = {
  column_name?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Conditionskill>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QuerySkillDistributionArgs = {
  column_name: Scalars['String'];
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  step?: InputMaybe<Scalars['Int']>;
  steps?: InputMaybe<Scalars['String']>;
};


export type QuerySkillExistsArgs = {
  id: Scalars['String'];
};


export type QuerySkillFindOneArgs = {
  condition?: InputMaybe<Conditionskill>;
  where?: InputMaybe<Scalars['String']>;
};


export type QuerySkillGroupByArgs = {
  fields?: InputMaybe<Scalars['String']>;
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerySkillListArgs = {
  condition?: InputMaybe<Conditionskill>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QuerySkillReadArgs = {
  id: Scalars['String'];
};


export type QuerySkill_GroupAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerySkill_GroupCountArgs = {
  condition?: InputMaybe<Conditionskill_Group>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QuerySkill_GroupDistinctArgs = {
  column_name?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Conditionskill_Group>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QuerySkill_GroupDistributionArgs = {
  column_name: Scalars['String'];
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  step?: InputMaybe<Scalars['Int']>;
  steps?: InputMaybe<Scalars['String']>;
};


export type QuerySkill_GroupExistsArgs = {
  id: Scalars['String'];
};


export type QuerySkill_GroupFindOneArgs = {
  condition?: InputMaybe<Conditionskill_Group>;
  where?: InputMaybe<Scalars['String']>;
};


export type QuerySkill_GroupGroupByArgs = {
  fields?: InputMaybe<Scalars['String']>;
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerySkill_GroupListArgs = {
  condition?: InputMaybe<Conditionskill_Group>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QuerySkill_GroupReadArgs = {
  id: Scalars['String'];
};


export type QuerySkill_ItemAggregateArgs = {
  column_name: Scalars['String'];
  func: Scalars['String'];
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerySkill_ItemCountArgs = {
  condition?: InputMaybe<Conditionskill_Item>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QuerySkill_ItemDistinctArgs = {
  column_name?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Conditionskill_Item>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QuerySkill_ItemDistributionArgs = {
  column_name: Scalars['String'];
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  step?: InputMaybe<Scalars['Int']>;
  steps?: InputMaybe<Scalars['String']>;
};


export type QuerySkill_ItemExistsArgs = {
  id: Scalars['String'];
};


export type QuerySkill_ItemFindOneArgs = {
  condition?: InputMaybe<Conditionskill_Item>;
  where?: InputMaybe<Scalars['String']>;
};


export type QuerySkill_ItemGroupByArgs = {
  fields?: InputMaybe<Scalars['String']>;
  having?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QuerySkill_ItemListArgs = {
  condition?: InputMaybe<Conditionskill_Item>;
  conditionGraph?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['String']>;
};


export type _Nc_M2m_Xa1__Content_Item_Xa1__Content_TagContent_TagReadArgs = {
  id?: InputMaybe<Scalars['String']>;
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
  xa1__content_item_p_id?: InputMaybe<Scalars['Int']>;
  xa1__content_tag_c_id?: InputMaybe<Scalars['Int']>;
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


export type ContentContent_ItemListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type ContentResumeReadArgs = {
  id?: InputMaybe<Scalars['String']>;
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
  created_at?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['String']>;
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
  created_at?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
  xa1__content_item_id?: InputMaybe<Scalars['Int']>;
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


export type Content_Item_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type Content_ItemContentReadArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type Content_ItemContent_FeatureListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type Content_ItemContent_LinkListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type Content_ItemContent_TagMmListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
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
  created_at?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<Scalars['JSON']>;
  parent?: InputMaybe<Scalars['Int']>;
  period?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['String']>;
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
  created_at?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Int']>;
  href?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  target?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
  xa1__content_item_id?: InputMaybe<Scalars['Int']>;
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


export type Content_Tag_Nc_M2m_Xa1__Content_Item_Xa1__Content_TagListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type Content_TagContent_ItemMmListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
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
  created_at?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
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


export type HomeLinkListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type HomeResumeReadArgs = {
  id?: InputMaybe<Scalars['String']>;
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
  bio?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  intro?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['String']>;
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
  created_at?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Int']>;
  href?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  target?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
  xa1__home_id?: InputMaybe<Scalars['Int']>;
};

export type Resume = {
  __typename?: 'resume';
  contentCount?: Maybe<Scalars['Int']>;
  contentList?: Maybe<Array<Maybe<Content>>>;
  created_at?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  homeCount?: Maybe<Scalars['Int']>;
  homeList?: Maybe<Array<Maybe<Home>>>;
  id?: Maybe<Scalars['Int']>;
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  site_title?: Maybe<Scalars['String']>;
  site_title_en?: Maybe<Scalars['String']>;
  skillCount?: Maybe<Scalars['Int']>;
  skillList?: Maybe<Array<Maybe<Skill>>>;
  twitter?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};


export type ResumeContentListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type ResumeHomeListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};


export type ResumeSkillListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
};

export type ResumeAggregate = {
  __typename?: 'resumeAggregate';
  avg?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  site_title?: Maybe<Scalars['String']>;
  site_title_en?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['Float']>;
  twitter?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type ResumeGroupBy = {
  __typename?: 'resumeGroupBy';
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  site_title?: Maybe<Scalars['String']>;
  site_title_en?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type ResumeInput = {
  created_at?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  instagram?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_en?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  site_title?: InputMaybe<Scalars['String']>;
  site_title_en?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['String']>;
};


export type SkillSkill_GroupListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
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
  created_at?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['String']>;
};


export type Skill_GroupSkill_ItemListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['String']>;
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
  created_at?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
  xa1__skill_id?: InputMaybe<Scalars['Int']>;
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
  id?: InputMaybe<Scalars['String']>;
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
  created_at?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Int']>;
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  parent?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  scoremax?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['String']>;
};



export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

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