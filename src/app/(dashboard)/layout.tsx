import { AppLayout } from '@/src/components/layout/AppLayout'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AppLayout showSidebar>{children}</AppLayout>
}