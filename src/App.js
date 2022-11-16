import ScrollAppBar from './components/ScrollAppBar'
import FlexBoxDiv from './components/FlexBoxDiv'
import theme from './theme/createTheme'
import {ThemeProvider} from '@mui/material/styles'
import {Container} from '@mui/material'
import Box from '@mui/material/Box'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ScrollAppBar/>
            <FlexBoxDiv/>
            <Container>
                <Box sx={{my: 2}}>
                    {[...new Array(50)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default App;
