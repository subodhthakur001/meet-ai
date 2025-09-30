"use client"

import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Drawer,  DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

interface ResponsiveProps {
    title : string,
    description : string,
    children: React.ReactNode,
    open : boolean,
    onOpenChange: (open : boolean) => void;
}

const ResponsiveDialog = ({
    title,
    description,
    children,
    open,
    onOpenChange
    
} : ResponsiveProps) => {
    const isMobile = useIsMobile();
    if(isMobile){
        return (
            <Drawer open={open} onOpenChange={onOpenChange}>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>{title}</DrawerTitle>
                        <DrawerDescription>{description}</DrawerDescription>
                    </DrawerHeader>
                </DrawerContent>
                <div className="p-4">
                    {children}
                </div>
            </Drawer>
        )
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent> 
        </Dialog>
    )
}

export default ResponsiveDialog;