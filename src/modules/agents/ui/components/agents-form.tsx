import { useRouter } from "next/navigation";
import { AgentGetOne } from "../../type";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import z from "zod";
import { AgentsInsertSchema } from "../../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { GeneratedAvatar } from "@/components/ui/generated-avatar";

interface AgentsFormProps{
    isSuccess?: () => void,
    isCancel?: () => void,
    intialValues?: AgentGetOne;
}

export const AgentForm = ({
    isSuccess,
    isCancel,
    intialValues
} : AgentsFormProps) => {
    const trpc = useTRPC();
    const router = useRouter();
    const queryClient = useQueryClient();

    const createAgent = useMutation(
        trpc.agents.create.mutationOptions({
            onSuccess: () => {},
            onError: () => {},
        }),
    )

    const form = useForm<z.infer<typeof AgentsInsertSchema>>({
        resolver: zodResolver(AgentsInsertSchema),
        defaultValues: {
            name: intialValues?.name ?? "",
            instructions: intialValues?.instructions ?? "",
        }
    })

    const isEdit = !!intialValues?.id;
    const isPending = createAgent.isPending;

    const onSubmit = (values : z.infer<typeof AgentsInsertSchema>) => {
        if(isEdit){
            console.log("TODO: update Agents")
        }else{
            createAgent.mutate(values);
        }
    };

    return (
        <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}> 
                <GeneratedAvatar
                seed={form.watch("name")}
                variant="botttsNeutral"
                className="border size-16"
                />
            </form>
        </Form>
    )




}