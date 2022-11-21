import {Box, Button, Paper} from "@mui/material";

export default function Popup(props) {
    return (props.trigger) ? (
        <Box component={Paper} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box component={"div"} style={{
                position: 'relative',
                padding: '32px',
                width: '100%',
                maxWidth: '640px',
                backgroundColor: '#FFF'
            }}>
                <Button style={{position: 'absolute', top: '16px', right: '16px'}} color={'dark'}
                        onClick={() => props.setTrigger(false)}><strong>close</strong></Button>
                {props.children}
            </Box>
        </Box>
    ) : null;
}