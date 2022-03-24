import React, {useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import DeleteAccountButton from '../DeleteAccountButton/DeleteAccountButton';

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
      console.log(position.coords);
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
  }
  // Save button handler
  const Save = (event) => {
    event.preventDefault();
    console.log('save my form');
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
      <DeleteAccountButton className="btn"/>
      <form className="formPanel"
        onSubmit={Save}>
        <div>
          <label htmlFor="fullName">
            Full Name:
            <input
              type="text"
              name="fullName"
              required
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="city">
            City:
            <input
              type="text"
              name="city"
              required
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="region">
            Region:
            <input
              type="text"
              name="region"
              required
              value={region}
              onChange={(event) => setRegion(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="graduation_date">
            Graduation date:
            <input
              type="text"
              name="graduation_date"
              required
              value={graduation_date}
              onChange={(event) => setGraduation_date(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="needs_ride">
              Needs ride:
              <input
                type="text"
                name="needs_ride"
                required
                value={needs_ride}
                onChange={(event) => setNeeds_ride(event.target.value)}
              />
          </label>
        </div>
        <div>
          <label htmlFor="provide_ride">
            Provide ride:
            <input
              type="text"
              name="provide_ride"
              required
              value={provide_ride}
              onChange={(event) => setProvide_ride(event.target.value)}
            />
          </label>
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
          <input className="btn" type="submit" name="submit" value="Save"/>
        </div>
      </form>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
