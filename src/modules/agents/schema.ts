import {z} from "zod"

export const AgentsInsertSchema = z.object({
    name : z.string().min(1, {message: "Name is required"}),
    instructions : z.string().min(1, {message: "Instructions is required"})
})