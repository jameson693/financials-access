import axios from 'axios'
import { paths } from './constants'
import UrlBuilder, { Statement } from './UrlBuilder'

export const getData = async (): Promise<string> => {
  console.log('test')
  const url = new UrlBuilder().withTicker('MSFT').withStatement(Statement.Income).build()
  const result = await axios.get(url)

  return result.data
}


