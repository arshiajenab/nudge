// app/signin/page.jsx
'use client'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false, // handle redirect manually
    })

    if (res?.error) {
      setError(res.error)
      setLoading(false)
      return
    }

    router.push('/panel')
  }

  return (
    <div className="signin-card">
      <div className="signin-logo">
        <div className="signin-logo-icon">✦</div>
        Nudge
      </div>

      <h2>Welcome back</h2>
      <p className="signin-sub">Sign in to save your suggestions</p>

      {/* google */}
      <button
        className="oauth-btn oauth-google"
        onClick={() => signIn('google', { callbackUrl: '/panel' })}
      >
        Continue with Google
      </button>

      <div className="divider-or">or</div>

      {/* error message */}
      {error && (
        <p style={{ color: '#ff6eb0', fontSize: '13px', marginBottom: '12px', textAlign: 'center' }}>
          {error}
        </p>
      )}

      {/* credentials form */}
      <input
        className="input-field"
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="input-field"
        type="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button
        className="signin-btn"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Signing in...' : 'Sign in →'}
      </button>

      <div className="signin-footer">
        Don&#39;t have an account? <a href="/register">Sign up free</a>
      </div>
    </div>
  )
}