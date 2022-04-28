import React from 'react';
import {Card, Title, Text, Button} from "@vkontakte/vkui";

const TableHeaderText = (props) => {
    const { title } = props;

    return (
        <Text color={"#919399"}>{ title }</Text>
    )
}

export default TableHeaderText;