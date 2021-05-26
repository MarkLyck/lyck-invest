import { Line } from '@ant-design/charts'

const EquityGrowthChart = ({ data }: any) => {
  let ref: any
  const config = {
    key: 'eps',
    data,
    height: 400,
    xField: 'date',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  }

  return <Line {...config} chartRef={(chartRef: any) => (ref = chartRef)} />
}

export default EquityGrowthChart
