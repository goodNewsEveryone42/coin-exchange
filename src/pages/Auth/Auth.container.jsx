import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getUser, getUserMock} from "../../modulesStore/actions/user";
import {Card, Title, Text, Button} from "@vkontakte/vkui";
import './style.scss';

const AuthContainer = props => {
    const dispatch = useDispatch();
    return <div className='auth'>
        <Card>
            <div>
                <Title className='auth__card' level="2">Необходима авторизация</Title>
                <Text weight="regular" style={{marginBottom: 16}}>Начните обмениваться коинами</Text>
                <Button stretched={true} size={'l'} onClick={e => {
                    //getUser();
                    getUserMock(dispatch, {
                        id: 123,
                        name: 'Test',
                        lastName: 'Bla',
                        quantity: 12,
                        price: null,
                        date: new Date()
                    })
                }}>Авторизоваться</Button>
            </div>
        </Card>
    </div>;
}

export default AuthContainer;
