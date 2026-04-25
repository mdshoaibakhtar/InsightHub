"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const {state, isMobile} = useSidebar();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item, index) => 
        {
          const hasChildrens = item.items && item.items?.length > 0;
          const flyout = state === 'collapsed' && hasChildrens;
          return(
          flyout ? (<DropdownMenu key={index}>
          <DropdownMenuTrigger asChild className="p-1">
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                {item.icon && <item.icon />}
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg bg-accent-foreground border border-gray-200 p-2"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            {item.items && item.items.map((subItem, index) => (
              <DropdownMenuItem
                key={index}
                className="gap-2 p-2 mx-2 text-accent cursor-pointer hover:bg-foreground"
              >
                {subItem.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>) : (<Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  {hasChildrens && <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              {hasChildrens && (<CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem, index) => (
                    <SidebarMenuSubItem key={index}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>)}
            </SidebarMenuItem>
          </Collapsible>)
        )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
