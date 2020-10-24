import { getData, GetDataParams } from './access' 
import { formatDataFromTable } from './parse'

const run = async (params: GetDataParams): Promise<string[][]> => {
  const { ticker, statement } = params
  const result = await getData({ ticker, statement })
  return formatDataFromTable(result)
}

export default run