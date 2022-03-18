import React from 'react';
import {useDispatch} from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {ThemeProvider, createTheme} from '@mui/material/styles';

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


function DeleteAccountButton(props) {
    const dispatch = useDispatch();
    return (
      <ThemeProvider theme={theme}>
      <Stack spacing={2} direction="column">
        <Button variant="contained" color="secondary" className={props.className}
                onClick={
                () => dispatch({type: 'DELETE_ACCOUNT'})}>
                DELETE ACCOUNT
        </Button>
      </Stack>
      </ThemeProvider>
    )
}

export default DeleteAccountButton;
