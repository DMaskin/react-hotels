export function login(email: string, password: string) {
  return new Promise<{ email: string, password: string }>((resolve) => {
    setTimeout(() => {
        localStorage.setItem("auth", "true");
        localStorage.setItem("email", email);
        resolve({email, password})
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

export function authCheck() {
  const isAuth = !!localStorage.getItem("auth")
  const email = localStorage.getItem("email")
  return {isAuth, email};
}