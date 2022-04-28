import React, { useState } from 'react';
import { Icon20ArrowUpOutline } from '@vkontakte/icons';
import {Card, Title, Text, Button, CellButton} from "@vkontakte/vkui";
import styles from './TableComponent.module.scss';

const TableHeaderFilter = (props) => {
    const [isDown, isDownCheck] = useState(false);
    const { title } = props;

    return (
            <CellButton color="black">
                <Title level="3">
                    { title }
                </Title>
                <Icon20ArrowUpOutline />
            </CellButton>
    )
}

export default TableHeaderFilter;