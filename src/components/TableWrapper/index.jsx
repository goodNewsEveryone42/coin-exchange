import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Table from '../TableComponent/Table.component';
import TableNameColumn from "../TableComponent/TableNameColumn";
import TableDateAdvtColumn from "../TableComponent/TableDateAdvtColumn";
import TableCountCoinColumn from "../TableComponent/TableCountCoinColumn";

import TableCell from "../TableComponent/TableCell.component";

const TableWrapper = (props) => {
    const tableData = useSelector((state) => state.tableData.data);
    console.log(tableData)
    const tableDataCell = tableData.map(item => {
        return {
            user: TableCell({component: 'TableCellUser', data: {userName: item.userName}}),
            data: TableCell({component: 'TableCellData', data: {dataOpen: item.createDate}}),
            countCoin: TableCell({component: 'TableCellString', data: {countCoin: item.countCoin}}),
            rate: TableCell({component: 'TableCellString', data: {rate: item.rate}}),
            action: TableCell({component: 'TableCellAction', data: {nameAction: 'Купить'}})
        }
    });
    const data = React.useMemo(
        () => tableDataCell,
        []
      )
    const columns = React.useMemo(
        () => [
            {
              Header: () => TableNameColumn({title: 'Автор объявления'}),
              accessor: 'user', // accessor is the "key" in the data
            },
            {
              Header: () => TableDateAdvtColumn(),
              accessor: 'data',
            },
            {
              Header: () => TableCountCoinColumn(),
              accessor: 'countCoin',
            },
            {
              Header: () => TableNameColumn({title: 'Курс(рублей)'}),
              accessor: 'rate',
            },
            {
                Header: () => TableNameColumn({title: 'Действие'}),
                accessor: 'action',
              },
          ],
          []
      )
    return (
        <div className="main">
            <Table columns={columns} data={data} />
        </div>
    )
}

export default TableWrapper;
