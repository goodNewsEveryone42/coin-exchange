import React from 'react';
import {Card, Title, Text, Button} from "@vkontakte/vkui";

const TableNameColumn = (props) => {
    const { title } = props;

    return (
        <Title level="3">{ title }</Title>
    )
}

export default TableNameColumn;