export const USER_NAME = 'Aditya'

export type Category =
  | 'food-drinks'
  | 'shopping'
  | 'entertainment'
  | 'subscription'

export interface Purchase {
  id: string
  name: string
  amount: number
  date: string
  category: Category
}

export interface Subscription {
  id: string
  name: string
  amount: number
  dueDate: string
}

export interface CategoryBreakdown {
  category: Category
  amount: number
  label: string
}

export const purchases: Purchase[] = [
  {
    id: '1',
    name: 'McDonalds',
    amount: 80_000,
    date: 'Thursday, 7 May 2026',
    category: 'food-drinks',
  },
  {
    id: '2',
    name: 'Apple',
    amount: 1_000_000,
    date: 'Thursday, 7 May 2026',
    category: 'shopping',
  },
  {
    id: '3',
    name: 'The Devil Wears Prada 2',
    amount: 65_000,
    date: 'Thursday, 7 May 2026',
    category: 'entertainment',
  },
  {
    id: '4',
    name: 'iCloud',
    amount: 169_000,
    date: 'Thursday, 7 May 2026',
    category: 'subscription',
  },
  {
    id: '5',
    name: 'Pizza Hut',
    amount: 80_000,
    date: 'Thursday, 7 May 2026',
    category: 'food-drinks',
  },
  {
    id: '6',
    name: 'Burger King',
    amount: 80_000,
    date: 'Thursday, 7 May 2026',
    category: 'food-drinks',
  },
  {
    id: '7',
    name: 'Chatime',
    amount: 80_000,
    date: 'Thursday, 7 May 2026',
    category: 'food-drinks',
  },
  {
    id: '8',
    name: 'H&M',
    amount: 1_000_000,
    date: 'Thursday, 7 May 2026',
    category: 'shopping',
  },
  {
    id: '9',
    name: 'Grand Lucky',
    amount: 1_000_000,
    date: 'Thursday, 7 May 2026',
    category: 'shopping',
  },
  {
    id: '10',
    name: 'Uniqlo',
    amount: 1_000_000,
    date: 'Thursday, 7 May 2026',
    category: 'shopping',
  },
]

export const subscriptions: Subscription[] = [
  { id: 's1', name: 'iCloud', amount: 169_000, dueDate: 'Due 7 May 2026' },
  { id: 's2', name: 'Netflix', amount: 200_000, dueDate: 'Due 7 May 2026' },
  { id: 's3', name: 'Disney+', amount: 65_000, dueDate: 'Due 7 May 2026' },
  { id: 's4', name: 'Google One', amount: 169_000, dueDate: 'Due 7 May 2026' },
]

export const monthlyTotal = 3_300_000
export const weeklyTotal = 300_000
export const aiPrediction = 3_300_000

export const monthlyBreakdown: CategoryBreakdown[] = [
  { category: 'food-drinks', amount: 200_000, label: 'food & drinks' },
  { category: 'shopping', amount: 200_000, label: 'shoping' },
  { category: 'entertainment', amount: 200_000, label: 'entertainment' },
  { category: 'subscription', amount: 200_000, label: 'subscription' },
]

export const weekChartHeights = [103, 66, 36, 66, 103, 125, 66]