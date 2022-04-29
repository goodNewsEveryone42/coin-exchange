import React, {useState, useEffect} from 'react';
import {Card, Title} from "@vkontakte/vkui";
import FormComponent from "./components/Form.component";
import SuccessComponent from "./components/Success.component";
import RouteTabs from "../../components/RouteTabs";
import {useDispatch, useSelector} from "react-redux";

const CreateOrderContainer = props => {
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)

    const [data, setData] = useState({
        userName: user?.first_name,
        createDate: '',
        rate: 0,
        countCoin: 0,
        type: 'buy'
    })
    const initialData = {
        userName: "Дмитрий Игорев",
        createDate: '2005-08-09T18:31:42+03:3',
        rate: 40,
        countCoin: 120,
        type: 'buy'
    }

    const handleChangeData = (name, value) => {
        setData({...data, [name]: value});
    }

    const handleSubmit = () => {
        console.log(data)
        dispatch({type: "ADD_ORDER", payload: {data: data}})
        setSuccess(true);
    }

    const handleClear = () => {
        setSuccess(false);
        setData(initialData);
    }
    if (success) {
        return <SuccessComponent handleClear={handleClear}/>
    }

    return <>
        <RouteTabs/>
        <div className='create-order'>
            <Card>
                <FormComponent handleChangeData={handleChangeData} handleSubmit={handleSubmit} data={data}/>
            </Card>
        </div>
    </>
}

export default CreateOrderContainer;
