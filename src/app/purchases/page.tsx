'use client'

import { useEffect, useMemo, useState } from 'react'
import listStyles from '../components/ui/ListPanel.module.css'
import { ListPanel } from '@/app/components/ui/ListPanel'
import { PurchaseRow } from '@/app/components/ui/PurchaseRow'
import { usePurchase } from '@/hooks/usePurchase'
import { useAuth } from '@/hooks/useAuth'
import { Sidebar } from '../components/ui/Sidebar'


export default function PurchasesPage() {
  const { user } = useAuth();
  const { purchases, read } = usePurchase();

  useEffect(()=>{
    if (user?.id) {
      read(user.id)
    }
  })
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return purchases
    return purchases.filter((p) => p.title.toLowerCase().includes(q))
  }, [query])

  return (
    <>
    <Sidebar />
    <ListPanel
      title="Purchases History"
      searchValue={query}
      onSearchChange={setQuery}
      onAdd={() => {}}
    >
      <div>
        {filtered.map((purchase, index) => (
          <PurchaseRow
            key={index}
            purchase={purchase}
            showDivider={index < filtered.length - 1}
          />
        ))}
        {filtered.length === 0 && (
          <p className={listStyles.emptyMessage}>No purchases found.</p>
        )}
      </div>
    </ListPanel>
    </>
    
  )
}
