"use client"
import { SidebarHeader, SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-context-menu";
import { BotIcon, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DashboardSidebar = () => {
    const firstSection = [
        {
        icon : VideoIcon,
        label :"Meetings",
        href: "/meetings"
    },
    {
        icon: BotIcon,
        label :"Agents",
        href: "/agents"
    },]
    
    return (
        <Sidebar>
            <SidebarHeader className="text-sidebar-accent-foreground">
                <Link href="/" className="flex items-center gap-2 px-2 pt-2">
                <Image src="/logo.svg" height={36} width={36} alt="Meet AI"/>
                <p className="text-2xl font-semibold">Meet AI</p>
                </Link>
            </SidebarHeader>
            <div className="px-4 py-2">
                <Separator className="opacity-10 text-[#5D6B68]"/>
            </div>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {firstSection.map((item) => (
                                <SidebarMenuItem key={item.href} >
                                    <SidebarMenuButton>
                                         <Link href={item.href}>
                                    <item.icon />
                                    <span className="text-sm font-medium tracking-tight">
                                        {item.label}
                                    </span>
                                    </Link>
                                    </SidebarMenuButton>
                                   
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>   
    )
}

export default DashboardSidebar;