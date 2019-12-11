import React, { Component } from 'react';
import { 
  Button, 
  CssBaseline, 
  TextField, 
  Typography, 
  makeStyles,
  Paper, 
  Container, 
  Link,
  Card } from '@material-ui/core';

class Register extends Component{
    render() {    
        return (
            <div>
     <div className="body-register">
      <div className="contentRegister">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div style={{marginTop: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign:"center"}}>
            <Typography  variant="h4" >
              Join Medium.
            </Typography>
            <p>Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</p> 
            <form style={{width: '100%', 
    marginTop: '1px',}} noValidate>
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Your Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Your Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="email"
                label=" Your Email "
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
             
              >
                Registration
              </Button>
              <div>
                <p>all ready have an account?
                  <Link href="login" variant="body2">
                     Sign in
                  </Link>
                </p>
              </div>
            </form>
             <Typography variant="body2" color="textSecondary" align="center">
         To make Medium work, we log user data and share it with servive provides. Click "sign Up" above to accept Medium's 
        <Link color="inherit" href="https://material-ui.com/">
          Terms of Services
        </Link>{' '}
        &
        <Link color="inherit" href="https://material-ui.com/">
          Privacy Policy
        </Link>{' '}
      </Typography>
          </div>
        </Container>
      </div>
      </div>
      </div>
        )
    }
}

export default Register;