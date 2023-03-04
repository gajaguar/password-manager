import { ReactNode } from 'react'

type BaseTableBodyProps = {
  data: Array<Array<ReactNode>>
}

const buildRow = (row: Array<ReactNode>) => row.map(node => <td>{node}</td>)

const getRows = (data: Array<Array<ReactNode>>) => (
  data.map(row => (<tr>{ buildRow(row) }</tr>))
)

function BaseTableBody({ data }: BaseTableBodyProps) {
  return <tbody>{ getRows(data) }</tbody>
}

export default BaseTableBody

