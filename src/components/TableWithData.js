import {
    Box,
    Paper,
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    tableCellClasses, styled, TableFooter, TablePagination, IconButton
} from "@mui/material";
import {useTheme} from '@mui/material/styles';
import {useEffect, useState} from "react";
import axios from "axios";
import LastPageIcon from '@mui/icons-material/LastPage';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

function TablePaginationActions(props) {
    const theme = useTheme();
    const {count, page, rowsPerPage, onPageChange} = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{flexShrink: 0, ml: 2.5}}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon/> : <LastPageIcon/>}
            </IconButton>
        </Box>
    );
}

const TableConst = (data) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.animals.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const StyledTableCell = styled(TableCell)(({theme}) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.brownLight.main,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({theme}) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    return (
        <TableContainer component={Paper} sx={{margin: 'auto'}}>
            <Table sx={{minWidth: 650}} size="small" aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Nombre</StyledTableCell>
                        <StyledTableCell align={"right"}>Sexo</StyledTableCell>
                        <StyledTableCell align={"right"}>Edad</StyledTableCell>
                        <StyledTableCell align={"right"}>Altura</StyledTableCell>
                        <StyledTableCell align={"right"}>Peso</StyledTableCell>
                        <StyledTableCell align={"right"}>Fecha de Llegada</StyledTableCell>
                        <StyledTableCell align={"right"}>Nombre del Padre</StyledTableCell>
                        <StyledTableCell align={"right"}>Nombre de la Madre</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                            ? data.animals.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : data.animals
                    ).map((row) => (
                        <StyledTableRow
                            key={row.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell
                                align={"right"}>{row.sex === 'F' ? 'Hembra' : 'Macho'}</StyledTableCell>
                            <StyledTableCell align={"right"}>{row.age}</StyledTableCell>
                            <StyledTableCell align={"right"}>{row.height} Mts</StyledTableCell>
                            <StyledTableCell align={"right"}>{row.weight} Kg</StyledTableCell>
                            <StyledTableCell align={"right"}>{row.arrivalDate}</StyledTableCell>
                            <StyledTableCell
                                align={"right"}>{row.father !== undefined ? row.father : 'N/A'}</StyledTableCell>
                            <StyledTableCell
                                align={"right"}>{row.mother !== undefined ? row.mother : 'N/A'}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{height: 32 * emptyRows}}>
                            <TableCell colSpan={6}/>
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
                            colSpan={3}
                            count={data.animals.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}

export default function TableWithData() {
    const [data, setData] = useState({animals: [], isFetching: false})
    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                setData((data) => ({animals: data.animals, isFetching: true}));
                const response = await axios.get(`http://localhost:8080/animals`);
                setData({animals: response.data, isFetching: false});
            } catch (e) {
                console.log(e);
                setData((data) => ({animals: data.animals, isFetching: false}));
            }
        };
        fetchAnimals()
    }, [])
    return (
        <Box component={"div"} sx={{height: '100%', display: 'grid', justifyContent: 'center'}}>
            {TableConst(data)}
        </Box>
    );
}