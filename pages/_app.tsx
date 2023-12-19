import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { LayoutRouter } from 'next/dist/server/app-render/entry-base'
import LoginModal from '@/components/Modals/LoginModal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoginModal />
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  )
}
