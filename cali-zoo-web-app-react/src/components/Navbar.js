import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Icon, Link } from "@mui/material";
import Typography from '@mui/material/Typography';

function Navbar() {
    return (
        <div className="Navbar">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="success">
                    <Toolbar>
                        <Icon
                            size="large"
                            edge="start"
                            color="inherit"
                            sx={{ mr: 2 }}
                        >
                            <span className="material-symbols-outlined">
                                pets
                            </span>
                        </Icon>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Zoo
                        </Typography>
                        <Button href="/" color='inherit'>Home</Button>
                        <Button href="api" color="inherit">Api</Button>
                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    );
}

export default Navbar;