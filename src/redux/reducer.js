import reduxTypeAction from "../container/redux.type.action";

const initialState = { count: 0 };
const rootReducer = (state = initialState, action) => {
    console.log('action', action)
    switch (action.type) {
        case reduxTypeAction.INCREMENT:
            return { ...state, count: state.count + 1 };
        case reduxTypeAction.DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            console.log('run at here increment')
            return state;
    }
}

export default rootReducer;