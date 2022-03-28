import React from 'react';
import { useDispatch } from 'react-redux';
import {Button} from "@mui/material/";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';

const theme = createTheme({
  palette: {
      primary: {
          main: '#fafafa'
      },
      secondary: {
          main: '#9e9e9e'
      }
  }
});


function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
    <Button size="small" variant="contained" color="primary"
  
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
        <LogoutIcon/>
    </Button>
    </ThemeProvider>
  );
}

export default LogOutButton;
