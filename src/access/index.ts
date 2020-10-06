import axios from 'axios'
import UrlBuilder, { Statement } from './UrlBuilder'

export type GetDataParams = {
  ticker: string
  statement: Statement,
}

export const getData = async ({ ticker, statement }: GetDataParams): Promise<string> => {
  const url = new UrlBuilder().withTicker(ticker).withStatement(statement).build()
  const result = await axios.get(url)

  return result.data
}
