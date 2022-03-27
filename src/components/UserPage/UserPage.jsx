import React, {useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import DeleteAccountButton from '../DeleteAccountButton/DeleteAccountButton';
import {Button} from "@mui/material/";
import moment from 'moment';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';



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
    <div className="container">
      <h2>Welcome, {
        user.username
      }!</h2>
      <p>Your ID is: {
        user.id
      }</p>
      <LogOutButton className="btn"/>
      <Box>
      <form className="formPanel"
        onSubmit={Save}>
        <div>
        <h3>Edit user information here:</h3>
        <InputLabel htmlFor="component-outlined">Full Name:</InputLabel>
          <OutlinedInput
              id="component-outlined"
              label="fullName"
              required
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
        </div>
        <div>
        <InputLabel htmlFor="component-outlined">City:</InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="city"
              required
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
        </div>
        <div>
        <InputLabel htmlFor="component-outlined">Region:</InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="region"
              required
              value={region}
              onChange={(event) => setRegion(event.target.value)}
            />
        </div>
        <div>
        <InputLabel htmlFor="component-outlined">Graduation Date:</InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Graduation Date"
              type="date"
              required
              value={moment(graduation_date).format('YYYY-MM-DD')}
              onChange={(event) => setGraduation_date(event.target.value)}
            />
        </div>
        <div>
        <InputLabel htmlFor="component-outlined">Needs ride:</InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Graduation Date"
                required
                value={needs_ride}
                onChange={(event) => setNeeds_ride(event.target.value)}
              />
        </div>
        <div>
        <InputLabel htmlFor="component-outlined">Provide Ride:</InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Provide ride"
              required
              value={provide_ride}
              onChange={(event) => setProvide_ride(event.target.value)}
            />
        </div>
        <div>
          <label htmlFor="latitude">
            Latitude:
            <input
              type="text"
              name="latitude"
              readOnly
              value={latitude}
              onChange={(event) => setLatitude(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="longitude">
            Longitude:
            <input
              type="text"
              name="longitude"
              readOnly
              value={longitude}
              onChange={(event) => setLongitude(event.target.value)}
            />
          </label>
        </div>
        <div>
          <Input className="btn" type="submit" name="submit" value="Save"/>
        </div>
        <div>
        <DeleteAccountButton className="btn"/>
        </div>
      </form>
      </Box>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
