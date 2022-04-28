import React, {useState, useEffect} from 'react';
import {Card, Title} from "@vkontakte/vkui";
import FormComponent from "./components/Form.component";
import SuccessComponent from "./components/Success.component";

const CreateOrderContainer = props => {
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState({
        type: 'buy',
        quantity: 0,
        price: 0
    })
    const initialData = {
        type: 'buy',
        quantity: 0,
        price: 0
    }

    const handleChangeData = (name, value) => {
        setData({...data, [name]: value});
    }

    const handleSubmit = () => {
        console.log(data)
        setSuccess(true);
    }

    const handleClear = () => {
        setSuccess(false);
        setData(initialData);
    }
    if(success){
        return <SuccessComponent handleClear={handleClear}/>
    }

    return <div className='create-order'>
        <Card>
            <FormComponent handleChangeData={handleChangeData} handleSubmit={handleSubmit} data={data}/>
        </Card>
    </div>
}

export default CreateOrderContainer;
