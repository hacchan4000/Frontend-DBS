import { Link, useNavigate } from 'react-router-dom'
import { AuthShell } from '../components/auth/AuthShell'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import styles from './AuthForm.module.css'

export function LoginPage() {
  const navigate = useNavigate()

  return (
    <AuthShell greeting="welcome back">
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault()
          navigate('/')
        }}
      >
        <Input label="E-mail" type="email" autoComplete="email" required />
        <Input
          label="Password"
          type="password"
          autoComplete="current-password"
          required
        />
        <div className={styles.submitWrap}>
          <Button type="submit" fullWidth>
            Log In
          </Button>
        </div>
        <p className={styles.footerText}>
          Don&apos;t have an account?{' '}
          <Link to="/register" className={styles.footerLink}>
            Sign In here
          </Link>
        </p>
      </form>
    </AuthShell>
  )
}