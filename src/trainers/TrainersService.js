import axios from 'axios'

const API_TRAINERS = 'https://5e94840cf591cb0016d81291.mockapi.io/api/trainers'

export const getTrainers = async () => {
    const response = await axios.get(API_TRAINERS)
    return response.data
}

export const agregar = async (trainer) => {
    console.log("agregar", trainer)
    delete trainer.id
    await axios.post(API_TRAINERS, trainer)
}

export const editar = async (trainer) => {
    console.log("editar", trainer)
    await axios.put(API_TRAINERS+`/${trainer.id}`, trainer)
}

export const eliminar = async (trainer) => {
    console.log("eliminar", trainer)
    await axios.delete(API_TRAINERS+`/${trainer.id}`)
}