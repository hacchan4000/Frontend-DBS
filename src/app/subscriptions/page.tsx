'use client'

import { useMemo, useState } from 'react'
import listStyles from '../components/ui/ListPanel.module.css'
import { subscriptions } from '@/utils/data'
import { ListPanel } from '@/app/components/ui/ListPanel'
import { SubscriptionRow } from '@/app/components/ui/SubscriptionRow'


export function SubscriptionsPage() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return subscriptions
    return subscriptions.filter((s) => s.name.toLowerCase().includes(q))
  }, [query])

  return (
    <ListPanel
      title="Subscriptions"
      searchValue={query}
      onSearchChange={setQuery}
      onAdd={() => {}}
    >
      <div>
        {filtered.map((subscription, index) => (
          <SubscriptionRow
            key={subscription.id}
            subscription={subscription}
            showDivider={index < filtered.length - 1}
          />
        ))}
        {filtered.length === 0 && (
          <p className={listStyles.emptyMessage}>No subscriptions found.</p>
        )}
      </div>
    </ListPanel>
  )
}
