import { useState } from 'react'
import { Space, Input, Button, Divider } from 'antd'
import { FINANCE_MODELING_BASE_URL, FINANCE_MODELING_PREP_API_KEY } from 'src/common/constants'
import axios from 'axios'

import Profile from './Profile'
import Moat from './Moat'

const LIMIT = 10

const StockChecker = () => {
  const [stockSymbol, setStockSymbol] = useState('')
  const [profile, setProfile]: any[] = useState({})
  const [incomeStatements, setIncomeStatements] = useState([])
  const [cashflowStatements, setCashflowStatements] = useState([])
  const [balanceSheets, setBalanceSheets] = useState([])
  const [keyMetrics, setKeyMetrics] = useState([])
  const onChange = (e: any) => setStockSymbol(e.target.value.toUpperCase())

  const getStockInfo = async () => {
    const stockProfile: any = await axios.get(`${FINANCE_MODELING_BASE_URL}/profile/${stockSymbol}`, {
      params: {
        apikey: FINANCE_MODELING_PREP_API_KEY,
      },
    })
    const stockIncomeStatements: any = await axios.get(`${FINANCE_MODELING_BASE_URL}/income-statement/${stockSymbol}`, {
      params: {
        apikey: FINANCE_MODELING_PREP_API_KEY,
        limit: LIMIT,
      },
    })
    const stockBalanceSheets: any = await axios.get(
      `${FINANCE_MODELING_BASE_URL}/balance-sheet-statement/${stockSymbol}`,
      {
        params: {
          apikey: FINANCE_MODELING_PREP_API_KEY,
          limit: LIMIT,
        },
      }
    )
    const stockCashflowStatements: any = await axios.get(
      `${FINANCE_MODELING_BASE_URL}/cash-flow-statement/${stockSymbol}`,
      {
        params: {
          apikey: FINANCE_MODELING_PREP_API_KEY,
          limit: LIMIT,
        },
      }
    )
    const stockKeyMetrics: any = await axios.get(`${FINANCE_MODELING_BASE_URL}/key-metrics/${stockSymbol}`, {
      params: {
        apikey: FINANCE_MODELING_PREP_API_KEY,
        limit: LIMIT,
      },
    })

    setIncomeStatements(stockIncomeStatements.data.reverse())
    setBalanceSheets(stockBalanceSheets.data.reverse())
    setCashflowStatements(stockCashflowStatements.data.reverse())
    setKeyMetrics(stockKeyMetrics.data.reverse())
    setProfile(stockProfile.data[0])
  }

  return (
    <div>
      <Space>
        <Input placeholder="stock symbol" onChange={onChange} />
        <Button onClick={getStockInfo}>Evaluate</Button>
      </Space>
      <Divider />
      <Profile profile={profile} />
      <Divider />
      <Moat
        incomeStatements={incomeStatements}
        balanceSheets={balanceSheets}
        cashflowStatements={cashflowStatements}
        keyMetrics={keyMetrics}
      />
    </div>
  )
}

export default StockChecker
