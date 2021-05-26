import { Typography, Space } from 'antd'
import loadable from '@loadable/component'
const { Text } = Typography
import { calculateAverageGrowthRate } from 'src/tools/calculations'

const BVPSGrowthChart = loadable(() => import('./EquityGrowthChart'))

type MoatProps = {
  incomeStatements: any[]
  balanceSheets: any[]
  keyMetrics: any[]
}

// also called book value or liquidation value
// BVPS = Book value Per Share

const EquityGrowthRate = ({ keyMetrics }: MoatProps) => {
  if (!keyMetrics?.length) return null

  const BVPSYearly = keyMetrics.map((metrics: any) => metrics.bookValuePerShare)
  const averageEquityGrowthRate = calculateAverageGrowthRate({ values: BVPSYearly }) * 100

  const BVPSData = keyMetrics.map((metrics: any) => ({
    date: metrics.date,
    value: metrics.bookValuePerShare,
  }))

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Text>
        The Equity Growth rate (or Book Value Per Share) is the rate at which a company is growing its equity. It is
        important to see that this number is steadily growing over time.
        <br />
        <br />
        Equity is the value of the company, if they sold everything, paid off all debt and took the money that was left.
        <br />
        <br />
        If the business has a positive equity growth rate, it is a good indicator that they have enough money left over
        to grow the business. Whereas if the equity is not growing it could mean that the business is puting it money
        back into just maintaining the business.
        <br />
        <br />A good growth rate is 10% per year, over the last 10 years.
      </Text>
      <Text>
        Avg. Equity growth rate:{' '}
        <b>
          {averageEquityGrowthRate > 0 ? '+' : ''}
          {averageEquityGrowthRate.toFixed(2)}%
        </b>
      </Text>
      <BVPSGrowthChart data={BVPSData} />
    </Space>
  )
}

export default EquityGrowthRate
