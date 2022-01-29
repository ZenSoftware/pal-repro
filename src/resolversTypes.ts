import * as Client from '@prisma/client'

import { Context } from './context'

import { GraphQLResolveInfo } from 'graphql'

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<R>

export interface Resolvers {
  [key: string]: { [key: string]: Resolver<any, any, any> }
  User?: User
  Product?: Product
  Query?: Query
  Mutation?: Mutation
  AggregateUser?: AggregateUser
  UserGroupByOutputType?: UserGroupByOutputType
  AggregateProduct?: AggregateProduct
  ProductGroupByOutputType?: ProductGroupByOutputType
  AffectedRowsOutput?: AffectedRowsOutput
  UserCountOutputType?: UserCountOutputType
  UserCountAggregateOutputType?: UserCountAggregateOutputType
  UserAvgAggregateOutputType?: UserAvgAggregateOutputType
  UserSumAggregateOutputType?: UserSumAggregateOutputType
  UserMinAggregateOutputType?: UserMinAggregateOutputType
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType
  ProductCountAggregateOutputType?: ProductCountAggregateOutputType
  ProductAvgAggregateOutputType?: ProductAvgAggregateOutputType
  ProductSumAggregateOutputType?: ProductSumAggregateOutputType
  ProductMinAggregateOutputType?: ProductMinAggregateOutputType
  ProductMaxAggregateOutputType?: ProductMaxAggregateOutputType
}

export interface User {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.User, {}, number>
  username?: Resolver<Client.User, {}, string>
  password?: Resolver<Client.User, {}, string>
  products?: Resolver<Client.User, UserProductsArgs, Client.Product[] | null>
  _count?: Resolver<Client.User, {}, Client.Prisma.UserCountOutputType>
}

export interface Product {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Product, {}, number>
  owner?: Resolver<Client.Product, {}, Client.User>
  ownerId?: Resolver<Client.Product, {}, number>
}

export interface Query {
  [key: string]: Resolver<any, any, any>
  findFirstUser?: Resolver<{}, FindFirstUserArgs, Client.User | null>
  findManyUser?: Resolver<{}, FindManyUserArgs, Client.User[]>
  findManyUserCount?: Resolver<{}, FindManyUserArgs, number>
  aggregateUser?: Resolver<
    {},
    AggregateUserArgs,
    Client.Prisma.GetUserAggregateType<AggregateUserArgs>
  >
  groupByUser?: Resolver<
    {},
    GroupByUserArgs,
    Client.Prisma.UserGroupByOutputType[]
  >
  findUniqueUser?: Resolver<{}, FindUniqueUserArgs, Client.User | null>
  findFirstProduct?: Resolver<{}, FindFirstProductArgs, Client.Product | null>
  findManyProduct?: Resolver<{}, FindManyProductArgs, Client.Product[]>
  findManyProductCount?: Resolver<{}, FindManyProductArgs, number>
  aggregateProduct?: Resolver<
    {},
    AggregateProductArgs,
    Client.Prisma.GetProductAggregateType<AggregateProductArgs>
  >
  groupByProduct?: Resolver<
    {},
    GroupByProductArgs,
    Client.Prisma.ProductGroupByOutputType[]
  >
  findUniqueProduct?: Resolver<{}, FindUniqueProductArgs, Client.Product | null>
}

export interface Mutation {
  [key: string]: Resolver<any, any, any>
  createOneUser?: Resolver<{}, CreateOneUserArgs, Client.User>
  upsertOneUser?: Resolver<{}, UpsertOneUserArgs, Client.User>
  deleteOneUser?: Resolver<{}, DeleteOneUserArgs, Client.User | null>
  updateOneUser?: Resolver<{}, UpdateOneUserArgs, Client.User | null>
  updateManyUser?: Resolver<{}, UpdateManyUserArgs, Client.Prisma.BatchPayload>
  deleteManyUser?: Resolver<{}, DeleteManyUserArgs, Client.Prisma.BatchPayload>
  createOneProduct?: Resolver<{}, CreateOneProductArgs, Client.Product>
  upsertOneProduct?: Resolver<{}, UpsertOneProductArgs, Client.Product>
  deleteOneProduct?: Resolver<{}, DeleteOneProductArgs, Client.Product | null>
  updateOneProduct?: Resolver<{}, UpdateOneProductArgs, Client.Product | null>
  updateManyProduct?: Resolver<
    {},
    UpdateManyProductArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyProduct?: Resolver<
    {},
    DeleteManyProductArgs,
    Client.Prisma.BatchPayload
  >
  executeRaw?: Resolver<{}, ExecuteRawArgs, any>
  queryRaw?: Resolver<{}, QueryRawArgs, any>
}

export interface AggregateUser {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export interface UserGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserGroupByOutputType, {}, number>
  username?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  password?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  _count?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export interface AggregateProduct {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateProduct,
    {},
    Client.Prisma.ProductCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregateProduct,
    {},
    Client.Prisma.ProductAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregateProduct,
    {},
    Client.Prisma.ProductSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateProduct,
    {},
    Client.Prisma.ProductMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateProduct,
    {},
    Client.Prisma.ProductMaxAggregateOutputType | null
  >
}

export interface ProductGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.ProductGroupByOutputType, {}, number>
  ownerId?: Resolver<Client.Prisma.ProductGroupByOutputType, {}, number>
  _count?: Resolver<
    Client.Prisma.ProductGroupByOutputType,
    {},
    Client.Prisma.ProductCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.ProductGroupByOutputType,
    {},
    Client.Prisma.ProductAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.ProductGroupByOutputType,
    {},
    Client.Prisma.ProductSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.ProductGroupByOutputType,
    {},
    Client.Prisma.ProductMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.ProductGroupByOutputType,
    {},
    Client.Prisma.ProductMaxAggregateOutputType | null
  >
}

export interface AffectedRowsOutput {
  [key: string]: Resolver<any, any, any>
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>
}

export interface UserCountOutputType {
  [key: string]: Resolver<any, any, any>
  products?: Resolver<Client.Prisma.UserCountOutputType, {}, number>
}

export interface UserCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  username?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  password?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
}

export interface UserAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserAvgAggregateOutputType, {}, number | null>
}

export interface UserSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserSumAggregateOutputType, {}, number | null>
}

export interface UserMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, number | null>
  username?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >
  password?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >
}

export interface UserMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, number | null>
  username?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >
  password?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >
}

export interface ProductCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.ProductCountAggregateOutputType, {}, number>
  ownerId?: Resolver<Client.Prisma.ProductCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.ProductCountAggregateOutputType, {}, number>
}

export interface ProductAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.ProductAvgAggregateOutputType, {}, number | null>
  ownerId?: Resolver<
    Client.Prisma.ProductAvgAggregateOutputType,
    {},
    number | null
  >
}

export interface ProductSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.ProductSumAggregateOutputType, {}, number | null>
  ownerId?: Resolver<
    Client.Prisma.ProductSumAggregateOutputType,
    {},
    number | null
  >
}

export interface ProductMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.ProductMinAggregateOutputType, {}, number | null>
  ownerId?: Resolver<
    Client.Prisma.ProductMinAggregateOutputType,
    {},
    number | null
  >
}

export interface ProductMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.ProductMaxAggregateOutputType, {}, number | null>
  ownerId?: Resolver<
    Client.Prisma.ProductMaxAggregateOutputType,
    {},
    number | null
  >
}

export interface UserProductsArgs {
  where?: ProductWhereInput | null
  orderBy?: ProductOrderByWithRelationInput[] | null
  cursor?: ProductWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: ProductScalarFieldEnum[] | null
}

export interface FindFirstUserArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByWithRelationInput[] | null
  cursor?: UserWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: UserScalarFieldEnum[] | null
}

export interface FindManyUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export interface AggregateUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.UserCountAggregateInputType
  _avg?: Client.Prisma.UserAvgAggregateInputType
  _sum?: Client.Prisma.UserSumAggregateInputType
  _min?: Client.Prisma.UserMinAggregateInputType
  _max?: Client.Prisma.UserMaxAggregateInputType
}

export interface GroupByUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithAggregationInput[]
  by: UserScalarFieldEnum[]
  having?: UserScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueUserArgs {
  where: UserWhereUniqueInput | null
}

export interface FindFirstProductArgs {
  where?: ProductWhereInput | null
  orderBy?: ProductOrderByWithRelationInput[] | null
  cursor?: ProductWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: ProductScalarFieldEnum[] | null
}

export interface FindManyProductArgs {
  where?: ProductWhereInput
  orderBy?: ProductOrderByWithRelationInput[]
  cursor?: ProductWhereUniqueInput
  take?: number
  skip?: number
  distinct?: ProductScalarFieldEnum[]
}

export interface AggregateProductArgs {
  where?: ProductWhereInput
  orderBy?: ProductOrderByWithRelationInput[]
  cursor?: ProductWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.ProductCountAggregateInputType
  _avg?: Client.Prisma.ProductAvgAggregateInputType
  _sum?: Client.Prisma.ProductSumAggregateInputType
  _min?: Client.Prisma.ProductMinAggregateInputType
  _max?: Client.Prisma.ProductMaxAggregateInputType
}

export interface GroupByProductArgs {
  where?: ProductWhereInput
  orderBy?: ProductOrderByWithAggregationInput[]
  by: ProductScalarFieldEnum[]
  having?: ProductScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueProductArgs {
  where: ProductWhereUniqueInput | null
}

export interface CreateOneUserArgs {
  data: UserCreateInput
}

export interface UpsertOneUserArgs {
  where: UserWhereUniqueInput
  create: UserCreateInput
  update: UserUpdateInput
}

export interface DeleteOneUserArgs {
  where: UserWhereUniqueInput | null
}

export interface UpdateOneUserArgs {
  data: UserUpdateInput | null
  where: UserWhereUniqueInput | null
}

export interface UpdateManyUserArgs {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput
}

export interface DeleteManyUserArgs {
  where?: UserWhereInput
}

export interface CreateOneProductArgs {
  data: ProductCreateInput
}

export interface UpsertOneProductArgs {
  where: ProductWhereUniqueInput
  create: ProductCreateInput
  update: ProductUpdateInput
}

export interface DeleteOneProductArgs {
  where: ProductWhereUniqueInput | null
}

export interface UpdateOneProductArgs {
  data: ProductUpdateInput | null
  where: ProductWhereUniqueInput | null
}

export interface UpdateManyProductArgs {
  data: ProductUpdateManyMutationInput
  where?: ProductWhereInput
}

export interface DeleteManyProductArgs {
  where?: ProductWhereInput
}

export interface ExecuteRawArgs {
  query: string
  parameters?: any
}

export interface QueryRawArgs {
  query: string
  parameters?: any
}

export interface UserWhereInput {
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
  id?: IntFilter
  username?: StringFilter
  password?: StringFilter
  products?: ProductListRelationFilter
}

export interface UserOrderByWithRelationInput {
  id?: SortOrder
  username?: SortOrder
  password?: SortOrder
  products?: ProductOrderByRelationAggregateInput
}

export interface UserWhereUniqueInput {
  id?: number
  username?: string
}

export interface UserOrderByWithAggregationInput {
  id?: SortOrder
  username?: SortOrder
  password?: SortOrder
  _count?: UserCountOrderByAggregateInput
  _avg?: UserAvgOrderByAggregateInput
  _max?: UserMaxOrderByAggregateInput
  _min?: UserMinOrderByAggregateInput
  _sum?: UserSumOrderByAggregateInput
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: UserScalarWhereWithAggregatesInput[]
  OR?: UserScalarWhereWithAggregatesInput[]
  NOT?: UserScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter
  username?: StringWithAggregatesFilter
  password?: StringWithAggregatesFilter
}

export interface ProductWhereInput {
  AND?: ProductWhereInput[]
  OR?: ProductWhereInput[]
  NOT?: ProductWhereInput[]
  id?: IntFilter
  owner?: UserWhereInput
  ownerId?: IntFilter
}

export interface ProductOrderByWithRelationInput {
  id?: SortOrder
  owner?: UserOrderByWithRelationInput
  ownerId?: SortOrder
}

export interface ProductWhereUniqueInput {
  id?: number
}

export interface ProductOrderByWithAggregationInput {
  id?: SortOrder
  ownerId?: SortOrder
  _count?: ProductCountOrderByAggregateInput
  _avg?: ProductAvgOrderByAggregateInput
  _max?: ProductMaxOrderByAggregateInput
  _min?: ProductMinOrderByAggregateInput
  _sum?: ProductSumOrderByAggregateInput
}

export interface ProductScalarWhereWithAggregatesInput {
  AND?: ProductScalarWhereWithAggregatesInput[]
  OR?: ProductScalarWhereWithAggregatesInput[]
  NOT?: ProductScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter
  ownerId?: IntWithAggregatesFilter
}

export interface UserCreateInput {
  username: string
  password: string
}

export interface UserUncheckedCreateInput {
  id?: number
  username: string
  password: string
  products?: ProductUncheckedCreateNestedManyWithoutOwnerInput
}

export interface UserUpdateInput {
  username?: StringFieldUpdateOperationsInput
  password?: StringFieldUpdateOperationsInput
  products?: ProductUpdateManyWithoutOwnerInput
}

export interface UserUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput
  username?: StringFieldUpdateOperationsInput
  password?: StringFieldUpdateOperationsInput
  products?: ProductUncheckedUpdateManyWithoutOwnerInput
}

export interface UserUpdateManyMutationInput {
  username?: StringFieldUpdateOperationsInput
  password?: StringFieldUpdateOperationsInput
}

export interface UserUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput
  username?: StringFieldUpdateOperationsInput
  password?: StringFieldUpdateOperationsInput
}

export interface ProductCreateInput {
  owner: UserCreateNestedOneWithoutProductsInput
}

export interface ProductUncheckedCreateInput {
  id?: number
  ownerId: number
}

export interface ProductUpdateInput {
  owner?: UserUpdateOneRequiredWithoutProductsInput
}

export interface ProductUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput
  ownerId?: IntFieldUpdateOperationsInput
}

export interface ProductUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput
  ownerId?: IntFieldUpdateOperationsInput
}

export interface IntFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export interface StringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter
}

export interface ProductListRelationFilter {
  every?: ProductWhereInput
  some?: ProductWhereInput
  none?: ProductWhereInput
}

export interface ProductOrderByRelationAggregateInput {
  _count?: SortOrder
}

export interface UserCountOrderByAggregateInput {
  id?: SortOrder
  username?: SortOrder
  password?: SortOrder
}

export interface UserAvgOrderByAggregateInput {
  id?: SortOrder
}

export interface UserMaxOrderByAggregateInput {
  id?: SortOrder
  username?: SortOrder
  password?: SortOrder
}

export interface UserMinOrderByAggregateInput {
  id?: SortOrder
  username?: SortOrder
  password?: SortOrder
}

export interface UserSumOrderByAggregateInput {
  id?: SortOrder
}

export interface IntWithAggregatesFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntWithAggregatesFilter
  _count?: NestedIntFilter
  _avg?: NestedFloatFilter
  _sum?: NestedIntFilter
  _min?: NestedIntFilter
  _max?: NestedIntFilter
}

export interface StringWithAggregatesFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export interface UserRelationFilter {
  is?: UserWhereInput
  isNot?: UserWhereInput
}

export interface ProductCountOrderByAggregateInput {
  id?: SortOrder
  ownerId?: SortOrder
}

export interface ProductAvgOrderByAggregateInput {
  id?: SortOrder
  ownerId?: SortOrder
}

export interface ProductMaxOrderByAggregateInput {
  id?: SortOrder
  ownerId?: SortOrder
}

export interface ProductMinOrderByAggregateInput {
  id?: SortOrder
  ownerId?: SortOrder
}

export interface ProductSumOrderByAggregateInput {
  id?: SortOrder
  ownerId?: SortOrder
}

export interface ProductCreateNestedManyWithoutOwnerInput {
  connectOrCreate?: ProductCreateOrConnectWithoutOwnerInput[]
  connect?: ProductWhereUniqueInput[]
}

export interface ProductUncheckedCreateNestedManyWithoutOwnerInput {
  connectOrCreate?: ProductCreateOrConnectWithoutOwnerInput[]
  connect?: ProductWhereUniqueInput[]
}

export interface StringFieldUpdateOperationsInput {
  set?: string
}

export interface ProductUpdateManyWithoutOwnerInput {
  connectOrCreate?: ProductCreateOrConnectWithoutOwnerInput[]
  upsert?: ProductUpsertWithWhereUniqueWithoutOwnerInput[]
  set?: ProductWhereUniqueInput[]
  disconnect?: ProductWhereUniqueInput[]
  delete?: ProductWhereUniqueInput[]
  connect?: ProductWhereUniqueInput[]
  update?: ProductUpdateWithWhereUniqueWithoutOwnerInput[]
  updateMany?: ProductUpdateManyWithWhereWithoutOwnerInput[]
  deleteMany?: ProductScalarWhereInput[]
}

export interface IntFieldUpdateOperationsInput {
  set?: number
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export interface ProductUncheckedUpdateManyWithoutOwnerInput {
  connectOrCreate?: ProductCreateOrConnectWithoutOwnerInput[]
  upsert?: ProductUpsertWithWhereUniqueWithoutOwnerInput[]
  set?: ProductWhereUniqueInput[]
  disconnect?: ProductWhereUniqueInput[]
  delete?: ProductWhereUniqueInput[]
  connect?: ProductWhereUniqueInput[]
  update?: ProductUpdateWithWhereUniqueWithoutOwnerInput[]
  updateMany?: ProductUpdateManyWithWhereWithoutOwnerInput[]
  deleteMany?: ProductScalarWhereInput[]
}

export interface UserCreateNestedOneWithoutProductsInput {
  create?: UserUncheckedCreateWithoutProductsInput
  connectOrCreate?: UserCreateOrConnectWithoutProductsInput
  connect?: UserWhereUniqueInput
}

export interface UserUpdateOneRequiredWithoutProductsInput {
  create?: UserUncheckedCreateWithoutProductsInput
  connectOrCreate?: UserCreateOrConnectWithoutProductsInput
  upsert?: UserUpsertWithoutProductsInput
  connect?: UserWhereUniqueInput
  update?: UserUncheckedUpdateWithoutProductsInput
}

export interface NestedIntFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export interface NestedStringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter
}

export interface NestedIntWithAggregatesFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntWithAggregatesFilter
  _count?: NestedIntFilter
  _avg?: NestedFloatFilter
  _sum?: NestedIntFilter
  _min?: NestedIntFilter
  _max?: NestedIntFilter
}

export interface NestedFloatFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedFloatFilter
}

export interface NestedStringWithAggregatesFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export interface ProductUncheckedCreateWithoutOwnerInput {
  id?: number
}

export interface ProductCreateOrConnectWithoutOwnerInput {
  where: ProductWhereUniqueInput
  create: ProductUncheckedCreateWithoutOwnerInput
}

export interface ProductUpsertWithWhereUniqueWithoutOwnerInput {
  where: ProductWhereUniqueInput
  update: ProductUncheckedUpdateWithoutOwnerInput
  create: ProductUncheckedCreateWithoutOwnerInput
}

export interface ProductUpdateWithWhereUniqueWithoutOwnerInput {
  where: ProductWhereUniqueInput
  data: ProductUncheckedUpdateWithoutOwnerInput
}

export interface ProductUpdateManyWithWhereWithoutOwnerInput {
  where: ProductScalarWhereInput
  data: ProductUncheckedUpdateManyWithoutProductsInput
}

export interface ProductScalarWhereInput {
  AND?: ProductScalarWhereInput[]
  OR?: ProductScalarWhereInput[]
  NOT?: ProductScalarWhereInput[]
  id?: IntFilter
  ownerId?: IntFilter
}

export interface UserCreateWithoutProductsInput {
  username: string
  password: string
}

export interface UserUncheckedCreateWithoutProductsInput {
  id?: number
  username: string
  password: string
}

export interface UserCreateOrConnectWithoutProductsInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutProductsInput
}

export interface UserUpsertWithoutProductsInput {
  update: UserUncheckedUpdateWithoutProductsInput
  create: UserUncheckedCreateWithoutProductsInput
}

export interface UserUpdateWithoutProductsInput {
  username?: StringFieldUpdateOperationsInput
  password?: StringFieldUpdateOperationsInput
}

export interface UserUncheckedUpdateWithoutProductsInput {
  id?: IntFieldUpdateOperationsInput
  username?: StringFieldUpdateOperationsInput
  password?: StringFieldUpdateOperationsInput
}

export interface ProductUncheckedUpdateWithoutOwnerInput {
  id?: IntFieldUpdateOperationsInput
}

export interface ProductUncheckedUpdateManyWithoutProductsInput {
  id?: IntFieldUpdateOperationsInput
}

export enum UserScalarFieldEnum {
  id = 'id',
  username = 'username',
  password = 'password',
}
export enum ProductScalarFieldEnum {
  id = 'id',
  ownerId = 'ownerId',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
