import { Typography, Space } from 'antd'
import loadable from '@loadable/component'
const { Text } = Typography
import { calculateAverageGrowthRate } from 'src/tools/calculations'

const EpsGrowthChart = loadable(() => import('./EpsGrowthChart'))

type MoatProps = {
  incomeStatements: any[]
  balanceSheets: any[]
}

const SalesGrowthRate = ({ incomeStatements, balanceSheets }: MoatProps) => {
  if (!incomeStatements?.length || !balanceSheets?.length) return null

  const EPSPerYear = incomeStatements.map((statement) => statement.eps)
  const averageEPSGrowthRate = calculateAverageGrowthRate({ values: EPSPerYear }) * 100

  const EPSData = incomeStatements.map((statement) => ({
    date: statement.date,
    value: statement.eps,
  }))

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Text>
        EPS stands for Earnings per Share. This tells us how much the business is profeting per share of ownership.
        <br />
        <br />A good growth rate is 10% per year, over the last 10 years.
      </Text>
      <Text>
        Avg. EPS growth rate:{' '}
        <b>
          {averageEPSGrowthRate > 0 ? '+' : ''}
          {averageEPSGrowthRate.toFixed(2)}%
        </b>
      </Text>
      <EpsGrowthChart data={EPSData} />
    </Space>
  )
}

export default SalesGrowthRate
