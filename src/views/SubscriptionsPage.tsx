'use client'

import { useMemo, useState } from 'react'
import { ListPanel } from '../components/dashboard/ListPanel'
import { SubscriptionRow } from '../components/ui/SubscriptionRow'
import { subscriptions } from '../utils/data'
import listStyles from '../components/dashboard/ListPanel.module.css'

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
