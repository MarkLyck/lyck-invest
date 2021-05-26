type calculateROICProps = {
  operatingIncome: number
  incomeBeforeTaxRatio: number
  totalStockholdersEquity: number
  totalDebt: number
}

// ROIC = Return On Invested Capital
// NOPAT = Net Operating Profit After Tax

/*
    ROIC is Return on Invested Capital, the single most important number to tell you if a business is being run well or not. 
    The number should be equal to or greater than 10% per year, but the real key is seeing if the ROIC number is going up over time. 
    If it's at the same level or going up, then the business is probably well run. 
    If the ROIC number is going down, it means that the CEO is reinvesting the surplus cash and getting a smaller return on it than in previous years.

    https://www.ruleoneinvesting.com/roic-calculator/
*/

const calculateROIC = ({
  operatingIncome,
  incomeBeforeTaxRatio,
  totalStockholdersEquity,
  totalDebt,
}: calculateROICProps) => {
  const NOPAT = operatingIncome * (1 - incomeBeforeTaxRatio)
  const ROIC = NOPAT / (totalStockholdersEquity - totalDebt)

  return ROIC
}
