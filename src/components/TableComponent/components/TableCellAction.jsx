import React from 'react';
import {Card, Title, Text, CellButton} from "@vkontakte/vkui";

const TableCellAction = (props) => {
    const { nameAction } = props;
    return (
        <CellButton
         stretched={ true }
         size={'s'}
         onClick={ e => {} }>
             { nameAction }
        </CellButton>
    )
}

export default TableCellAction;