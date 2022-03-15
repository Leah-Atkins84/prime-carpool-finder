import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';

function UserPage() {
  const dispatch = useDispatch();
  const save = (event) => {
    event.preventDefault();
    event.stopPropagation()
    console.log('save my form');
    dispatch({
      type: 'SAVE_USER',
      payload:{
        id: event.target.id.value,
        fullName: event.target.fullName.value,
        city: event.target.city.value,
        region: event.target.region.value,
        graduation_date: event.target.graduation_date.value,
        needs_ride: event.target.needs_ride.value,
        provide_ride: event.target.provide_ride.value
      }// get payload from state instead of form, uncomment onchanges
    })
  }
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
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
              value={user.fullName}
              //onChange={(event) => setUsername(event.target.value)}
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
              value={user.city}
              //onChange={(event) => setPassword(event.target.value)}
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
              value={user.region}
              // onChange={(event) => setPassword(event.target.value)}
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
              value={user.graduation_date}
              // onChange={(event) => setPassword(event.target.value)}
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
              value={user.needs_ride}
              // onChange={(event) => setPassword(event.target.value)}
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
              value={user.provide_ride}
              // onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
          <input className="btn" type="submit" name="submit" value="Save" />
        </div>
      </form>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
