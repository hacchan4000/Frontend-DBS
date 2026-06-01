import type { ReactElement } from 'react'
import { AppLayout } from '../components/layout/AppLayout'
import type { NextPageWithLayout } from '../types/next-page'
import { GraphsPage } from '../views/GraphsPage'

const Page: NextPageWithLayout = () => <GraphsPage />

Page.getLayout = function getGraphsLayout(page: ReactElement) {
  return <AppLayout showSidebar>{page}</AppLayout>
}

export default Page
