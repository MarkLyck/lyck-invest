import { Typography, Space, Divider } from 'antd'
import loadable from '@loadable/component'
import { calculateROIC } from 'src/tools/calculations'

const ROICChart = loadable(() => import('./ROICChart'))

const { Text } = Typography

type MoatProps = {
  incomeStatements: any[]
  balanceSheets: any[]
}

// const columns = [
//   {
//     title: 'date',
//     dataIndex: 'date',
//     key: 'date',
//   },
//   {
//     title: 'ROIC',
//     dataIndex: 'roic',
//     key: 'roic',
//     render: (value: number) => <Text>{(value * 100).toFixed(2)}%</Text>,
//   },
// ]

const ROIC = ({ incomeStatements, balanceSheets }: MoatProps) => {
  if (!incomeStatements?.length || !balanceSheets?.length) return null

  const ROICDataSource = incomeStatements.map((incomeStatement, i) => {
    if (!balanceSheets[i]) {
      return {
        date: incomeStatement.date,
        roic: NaN,
      }
    }

    return {
      date: incomeStatement.date,
      roic: calculateROIC({
        operatingIncome: incomeStatement.operatingIncome,
        incomeBeforeTaxRatio: incomeStatement.incomeBeforeTaxRatio,
        totalStockholdersEquity: balanceSheets[i].totalStockholdersEquity,
        totalDebt: balanceSheets[i].totalDebt,
      }),
    }
  })

  const average5YearROIC: any =
    ROICDataSource.filter((_, i) => i < 5).reduce((acc: number, curr: any) => {
      return acc + curr.roic
    }, 0) / 5

  const average10YearROIC: any =
    ROICDataSource.filter((_, i) => i < 10).reduce((acc: number, curr: any) => {
      return acc + curr.roic
    }, 0) / 10

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Text>
        ROIC is <b>Return on Invested Capital</b>, the single most important number to tell you if a business is being
        run well or not. The number should be equal to or greater than 10% per year, but the real key is seeing if the
        ROIC number is going up over time. If it's at the same level or going up, then the business is probably well
        run. If the ROIC number is going down, it means that the CEO is reinvesting the surplus cash and getting a
        smaller return on it than in previous years.
      </Text>
      <Divider />
      <ROICChart data={ROICDataSource} />
      {ROICDataSource.length >= 5 && <Text>Average ROIC (5 year): {(average5YearROIC * 100).toFixed(2)}%</Text>}
      {ROICDataSource.length >= 10 && <Text>Average ROIC (10 year): {(average10YearROIC * 100).toFixed(2)}%</Text>}
      {/* <Table dataSource={ROICDataSource} columns={columns} pagination={false} /> */}
    </Space>
  )
}

export default ROIC
