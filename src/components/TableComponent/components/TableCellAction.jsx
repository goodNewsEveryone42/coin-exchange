import React from 'react';
import { Card, Title, Text, CellButton } from "@vkontakte/vkui";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDeal } from '../../../modulesStore/actions/deal';

const TableCellAction = (props) => {
    const { nameAction, type } = props;
    console.log()
    const mockUser = {
        name: 'Артем Крылов',
        phone: '89095858585',
        type: type
    }

    const history = useNavigate();
    const dispatch = useDispatch();

    const openDeal = () => {
        dispatch(setDeal(mockUser));
        history('/deal');
    }

    return (
        <CellButton
         stretched={ true }
         size={'s'}
         onClick={ e => openDeal() }>
             { nameAction }
        </CellButton>
    )
}

export default TableCellAction;