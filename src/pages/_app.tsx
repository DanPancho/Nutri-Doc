import AuthContext from '@/contexts/authContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [email, setEmail] = useState('');
  return (
    <AuthContext.Provider value={{ email , setEmail}}>
      <Component {...pageProps} />
    </AuthContext.Provider>

  ) 
}
