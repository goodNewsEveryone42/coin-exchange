import React from 'react';
import {Button, FormItem, Text, Title} from "@vkontakte/vkui";
import { useNavigate } from 'react-router-dom';

const DealStartComponent = props => {
        const {handleChangeData, handleSubmit, resultPrice, deal} = props;
    console.log(deal);
    const history = useNavigate();
        return <form onSubmit={e => {
        e.preventDefault();
            history('/');
    }}>
        <FormItem>
            <Title level={"2"}><b>Что дальше?</b></Title>
        </FormItem>
        <FormItem>
            <Text weight={"regular"}>
                {deal?.type === "buy"? " \n" +
                    "переведи <b>{resultPrice}</b> руб по телефону <b>{deal?.phone}</b>\n" +
                    "нажми ниже кнопку Деньги отправлены\n" +
                    "когда твои деньги поступят и продавец подтвердит поступление — тебе зачислятся коины\n" +
                    "\n"
                    : "как только покупатель переведет деньги — тебе придет" +
                    " письмо обязательно подтверди поступление денег, тогда коины будут зачислены покупателю"
                }
            </Text>
        </FormItem>
        <FormItem>
            <Text weight={"regular"}>Сумма для перевода: <b>{resultPrice}</b></Text>
        </FormItem>
        <FormItem>
            <Button stretched={true} size={'l'} type='submit'>{deal?.type === "buy"? "Деньги отправлены": "Все ок, деньги пришли"}</Button>
        </FormItem>
    </form>
}

export default DealStartComponent;