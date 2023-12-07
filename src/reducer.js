const initialState = { counter: 0  };

const reducer = (state= initialState, action) =>{
    if (action.type === 'INC'){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'DEC'){
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === 'RND'){
        return {
            ...state,
            counter: state.counter * action.payload
        }
    }
    return state;
}

export default reducer;