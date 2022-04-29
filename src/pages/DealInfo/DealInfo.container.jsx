import React, {useEffect, useState} from 'react';
import {Button, Card, FormItem, Input, Select, Title} from "@vkontakte/vkui";
import DealInfoComponent from "./components/DealInfo.component";
import {useSelector} from "react-redux";
import DealStartComponent from "./components/DealStart.component";

import { useNavigate } from 'react-router-dom';


const DealInfoContainer = props => {
    const [data, setData] = useState({
        type: 'buy',
        quantity: 0,
        price: 0
    })
    const [resultPrice, setResultPrice] = useState(0);
    const history = useNavigate();
    const [startDeal, setStartDeal] = useState(false);
    //const user = useSelector(state => state.user);
    const deal = useSelector(state => state.deal);

    const handleSubmit = () => {
        //dispatch(startDeal(mockUser));
        history('/deal');
        console.log(data)
    }

    const handleStartDeal = () => {
        //dispatch(startDeal(mockUser));
        setStartDeal(true);
        console.log(data)
    }

    useEffect(() => {
        setResultPrice(+data.quantity*+data.price)
    }, [data.quantity, data.price])

    const handleChangeData = (name, value) => {
        setData({...data, [name]: value});
    }

    if(deal?.start) {
        return <div className='start-order'>
            <Card>
                <DealStartComponent handleChangeData={handleChangeData} handleSubmit={handleSubmit} handleStartDeal={handleStartDeal} resultPrice={resultPrice} deal={deal} data={data}/>
            </Card>
        </div>
    }

    return <div className='create-order'>
        <Card>
            <DealInfoComponent handleChangeData={handleChangeData} handleSubmit={handleSubmit} handleStartDeal={handleStartDeal}  resultPrice={resultPrice} deal={deal} data={data}/>
        </Card>
    </div>
}


export default DealInfoContainer;