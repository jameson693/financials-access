import { parse, HTMLElement } from 'node-html-parser'

interface TableData {
    [key: string]: string[]
}

export const formatDataFromTable = (html: string): TableData => {
  const root = parse(html)
  const table: HTMLElement = root.querySelector('#fintable')
  const columnHeaders = table.querySelectorAll('th')
  const headers = columnHeaders.map(header => header.text.trim())

  const [ , ...tableRows ] = table.querySelectorAll('tr')
  const rowTitles = tableRows.map(row => row.firstChild.text)

  const rowData = tableRows.reduce((acc, currentRow, index) => {
    return {
      ...acc,
      [rowTitles[index]]: currentRow.querySelectorAll('td').map(row => row.text)
    }
  }, { headers })

  return rowData
}