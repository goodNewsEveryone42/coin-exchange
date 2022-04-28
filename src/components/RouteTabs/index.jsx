import React, {useEffect, useState} from "react";
import {Tabs, TabsItem} from "@vkontakte/vkui";
import {useNavigate} from "react-router-dom";

const RouteTabs = props => {
    const history = useNavigate();

    return <>
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
    </>
}

export default RouteTabs;