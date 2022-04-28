const initialState = {
    data: [
            {
            userName: "Дмитрий Игорев",
            createDate: '2005-08-09T18:31:42+03:3',
            rate: 40,
            countCoin: 120
            },
            {
                userName: "Игорь Дмитриев",
                createDate: '2005-08-09T18:31:42+03:3',
                rate: 40,
                countCoin: 40
            },
            {
                userName: "Кирилл Васильев",
                createDate: '2005-08-09T18:31:42+03:3',
                rate: 40,
                countCoin: 90
            },
            {
                userName: "Василий Кириллов",
                createDate: '2005-08-09T18:31:42+03:3',
                rate: 40,
                countCoin: 80
            },
            {
                userName: "Дмитрий Игорев",
                createDate: '2005-08-09T18:31:42+03:3',
                rate: 40,
                countCoin: 120
                },
                {
                    userName: "Игорь Дмитриев",
                    createDate: '2005-08-09T18:31:42+03:3',
                    rate: 40,
                    countCoin: 40
                },
                {
                    userName: "Кирилл Васильев",
                    createDate: '2005-08-09T18:31:42+03:3',
                    rate: 40,
                    countCoin: 90
                },
                {
                    userName: "Василий Кириллов",
                    createDate: '2005-08-09T18:31:42+03:3',
                    rate: 40,
                    countCoin: 80
                },
                {
                    userName: "Игорь Дмитриев",
                    createDate: '2005-08-09T18:31:42+03:3',
                    rate: 40,
                    countCoin: 40
                },
                {
                    userName: "Кирилл Васильев",
                    createDate: '2005-08-09T18:31:42+03:3',
                    rate: 40,
                    countCoin: 90
                },
                {
                    userName: "Василий Кириллов",
                    createDate: '2005-08-09T18:31:42+03:3',
                    rate: 40,
                    countCoin: 80
                },
        ]
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state, ...action.payload.data
            }
        default:
            return state;
    }
}