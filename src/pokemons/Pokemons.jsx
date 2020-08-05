import React, { useState, useEffect } from 'react'
import { Table, Image, Spinner } from 'react-bootstrap'
import { getPokemons } from './PokemonService'
import PokeFiltro from './PokeFiltro'

const Pokemons = () => {

    const [pokemons, setPokemons] = useState([])

    // (viejo) componentDidMount === (nuevo) useEffect
    useEffect(() => {
        getPokemonsAfterToRender()
    }, [])

    const getPokemonsAfterToRender = async (filtro) => {
        setCargando(true)
        setErrorGeneral("")

        try {
            const pokemonsResponse = await getPokemons(filtro)
            setPokemons(pokemonsResponse)
            setCargando(false)
        } catch {
            setCargando(false)
            setErrorGeneral({
                Existe: true,
                msg: "Fallo al consultar los datos en la API"
            })
        }
    }

    const renderPokemon = (pokemon) => {
        return (
            <tr key={pokemon.id}>
                <td>{pokemon.id}</td>
                <td>{pokemon.name}</td>
                <td className="w-25">
                    <Image fluid src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}></Image>
                </td>
            </tr>
        )
    }

    const [ErrorGeneral, setErrorGeneral] = useState({
        Existe: false,
        msg: ""
    })

    const [Cargando, setCargando] = useState(false)

    return (
        <>
            <h1>Pokemons</h1>
            <PokeFiltro onSearch={getPokemonsAfterToRender}></PokeFiltro>

            <br></br>

            {ErrorGeneral.Existe && <div className="alert alert-danger" role="alert">
                {ErrorGeneral.msg}
            </div>}

            {Cargando && <div className="d-flex justify-content-center"> <Spinner animation="grow"></Spinner></div>}

            <br></br>

            {!Cargando && !ErrorGeneral && pokemons[0] && <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Nombre</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemons.map(renderPokemon)}
                </tbody>
            </Table>}
        </>
    )
}

export default Pokemons
