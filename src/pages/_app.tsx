import '@/styles/globals.css'
import '@/styles/header.css'
import  '@/styles/app.css'
import type { AppProps } from 'next/app'
import { WordMoverProvider } from '@/Components/WordMover/wordContext2'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="wholeapp">
   <WordMoverProvider>
      <Component {...pageProps} />
      </WordMoverProvider>
      </div>
     
  )
}
