import type { Category } from './data'

export const categoryConfig: Record<
  Category,
  { label: string; iconSrc: string }
> = {
  'food-drinks': {
    label: 'food & drinks',
    iconSrc: '/Icon-Food.png',
  },
  shopping: {
    label: 'shoping',
    iconSrc: '/Icon-Shopping.png',
  },
  entertainment: {
    label: 'entertainment',
    iconSrc: '/Icon-Entertainment.png',
  },
  subscription: {
    label: 'subscription',
    iconSrc: '/Icon-Subscription.png',
  },
}

//Kategori pengeluaran & iconnya