export function login(credentials: { email: string; password: string }) {
  return new Promise<{ email: string; password: string }>((resolve) => {
    setTimeout(() => {
      const { email, password } = credentials
      localStorage.setItem("auth", "true")
      localStorage.setItem("email", email)
      resolve({ email, password })
    }, 500)
  })
}

export function logout() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      localStorage.removeItem("auth")
      localStorage.removeItem("email")
      resolve()
    }, 500)
  })
}

export function checkAuth() {
  const isAuth = !!localStorage.getItem("auth") ?? false
  const email = localStorage.getItem("email") ?? "none-email"
  return { isAuth, email }
}
