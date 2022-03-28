import React, {useEffect} from 'react';
import {DataGrid} from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import {useDispatch, useSelector} from 'react-redux';
import Map from '../Map/Map';


function CarpoolListPage() {
    const dispatch = useDispatch();
    const carpool = useSelector(store => store.carpool);

    useEffect(() => {
        dispatch({type: 'FETCH_CARPOOLS'}) // displays the list of users on page load
    }, [dispatch])

    const columns = [
        {
            field: 'fullName',
            headerName: 'Full Name',
            width: 120
        },
        {
            field: 'region',
            headerName: 'Region',
            width: 100
        },
        {
            field: 'city',
            headerName: 'City',
            width: 130
        },
        {
            field: 'graduation_date',
            headerName: 'Graduation Date',
            width: 150
        }, {
            field: 'needs_ride',
            headerName: 'Needs Ride',
            width: 100,
            valueGetter: (params) => params.value ? `Yes` : `No`
        }, {
            field: 'provide_ride',
            headerName: 'Provide Ride',
            width: 100,
            valueGetter: (params) => params.value ? `Yes` : `No`
        }
    ];
    return (
        <>
        <div>
                <Box 
                sx={{height: 10 
                }}
                ></Box>
                <div style={
                    {
                        height: 400,
                        width: '100%',
                        padding: 10,
                    }
                }>
                    <DataGrid rows={carpool}
                        columns={columns}/>
                </div>
          </div>
          <Map />
        </>
    );


}

export default CarpoolListPage;
