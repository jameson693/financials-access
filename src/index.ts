import { parse, HTMLElement } from 'node-html-parser' 
import { getData } from './access' 
import { formatDataFromTable } from './parse'

const res = getData().then((result: string) => {
//   console.log(result)
  
  formatDataFromTable(result)

})
