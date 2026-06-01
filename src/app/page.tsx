import { AppLayout } from '../components/layout/AppLayout'
import { HomePage } from '../views/HomePage'

export default function Home() {
  return (
    <AppLayout variant="home">
      <HomePage />
    </AppLayout>
  )
}
