import UrlBuilder from '../UrlBuilder'

type StockAnalysisInput = {
  ticker: string
  statement: string
}

interface StatementMapType {
    [key: string]: string
  }

const statementMap: StatementMapType = {
  balanceSheet: 'financials/balance-sheet',
  cashFlow: 'financials/cash-flow-statement',
  income: 'financials',
}

const stockAnalysis = ({ ticker, statement }: StockAnalysisInput): string => {
  const url = new UrlBuilder('StockAnalysis')
  return url.addPath('stocks').addPath(ticker).addPath(statementMap[statement]).build()
}

export default stockAnalysis