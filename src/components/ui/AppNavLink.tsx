'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
interface AppNavLinkProps {
  href: string
  className?: string | ((isActive: boolean) => string)
  children: ReactNode
  exact?: boolean
}

export function AppNavLink({
  href,
  className,
  children,
  exact = false,
}: AppNavLinkProps) {
  const pathname = usePathname()
  const isActive = exact
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`)

  const resolvedClassName =
    typeof className === 'function' ? className(isActive) : className

  return <Link href={href} className={resolvedClassName}>{children}</Link>
}
