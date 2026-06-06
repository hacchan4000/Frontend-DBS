import type { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Input({ label, id, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <label htmlFor={inputId} className={styles.field}>
      <span className={styles.label}>{label}</span>
      <input id={inputId} className={styles.input} {...props} />
    </label>
  )
}