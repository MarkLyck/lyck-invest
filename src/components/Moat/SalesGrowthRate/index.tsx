import { Typography, Space } from 'antd'
import loadable from '@loadable/component'
const { Text } = Typography
import { calculateAverageGrowthRate } from 'src/tools/calculations'

const SalesGrowthChart = loadable(() => import('./SalesGrowthChart'))

type MoatProps = {
  incomeStatements: any[]
  balanceSheets: any[]
}

const SalesGrowthRate = ({ incomeStatements, balanceSheets }: MoatProps) => {
  if (!incomeStatements?.length || !balanceSheets?.length) return null

  const revenues = incomeStatements.map((statement) => statement.revenue)
  const averageSalesGrowthRate = calculateAverageGrowthRate({ values: revenues }) * 100

  const sales = incomeStatements.map((statement) => ({
    date: statement.date,
    value: statement.revenue,
  }))

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Text>
        The Sales Growth Rate of a business is the the rate at which it is growing its sales year over year. Sales
        Growth Rate is one of the Big 5 Numbers required to determine whether a company may be a Rule #1 'wonderful
        business'.
        <br />
        <br />A good growth rate is {'>'}= 10% per year, over the last 10 years.
      </Text>
      <Text>
        Avg. Sales growth rate:{' '}
        <b>
          {averageSalesGrowthRate > 0 ? '+' : ''}
          {averageSalesGrowthRate.toFixed(2)}%
        </b>
      </Text>
      <SalesGrowthChart data={sales} />
    </Space>
  )
}

export default SalesGrowthRate
