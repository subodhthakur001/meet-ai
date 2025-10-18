import { useRouter } from "next/navigation";
import { AgentGetOne } from "../../type";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import z from "zod";
import { AgentsInsertSchema } from "../../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form , FormField, FormItem, FormLabel, FormControl} from "@/components/ui/form";
import { GeneratedAvatar } from "@/components/ui/generated-avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

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
    const queryClient = useQueryClient();

    const createAgent = useMutation(
        trpc.agents.create.mutationOptions({
            onSuccess: async() => {
                await queryClient.invalidateQueries(
                    trpc.agents.getMany.queryOptions({}),
                )

                if(intialValues?.id){
                    await queryClient.invalidateQueries(
                        trpc.agents.getOne.queryOptions({id: intialValues.id})
                    )
                }
                isSuccess?.();
            },
            onError: (error) => {
                toast.message(error.message)
            },
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
            <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input {...field} placeholder="e.g. Math tutor"/>
                    </FormControl>
                </FormItem>
            )}/>
            <FormField
            name="instructions"
            control={form.control}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Instructions</FormLabel>
                    <FormControl>
                        <Textarea {...field} 
                        placeholder="You are a helpful math assistant that can answer questions and help with 
                        assignment"/>
                    </FormControl>
                </FormItem>
            )}/>
            <div className="flex justify-between gap-x-2">
                {isCancel && (
                    <Button
                    variant="ghost"
                    disabled={isPending}
                    type="button"
                    onClick={() => isCancel()}>
                        Cancel
                    </Button>
                )}
                <Button disabled={isPending} type="submit">
                    {isEdit ? "Update" : "Create"}
                </Button>

            </div>
            </form>  
        </Form>
    )




}