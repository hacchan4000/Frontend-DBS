import type { ReactElement } from 'react'
import { AppLayout } from '../components/layout/AppLayout'
import type { NextPageWithLayout } from '../types/next-page'
import { PurchasesPage } from '../views/PurchasesPage'

const Page: NextPageWithLayout = () => <PurchasesPage />

Page.getLayout = function getPurchasesLayout(page: ReactElement) {
  return <AppLayout showSidebar>{page}</AppLayout>
}

export default Page
