import { Avatar } from "@/components/ui/avatar";
import { GeneratedAvatar } from "@/components/ui/generated-avatar";
import { authClient } from "@/lib/auth-client";
import { AvatarImage } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"

const DashboardUserButton = () => {
    const {data , isPending} = authClient.useSession();

    if(isPending || !data?.user){
        return null;
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5
        hover:bg-white/10 overflow-hidden">
          {
            data.user.image ? (
                <Avatar>
                    <AvatarImage src={data.user.image}/>
                </Avatar>
            ) : (
                <GeneratedAvatar
                seed={data.user.name}
                variant="initials"
                className="size-9 mr-3"
                />
            )
          }
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}
export default DashboardUserButton;