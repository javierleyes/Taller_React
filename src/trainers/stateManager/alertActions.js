import { alertConstants } from './alertConstants'

export const success = (msg) => {
    return {
        type: alertConstants.success,
        msg
    }
}

export const error = (msg) => {
    return {
        type: alertConstants.error,
        msg
    }
}

export const clear = () => {
    return {
        type: alertConstants.clear
    }
}
