import React, { useState } from 'react';
import { Icon24ArrowUp, Icon24ArrowDownOutline } from '@vkontakte/icons';
import {Card, Title, Text, Button, CellButton} from "@vkontakte/vkui";
import styles from './TableComponent.module.scss';

const TableHeaderFilter = (props) => {
    const [isUp, isUpCheck] = useState(true);
    const { title } = props;

    const getFilterData = () => {
        isUpCheck(!isUp);
    }

    return (
            <CellButton centered after={isUp ? <Icon24ArrowUp fill={"#919399"}/> : <Icon24ArrowDownOutline fill={"#000000"}/>} onClick={ e => getFilterData() }>
                { title } 
            </CellButton>
    )
}

export default TableHeaderFilter;