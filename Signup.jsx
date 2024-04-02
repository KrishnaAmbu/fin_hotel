import React from 'react'
import { Button, TextField, Typography, } from '@mui/material'

const Signup = () => {

  return (
    <div>
        <br /><br /><br /><br /><br />
        <Typography fontFamily='fantasy' variant='h3'  >Signup</Typography>
        <br /><br />
        <TextField variant='outlined' color='success' label='Firstname' name='Firstname' />&nbsp;&nbsp;
        <TextField variant='outlined' color='success' label='Lastname' name='Lastname' />
        <br /><br />
        <TextField variant='outlined' color='success' label='Email' name='Email' />&nbsp;
        <TextField variant='outlined' color='success' label='Mobile no' name='Mobileno' />
        <br /><br />
        <TextField variant='outlined' color='success' label='Password' name='Password' />&nbsp;
        <TextField variant='outlined' color='success' label='Confirm password' name='Confirmpassword' />
        <br /><br />
        <Button variant='contained' color='inherit' >Submit</Button>&nbsp;
        <Button variant='contained' color='inherit'>Reset</Button>
    </div>
  )
//   }
}

export default Signup