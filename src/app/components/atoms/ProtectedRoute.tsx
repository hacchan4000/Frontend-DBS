'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function ProtectedRoute({children}: {children: React.ReactNode}) {
  const token = localStorage.getItem('access_Token')

  const router = useRouter()
  if (!token) { // ini untuk block akses dr login ke home tanpa akses token
    router.push('/')
  }
  
  return children
}