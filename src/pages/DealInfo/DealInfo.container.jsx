import React, {useEffect, useState} from 'react';
import {Button, Card, FormItem, Input, Select, Title} from "@vkontakte/vkui";
import DealInfoComponent from "./components/DealInfo.component";
import {useSelector} from "react-redux";

const DealInfoContainer = props => {
    const [data, setData] = useState({
        type: 'buy',
        quantity: 0,
        price: 0
    })
    const [resultPrice, setResultPrice] = useState(0);
    //const user = useSelector(state => state.user);
    /*const deal = useSelector(state => state.deal);*/
    const deal = {
        phone: "893493943",
        type: "Покупка",
        name: "Олег"
    }
    const handleSubmit = () => {
        console.log(data)
    }

    useEffect(() => {
        setResultPrice(+data.quantity*+data.price)
    }, [data.quantity, data.price])

    const handleChangeData = (name, value) => {
        setData({...data, [name]: value});
    }


    return <div className='create-order'>
        <Card>
            <DealInfoComponent handleChangeData={handleChangeData} handleSubmit={handleSubmit}  resultPrice={resultPrice} deal={deal} data={data}/>
        </Card>
    </div>
}


export default DealInfoContainer;