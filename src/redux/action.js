import reduxTypeAction from "../container/redux.type.action";

const action = {
    INCREAMENT: () => ({ type: reduxTypeAction.INCREMENT }),
    DECINCREAMENT: () => ({ type: reduxTypeAction.DECREMENT }),
}
export default action;