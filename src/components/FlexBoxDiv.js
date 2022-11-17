import Box from '@mui/material/Box'
import Typewriter from 'typewriter-effect'

const backgroundImage = 'https://wallpaperaccess.com/full/7277994.jpg'

const boxArticleStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    placeItems: 'center',
    display: 'grid',
    width: '100vh'
}

export default function FlexBoxDiv() {
    return (
        <Box component={"div"} sx={{display: 'flex', height: '94vh'}}>
            <Box component={"article"} style={boxArticleStyle}/>
            <Box component={"article"} bgcolor={"cian.main"} style={{display: 'grid', placeItems: 'center', width:'100vh'}}>
                <Box component={"div"} style={{height: '70vh', width: '70vh', alignItems: 'center', textAlign: 'center', justifyContent: 'center', display: 'flex'}}>
                    <Typewriter options={{strings: [`<span style='font-family: Roboto; font-weight: bold; font-size: 55px; color: white'>¡Bienvenido, Administrador del Oso de Anteojos!</span>`], autoStart: true, loop: true}}/>
                </Box>
            </Box>
        </Box>
    );
}