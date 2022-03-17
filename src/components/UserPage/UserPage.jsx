import React, { useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';

function UserPage() {
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [graduation_date, setGraduation_date] = useState('');
  const [needs_ride, setNeeds_ride] = useState('');
  const [provide_ride, setProvide_ride] = useState('');
  const dispatch = useDispatch();
  const save = (event) => {
    event.preventDefault();
    //event.stopPropagation()
    console.log('save my form');
    dispatch({
      type: 'SAVE_USER',
      payload:{
        id: user.id,
        fullName: fullName,
        city: city,
        region: region,
        graduation_date: graduation_date,
        needs_ride: needs_ride,
        provide_ride: provide_ride
      }
    })
  }// end save user

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user); // use data from redux
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      <form className="formPanel" onSubmit={save}>
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
          <input className="btn" type="submit" name="submit" value="save" />
        </div>
      </form>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
