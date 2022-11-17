import * as React from 'react';
import {Slide, useScrollTrigger, Box, Toolbar, Typography, IconButton, AppBar} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

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