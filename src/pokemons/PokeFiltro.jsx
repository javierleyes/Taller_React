import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const PokeFiltro = (props) => {

    const [inputs, setInputs] = useState({
        id: "",
        name: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleSearch = (e) => {
        e.preventDefault()
        props.onSearch(inputs)
    }

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Numero</Form.Label>
                <Form.Control onChange={handleChange} name='id'></Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Nombre</Form.Label>
                <Form.Control onChange={handleChange} name='name'></Form.Control>
            </Form.Group>

            <Button onClick={handleSearch} variant="primary" type="submit">
                Buscar
            </Button>
        </Form>
    )
}

export default PokeFiltro
