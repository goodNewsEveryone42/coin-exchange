import React from 'react';
import {Card, Title, Text, Button} from "@vkontakte/vkui";

const TableHeaderText = (props) => {
    const { title } = props;

    return (
        <Title level="3">{ title }</Title>
    )
}

export default TableHeaderText;