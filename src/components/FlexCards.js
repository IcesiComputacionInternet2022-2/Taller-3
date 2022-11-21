import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material'

export default function FlexCards() {
    return (
        <Box component={"div"} bgcolor="rose.main" sx={{display: 'flex', justifyContent: 'space-evenly', paddingY: 10}}>
            <Card elevation={0} sx={{maxWidth: 345}}>
                <CardActionArea href={"/create"}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://wallpaperaccess.com/thumb/2113868.jpg"
                        alt="bear bathing"
                    />
                    <CardContent style={{textAlign: 'justify'}}>
                        <Typography gutterBottom variant="h5" component="div" sx={{flexGrow: 1, fontFamily: 'Roboto'}}>
                            Registrar Animal
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{flexGrow: 1, fontFamily: 'Roboto'}}>
                            Con la información del nuevo ejemplar se permite guardar su
                            información en el banco de datos.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card elevation={0} sx={{maxWidth: 345}}>
                <CardActionArea href={"/list"}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://wallpaperaccess.com/thumb/2830150.jpg"
                        alt="bear watching"
                    />
                    <CardContent style={{textAlign: 'justify'}}>
                        <Typography gutterBottom variant="h5" component="div" sx={{flexGrow: 1, fontFamily: 'Roboto'}}>
                            Listar Animales
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{flexGrow: 1, fontFamily: 'Roboto'}}>
                            Listar la totalidad de los Osos de Anteojos
                            registrados en el zoologico.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}