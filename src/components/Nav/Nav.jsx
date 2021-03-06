import * as React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Nav() {
  const user = useSelector((store) => store.user);
  const theme = createTheme({
    palette: {
      primary: {
        main: '#757575', 
      },
      secondary: {
        main: '#00acb0',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <div className="nav">
       <Stack direction="row" spacing={2} color="primary">
      <Link to="/home">
        <Avatar alt="prime" src="https://i0.wp.com/www.dickpolipnick.com/wp-content/uploads/2020/12/Prime-Academy-Logo-bw-2.png?fit=2560%2C1280&ssl=1"
        sx={{width: 100, height: 100}}>
          </Avatar>
   
      </Link>
      
      </Stack>
      <Typography
         className="nav-title" color="black" variant="h3">Carpool Finder
         <DirectionsCarIcon/>
        </Typography>
   
      <div>
    
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}
           <Link className="navLink" to="/about">
          About
        </Link>

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>            
            <Link className="navLink" to="/home">
              Home
            </Link>
            <Link className="navLink" to="/user">
              User
            </Link>
            <Link className="navLink" to="/carpool">
             Carpool List
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

      </div>
    </div>
    </ThemeProvider>
  );
}

export default Nav;
