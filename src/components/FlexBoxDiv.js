import Box from '@mui/material/Box'
import Typewriter from 'typewriter-effect'

const backgroundImage = 'https://wallpaperaccess.com/full/7277994.jpg'

const boxArticleStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    placeItems: 'center',
    position:'relative',
    display: 'grid',
    width: '100%',
    height: '100%'
}

export default function FlexBoxDiv() {
    return (
        <Box component={"div"} sx={{display: 'flex', height: '94vh'}}>
            <Box component={"article"} style={boxArticleStyle}/>
            <Box component={"article"} bgcolor={"cian.main"} style={{position:'relative', display: 'grid', placeItems: 'center', width:'100%', height:'100%'}}>
                <Box component={"div"} style={{height: '70%', width: '70%', alignItems: 'center', textAlign: 'center', justifyContent: 'center', display: 'flex'}}>
                    <Typewriter sx={{width: 'max-content'}} options={{strings: [`<span style='font-family: Roboto; font-weight: bold; font-size: 5vh; color: white'>¡Bienvenido, Administrador del Oso de Anteojos!</span>`], autoStart: true, loop: true}}/>
                </Box>
            </Box>
        </Box>
    );
}