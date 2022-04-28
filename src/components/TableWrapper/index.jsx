import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "../TableComponent/Table.component";
import TableHeader from "../TableComponent/TableHeader.component";
import TableCell from "../TableComponent/TableCell.component";
import styles from "./TableWrapper.module.scss";

const TableWrapper = (props) => {
    const tableData = useSelector((state) => state.tableData.data);
    const { type } = props;

    const actionTitle = {
      buy: 'Купить',
      sell: 'Продать',
      myOrder: 'Подтвердить покупку'
    };


    const tableDataCell = tableData.map(item => {
        return {
            user: TableCell({component: 'TableCellUser', data: {userName: item.userName}}),
            data: TableCell({component: 'TableCellData', data: {dataOpen: item.createDate}}),
            countCoin: TableCell({component: 'TableCellString', data: {countCoin: item.countCoin}}),
            rate: TableCell({component: 'TableCellString', data: {rate: item.rate}}),
            action: TableCell({component: 'TableCellAction', data: {nameAction: actionTitle[type], type: type}})
        }
    });
    const data = React.useMemo(
        () => tableDataCell,
        [type]
      )
    const columns = React.useMemo(
        () => [
            {
              Header: () => TableHeader({component: 'TableHeaderText', data: {title: 'Автор объявления'}}),
              accessor: 'user',
            },
            {
              Header: () => TableHeader({component: 'TableHeaderText', data: {title: 'Дата'}}),
              accessor: 'data',
            },
            {
              Header: () => TableHeader({component: 'TableHeaderText', data: {title: 'Количество(коинов)'}}),
              accessor: 'countCoin',
            },
            {
              Header: () => TableHeader({component: 'TableHeaderText', data: {title: 'Курс(рублей)'}}),
              accessor: 'rate',
            },
            {
                Header: () => TableHeader({component: 'TableHeaderText', data: {title: 'Действие'}}),
                accessor: 'action',
              },
          ],
          []
      )
    return (
        <div className={styles.tableWpapper}>
            <Table columns={columns} data={data} />
        </div>
    )
}

export default TableWrapper;
