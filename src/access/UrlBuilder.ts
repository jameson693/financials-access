import { paths } from './constants'

const statementMap = {
  BalanceSheet: paths.BALANCE_SHEET,
  CashFlow: paths.CASH_FLOW_STATEMENT,
  Income: paths.INCOME_STATEMENT
}

export enum Statement {
  BalanceSheet = 'BalanceSheet',
  CashFlow = 'CashFlow',
  Income = 'Income'
}

export default class UrlBuilder {
  url: string

  constructor() {
    this.url = paths.BASE
  }

  build(): string {
    return this.url
  }

  withTicker(ticker: string): UrlBuilder {
    this.url = `${this.url}/${ticker}`
    return this
  }

  withStatement(statement: Statement): UrlBuilder {
    this.url = `${this.url}/${statementMap[statement]}`
    return this
  }
}