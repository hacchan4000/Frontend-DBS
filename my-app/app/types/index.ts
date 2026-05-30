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