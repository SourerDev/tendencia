import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure
} from "~/server/api/trpc"

export const articleRouter = createTRPCRouter({
    createArticle: publicProcedure
    .input(z.object({ name: z.string(), price: z.number() }))
    .query(({ ctx, input}) => {
        return ctx.prisma.article.create({
            data: {
                name: input.name,
                price: input.price
            }
        })
    })
})