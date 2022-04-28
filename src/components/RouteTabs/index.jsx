import React, {useEffect, useState} from "react";
import {Tabs, TabsItem, Button} from "@vkontakte/vkui";
import { Icon24Add } from '@vkontakte/icons';
import {useNavigate} from "react-router-dom";
import "./style.scss";

const RouteTabs = props => {
    const history = useNavigate();

    return <div className={"tabsWrap"}>
        <Tabs>
            <TabsItem
                onClick={() => {
                    history('/');
                }}
                selected={window.location.pathname === "/"}
            >
                Купить
            </TabsItem>
            <TabsItem
                onClick={() => {
                    history('/sell');
                }}
                selected={window.location.pathname === "/sell"}
            >
                Продать
            </TabsItem>
            <TabsItem
                onClick={() => {
                    history('/myOrder')
                }}
                selected={window.location.pathname === "/myOrder"}
            >
                Мои сделки
            </TabsItem>
        </Tabs>
        <Button
            onClick={() => {
                history('/create');
            }}
            before={<Icon24Add />}
            size={"l"}
        >
            {"Создать обьявление"}
        </Button>
    </div>
}

export default RouteTabs;