import React from 'react';
import {Button, FormItem, Input, Select, Title} from "@vkontakte/vkui";
import {getUserMock} from "../../../modulesStore/actions/user";
import "../style.scss";

const FormComponent = props => {
    const {handleChangeData, handleSubmit} = props;
    return <form onSubmit={e => {
        e.preventDefault();
        handleSubmit();
    }}>
        <FormItem>
            <Title level={"2"}>Создать объявление</Title>
        </FormItem>
        <FormItem top="Тип объявления">
            <Select
                onChange={e => {
                    handleChangeData('type', e.target.value)
                }}
                options={[
                    {
                        value: "buy",
                        label: "Хочу купить коины",
                    },
                    {
                        value: "sell",
                        label: "Хочу продать коины",
                    },
                ]}
            />
        </FormItem>
        <FormItem top="Сумма коинов">
            <Input placeholder={'Введите число'} type='number' onChange={e => {
                handleChangeData('quantity', e.target.value)
            }}/>
        </FormItem>
        <FormItem top="Курс для обмена">
            <Input placeholder={'По какому курсу хотите купить'} type='number' onChange={e => {
                handleChangeData('price', e.target.value)
            }}/>
        </FormItem>
        <FormItem>
            <Button stretched={true} size={'l'} type='submit'>Опубликовать объявление</Button>
        </FormItem>
    </form>
}

export default FormComponent;
