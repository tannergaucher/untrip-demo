module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.31.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateEvent {
  count: Int!
}

type AggregateList {
  count: Int!
}

type AggregatePlace {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Event {
  id: ID!
  gcmsId: String!
  user: User!
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  id: ID
  gcmsId: String!
  user: UserCreateOneWithoutEventsInput!
}

input EventCreateManyWithoutUserInput {
  create: [EventCreateWithoutUserInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateWithoutUserInput {
  id: ID
  gcmsId: String!
}

type EventEdge {
  node: Event!
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  gcmsId_ASC
  gcmsId_DESC
}

type EventPreviousValues {
  id: ID!
  gcmsId: String!
}

input EventScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  gcmsId: String
  gcmsId_not: String
  gcmsId_in: [String!]
  gcmsId_not_in: [String!]
  gcmsId_lt: String
  gcmsId_lte: String
  gcmsId_gt: String
  gcmsId_gte: String
  gcmsId_contains: String
  gcmsId_not_contains: String
  gcmsId_starts_with: String
  gcmsId_not_starts_with: String
  gcmsId_ends_with: String
  gcmsId_not_ends_with: String
  AND: [EventScalarWhereInput!]
  OR: [EventScalarWhereInput!]
  NOT: [EventScalarWhereInput!]
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EventWhereInput
  AND: [EventSubscriptionWhereInput!]
  OR: [EventSubscriptionWhereInput!]
  NOT: [EventSubscriptionWhereInput!]
}

input EventUpdateInput {
  gcmsId: String
  user: UserUpdateOneRequiredWithoutEventsInput
}

input EventUpdateManyDataInput {
  gcmsId: String
}

input EventUpdateManyMutationInput {
  gcmsId: String
}

input EventUpdateManyWithoutUserInput {
  create: [EventCreateWithoutUserInput!]
  delete: [EventWhereUniqueInput!]
  connect: [EventWhereUniqueInput!]
  set: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [EventScalarWhereInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
}

input EventUpdateManyWithWhereNestedInput {
  where: EventScalarWhereInput!
  data: EventUpdateManyDataInput!
}

input EventUpdateWithoutUserDataInput {
  gcmsId: String
}

input EventUpdateWithWhereUniqueWithoutUserInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutUserDataInput!
}

input EventUpsertWithWhereUniqueWithoutUserInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutUserDataInput!
  create: EventCreateWithoutUserInput!
}

input EventWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  gcmsId: String
  gcmsId_not: String
  gcmsId_in: [String!]
  gcmsId_not_in: [String!]
  gcmsId_lt: String
  gcmsId_lte: String
  gcmsId_gt: String
  gcmsId_gte: String
  gcmsId_contains: String
  gcmsId_not_contains: String
  gcmsId_starts_with: String
  gcmsId_not_starts_with: String
  gcmsId_ends_with: String
  gcmsId_not_ends_with: String
  user: UserWhereInput
  AND: [EventWhereInput!]
  OR: [EventWhereInput!]
  NOT: [EventWhereInput!]
}

input EventWhereUniqueInput {
  id: ID
  gcmsId: String
}

type List {
  id: ID!
  title: String!
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place!]
  user: User!
}

type ListConnection {
  pageInfo: PageInfo!
  edges: [ListEdge]!
  aggregate: AggregateList!
}

input ListCreateInput {
  id: ID
  title: String!
  places: PlaceCreateManyWithoutListInput
  user: UserCreateOneWithoutListsInput!
}

input ListCreateManyWithoutUserInput {
  create: [ListCreateWithoutUserInput!]
  connect: [ListWhereUniqueInput!]
}

input ListCreateOneWithoutPlacesInput {
  create: ListCreateWithoutPlacesInput
  connect: ListWhereUniqueInput
}

input ListCreateWithoutPlacesInput {
  id: ID
  title: String!
  user: UserCreateOneWithoutListsInput!
}

input ListCreateWithoutUserInput {
  id: ID
  title: String!
  places: PlaceCreateManyWithoutListInput
}

type ListEdge {
  node: List!
  cursor: String!
}

enum ListOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
}

type ListPreviousValues {
  id: ID!
  title: String!
}

input ListScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [ListScalarWhereInput!]
  OR: [ListScalarWhereInput!]
  NOT: [ListScalarWhereInput!]
}

type ListSubscriptionPayload {
  mutation: MutationType!
  node: List
  updatedFields: [String!]
  previousValues: ListPreviousValues
}

input ListSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ListWhereInput
  AND: [ListSubscriptionWhereInput!]
  OR: [ListSubscriptionWhereInput!]
  NOT: [ListSubscriptionWhereInput!]
}

input ListUpdateInput {
  title: String
  places: PlaceUpdateManyWithoutListInput
  user: UserUpdateOneRequiredWithoutListsInput
}

input ListUpdateManyDataInput {
  title: String
}

input ListUpdateManyMutationInput {
  title: String
}

input ListUpdateManyWithoutUserInput {
  create: [ListCreateWithoutUserInput!]
  delete: [ListWhereUniqueInput!]
  connect: [ListWhereUniqueInput!]
  set: [ListWhereUniqueInput!]
  disconnect: [ListWhereUniqueInput!]
  update: [ListUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ListUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [ListScalarWhereInput!]
  updateMany: [ListUpdateManyWithWhereNestedInput!]
}

input ListUpdateManyWithWhereNestedInput {
  where: ListScalarWhereInput!
  data: ListUpdateManyDataInput!
}

input ListUpdateOneRequiredWithoutPlacesInput {
  create: ListCreateWithoutPlacesInput
  update: ListUpdateWithoutPlacesDataInput
  upsert: ListUpsertWithoutPlacesInput
  connect: ListWhereUniqueInput
}

input ListUpdateWithoutPlacesDataInput {
  title: String
  user: UserUpdateOneRequiredWithoutListsInput
}

input ListUpdateWithoutUserDataInput {
  title: String
  places: PlaceUpdateManyWithoutListInput
}

input ListUpdateWithWhereUniqueWithoutUserInput {
  where: ListWhereUniqueInput!
  data: ListUpdateWithoutUserDataInput!
}

input ListUpsertWithoutPlacesInput {
  update: ListUpdateWithoutPlacesDataInput!
  create: ListCreateWithoutPlacesInput!
}

input ListUpsertWithWhereUniqueWithoutUserInput {
  where: ListWhereUniqueInput!
  update: ListUpdateWithoutUserDataInput!
  create: ListCreateWithoutUserInput!
}

input ListWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  places_every: PlaceWhereInput
  places_some: PlaceWhereInput
  places_none: PlaceWhereInput
  user: UserWhereInput
  AND: [ListWhereInput!]
  OR: [ListWhereInput!]
  NOT: [ListWhereInput!]
}

input ListWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createEvent(data: EventCreateInput!): Event!
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  createList(data: ListCreateInput!): List!
  updateList(data: ListUpdateInput!, where: ListWhereUniqueInput!): List
  updateManyLists(data: ListUpdateManyMutationInput!, where: ListWhereInput): BatchPayload!
  upsertList(where: ListWhereUniqueInput!, create: ListCreateInput!, update: ListUpdateInput!): List!
  deleteList(where: ListWhereUniqueInput!): List
  deleteManyLists(where: ListWhereInput): BatchPayload!
  createPlace(data: PlaceCreateInput!): Place!
  updatePlace(data: PlaceUpdateInput!, where: PlaceWhereUniqueInput!): Place
  updateManyPlaces(data: PlaceUpdateManyMutationInput!, where: PlaceWhereInput): BatchPayload!
  upsertPlace(where: PlaceWhereUniqueInput!, create: PlaceCreateInput!, update: PlaceUpdateInput!): Place!
  deletePlace(where: PlaceWhereUniqueInput!): Place
  deleteManyPlaces(where: PlaceWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum Permission {
  ADMIN
  FREE_USER
  PAID_LEVEL_ONE
}

type Place {
  id: ID!
  gcmsId: String
  name: String
  list: List!
}

type PlaceConnection {
  pageInfo: PageInfo!
  edges: [PlaceEdge]!
  aggregate: AggregatePlace!
}

input PlaceCreateInput {
  id: ID
  gcmsId: String
  name: String
  list: ListCreateOneWithoutPlacesInput!
}

input PlaceCreateManyWithoutListInput {
  create: [PlaceCreateWithoutListInput!]
  connect: [PlaceWhereUniqueInput!]
}

input PlaceCreateWithoutListInput {
  id: ID
  gcmsId: String
  name: String
}

type PlaceEdge {
  node: Place!
  cursor: String!
}

enum PlaceOrderByInput {
  id_ASC
  id_DESC
  gcmsId_ASC
  gcmsId_DESC
  name_ASC
  name_DESC
}

type PlacePreviousValues {
  id: ID!
  gcmsId: String
  name: String
}

input PlaceScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  gcmsId: String
  gcmsId_not: String
  gcmsId_in: [String!]
  gcmsId_not_in: [String!]
  gcmsId_lt: String
  gcmsId_lte: String
  gcmsId_gt: String
  gcmsId_gte: String
  gcmsId_contains: String
  gcmsId_not_contains: String
  gcmsId_starts_with: String
  gcmsId_not_starts_with: String
  gcmsId_ends_with: String
  gcmsId_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [PlaceScalarWhereInput!]
  OR: [PlaceScalarWhereInput!]
  NOT: [PlaceScalarWhereInput!]
}

type PlaceSubscriptionPayload {
  mutation: MutationType!
  node: Place
  updatedFields: [String!]
  previousValues: PlacePreviousValues
}

input PlaceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlaceWhereInput
  AND: [PlaceSubscriptionWhereInput!]
  OR: [PlaceSubscriptionWhereInput!]
  NOT: [PlaceSubscriptionWhereInput!]
}

input PlaceUpdateInput {
  gcmsId: String
  name: String
  list: ListUpdateOneRequiredWithoutPlacesInput
}

input PlaceUpdateManyDataInput {
  gcmsId: String
  name: String
}

input PlaceUpdateManyMutationInput {
  gcmsId: String
  name: String
}

input PlaceUpdateManyWithoutListInput {
  create: [PlaceCreateWithoutListInput!]
  delete: [PlaceWhereUniqueInput!]
  connect: [PlaceWhereUniqueInput!]
  set: [PlaceWhereUniqueInput!]
  disconnect: [PlaceWhereUniqueInput!]
  update: [PlaceUpdateWithWhereUniqueWithoutListInput!]
  upsert: [PlaceUpsertWithWhereUniqueWithoutListInput!]
  deleteMany: [PlaceScalarWhereInput!]
  updateMany: [PlaceUpdateManyWithWhereNestedInput!]
}

input PlaceUpdateManyWithWhereNestedInput {
  where: PlaceScalarWhereInput!
  data: PlaceUpdateManyDataInput!
}

input PlaceUpdateWithoutListDataInput {
  gcmsId: String
  name: String
}

input PlaceUpdateWithWhereUniqueWithoutListInput {
  where: PlaceWhereUniqueInput!
  data: PlaceUpdateWithoutListDataInput!
}

input PlaceUpsertWithWhereUniqueWithoutListInput {
  where: PlaceWhereUniqueInput!
  update: PlaceUpdateWithoutListDataInput!
  create: PlaceCreateWithoutListInput!
}

input PlaceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  gcmsId: String
  gcmsId_not: String
  gcmsId_in: [String!]
  gcmsId_not_in: [String!]
  gcmsId_lt: String
  gcmsId_lte: String
  gcmsId_gt: String
  gcmsId_gte: String
  gcmsId_contains: String
  gcmsId_not_contains: String
  gcmsId_starts_with: String
  gcmsId_not_starts_with: String
  gcmsId_ends_with: String
  gcmsId_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  list: ListWhereInput
  AND: [PlaceWhereInput!]
  OR: [PlaceWhereInput!]
  NOT: [PlaceWhereInput!]
}

input PlaceWhereUniqueInput {
  id: ID
}

type Query {
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  list(where: ListWhereUniqueInput!): List
  lists(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [List]!
  listsConnection(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ListConnection!
  place(where: PlaceWhereUniqueInput!): Place
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place]!
  placesConnection(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaceConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  list(where: ListSubscriptionWhereInput): ListSubscriptionPayload
  place(where: PlaceSubscriptionWhereInput): PlaceSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  lists(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [List!]
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  permissions: [Permission!]!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  lists: ListCreateManyWithoutUserInput
  events: EventCreateManyWithoutUserInput
  permissions: UserCreatepermissionsInput
}

input UserCreateOneWithoutEventsInput {
  create: UserCreateWithoutEventsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutListsInput {
  create: UserCreateWithoutListsInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

input UserCreateWithoutEventsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  lists: ListCreateManyWithoutUserInput
  permissions: UserCreatepermissionsInput
}

input UserCreateWithoutListsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  events: EventCreateManyWithoutUserInput
  permissions: UserCreatepermissionsInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  permissions: [Permission!]!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  lists: ListUpdateManyWithoutUserInput
  events: EventUpdateManyWithoutUserInput
  permissions: UserUpdatepermissionsInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  permissions: UserUpdatepermissionsInput
}

input UserUpdateOneRequiredWithoutEventsInput {
  create: UserCreateWithoutEventsInput
  update: UserUpdateWithoutEventsDataInput
  upsert: UserUpsertWithoutEventsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutListsInput {
  create: UserCreateWithoutListsInput
  update: UserUpdateWithoutListsDataInput
  upsert: UserUpsertWithoutListsInput
  connect: UserWhereUniqueInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserUpdateWithoutEventsDataInput {
  name: String
  email: String
  password: String
  lists: ListUpdateManyWithoutUserInput
  permissions: UserUpdatepermissionsInput
}

input UserUpdateWithoutListsDataInput {
  name: String
  email: String
  password: String
  events: EventUpdateManyWithoutUserInput
  permissions: UserUpdatepermissionsInput
}

input UserUpsertWithoutEventsInput {
  update: UserUpdateWithoutEventsDataInput!
  create: UserCreateWithoutEventsInput!
}

input UserUpsertWithoutListsInput {
  update: UserUpdateWithoutListsDataInput!
  create: UserCreateWithoutListsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  lists_every: ListWhereInput
  lists_some: ListWhereInput
  lists_none: ListWhereInput
  events_every: EventWhereInput
  events_some: EventWhereInput
  events_none: EventWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    