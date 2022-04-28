import React from 'react';
import { useTable } from 'react-table';
import styles from "../TableComponent/TableComponent.module.css";

const Table = ({ columns, data }) => {
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

      return (
        <table cellspacing="0" className={styles.table} {...getTableProps()}>
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