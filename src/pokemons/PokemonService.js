import axios from 'axios'

const API_POKEMONES = 'https://5e94840cf591cb0016d81291.mockapi.io/api/pokemons'

export const getPokemons = async (filtro) => {
    const response = await axios.get(API_POKEMONES)
    if (filtro) {
        if (filtro.id || filtro.name) {
            return response.data.filter((pokemon) => pokemon.id === filtro.id || pokemon.name === filtro.name)
        }
    }
    return response.data
}