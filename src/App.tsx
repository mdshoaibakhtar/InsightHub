import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { AppSidebar } from "./components/AppSidebar"
import { SiteHeader } from "./components/SiteHeader"
import { TooltipProvider } from "./components/ui/tooltip"

import Home from "./components/screens/Home"
import LoginScreen from "./components/screens/Login"

import { Routes, Route, Outlet } from "react-router-dom"

function AppLayout() {
  const sidebarStyle = {
    "--sidebar-width": "calc(var(--spacing) * 72)",
    "--header-height": "calc(var(--spacing) * 14)",
  } as React.CSSProperties

  return (
    <TooltipProvider>
      <SidebarProvider style={sidebarStyle}>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}

function AuthLayout() {
  return <Outlet />
}

export default function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginScreen />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

    </Routes>
  )
}