"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  ChevronRightIcon,
  TrashIcon,
  PencilIcon,
  MoreVerticalIcon,
} from "lucide-react";
import Link from "next/link";

interface Props {
  agentId: string;
  agentName: string;
  onEdit: () => void;
  onRemove: () => void;
}

export const AgentIdViewHeader = ({
  agentId,
  agentName,
  onEdit,
  onRemove,
}: Props) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-border/20 bg-background/60 backdrop-blur-sm rounded-t-lg">
      {/* Breadcrumb Section */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href="/agents"
                className="text-muted-foreground hover:text-foreground font-medium text-sm md:text-base transition-colors"
              >
                My Agents
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator>
            <ChevronRightIcon className="size-4 text-muted-foreground" />
          </BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href={`/agents/${agentId}`}
                className="font-semibold text-foreground text-sm md:text-base"
              >
                {agentName}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Dropdown Section */}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-accent rounded-full"
          >
            <MoreVerticalIcon className="size-5 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-40 rounded-lg shadow-lg bg-popover p-1"
        >
          <DropdownMenuItem
            onClick={onEdit}
            className="flex items-center gap-2 cursor-pointer rounded-md px-3 py-2 hover:bg-accent text-sm"
          >
            <PencilIcon className="size-4 text-muted-foreground" />
            <span>Edit</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={onRemove}
            className="flex items-center gap-2 cursor-pointer rounded-md px-3 py-2 hover:bg-destructive/10 text-sm"
          >
            <TrashIcon className="size-4 text-destructive" />
            <span className="text-destructive">Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
