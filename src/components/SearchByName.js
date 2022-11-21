import {Box, Button, TextField, Typography} from "@mui/material";
import {useState} from "react";
import Popup from "./Popup";
import * as React from "react";
import axios from "axios";
import sweetalert from "sweetalert2";

export default function SearchByName() {
    const [buttonPopup, setButtonPopup] = useState(false)
    const [animal, setAnimal] = useState({})
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            animalName: data.get('animalName')
        })
        await axios.get(`http://localhost:8080/animals/${data.get('animalName')}`, {}).then(async res => {
            if (res.data !== '') {
                setAnimal(res.data)
                setButtonPopup(true)
            } else {
                await sweetalert.fire({
                    icon: 'info',
                    text: `No se tiene registro del Animal`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }).catch(async err => {
            await sweetalert.fire({
                icon: 'error',
                text: `${err.message}`,
                showConfirmButton: false,
                timer: 1500
            });
        })
    }
    return (
        <Box component={'div'} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box component="form" onSubmit={handleSubmit}>
                <Typography variant="h6" color="dark" sx={{flexGrow: 1, fontFamily: 'Roboto'}}>
                    Obtener detalles de un Animal especifico
                </Typography>
                <TextField
                    margin="normal"
                    type="text"
                    required
                    variant={"standard"}
                    id="animalName"
                    label="Nombre"
                    name="animalName"
                    size={"small"}
                />
                <Button
                    type="submit"
                    color="brownLight"
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Buscar
                </Button>
            </Box>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <Box component={"div"} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div>
                        <h3>Detalles sobre {animal.name}</h3>
                        <p>
                            <strong>Sexo:</strong> {animal.sex}<br/>
                            <strong>Edad:</strong> {animal.height}<br/>
                            <strong>Altura:</strong> {animal.height}<br/>
                            <strong>Peso:</strong> {animal.weight}<br/>
                            <strong>Fecha de llegada:</strong> {animal.arrivalDate}<br/>
                            <strong>Padre:</strong> {(animal.father !== undefined) ? animal.father.name : 'N/A'}<br/>
                            <strong>Madre:</strong> {(animal.mother !== undefined) ? animal.mother.name : 'N/A'}<br/>
                        </p>
                    </div>
                </Box>
                <Box component={"div"} sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                    {(animal.father !== undefined) ? (
                        <div>
                            <h4>Detalles sobre el Padre {animal.father.name}</h4>
                            <p>
                                <strong>Sexo:</strong> {animal.father.sex}<br/>
                                <strong>Edad:</strong> {animal.father.height}<br/>
                                <strong>Altura:</strong> {animal.father.height}<br/>
                                <strong>Peso:</strong> {animal.father.weight}<br/>
                                <strong>Fecha de llegada:</strong> {animal.father.arrivalDate}<br/>
                                <strong>Padre:</strong> {(animal.father.father !== undefined) ? animal.father.father : 'N/A'}<br/>
                                <strong>Madre:</strong> {(animal.father.mother !== undefined) ? animal.father.mother : 'N/A'}<br/>
                            </p>
                        </div>
                    ) : null}
                    {(animal.mother !== undefined) ? (
                        <div>
                            <h4>Detalles sobre la Madre {animal.mother.name}</h4>
                            <p>
                                <strong>Sexo:</strong> {animal.mother.sex}<br/>
                                <strong>Edad:</strong> {animal.mother.height}<br/>
                                <strong>Altura:</strong> {animal.mother.height}<br/>
                                <strong>Peso:</strong> {animal.mother.weight}<br/>
                                <strong>Fecha de llegada:</strong> {animal.mother.arrivalDate}<br/>
                                <strong>Padre:</strong> {(animal.mother.father !== undefined) ? animal.mother.father : 'N/A'}<br/>
                                <strong>Madre:</strong> {(animal.mother.mother !== undefined) ? animal.mother.mother : 'N/A'}<br/>
                            </p>
                        </div>
                    ) : null}
                </Box>
            </Popup>
        </Box>
    );
}