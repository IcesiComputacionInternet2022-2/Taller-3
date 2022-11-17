import {Typography, Box, IconButton} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import * as React from "react"

export default function Footer() {
    return (
        <Box component={"footer"} style={{position: 'relative', bottom: 0, left: 0, right: 0}}>
            <Box component={"div"}
                 sx={{display: 'flex', px: 4, py: 4, alignContent: 'center', justifyContent: 'space-between'}}>
                <Box component={"div"} sx={{display: 'grid', alignItems: 'center', justifyItems: 'center'}}>
                    <Box component={"img"} sx={{
                        maxHeight: {xs: 50, md: 50},
                        maxWidth: {xs: 150, md: 150}
                    }} alt={"ICESI Logo"}
                         src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Logo_de_la_Universidad_ICESI.svg/1280px-Logo_de_la_Universidad_ICESI.svg.png"}/>
                    <Typography variant="subtitle1" color="text.secondary" component="p"
                                sx={{flexGrow: 1, fontFamily: 'Roboto'}}>
                        © David Montaño | {new Date().getFullYear()}
                    </Typography>
                </Box>
                <Box component={"div"} sx={{alignSelf: 'center'}}>
                    <IconButton component={"a"}
                                href={"https://www.linkedin.com/in/david-montaño-tamayo/"}
                                target={"_blank"} rel={"noreferrer"} color="inherit">
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton component={"a"}
                                href={"https://github.com/cuatrosr"}
                                target={"_blank"} rel={"noreferrer"} color="inherit">
                        <GitHubIcon/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}