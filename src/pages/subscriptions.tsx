import type { ReactElement } from 'react'
import { AppLayout } from '../components/layout/AppLayout'
import type { NextPageWithLayout } from '../types/next-page'
import { SubscriptionsPage } from '../views/SubscriptionsPage'

const Page: NextPageWithLayout = () => <SubscriptionsPage />

Page.getLayout = function getSubscriptionsLayout(page: ReactElement) {
  return <AppLayout showSidebar>{page}</AppLayout>
}

export default Page
