import React, {useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import DeleteAccountButton from '../DeleteAccountButton/DeleteAccountButton';
import {Button} from "@mui/material/";

function UserPage() {
  const user = useSelector((store) => store.user); // use data from redux
  const [fullName, setFullName] = useState(user.fullName);
  const [city, setCity] = useState(user.city);
  const [region, setRegion] = useState(user.region);
  const [graduation_date, setGraduation_date] = useState(user.graduation_date);
  const [needs_ride, setNeeds_ride] = useState(user.needs_ride);
  const [provide_ride, setProvide_ride] = useState(user.provide_ride);
  const dispatch = useDispatch();

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
        provide_ride: provide_ride
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
      <form className="formPanel"
        onSubmit={Save}>
          <h3>Edit user information here:</h3>
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
              type="date"
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
          <Button></Button>
          <input className="btn" type="submit" name="submit" value="Save"/>
        </div>
        <div>
        <DeleteAccountButton className="btn"/>
        </div>
      </form>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
