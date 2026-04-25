
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { AppSidebar } from "./components/AppSidebar"
import { SiteHeader } from "./components/SiteHeader"
import { TooltipProvider } from "./components/ui/tooltip"
import Home from "./components/screens/Home"

export default function Page() {
  const sidebarStyle = {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 14)",
        } as React.CSSProperties

  return (
    <TooltipProvider>
    <SidebarProvider style={sidebarStyle}>
      <AppSidebar variant="inset" />
      {/* CONTENT AREA */}
      <SidebarInset>
        {/* HEADER */}
        <SiteHeader />
        {/* DYNAMIC PAGE RENDERING */}
        <Home/>
      </SidebarInset>
    </SidebarProvider>
    </TooltipProvider>
  )
}
