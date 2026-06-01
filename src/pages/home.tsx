import type { ReactElement } from 'react'
import { AppLayout } from '../components/layout/AppLayout'
import type { NextPageWithLayout } from '../types/next-page'
import { HomePage } from '../views/HomePage'

const Page: NextPageWithLayout = () => <HomePage />

Page.getLayout = function getHomeLayout(page: ReactElement) {
  return <AppLayout variant="home">{page}</AppLayout>
}

export default Page
