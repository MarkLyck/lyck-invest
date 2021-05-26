import { Typography, Space } from 'antd'
import loadable from '@loadable/component'
const { Text } = Typography
import { calculateAverageGrowthRate } from 'src/tools/calculations'

const BVPSGrowthChart = loadable(() => import('./CashflowGrowthChart'))

type MoatProps = {
  incomeStatements: any[]
  balanceSheets: any[]
  cashflowStatements: any[]
  keyMetrics: any[]
}

const CashflowGrowthRate = ({ cashflowStatements }: MoatProps) => {
  if (!cashflowStatements?.length) return null

  const CashflowYearly = cashflowStatements.map((metrics: any) => metrics.freeCashFlow)
  const averageCashflowGrowthRate = calculateAverageGrowthRate({ values: CashflowYearly }) * 100

  const operatingCashflowData = cashflowStatements.map((metrics: any) => ({
    date: metrics.date,
    value: metrics.freeCashFlow,
  }))

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Text>
        The Operating Cash Flow Growth Rate (aka Cash Flow From Operations growth rate) is the long term rate of growth
        of operating cash, the money that is actually coming into the bank from business operations. This can be
        substantially different than EPS since it is real money (as opposed to earnings which can be somewhat
        theoretical). Knowing the growth rate helps you determine if the trend of 'operating cash' within a company is
        good enough to make the business 'wonderful' by Rule #1 standards.
        <br />
        <br />A good growth rate is 10% per year, over the last 10 years.
      </Text>
      <Text>
        Avg. Operating Cashflow growth rate:{' '}
        <b>
          {averageCashflowGrowthRate > 0 ? '+' : ''}
          {averageCashflowGrowthRate.toFixed(2)}%
        </b>
      </Text>
      <BVPSGrowthChart data={operatingCashflowData} />
    </Space>
  )
}

export default CashflowGrowthRate
