import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import DeleteAccountButton from '../DeleteAccountButton/DeleteAccountButton';
import moment from 'moment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import {ThemeProvider, createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9e9e9e'
    }
  }
})


function UserPage() {
  const user = useSelector((store) => store.user); // use data from redux
  const [fullName, setFullName] = useState(user.fullName);
  const [city, setCity] = useState(user.city);
  const [region, setRegion] = useState(user.region);
  const [graduation_date, setGraduation_date] = useState(user.graduation_date);
  const [needs_ride, setNeeds_ride] = useState(user.needs_ride);
  const [provide_ride, setProvide_ride] = useState(user.provide_ride);
  const [latitude, setLatitude] = useState(user.latitude);
  const [longitude, setLongitude] = useState(user.longitude);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false); // states for alerts

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
  }
  // Save button handler
  const Save = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SAVE_USER',
      payload: {
        id: user.id,
        username: user.username,
        fullName: fullName,
        city: city,
        region: region,
        graduation_date: graduation_date,
        needs_ride: needs_ride,
        provide_ride: provide_ride,
        latitude: latitude,
        longitude: longitude
      }
    })
  } // end save user

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <h2>Welcome, {
          user.username
        }!</h2>
        <p>Your ID is: {
          user.id
        }</p>
        <h3>Edit user information here:</h3>
        <Box component="form"
          sx={
            {
              margin: 5,
              borderRadius: 5,
              width: 700,
              height: 200,
              border: '1px solid black',
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly"
            }
        }>

          
          <Box sx={{p: 2}}>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Full Name:</InputLabel>
              <OutlinedInput id="component-outlined" label="fullName" required
                value={fullName}
                onChange={
                  (event) => setFullName(event.target.value)
                }/>
            </FormControl>
          </Box>
          <Box sx={{p: 2}}>
            <FormControl>
              <InputLabel htmlFor="component-outlined">City:</InputLabel>
              <OutlinedInput id="component-outlined" label="city" required
                value={city}
                onChange={
                  (event) => setCity(event.target.value)
                }/>
            </FormControl>
          </Box>
          <Box sx={{p: 2}}>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Region:</InputLabel>
              <OutlinedInput id="component-outlined" label="region" required
                value={region}
                onChange={
                  (event) => setRegion(event.target.value)
                }/>
            </FormControl>
          </Box>
          <Box mb={2}>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Graduation Date:</InputLabel>
              <OutlinedInput id="component-outlined" label="Graduation Date" type="date" required
                value={
                  moment(graduation_date).format('YYYY-MM-DD')
                }
                onChange={
                  (event) => setGraduation_date(event.target.value)
                }/>
            </FormControl>
          </Box>
          <Box mb={2}>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Needs ride:</InputLabel>
              <OutlinedInput id="component-outlined" label="Graduation Date" required
                value={needs_ride}
                onChange={
                  (event) => setNeeds_ride(event.target.value)
                }/>
            </FormControl>
          </Box>
          <Box mb={2}>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Provide Ride:</InputLabel>
              <OutlinedInput id="component-outlined" label="Provide ride" required
                value={provide_ride}
                onChange={
                  (event) => setProvide_ride(event.target.value)
                }/>
            </FormControl>
          </Box>
          <Snackbar open={open}
            autoHideDuration={6000}
            onClose={handleClose}>
            <Alert onClose={handleClose}
              severity="success"
              sx={
                {width: '100%'}
            }>
              <Button color="primary" // when alert popups and when save clicked- saves user info 
                onClick={Save}>Save</Button> 
            </Alert>
          </Snackbar>
          <Box>
            <Button sx={
                {margin: 1}
              }
              variant="contained" // opens alert box when clicked
              onClick={handleClick}>Save</Button> 
           
          </Box>
        </Box>
        <div> Would you like to delete your account?
        <DeleteAccountButton className="btn"/>
        </div>
      </div>
    </ThemeProvider>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
