## Reproduction of Pal.js bug

This is a clone of [paljs/prisma-tools/packages/create/examples/apollo-sdl-first](https://github.com/paljs/prisma-tools/tree/main/packages/create/examples/apollo-sdl-first). This is a bug reproduction of a simple _one-to-many_ example not code generating the `ProductUpdateManyMutationInput` interface.

https://github.com/ZenSoftware/pal-repro/blob/03c7f2721e725ae20961f040b68c146dc87c8ece/prisma/schema.prisma#L10-L22

Notice how the definition for `ProductUpdateManyMutationInput` is not being generated.
https://github.com/ZenSoftware/pal-repro/blob/63cddd8b32324f2a83b658f27b65bf52137fccde/src/resolversTypes.ts#L482-L485

Though `UserUpdateManyMutationInput` is being generated.
https://github.com/ZenSoftware/pal-repro/blob/63cddd8b32324f2a83b658f27b65bf52137fccde/src/resolversTypes.ts#L605-L608
