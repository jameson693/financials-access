import { parse, HTMLElement } from 'node-html-parser'

const filterEmpty = (item: string) => item && item.length

export const formatDataFromTable = (html: string): string[][] => {
  const root = parse(html)
  const table: HTMLElement = root.querySelector('#fintable')
  const columnHeaders = table.querySelectorAll('th')
  const headers = columnHeaders.map(header => header.text.trim()).filter(filterEmpty)
  const [ , ...tableRows ] = table.querySelectorAll('tr')
  const result = Array.from(Array(tableRows.length)).map((_, index) => {
    return [
      ...tableRows[index].querySelectorAll('td').map(row => row.text.trim()).filter(filterEmpty)
    ]
  })

  return  [ headers, ...result ]
}