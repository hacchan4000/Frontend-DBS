'use client'

import { useEffect, useMemo, useState } from 'react'
import listStyles from '../components/ui/ListPanel.module.css'
import { ListPanel } from '@/app/components/ui/ListPanel'
import { SubscriptionRow } from '@/app/components/ui/SubscriptionRow'
import { usePurchase } from '@/hooks/usePurchase'
import { useAuth } from '@/hooks/useAuth'
import { Sidebar } from '../components/ui/Sidebar'


export default function SubscriptionsPage() {
  const { user } = useAuth();
  const { subscriptions, read } = usePurchase()
  const [query, setQuery] = useState('')

  useEffect(()=>{ if(user?.id) read(user.id) },)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return subscriptions
    return subscriptions.filter((s) => s.title.toLowerCase().includes(q))
  }, [query])

  return (
    <>
    <Sidebar />
    <ListPanel
      title="Subscriptions"
      searchValue={query}
      onSearchChange={setQuery}
      onAdd={() => {}}
    >
      <div>
        {filtered.map((subscription, index) => (
          <SubscriptionRow
            key={index}
            subscription={subscription}
            showDivider={index < filtered.length - 1}
          />
        ))}
        {filtered.length === 0 && (
          <p className={listStyles.emptyMessage}>No subscriptions found.</p>
        )}
      </div>
    </ListPanel>
    </>
    
  )
}
