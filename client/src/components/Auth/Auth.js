import React from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container}
       from 'material-ui/core';
import LockOutlinedIcon 
       from '@material-ui/icons/LockOutlined'
import useStyles from './styles';
const Auth = ()=>{
	const classes = useStyles();
	const isSignup = false;
	const handleSubmit=()=>{};
	return(
		<Container component="main" maxWidth="xs">
		  <Paper 
		   className={classes.paper} 
		   elevation={3}>
		  <Avatar className={classes.avater}>
		  <LockOutlinedIcon />
		  </Avatar>
		  <Typography variant="h5"
		  >{isSignup?'Sign Up': 'Sign In'}</Typography>
		  <form 
		    className={classes.form} 
		    onSubmit={handleSubmit}>
              <Grid container spacing={2}>
              {
              	isSignup&&(
              		<>
                <TextField name></TextField>  
              		</>
              		)}
                </Grid>
		  </form>
		  </Paper>
		</Container>
		);
  };
  export default Auth;