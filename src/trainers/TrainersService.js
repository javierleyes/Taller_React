import axios from 'axios'
import { store } from './stateManager/store'
import { error, success } from './stateManager/alertActions'

const API_TRAINERS = 'https://5e94840cf591cb0016d81291.mockapi.io/api/trainers'

export const getTrainers = async () => {
    try {
        const response = await axios.get(API_TRAINERS)
        return response.data
    } catch{
        store.dispatch(error("No se pudo obtener la lista de entrenadores"))
    }
}

export const agregar = async (trainer) => {
    console.log("agregar", trainer)
    try {
        delete trainer.id
        await axios.post(API_TRAINERS, trainer)
        store.dispatch(success(`Se agrego bien a ${trainer.name}`))
    } catch{
        store.dispatch(error("No se pudo agregar al entrenador"))
    }
}

export const editar = async (trainer) => {
    console.log("editar", trainer)
    try {
        await axios.put(API_TRAINERS + `/${trainer.id}`, trainer)
        store.dispatch(success(`Se edito bien a ${trainer.name}`))
    } catch{
        store.dispatch(error("No se pudo editar al entrenador"))
    }
}

export const eliminar = async (trainer) => {
    console.log("eliminar", trainer)
    try {
        await axios.delete(API_TRAINERS + `/${trainer.id}`)
        store.dispatch(success(`Se agrego bien a ${trainer.name}`))
    } catch{
        store.dispatch(error("No se pudo eliminar al entrenador"))

    }
}