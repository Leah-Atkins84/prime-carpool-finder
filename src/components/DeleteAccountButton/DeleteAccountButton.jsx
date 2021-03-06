import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const theme = createTheme({
    palette: {
        primary: {
            main: '#26a69a'
        },
        secondary: {
            main: '#9e9e9e'
        }
    }
});


function DeleteAccountButton() {
    const user = useSelector((store) => store.user); // use data from redux
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true); /* Opens dialog alert box */
    };

    const handleClose = () => {
        setOpen(false); /* Closes dialog box */
    };

    const deleteUser = () => {
        return dispatch({
            type: 'DELETE_ACCOUNT', /* Dispatches to delete saga when agree is clicked on dialog box */
            payload: {
                id: user.id
            }
        })
    }
    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2}
                direction="row">
                <Button size="small" variant="contained" color="secondary"
                    onClick={handleClickOpen}>
                    {/* Opens dialog box when button clicked */}
                    DELETE ACCOUNT
                    <DeleteIcon/>
                </Button>
                <Dialog open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">
                        {"Are you sure you want to delete your account?"} </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Deleting your account means that you will no longer be able to see the carpool list and no one else will be able to view your ride status.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        {/* Closes dialog box */}
                        <Button onClick={deleteUser}
                            autoFocus>
                            {/* Deletes user account when clicked */}
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </Stack>
        </ThemeProvider>
    )
}

export default DeleteAccountButton;
