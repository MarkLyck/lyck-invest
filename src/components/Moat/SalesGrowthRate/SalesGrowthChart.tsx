import { Line } from '@ant-design/charts'
import { currencyFormatter } from 'src/common/formatters'

const SalesGrowthChart = ({ data }: any) => {
  let ref: any

  const config = {
    key: 'sales',
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
        return { name: 'Net Revenue', value: currencyFormatter.format(item.value) }
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

export default SalesGrowthChart
