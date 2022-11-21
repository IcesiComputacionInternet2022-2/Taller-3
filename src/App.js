import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Box from "@mui/material/Box";
import Home from "./pages/Home";
import Create from "./pages/Create";
import List from "./pages/List";

export default function App() {
    return (
        <Box component={"div"}>
            <Router>
                <Routes>
                    <Route path={"/"} element={<Home/>}></Route>
                    <Route path={"/create"} element={<Create/>}></Route>
                    <Route path={"/list"} element={<List/>}></Route>
                </Routes>
            </Router>
        </Box>
    );
}