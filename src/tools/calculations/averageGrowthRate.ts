type calculateAverageGrowthRateProps = {
  values: number[]
}

export const calculateAverageGrowthRate = ({ values }: calculateAverageGrowthRateProps) => {
  const growthRatesPerYear = values.map((value, i) => {
    if (i === 0) return 0
    return value / values[i - 1] - 1
  })
  growthRatesPerYear.shift() // remove first year as it's always 0

  const averageGrowthRate = growthRatesPerYear.reduce((acc, curr) => acc + curr, 0) / growthRatesPerYear.length

  return averageGrowthRate
}
