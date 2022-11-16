import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PetsIcon from '@mui/icons-material/Pets';
import {Slide, useScrollTrigger} from '@mui/material';

export default function ScrollAppBar() {
    const trigger = useScrollTrigger()
    return (
        <Box sx={{flexGrow: 1}}>
            <Slide appear={true} direction={"down"} in={!trigger}>
                <AppBar position="relative" color="inherit">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="logo"
                        >
                            <PetsIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" align={"center"} sx={{flexGrow: 1, fontFamily: 'Roboto'}}>
                            <strong>Gestor del Zoológico</strong>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Slide>
        </Box>
    );
}