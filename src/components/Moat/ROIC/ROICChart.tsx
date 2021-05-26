import { Line } from '@ant-design/charts'

const ROICChart = ({ data }: any) => {
  const config = {
    data,
    height: 400,
    xField: 'date',
    yField: 'roic',
    point: {
      size: 5,
      shape: 'diamond',
    },
    annotations: [
      {
        type: 'regionFilter',
        start: ['min', 0.1],
        end: ['max', -1000],
        color: '#F4664A',
      },
      {
        type: 'text',
        position: ['min', 0.1],
        content: '10% ROIC',
        offsetY: -4,
        style: { textBaseline: 'bottom' },
      },
      {
        type: 'line',
        start: ['min', 0.1],
        end: ['max', 0.1],
        style: {
          stroke: 'gray',
          lineDash: [10, 5],
        },
      },
    ],
  }

  return <Line {...config} />
}

export default ROICChart
