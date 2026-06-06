'use client'

import { useMemo, useState } from 'react'
import listStyles from '../components/dashboard/ListPanel.module.css'
import { purchases } from '@/utils/data'
import { ListPanel } from '@/components/dashboard/ListPanel'
import { PurchaseRow } from '@/components/ui/PurchaseRow'


export function PurchasesPage() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return purchases
    return purchases.filter((p) => p.name.toLowerCase().includes(q))
  }, [query])

  return (
    <ListPanel
      title="Purchases History"
      searchValue={query}
      onSearchChange={setQuery}
      onAdd={() => {}}
    >
      <div>
        {filtered.map((purchase, index) => (
          <PurchaseRow
            key={purchase.id}
            purchase={purchase}
            showDivider={index < filtered.length - 1}
          />
        ))}
        {filtered.length === 0 && (
          <p className={listStyles.emptyMessage}>No purchases found.</p>
        )}
      </div>
    </ListPanel>
  )
}
