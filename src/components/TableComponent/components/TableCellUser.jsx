import React from 'react';
import {Card, Title, Text, Button} from "@vkontakte/vkui";

const TableCellUser = (props) => {
    const { userName } = props;
    return (
        <div>
        <Text>{ userName }</Text>
        </div>
    )
}

export default TableCellUser;