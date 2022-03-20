import React from 'react';
import {useDispatch} from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {ThemeProvider, createTheme} from '@mui/material/styles';
//import { user } from 'pg/lib/defaults';

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


function DeleteAccountButton() {
  const dispatch = useDispatch();
  const deleteUser = () => { 
  dispatch({ type: 'DELETE_ACCOUNT' })
}

    return (
      <ThemeProvider theme={theme}>
      <Stack spacing={2} direction="row">
        <Button size="small" variant="contained" color="secondary" 
                onClick={deleteUser}>
                DELETE ACCOUNT
        </Button>
      </Stack>
      </ThemeProvider>
    )
}

export default DeleteAccountButton;
