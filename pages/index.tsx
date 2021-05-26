import Head from 'next/head'
import StockChecker from 'src/components/StockChecker'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lyck Invest</title>
        <meta name="description" content="Rule #1 investing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <StockChecker />
      </main>
    </div>
  )
}
