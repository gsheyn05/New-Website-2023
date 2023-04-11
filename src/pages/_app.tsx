import '@/styles/globals.css'
import '@/styles/header.css'
import type { AppProps } from 'next/app'
import { WordMoverProvider } from '@/Components/More/wordContext2'
export default function App({ Component, pageProps }: AppProps) {
  return (
   <WordMoverProvider>
      <Component {...pageProps} />
    </WordMoverProvider>
     
  )
}
