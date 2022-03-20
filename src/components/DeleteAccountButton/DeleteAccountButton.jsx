import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
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


function DeleteAccountButton() {
  const user = useSelector((store) => store.user); // use data from redux
  const dispatch = useDispatch();
  const deleteUser = () => { 
    return dispatch({
      type: 'DELETE_ACCOUNT', 
      payload: {
        id: user.id
      }
    })
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
