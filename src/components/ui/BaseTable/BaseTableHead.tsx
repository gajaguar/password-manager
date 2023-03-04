
import { ReactNode } from 'react'

type BaseTableProps = { data: Array<ReactNode> }

function BaseTableHead({ data }: BaseTableProps) {
  const headers = data.map(node => <th>{ node }</th>)
  return <tr>{ headers }</tr>
}

export default BaseTableHead

