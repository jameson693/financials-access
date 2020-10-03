import axios from 'axios'
import { paths } from './constants'

export const getData = async (): Promise<string> => {
  console.log('test')
  const result = await axios.get(paths.BASE)

  return result.data
}


