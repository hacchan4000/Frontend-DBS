import { Link, useNavigate } from 'react-router-dom'
import { AuthShell } from '../components/auth/AuthShell'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import styles from './AuthForm.module.css'

export function RegisterPage() {
  const navigate = useNavigate()

  return (
    <AuthShell greeting="hello, welcome">
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault()
          navigate('/')
        }}
      >
        <Input label="Name" autoComplete="name" required />
        <Input label="E-mail" type="email" autoComplete="email" required />
        <Input
          label="Password"
          type="password"
          autoComplete="new-password"
          required
        />
        <div className={styles.submitWrap}>
          <Button type="submit" fullWidth>
            Register
          </Button>
        </div>
        <p className={styles.footerText}>
          Already have an account?{' '}
          <Link to="/login" className={styles.footerLink}>
            Log In here
          </Link>
        </p>
      </form>
    </AuthShell>
  )
}