import  React, { useEffect } from 'react';
import {DataGrid} from "@mui/x-data-grid";
import {Button} from "@mui/material/";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';


const theme = createTheme({
    palette: {
        primary: {
            main: '#26a69a'
        },
        secondary: {
            main: '#1CCFCF'
        }
    }
});


function CarpoolListPage() {
    const columns = [
        {
            field: 'fullName',
            headerName: 'Full Name',
            headerClassName: 'app-theme--header',
            width: 100
        },
        {
            field: 'region',
            headerName: 'Region',
            headerClassName: 'app-theme--header',
            width: 100
        },
        {
            field: 'city',
            headerName: 'City',
            headerClassName: 'app-theme--header',
            width: 100
        },
        {
            field: 'graduationDate',
            headerName: 'Graduation Date',
            headerClassName: 'app-theme--header',
            width: 110
        }, {
            field: 'needsRide',
            headerName: 'Needs Ride',
            headerClassName: 'app-theme--header',
            width: 100
        }, {
            field: 'provideRide',
            headerName: 'Provide Ride',
            headerClassName: 'app-theme--header',
            width: 100
        }
    ];
    return (<>
        <ThemeProvider theme={theme}>
            <Box> {/* <AppBar color="primary"> */}
                {/* <Toolbar> */}
                <Typography variant="h4"
                    //  sx={{ display:"flex", justifyContent:"center" }}
                >Car pool finder</Typography>
                {/* <Button color="inherit">Login</Button> */}
                {/* </Toolbar> */}
                {/* </AppBar> */} </Box>
            <Box sx={
                {
                    height: 100,
                    width: 10,
                    '.app-theme--header': {
                        backgroundColor: "secondary"
                    }
                }
            }></Box>
            <div style={
                {
                    height: 400,
                    width: '100%'
                }
            }>
                <DataGrid // sx={{display:"flex",
                    // justifyContent:"center"}}
                    // display="flex"
                    // justifyContent="center"
                    //rows={rows}
                    columns={columns}/>
            </div>
            {/* <Button variant="contained">
                    Edit User Info
                </Button> */} </ThemeProvider>

    </>);


}

export default CarpoolListPage;
