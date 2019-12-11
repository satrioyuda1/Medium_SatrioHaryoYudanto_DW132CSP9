import React,{Component} from 'react';
import { Button,
CssBaseline,
TextField,
Link,
Grid,
Typography,
Container } from "@material-ui/core";

class Login extends Component{
  documentData;
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.state = {
          email: '',
          password: '',
          
      }
  }

handleChange= (e)=> {
  this.setState({[e.target.name]:e.target.value});
}
// on form submit...
handleFormSubmit(e) {
  e.preventDefault()
 localStorage.setItem('document',JSON.stringify(this.state));
 this.setState({
  email: '',
  password: ''
})
}

// React Life Cycle
componentDidMount() {
  this.documentData = JSON.parse(localStorage.getItem('document'));

  if (localStorage.getItem('document')) {
      this.setState({
        email: this.documentData.email,
        password: this.documentData.password,
         
  })
} else {
  this.setState({
      email: '',
      password: '',

      
  })
}
}
 render() {
     

    return (
        <div className="body-register" >
               <div className="body-register">
      <div className="contentRegister">
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div style={{marginTop: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign:"center"}}>
              <Typography component="h1" variant="h4">
                  Sign in with email
                </Typography>
                <p>Enter the email address associated with your account,and we'll send a magic link to your inbox.</p>
                        <form onSubmit={this.handleFormSubmit} className="form-login" novalidate >
                  <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    value={this.state.email} onChange={this.handleChange}
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="password"
                    value={this.state.password} onChange={this.handleChange}
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{marginTop:"40px"}}
                  >
                    continue
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="register" variant="body2">
                        <p> &lt; All sign in options</p>
                      </Link>
                    </Grid>
                  </Grid>
                </form>
           </div>
        </Container>
      </div>
      </div>

      </div>
      
      
    );
  }
}

export default Login;