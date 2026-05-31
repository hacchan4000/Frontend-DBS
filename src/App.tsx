import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { GraphsPage } from './pages/GraphsPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { PurchasesPage } from './pages/PurchasesPage'
import { RegisterPage } from './pages/RegisterPage'
import { SubscriptionsPage } from './pages/SubscriptionsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<AppLayout variant="home" />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route element={<AppLayout showSidebar />}>
          <Route path="purchases" element={<PurchasesPage />} />
          <Route path="subscriptions" element={<SubscriptionsPage />} />
          <Route path="graphs" element={<GraphsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}