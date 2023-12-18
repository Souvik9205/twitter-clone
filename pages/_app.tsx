import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import { LayoutRouter } from 'next/dist/server/app-render/entry-base'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Modal  /> 
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  )
}
