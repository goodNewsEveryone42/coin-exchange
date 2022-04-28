import React from 'react';
import {Card, Title, Text, Button} from "@vkontakte/vkui";
import TableCellData from './components/TableCellData';
import TableCellUser from './components/TableCellUser';
import TableCellString from './components/TableCellString';
import TableCellAction from './components/TableCellAction';

const TableCell = (props) => {
    const components = {
        TableCellString: TableCellString,
        TableCellUser: TableCellUser,
        TableCellData: TableCellData,
        TableCellAction: TableCellAction
      };

    console.log(props);

    return (
        <div className='tableCell'>
            { React.createElement(components[props.component], {...props.data}) }
        </div>
    )
}

export default TableCell;