import React, {useState, useEffect} from 'react';
import {Card, Title} from "@vkontakte/vkui";
import FormComponent from "./components/Form.component";

const CreateOrderContainer = props => {

    const [data, setData] = useState({
        type: 'buy',
        quantity: 0,
        price: 0
    })

    const handleChangeData = (name, value) => {
        setData({...data, [name]: value});
    }

    const handleSubmit = () => {
        console.log(data)
    }

    return <div className='create-order'>
        <Card>
            <FormComponent handleChangeData={handleChangeData} handleSubmit={handleSubmit} data={data}/>
        </Card>
    </div>
}

export default CreateOrderContainer;
