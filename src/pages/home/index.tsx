import AuthContext from '@/contexts/authContext'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'

const Home = () => {
  const router = useRouter()
  const { email } = useContext(AuthContext)

  useEffect(() => {
    if (email === '') {
      router.push({
        pathname: '/',
        query: {error: 'error' }
      })
    }
  }, [email, router])

  return (
    <div>Esta es la página de inicio :3, bienvenido</div>
  )
}

export default Home
