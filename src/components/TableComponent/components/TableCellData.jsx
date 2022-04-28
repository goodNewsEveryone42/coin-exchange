import React from 'react';
import {Card, Title, Text, Button} from "@vkontakte/vkui";

const TableCellData = (props) => {
    const { dataOpen } = props;

    return (
        <Text>{ dataOpen }</Text>
    )
}

export default TableCellData;