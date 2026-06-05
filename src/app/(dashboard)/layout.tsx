import { AppLayout } from "@/components/layout/AppLayout"



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AppLayout showSidebar>{children}</AppLayout>
}