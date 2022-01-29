## Reproduction of Pal.js bug

This is a clone of [paljs/prisma-tools/packages/create/examples/apollo-sdl-first](https://github.com/paljs/prisma-tools/tree/main/packages/create/examples/apollo-sdl-first). This is a bug reproduction of a simple _one-to-many_ example not code generating `ProductUpdateManyMutationInput` interface.

```gql
model User {
  id        Int      @id @default(autoincrement())
  username  String   @unique
  password  String

  products Product[]
}

model Product {
  id      Int  @id @default(autoincrement())
  owner   User @relation(fields: [ownerId], references: [id])
  ownerId Int
}
```

Notice how the definition for `ProductUpdateManyMutationInput` is not being generated.
https://github.com/ZenSoftware/pal-repro/blob/63cddd8b32324f2a83b658f27b65bf52137fccde/src/resolversTypes.ts#L482-L485

Though `UserUpdateManyMutationInput` is being generated.
https://github.com/ZenSoftware/pal-repro/blob/63cddd8b32324f2a83b658f27b65bf52137fccde/src/resolversTypes.ts#L605-L608
