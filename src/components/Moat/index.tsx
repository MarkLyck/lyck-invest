import { Tabs, Typography } from 'antd'

import ROIC from './ROIC'
import SalesGrowthRate from './SalesGrowthRate'
import EPSGrowthRate from './EPSGrowthRate'
import EquityGrowthRate from './EquityGrowthRate'
import CashflowGrowthRate from './CashflowGrowthRate'

const { TabPane } = Tabs
const { Title } = Typography

type MoatProps = {
  incomeStatements: any[]
  balanceSheets: any[]
  cashflowStatements: any[]
  keyMetrics: any[]
}

const Moat = (props: MoatProps) => (
  <>
    <Title level={5}>Moat</Title>
    <Tabs defaultActiveKey="1">
      <TabPane tab="ROIC" key="1">
        <ROIC {...props} />
      </TabPane>
      <TabPane tab="Sales growth rate" key="2">
        <SalesGrowthRate {...props} />
      </TabPane>
      <TabPane tab="EPS growth rate" key="3">
        <EPSGrowthRate {...props} />
      </TabPane>
      <TabPane tab="Equity growth rate" key="4">
        <EquityGrowthRate {...props} />
      </TabPane>
      <TabPane tab="Free cashflow growth rate" key="5">
        <CashflowGrowthRate {...props} />
      </TabPane>
    </Tabs>
  </>
)

export default Moat
