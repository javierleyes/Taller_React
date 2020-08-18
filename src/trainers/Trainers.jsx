import React, { useState, useEffect } from 'react'
import { Table, Alert } from 'react-bootstrap'
import * as TrainersService from './TrainersService'
import { getPokemons } from '../pokemons/PokemonService'
import ButtonModal from './ButtonModal'
import { useSelector, useDispatch } from 'react-redux'
import { clear } from './stateManager/alertActions'

//use algo son hooks, se usan en componentes funcionales
// componentDidMount() son metodos del ciclo de vida
// son excluyentes
const Trainers = () => {

    const [trainers, setTrainers] = useState([])
    const [pokemons, setPokemons] = useState([])

    const alert = useSelector((state) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        getTrainersAfterToRender()
        return () => dispatch(clear())
    }, [dispatch])

    // React viejo
    // componenDidMount() {
    // getTrainersAfterToRender()
    // }

    // componenWillUnmount() {
    // dispatch(clear())
    // }

    useEffect(() => {
        getPokemonsAfterToRender()
    }, [])

    const getPokemonsAfterToRender = async () => {
        try {
            const pokemonsResponse = await getPokemons()
            setPokemons(pokemonsResponse)
        } catch {
        }
    }

    const getTrainersAfterToRender = async () => {
        try {
            const trainersResponse = await TrainersService.getTrainers()
            setTrainers(trainersResponse)
        } catch {
        }
    }

    const renderTrainer = (trainer) => {
        return (
            <tr key={trainer.id}>
                <td>{trainer.name}</td>
                <td>{trainer.pokemon.name}</td>
                <th>
                    <ButtonModal trainer={trainer} action={editar} pokemons={pokemons} variant="info">Editar</ButtonModal>
                    <ButtonModal trainer={trainer} action={eliminar} variant="danger">Eliminar</ButtonModal>
                </th>
            </tr>
        )
    }

    const agregar = async (trainer) => {
        await TrainersService.agregar(trainer)
        getTrainersAfterToRender()
    }

    const editar = async (trainer) => {
        await TrainersService.editar(trainer)
        getTrainersAfterToRender()
    }

    const eliminar = async (trainer) => {
        await TrainersService.eliminar(trainer)
        getTrainersAfterToRender()
    }

    return (
        <>
            <h1>Trainers</h1>
            {alert.show && <Alert variant={alert.type}>{alert.msg}</Alert>}
            <ButtonModal action={agregar} pokemons={pokemons} variant="success">Agregar</ButtonModal>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Pokemon acompanante</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {trainers.map(renderTrainer)}
                </tbody>
            </Table>
        </>
    )
}

export default Trainers
