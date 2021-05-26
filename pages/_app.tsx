import type { AppProps } from 'next/app'
import Layout from 'src/components/Layout'
import 'antd/dist/antd.css'

function Application({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Application
