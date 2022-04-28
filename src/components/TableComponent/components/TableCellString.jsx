import React from 'react';
import {Card, Title, Text, Button} from "@vkontakte/vkui";
import { Icon36CoinsStacks3Outline } from '@vkontakte/icons';
import styles from './TableComponent.module.scss';

const TableCellString = (props) => {
    const {countCoin, rate} = props;
    return (
        <div className={styles.tableCellString}>
            <Icon36CoinsStacks3Outline />
            <Text>{ countCoin || rate }</Text>
        </div>
    )
}

export default TableCellString;