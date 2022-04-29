import React from 'react';
import DealInfoComponent from "./DealInfo.component";
import {Button, FormItem, Input, Text, Title} from "@vkontakte/vkui";

const DealStartComponent = props => {
    return
        const {handleChangeData, handleSubmit, resultPrice, deal} = props;

        return <form onSubmit={e => {
        e.preventDefault();
        handleSubmit();
    }}>
        <FormItem>
            <Title level={"2"}><b>Что дальше?</b></Title>
        </FormItem>
        <FormItem>
            <Text weight={"regular"}>
                как только покупатель переведет деньги — тебе придет письмо
                обязательно подтверди поступление денег, тогда коины будут зачислены покупателю
            </Text>
        </FormItem>
        <FormItem>
            <Text weight={"regular"}>Сумма для перевода: <b>{resultPrice}</b></Text>
        </FormItem>
        <FormItem>
            <Button stretched={true} size={'l'} type='submit'>Все ок, деньги пришли</Button>
        </FormItem>
    </form>
}

export default DealStartComponent;