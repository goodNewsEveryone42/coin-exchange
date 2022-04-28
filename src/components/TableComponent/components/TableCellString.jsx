import React from 'react';
import {Card, Title, Text, Button} from "@vkontakte/vkui";

const TableCellString = (props) => {
    const {countCoin, rate} = props;
    return (
        <Text>{ countCoin || rate }</Text>
    )
}

export default TableCellString;