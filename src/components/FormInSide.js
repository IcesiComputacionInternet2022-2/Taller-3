import {
    Avatar,
    Box,
    Button,
    CssBaseline, FormControl, Grid, InputAdornment, InputLabel,
    MenuItem,
    Paper, Select,
    TextField, Typography
} from "@mui/material";
import * as React from 'react'
import axios from 'axios'
import sweetalert from 'sweetalert2'
import EmojiNatureIcon from '@mui/icons-material/EmojiNature'
import {useNavigate} from "react-router-dom";

export default function FormInSide() {
    const [sex, setSex] = React.useState('');
    const handleChange = (event) => {
        setSex(event.target.value);
    };
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/")
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const father = (data.get('father') === '') ? null : data.get('father')
        const mother = (data.get('mother') === '') ? null : data.get('mother')
        const json = {
            name: data.get('name'),
            sex: data.get('sex'),
            age: data.get('age'),
            height: data.get('height'),
            weight: data.get('weight'),
            arrivalDate: data.get('arrivalDate').concat(":00").replace("T", " "),
            father: father,
            mother: mother,
        }
        const headers = {'Content-Type': 'application/json'}
        await axios.post(`http://localhost:8080/animals`, json, {headers: headers})
            .then(async res => {
                await sweetalert.fire({
                    icon: 'success',
                    title: `Animal ${res.data.name} creado exitosamente`,
                    text: `¿Desea seguir registrando?`,
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Si',
                    cancelButtonText: 'No'
                }).then((result) => {
                    if (result.isDismissed) {
                        navigateToHome()
                    }
                });
            })
            .catch(async err => {
                if (err.response?.data === undefined) {
                    await sweetalert.fire({
                        icon: 'error',
                        text: `${err.message}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    if (err.response?.data.error === undefined) {
                        await sweetalert.fire({
                            icon: 'error',
                            text: `${err.response.data.message}`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    } else {
                        await sweetalert.fire({
                            icon: 'error',
                            text: `${err.response.data.error}`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                }
            })
    };
    return (
        <Grid container component="main" sx={{height: '94vh'}}>
            <CssBaseline/>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://images.pexels.com/photos/1083502/pexels-photo-1083502.jpeg?auto=compress)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    placeItems: 'center',
                    position: 'relative',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'cian.main'}}>
                        <EmojiNatureIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registrar Oso de Anteojos
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            margin="normal"
                            type="text"
                            required
                            fullWidth
                            id="name"
                            label="Nombre"
                            name="name"
                            size={"small"}
                            autoFocus
                        />
                        <FormControl id={"formControl"} sx={{minWidth: 120}} fullWidth required>
                            <InputLabel size={"small"} id="sex-select-label">Sexo</InputLabel>
                            <Select
                                labelId="sex-select-label"
                                id="sex"
                                required
                                fullWidth
                                value={sex}
                                name="sex"
                                label="Sexo"
                                size={"small"}
                                onChange={handleChange}
                            >
                                <MenuItem value={`F`}>Hembra</MenuItem>
                                <MenuItem value={`M`}>Macho</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="age"
                            label="Edad"
                            type="number"
                            size={"small"}
                            id="age"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="height"
                            label="Altura"
                            type="number"
                            size={"small"}
                            id="height"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">Mts</InputAdornment>,
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="weight"
                            label="Peso"
                            type="number"
                            id="weight"
                            size={"small"}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                            }}
                        />
                        <TextField
                            InputLabelProps={{shrink: true}}
                            margin="normal"
                            required
                            fullWidth
                            size={"small"}
                            label={"Fecha de Llegada"}
                            name="arrivalDate"
                            type="datetime-local"
                            id="arrivalDate"
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="father"
                            label="Nombre del Padre"
                            type="text"
                            size={"small"}
                            id="father"
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="mother"
                            label="Nombre de la Madre"
                            type="text"
                            size={"small"}
                            id="mother"
                        />
                        <Button
                            type="submit"
                            color="brownLight"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Registrar
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}