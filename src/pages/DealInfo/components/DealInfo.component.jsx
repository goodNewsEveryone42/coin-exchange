import React from 'react';
import {Button, FormItem, Input, Text, Title} from "@vkontakte/vkui";
import "../style.scss"

const DealInfoComponent = props => {
    const {handleChangeData, handleSubmit,handleStartDeal, resultPrice, deal} = props;

    return <form onSubmit={e => {
        e.preventDefault();
        handleStartDeal();

    }}>
        <FormItem>
            <Title level={"2"}>{deal?.type === "buy"? "Покупка": "Продажа"} коинов у пользователя <b className={"NameUserDeal"}>{deal?.name}</b></Title>
        </FormItem>
        <FormItem>
            <Title level={"4"}>Условия сделки</Title>
        </FormItem>
        <div className={"inputField"}>
            <FormItem top="Сумма коинов">
                <Input placeholder={'Введите число'} type='number' onChange={e => {
                    handleChangeData('quantity', e.target.value)
                }}/>
            </FormItem>
            <FormItem top="Курс для обмена">
                <Input placeholder={'Введите число'} type='number' onChange={e => {
                    handleChangeData('price', e.target.value)
                }}/>
            </FormItem>
        </div>
        <FormItem>
            <Text weight={"regular"}>Сумма для перевода: <b>{resultPrice}</b></Text>
        </FormItem>
        <FormItem>
            <Text weight={"regular"}>Номер телефона для перевода: <b>{deal?.phone}, {deal?.name}</b></Text>
        </FormItem>
        <FormItem>
            <Button stretched={true} size={'l'} type='submit'>Начать сделку</Button>
        </FormItem>
    </form>
}

export default DealInfoComponent;