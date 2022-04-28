import React from "react";
import {Button, Text} from "@vkontakte/vkui";
import {Icon56MoneyTransferOutline} from '@vkontakte/icons';
import {useNavigate} from "react-router-dom";

const SuccessComponent = props => {
    const {handleClear} = props;
    const history = useNavigate();

    return <div className={"successOrderWrap"}>
            <Icon56MoneyTransferOutline fill={"#5c9ce6"}/>
        <Text weight="medium">
            Спасибо! Ваше объявление будет опубликовано в течении суток
        </Text>
        <Button
            onClick={() => {
                handleClear();
            }}
            size={"l"}
        >
            {"Создать ещё одно объявление"}
        </Button>
        <Button
            onClick={() => {
                history('/');
            }}
            size={"l"}
        >
            {"Вернуться на главную страницу"}
        </Button>
    </div>
}

export default SuccessComponent;