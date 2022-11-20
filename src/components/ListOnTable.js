import {Box, Typography} from "@mui/material";
import TableWithData from "./TableWithData";

export default function ListOnTable() {
    return (
        <Box component={"div"} sx={{height: '94vh'}}>
            <Box component={"div"} bgcolor={"brown.main"} sx={{display: 'flex', height: '45%'}}>
                <Box component={"article"} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    placeItems: 'center',
                    height: '100%',
                    width: '100%'
                }}>
                    <Box component={"article"} style={{
                        backgroundImage: `url("https://seeklogo.com/images/B/bear-logo-972171D828-seeklogo.com.png")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        filter: 'invert(80%)',
                        backgroundSize: 'contain',
                        width: '14%',
                        height: '50%'
                    }}/>
                    <Box component={"div"} style={{textAlign: 'center', justifyContent: 'center'}}>
                        <Typography variant="h6" color="white" sx={{flexGrow: 1, fontFamily: 'Roboto'}}>
                            Se listan todos los Osos de Anteojos
                            <br/>registrados en el zoologico.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box component={'div'} bgcolor={"rose.main"} sx={{height: '55%'}}>
                <TableWithData/>
            </Box>
        </Box>
    );
}