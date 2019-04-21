// Code generated by Prisma (prisma@1.31.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  event: (where?: EventWhereInput) => Promise<boolean>;
  list: (where?: ListWhereInput) => Promise<boolean>;
  place: (where?: PlaceWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  event: (where: EventWhereUniqueInput) => EventPromise;
  events: (args?: {
    where?: EventWhereInput;
    orderBy?: EventOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Event>;
  eventsConnection: (args?: {
    where?: EventWhereInput;
    orderBy?: EventOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => EventConnectionPromise;
  list: (where: ListWhereUniqueInput) => ListPromise;
  lists: (args?: {
    where?: ListWhereInput;
    orderBy?: ListOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<List>;
  listsConnection: (args?: {
    where?: ListWhereInput;
    orderBy?: ListOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ListConnectionPromise;
  place: (where: PlaceWhereUniqueInput) => PlacePromise;
  places: (args?: {
    where?: PlaceWhereInput;
    orderBy?: PlaceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Place>;
  placesConnection: (args?: {
    where?: PlaceWhereInput;
    orderBy?: PlaceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PlaceConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createEvent: (data: EventCreateInput) => EventPromise;
  updateEvent: (args: {
    data: EventUpdateInput;
    where: EventWhereUniqueInput;
  }) => EventPromise;
  updateManyEvents: (args: {
    data: EventUpdateManyMutationInput;
    where?: EventWhereInput;
  }) => BatchPayloadPromise;
  upsertEvent: (args: {
    where: EventWhereUniqueInput;
    create: EventCreateInput;
    update: EventUpdateInput;
  }) => EventPromise;
  deleteEvent: (where: EventWhereUniqueInput) => EventPromise;
  deleteManyEvents: (where?: EventWhereInput) => BatchPayloadPromise;
  createList: (data: ListCreateInput) => ListPromise;
  updateList: (args: {
    data: ListUpdateInput;
    where: ListWhereUniqueInput;
  }) => ListPromise;
  updateManyLists: (args: {
    data: ListUpdateManyMutationInput;
    where?: ListWhereInput;
  }) => BatchPayloadPromise;
  upsertList: (args: {
    where: ListWhereUniqueInput;
    create: ListCreateInput;
    update: ListUpdateInput;
  }) => ListPromise;
  deleteList: (where: ListWhereUniqueInput) => ListPromise;
  deleteManyLists: (where?: ListWhereInput) => BatchPayloadPromise;
  createPlace: (data: PlaceCreateInput) => PlacePromise;
  updatePlace: (args: {
    data: PlaceUpdateInput;
    where: PlaceWhereUniqueInput;
  }) => PlacePromise;
  updateManyPlaces: (args: {
    data: PlaceUpdateManyMutationInput;
    where?: PlaceWhereInput;
  }) => BatchPayloadPromise;
  upsertPlace: (args: {
    where: PlaceWhereUniqueInput;
    create: PlaceCreateInput;
    update: PlaceUpdateInput;
  }) => PlacePromise;
  deletePlace: (where: PlaceWhereUniqueInput) => PlacePromise;
  deleteManyPlaces: (where?: PlaceWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  event: (
    where?: EventSubscriptionWhereInput
  ) => EventSubscriptionPayloadSubscription;
  list: (
    where?: ListSubscriptionWhereInput
  ) => ListSubscriptionPayloadSubscription;
  place: (
    where?: PlaceSubscriptionWhereInput
  ) => PlaceSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type EventOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "gcmsId_ASC"
  | "gcmsId_DESC";

export type PlaceOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "gcmsId_ASC"
  | "gcmsId_DESC";

export type ListOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type EventWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  gcmsId?: String;
}>;

export interface EventWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  gcmsId?: String;
  gcmsId_not?: String;
  gcmsId_in?: String[] | String;
  gcmsId_not_in?: String[] | String;
  gcmsId_lt?: String;
  gcmsId_lte?: String;
  gcmsId_gt?: String;
  gcmsId_gte?: String;
  gcmsId_contains?: String;
  gcmsId_not_contains?: String;
  gcmsId_starts_with?: String;
  gcmsId_not_starts_with?: String;
  gcmsId_ends_with?: String;
  gcmsId_not_ends_with?: String;
  AND?: EventWhereInput[] | EventWhereInput;
  OR?: EventWhereInput[] | EventWhereInput;
  NOT?: EventWhereInput[] | EventWhereInput;
}

export type ListWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface PlaceWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  gcmsId?: String;
  gcmsId_not?: String;
  gcmsId_in?: String[] | String;
  gcmsId_not_in?: String[] | String;
  gcmsId_lt?: String;
  gcmsId_lte?: String;
  gcmsId_gt?: String;
  gcmsId_gte?: String;
  gcmsId_contains?: String;
  gcmsId_not_contains?: String;
  gcmsId_starts_with?: String;
  gcmsId_not_starts_with?: String;
  gcmsId_ends_with?: String;
  gcmsId_not_ends_with?: String;
  AND?: PlaceWhereInput[] | PlaceWhereInput;
  OR?: PlaceWhereInput[] | PlaceWhereInput;
  NOT?: PlaceWhereInput[] | PlaceWhereInput;
}

export interface ListWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  places_every?: PlaceWhereInput;
  places_some?: PlaceWhereInput;
  places_none?: PlaceWhereInput;
  AND?: ListWhereInput[] | ListWhereInput;
  OR?: ListWhereInput[] | ListWhereInput;
  NOT?: ListWhereInput[] | ListWhereInput;
}

export type PlaceWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  gcmsId?: String;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  places_every?: PlaceWhereInput;
  places_some?: PlaceWhereInput;
  places_none?: PlaceWhereInput;
  events_every?: EventWhereInput;
  events_some?: EventWhereInput;
  events_none?: EventWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface EventCreateInput {
  id?: ID_Input;
  gcmsId: String;
}

export interface EventUpdateInput {
  gcmsId?: String;
}

export interface EventUpdateManyMutationInput {
  gcmsId?: String;
}

export interface ListCreateInput {
  id?: ID_Input;
  name: String;
  places?: PlaceCreateManyInput;
}

export interface PlaceCreateManyInput {
  create?: PlaceCreateInput[] | PlaceCreateInput;
  connect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput;
}

export interface PlaceCreateInput {
  id?: ID_Input;
  gcmsId: String;
}

export interface ListUpdateInput {
  name?: String;
  places?: PlaceUpdateManyInput;
}

export interface PlaceUpdateManyInput {
  create?: PlaceCreateInput[] | PlaceCreateInput;
  update?:
    | PlaceUpdateWithWhereUniqueNestedInput[]
    | PlaceUpdateWithWhereUniqueNestedInput;
  upsert?:
    | PlaceUpsertWithWhereUniqueNestedInput[]
    | PlaceUpsertWithWhereUniqueNestedInput;
  delete?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput;
  connect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput;
  set?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput;
  disconnect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput;
  deleteMany?: PlaceScalarWhereInput[] | PlaceScalarWhereInput;
  updateMany?:
    | PlaceUpdateManyWithWhereNestedInput[]
    | PlaceUpdateManyWithWhereNestedInput;
}

export interface PlaceUpdateWithWhereUniqueNestedInput {
  where: PlaceWhereUniqueInput;
  data: PlaceUpdateDataInput;
}

export interface PlaceUpdateDataInput {
  gcmsId?: String;
}

export interface PlaceUpsertWithWhereUniqueNestedInput {
  where: PlaceWhereUniqueInput;
  update: PlaceUpdateDataInput;
  create: PlaceCreateInput;
}

export interface PlaceScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  gcmsId?: String;
  gcmsId_not?: String;
  gcmsId_in?: String[] | String;
  gcmsId_not_in?: String[] | String;
  gcmsId_lt?: String;
  gcmsId_lte?: String;
  gcmsId_gt?: String;
  gcmsId_gte?: String;
  gcmsId_contains?: String;
  gcmsId_not_contains?: String;
  gcmsId_starts_with?: String;
  gcmsId_not_starts_with?: String;
  gcmsId_ends_with?: String;
  gcmsId_not_ends_with?: String;
  AND?: PlaceScalarWhereInput[] | PlaceScalarWhereInput;
  OR?: PlaceScalarWhereInput[] | PlaceScalarWhereInput;
  NOT?: PlaceScalarWhereInput[] | PlaceScalarWhereInput;
}

export interface PlaceUpdateManyWithWhereNestedInput {
  where: PlaceScalarWhereInput;
  data: PlaceUpdateManyDataInput;
}

export interface PlaceUpdateManyDataInput {
  gcmsId?: String;
}

export interface ListUpdateManyMutationInput {
  name?: String;
}

export interface PlaceUpdateInput {
  gcmsId?: String;
}

export interface PlaceUpdateManyMutationInput {
  gcmsId?: String;
}

export interface UserCreateInput {
  id?: ID_Input;
  name: String;
  email: String;
  password: String;
  places?: PlaceCreateManyInput;
  events?: EventCreateManyInput;
}

export interface EventCreateManyInput {
  create?: EventCreateInput[] | EventCreateInput;
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  password?: String;
  places?: PlaceUpdateManyInput;
  events?: EventUpdateManyInput;
}

export interface EventUpdateManyInput {
  create?: EventCreateInput[] | EventCreateInput;
  update?:
    | EventUpdateWithWhereUniqueNestedInput[]
    | EventUpdateWithWhereUniqueNestedInput;
  upsert?:
    | EventUpsertWithWhereUniqueNestedInput[]
    | EventUpsertWithWhereUniqueNestedInput;
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput;
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput;
  set?: EventWhereUniqueInput[] | EventWhereUniqueInput;
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput;
  deleteMany?: EventScalarWhereInput[] | EventScalarWhereInput;
  updateMany?:
    | EventUpdateManyWithWhereNestedInput[]
    | EventUpdateManyWithWhereNestedInput;
}

export interface EventUpdateWithWhereUniqueNestedInput {
  where: EventWhereUniqueInput;
  data: EventUpdateDataInput;
}

export interface EventUpdateDataInput {
  gcmsId?: String;
}

export interface EventUpsertWithWhereUniqueNestedInput {
  where: EventWhereUniqueInput;
  update: EventUpdateDataInput;
  create: EventCreateInput;
}

export interface EventScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  gcmsId?: String;
  gcmsId_not?: String;
  gcmsId_in?: String[] | String;
  gcmsId_not_in?: String[] | String;
  gcmsId_lt?: String;
  gcmsId_lte?: String;
  gcmsId_gt?: String;
  gcmsId_gte?: String;
  gcmsId_contains?: String;
  gcmsId_not_contains?: String;
  gcmsId_starts_with?: String;
  gcmsId_not_starts_with?: String;
  gcmsId_ends_with?: String;
  gcmsId_not_ends_with?: String;
  AND?: EventScalarWhereInput[] | EventScalarWhereInput;
  OR?: EventScalarWhereInput[] | EventScalarWhereInput;
  NOT?: EventScalarWhereInput[] | EventScalarWhereInput;
}

export interface EventUpdateManyWithWhereNestedInput {
  where: EventScalarWhereInput;
  data: EventUpdateManyDataInput;
}

export interface EventUpdateManyDataInput {
  gcmsId?: String;
}

export interface UserUpdateManyMutationInput {
  name?: String;
  email?: String;
  password?: String;
}

export interface EventSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: EventWhereInput;
  AND?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput;
  OR?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput;
  NOT?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput;
}

export interface ListSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ListWhereInput;
  AND?: ListSubscriptionWhereInput[] | ListSubscriptionWhereInput;
  OR?: ListSubscriptionWhereInput[] | ListSubscriptionWhereInput;
  NOT?: ListSubscriptionWhereInput[] | ListSubscriptionWhereInput;
}

export interface PlaceSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PlaceWhereInput;
  AND?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput;
  OR?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput;
  NOT?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Event {
  id: ID_Output;
  gcmsId: String;
}

export interface EventPromise extends Promise<Event>, Fragmentable {
  id: () => Promise<ID_Output>;
  gcmsId: () => Promise<String>;
}

export interface EventSubscription
  extends Promise<AsyncIterator<Event>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  gcmsId: () => Promise<AsyncIterator<String>>;
}

export interface EventConnection {
  pageInfo: PageInfo;
  edges: EventEdge[];
}

export interface EventConnectionPromise
  extends Promise<EventConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<EventEdge>>() => T;
  aggregate: <T = AggregateEventPromise>() => T;
}

export interface EventConnectionSubscription
  extends Promise<AsyncIterator<EventConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<EventEdgeSubscription>>>() => T;
  aggregate: <T = AggregateEventSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface EventEdge {
  node: Event;
  cursor: String;
}

export interface EventEdgePromise extends Promise<EventEdge>, Fragmentable {
  node: <T = EventPromise>() => T;
  cursor: () => Promise<String>;
}

export interface EventEdgeSubscription
  extends Promise<AsyncIterator<EventEdge>>,
    Fragmentable {
  node: <T = EventSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateEvent {
  count: Int;
}

export interface AggregateEventPromise
  extends Promise<AggregateEvent>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateEventSubscription
  extends Promise<AsyncIterator<AggregateEvent>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface List {
  id: ID_Output;
  name: String;
}

export interface ListPromise extends Promise<List>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  places: <T = FragmentableArray<Place>>(args?: {
    where?: PlaceWhereInput;
    orderBy?: PlaceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface ListSubscription
  extends Promise<AsyncIterator<List>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  places: <T = Promise<AsyncIterator<PlaceSubscription>>>(args?: {
    where?: PlaceWhereInput;
    orderBy?: PlaceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface Place {
  id: ID_Output;
  gcmsId: String;
}

export interface PlacePromise extends Promise<Place>, Fragmentable {
  id: () => Promise<ID_Output>;
  gcmsId: () => Promise<String>;
}

export interface PlaceSubscription
  extends Promise<AsyncIterator<Place>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  gcmsId: () => Promise<AsyncIterator<String>>;
}

export interface ListConnection {
  pageInfo: PageInfo;
  edges: ListEdge[];
}

export interface ListConnectionPromise
  extends Promise<ListConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ListEdge>>() => T;
  aggregate: <T = AggregateListPromise>() => T;
}

export interface ListConnectionSubscription
  extends Promise<AsyncIterator<ListConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ListEdgeSubscription>>>() => T;
  aggregate: <T = AggregateListSubscription>() => T;
}

export interface ListEdge {
  node: List;
  cursor: String;
}

export interface ListEdgePromise extends Promise<ListEdge>, Fragmentable {
  node: <T = ListPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ListEdgeSubscription
  extends Promise<AsyncIterator<ListEdge>>,
    Fragmentable {
  node: <T = ListSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateList {
  count: Int;
}

export interface AggregateListPromise
  extends Promise<AggregateList>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateListSubscription
  extends Promise<AsyncIterator<AggregateList>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PlaceConnection {
  pageInfo: PageInfo;
  edges: PlaceEdge[];
}

export interface PlaceConnectionPromise
  extends Promise<PlaceConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PlaceEdge>>() => T;
  aggregate: <T = AggregatePlacePromise>() => T;
}

export interface PlaceConnectionSubscription
  extends Promise<AsyncIterator<PlaceConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PlaceEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePlaceSubscription>() => T;
}

export interface PlaceEdge {
  node: Place;
  cursor: String;
}

export interface PlaceEdgePromise extends Promise<PlaceEdge>, Fragmentable {
  node: <T = PlacePromise>() => T;
  cursor: () => Promise<String>;
}

export interface PlaceEdgeSubscription
  extends Promise<AsyncIterator<PlaceEdge>>,
    Fragmentable {
  node: <T = PlaceSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePlace {
  count: Int;
}

export interface AggregatePlacePromise
  extends Promise<AggregatePlace>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePlaceSubscription
  extends Promise<AsyncIterator<AggregatePlace>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  places: <T = FragmentableArray<Place>>(args?: {
    where?: PlaceWhereInput;
    orderBy?: PlaceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  events: <T = FragmentableArray<Event>>(args?: {
    where?: EventWhereInput;
    orderBy?: EventOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  places: <T = Promise<AsyncIterator<PlaceSubscription>>>(args?: {
    where?: PlaceWhereInput;
    orderBy?: PlaceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  events: <T = Promise<AsyncIterator<EventSubscription>>>(args?: {
    where?: EventWhereInput;
    orderBy?: EventOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface EventSubscriptionPayload {
  mutation: MutationType;
  node: Event;
  updatedFields: String[];
  previousValues: EventPreviousValues;
}

export interface EventSubscriptionPayloadPromise
  extends Promise<EventSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = EventPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = EventPreviousValuesPromise>() => T;
}

export interface EventSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<EventSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = EventSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = EventPreviousValuesSubscription>() => T;
}

export interface EventPreviousValues {
  id: ID_Output;
  gcmsId: String;
}

export interface EventPreviousValuesPromise
  extends Promise<EventPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  gcmsId: () => Promise<String>;
}

export interface EventPreviousValuesSubscription
  extends Promise<AsyncIterator<EventPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  gcmsId: () => Promise<AsyncIterator<String>>;
}

export interface ListSubscriptionPayload {
  mutation: MutationType;
  node: List;
  updatedFields: String[];
  previousValues: ListPreviousValues;
}

export interface ListSubscriptionPayloadPromise
  extends Promise<ListSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ListPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ListPreviousValuesPromise>() => T;
}

export interface ListSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ListSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ListSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ListPreviousValuesSubscription>() => T;
}

export interface ListPreviousValues {
  id: ID_Output;
  name: String;
}

export interface ListPreviousValuesPromise
  extends Promise<ListPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface ListPreviousValuesSubscription
  extends Promise<AsyncIterator<ListPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface PlaceSubscriptionPayload {
  mutation: MutationType;
  node: Place;
  updatedFields: String[];
  previousValues: PlacePreviousValues;
}

export interface PlaceSubscriptionPayloadPromise
  extends Promise<PlaceSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PlacePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PlacePreviousValuesPromise>() => T;
}

export interface PlaceSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PlaceSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PlaceSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PlacePreviousValuesSubscription>() => T;
}

export interface PlacePreviousValues {
  id: ID_Output;
  gcmsId: String;
}

export interface PlacePreviousValuesPromise
  extends Promise<PlacePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  gcmsId: () => Promise<String>;
}

export interface PlacePreviousValuesSubscription
  extends Promise<AsyncIterator<PlacePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  gcmsId: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Place",
    embedded: false
  },
  {
    name: "Event",
    embedded: false
  },
  {
    name: "List",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
