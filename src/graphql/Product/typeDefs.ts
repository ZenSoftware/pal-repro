import gql from 'graphql-tag'

export default gql`
  type Product {
    id: Int!
    owner: User!
    ownerId: Int!
  }

  type Query {
    findUniqueProduct(where: ProductWhereUniqueInput!): Product
    findFirstProduct(
      where: ProductWhereInput
      orderBy: [ProductOrderByWithRelationInput]
      cursor: ProductWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProductScalarFieldEnum]
    ): Product
    findManyProduct(
      where: ProductWhereInput
      orderBy: [ProductOrderByWithRelationInput]
      cursor: ProductWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProductScalarFieldEnum]
    ): [Product!]
    findManyProductCount(
      where: ProductWhereInput
      orderBy: [ProductOrderByWithRelationInput]
      cursor: ProductWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProductScalarFieldEnum]
    ): Int!
    aggregateProduct(
      where: ProductWhereInput
      orderBy: [ProductOrderByWithRelationInput]
      cursor: ProductWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateProduct
  }

  type Mutation {
    createOneProduct(data: ProductCreateInput!): Product!
    updateOneProduct(
      data: ProductUpdateInput!
      where: ProductWhereUniqueInput!
    ): Product!
    deleteOneProduct(where: ProductWhereUniqueInput!): Product
    upsertOneProduct(
      where: ProductWhereUniqueInput!
      create: ProductCreateInput!
      update: ProductUpdateInput!
    ): Product
    deleteManyProduct(where: ProductWhereInput): BatchPayload
    updateManyProduct(
      data: ProductUpdateManyMutationInput!
      where: ProductWhereInput
    ): BatchPayload
  }
`
