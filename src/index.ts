import { getData, GetDataParams } from './access' 
import { formatDataFromTable, TableData } from './parse'

export default async (params: GetDataParams): Promise<TableData> => {
  const { ticker, statement } = params
  const result = await getData({ ticker, statement })
  return formatDataFromTable(result)
}
