//aca vamos a estar especificando como se modifica el estado
import { alertConstants } from './alertConstants'

const initialState = {
    show: true,
    type: "success",
    msg: "Redux me vuelve loco"
}

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case alertConstants.success:
            return {
                show: true,
                type: "success",
                msg: action.msg
            }

        case alertConstants.error:
            return {
                show: true,
                type: "danger",
                msg: action.msg
            }

        case alertConstants.clear:
            return initialState

        default:
            return state
    }
}
