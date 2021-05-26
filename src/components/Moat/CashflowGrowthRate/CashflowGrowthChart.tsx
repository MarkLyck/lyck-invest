import { Line } from '@ant-design/charts'
import { currencyFormatter } from 'src/common/formatters'

const EquityGrowthChart = ({ data }: any) => {
  let ref: any
  const config = {
    key: 'eps',
    data,
    height: 400,
    xField: 'date',
    yField: 'value',
    yAxis: {
      label: {
        formatter: (value: number) => currencyFormatter.format(value),
      },
    },
    tooltip: {
      formatter: (item: { value: number }) => {
        return { name: 'Free cashflow', value: currencyFormatter.format(item.value) }
      },
    },
    point: {
      size: 5,
      shape: 'diamond',
    },
  }

  // @ts-ignore
  return <Line {...config} chartRef={(chartRef: any) => (ref = chartRef)} />
}

export default EquityGrowthChart
