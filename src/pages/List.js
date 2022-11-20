import {ThemeProvider} from "@mui/material/styles";
import theme from "../theme/createTheme";
import ScrollAppBar from "../components/ScrollAppBar";
import ListOnTable from "../components/ListOnTable";

export default function List() {
    return (
        <ThemeProvider theme={theme}>
            <ScrollAppBar/>
            <ListOnTable/>
        </ThemeProvider>
    );
}