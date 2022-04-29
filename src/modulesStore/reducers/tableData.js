const initialState = {
    data: [
            {
            userName: "Дмитрий Игорев",
            createDate: '2005-08-09T18:31:42+03:3',
            rate: 40,
            countCoin: 120,
                type: 'buy'
            },
            {
                userName: "Игорь Дмитриев",
                createDate: '2005-08-09T18:31:42+03:3',
                rate: 40,
                countCoin: 40,
                type: 'sell'
            },
            {
                userName: "Кирилл Васильев",
                createDate: '2005-08-09T18:31:42+03:3',
                rate: 40,
                countCoin: 90,
                type: 'sell'
            },
            {
                userName: "Василий Кириллов",
                createDate: '2005-08-09T18:31:42+03:3',
                rate: 40,
                countCoin: 80,
                type: 'buy'
            },
            {
                userName: "Дмитрий Игорев",
                createDate: '2005-08-09T18:31:42+03:3',
                rate: 40,
                countCoin: 120,
                type: 'sell'
                },
                {
                    userName: "Игорь Дмитриев",
                    createDate: '2005-08-09T18:31:42+03:3',
                    rate: 40,
                    countCoin: 40,
                    type: 'sell'
                },
                {
                    userName: "Кирилл Васильев",
                    createDate: '2005-08-09T18:31:42+03:3',
                    rate: 40,
                    countCoin: 90,
                    type: 'sell'
                },
                {
                    userName: "Василий Кириллов",
                    createDate: '2005-08-09T18:31:42+03:3',
                    rate: 40,
                    countCoin: 80,
                    type: 'sell'
                },
                {
                    userName: "Игорь Дмитриев",
                    createDate: '2005-08-09T18:31:42+03:3',
                    rate: 40,
                    countCoin: 40,
                    type: 'sell'
                },
                {
                    userName: "Кирилл Васильев",
                    createDate: '2005-08-09T18:31:42+03:3',
                    rate: 40,
                    countCoin: 90,
                    type: 'sell'
                },
                {
                    userName: "Василий Кириллов",
                    createDate: '2005-08-09T18:31:42+03:3',
                    rate: 40,
                    countCoin: 80,
                    type: 'sell'
                },
        ]
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_ORDER":
            return {
                ...state, data: [...state.data, action.payload.data]
            }
        default:
            return state;
    }
}