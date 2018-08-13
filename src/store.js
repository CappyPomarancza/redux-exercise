const ADD = 'ADD'
const SUB = 'SUB'
const RESET = 'RESET'



export const add = (number = 1) => (
    {
        type: 'ADD',
        number: number
    }
)

export const sub = (number = 1) => (
    {
        type: 'SUB',
        number: number
    }
)
export const reset = () => (
    {
        type: 'RESET'
    }
)

export const INITIAL_STATE = {
    counterValue: 99
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD:
                return {
                    ...state,
                    counterValue: state.counterValue + action.number
                }



            // return Object.assign(
            //     {},
            //     state,
            //     {
            //         counterValue: state.counterValue + 1
            //     });
        case SUB:
            return {
                ...state,
                counterValue: state.counterValue - action.number
            };
        case RESET:
            return {
                ...state,
                counterValue: state.counterValue = 0
            };
        default:
            return state
    }
}
export default reducer