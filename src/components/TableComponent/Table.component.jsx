import React, {useEffect} from 'react';
import { useTable } from 'react-table';
import styles from '../TableComponent/Table.module.scss';

const Table = ({ columns, data, type }) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data,
      });
console.log(type)
      return (
        <table cellSpacing='0' className={styles.table} {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr className={styles.tableRow} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr className={styles.tableRow} {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      )
}

export default Table;
