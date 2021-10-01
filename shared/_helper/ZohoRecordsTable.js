import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import Alert from "@material-ui/core/Alert";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Chip from "@material-ui/core/Chip";

import axios from "axios";
import filterItems from "./filterItems";

import {
    Card,
    CardContent,
    Typography,
    TableHead,
    Button,
} from "@material-ui/core";

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

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
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label='first page'>
                {theme.direction === "rtl" ? (
                    <LastPageIcon />
                ) : (
                    <FirstPageIcon />
                )}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label='previous page'>
                {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label='next page'>
                {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label='last page'>
                {theme.direction === "rtl" ? (
                    <FirstPageIcon />
                ) : (
                    <LastPageIcon />
                )}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

const PaginationTable = ({ moduleName, fields, addItem, searchLabel }) => {
    const router = useRouter();
    const [page, setPage] = React.useState(0);
    const [recordData, setRecordData] = React.useState([]);
    const [search, setSearch] = React.useState("");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(async () => {
        // extract field names According to the format of Zoho
        const grabFieldsApiName = fields
            .map((field) => field.apiName)
            .join(",");

        //Get all module records
        const responseForFieldRecords = await axios.post(
            "/api/grabModuleRecords",
            {
                fields: grabFieldsApiName,
                moduleName: moduleName,
            }
        );
        if (!responseForFieldRecords.data.ok) {
            setError(responseForFieldRecords.data.error);
        }

        if (responseForFieldRecords.data.ok) {
            setRecordData(responseForFieldRecords.data.fieldRecords.data);
        }

        setLoading(false);
    }, []);

    const handleChangePage = (event, newPage) => {
        console.log({ event, newPage });
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    if (loading) {
        return (
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                style={{ minHeight: "90vh" }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box mt={2}>
                <Alert severity='error' variant='filled'>
                    {error}
                </Alert>
            </Box>
        );
    }

    return (
        <Card variant='outlined'>
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'>
                <TextField
                    id='outlined-basic'
                    label={searchLabel}
                    variant='outlined'
                    onChange={(e) => setSearch(e.target.value)}
                />
                {addItem && (
                    <Box>
                        <Button variant='contained'>
                            <Link href='/students/add_student'>
                                {addItem.content}
                            </Link>
                        </Button>
                    </Box>
                )}
            </Box>
            <CardContent>
                <Box
                    sx={{
                        overflow: {
                            xs: "auto",
                            sm: "unset",
                        },
                    }}>
                    <Table
                        aria-label='custom pagination table'
                        sx={{
                            whiteSpace: "nowrap",
                        }}>
                        <TableHead>
                            <TableRow>
                                {fields.map((field, index) => (
                                    <TableCell key={index}>
                                        <Typography variant='h5'>
                                            {field.label}
                                        </Typography>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? filterItems(
                                      recordData,
                                      search,
                                      fields.map((field) => field.apiName)
                                  ).slice(
                                      page * rowsPerPage,
                                      page * rowsPerPage + rowsPerPage
                                  )
                                : filterItems(
                                      recordData,
                                      search,
                                      fields.map((field) => field.apiName)
                                  )
                            ).map((item, index) => (
                                <TableRow key={index}>
                                    {fields.map((field) => (
                                        <TableCell>
                                            {/* Show data based on the position of the fieldName */}
                                            <Typography variant='h5'>
                                                {item[field.apiName] ||
                                                    "No data found"}
                                            </Typography>
                                        </TableCell>
                                    ))}
                                    <TableCell>
                                        <Link
                                            href={
                                                router.pathname +
                                                `/${item.id}` +
                                                `/?module=${moduleName}`
                                            }>
                                            {/* <a>
												<Typography variant='h5'>Go To Dynamic Page</Typography>
											</a> */}
                                            <Chip
                                                size='small'
                                                color='primary'
                                                label='View Details'
                                            />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[
                                        5,
                                        10,
                                        25,
                                        { label: "All", value: -1 },
                                    ]}
                                    colSpan={6}
                                    count={
                                        filterItems(
                                            recordData,
                                            search,
                                            fields.map((field) => field.apiName)
                                        ).length
                                    }
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputprops: {
                                            "aria-label": "rows per page",
                                        },
                                        native: true,
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={
                                        handleChangeRowsPerPage
                                    }
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </Box>
            </CardContent>
        </Card>
    );
};

export default PaginationTable;
