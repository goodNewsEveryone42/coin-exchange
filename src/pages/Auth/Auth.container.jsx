import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getUser, getUserMock} from "../../modulesStore/actions/user";
import {Card, Title, Text, Button} from "@vkontakte/vkui";
import './style.scss';
import {useNavigate} from "react-router-dom";

const AuthContainer = props => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return <div className='auth'>
        <Card>
            <div>
                <Title className='auth__card' level="2">Необходима авторизация</Title>
                <Text weight="regular" style={{marginBottom: 16}}>Начните обмениваться коинами</Text>
                <Button stretched={true} size={'l'} href='https://sys.mail.ru/oauth2/authorize/?client_id=bbccb44e9b864ecc997afa141628879f&scope=self_profile&response_type=code&state=random_string'>Авторизоваться</Button>
            </div>
        </Card>
    </div>;
}

export default AuthContainer;
