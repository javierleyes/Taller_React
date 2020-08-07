import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function ButtonModal({ children, trainer, action, pokemons = [], ...props }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => {
        if (trainer)
            setInputs(trainer)

        setShow(true)
    }

    const [inputsTrainers, setInputs] = useState({
        id: "",
        name: "",
        pokemon: {
            id: "",
            name: ""
        }
    })

    const onChange = (e) => {
        const { name, value } = e.target

        // ver linea dropdownlist
        const newValue = name === 'pokemon' ? pokemons.find(pokemon => pokemon.name === value) : value

        setInputs({
            ...inputsTrainers,
            [name]: newValue
        })
    }

    const onAction = async () => {
        await action(inputsTrainers)
        handleClose()
    }

    return (
        <>
            <Button {...props} onClick={handleShow}>
                {children}
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>{children} Entrenador</Modal.Title>
                </Modal.Header>

                {children !== "Eliminar" && <Modal.Body>
                    <label>Nombre</label>
                    <input
                        className='form-control'
                        onChange={onChange}
                        name='name'
                        value={inputsTrainers.name ? inputsTrainers.name : ""}
                    ></input>

                    <Form.Group controlId="select1">
                        <Form.Label>Seleccionar Pokemon</Form.Label>
                        <Form.Control as="select" onChange={onChange} name='pokemon' value={inputsTrainers.pokemon.name ? inputsTrainers.pokemon.name : ""}>
                            <option>{"Seleccionar"}</option>
                            {pokemons.map((pokemon) => <option key={pokemon.id}>{pokemon.name}</option>)}
                        </Form.Control>
                    </Form.Group>

                </Modal.Body>}

                <Modal.Footer>

                    <Button {...props} onClick={onAction}>
                        {children}
                    </Button>

                </Modal.Footer>

            </Modal>
        </>
    );
}

export default ButtonModal
