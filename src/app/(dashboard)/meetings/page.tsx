import ErrorState from "@/components/ui/error-state";
import LoadingState from "@/components/ui/loading-state";
import { auth } from "@/lib/auth";
import { MeetingsList } from "@/modules/meetings/components/meetings-list";
import { MeetingView } from "@/modules/meetings/ui/views/meeting-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary, useQueryClient } from "@tanstack/react-query";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const Page = async () => {
    const session = await auth.api.getSession({
            headers: await headers(),
          })
        
          if(!session){
            redirect("/sign-in")
          }
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(
        trpc.meetings.getMany.queryOptions({})
    )
    return <>
    <MeetingsList/>
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<LoadingState title="Loading Meetings" description="This may take few seconds"/>}>
                <ErrorBoundary fallback={<ErrorState title="Error Loading Meetings" description="Something went wrong"/>}>
                      <MeetingView/>
                </ErrorBoundary>
            </Suspense>
        </HydrationBoundary>
       
    </>
}
export default Page;