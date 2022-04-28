import React from 'react';
import {Card, Title, Text, Button} from "@vkontakte/vkui";

const TableCellAction = (props) => {
    const { nameAction } = props;
    return (
        <Button
         stretched={ true }
         size={'s'}
         onClick={ e => {} }>
             { nameAction }
        </Button>
    )
}

export default TableCellAction;