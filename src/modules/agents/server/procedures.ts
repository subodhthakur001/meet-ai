import { db } from "@/db";
import { agents } from "@/db/schema";
import { createTRPCRouter, baseProcedure, protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { AgentsInsertSchema } from "../schema";


export const agentsRouter = createTRPCRouter({
    // Todo : replace baseProcedure with ProtectedProceduere 
    getMany: baseProcedure.query(async() => {
        const data = await db.
        select()
        .from(agents);
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    // throw new TRPCError({code : "BAD_REQUEST"})
        return data;
    }),
    create: protectedProcedure
    .input(AgentsInsertSchema)
    .mutation(async ({input, ctx}) => {
        const [createdAgent] = await db
        .insert(agents)
        .values({...input, userId: ctx.auth.user.id})
        .returning();
        return createdAgent;
    }) 
})