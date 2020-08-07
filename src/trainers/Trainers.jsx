import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import * as TrainersService from './TrainersService'
import { getPokemons } from '../pokemons/PokemonService'
import ButtonModal from './ButtonModal'

const Trainers = () => {

    const [trainers, setTrainers] = useState([])
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getTrainersAfterToRender()
    }, [])

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
