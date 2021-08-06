import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Button, Form, Grid, Header, Image, Segment, Message, Dimmer, Loader} from 'semantic-ui-react'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import './SignupPage.css'



export default function SignUpPage(props){
    const [selectedFile, setSelectedFile] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError ] = useState('')
    const [state, setState] = useState({
      username: '',
      email: '',
      password: '',
      passwordConf: '',
      beerbio: ''
    });
    

    const history = useHistory();

   async function handleSubmit(e){
     setLoading(true)


        e.preventDefault();
        
        const formData = new FormData();
        formData.append('photo', selectedFile)

        for (let fieldName in state){
            console.log(fieldName, state[fieldName])
            // append the rest of the data to the form obejct
            formData.append(fieldName, state[fieldName])
          }

          try {
            console.log(formData.forEach((item) => console.log(item)))
            
            // use the userService to make the fetch request
            await userService.signup(formData);
  
            // Route to wherever you want!
            // after you get a response from the server from 
            // the signup request, you need to grab the token from 
            // local storage and set the user!
            props.handleSignUpOrLogin()
            history.push('/')
          
          
          } catch (err) {
            // Invalid user data (probably duplicate email)
            console.log(err.message)
            setError(err.message)
          }
    setLoading(false);
    }

    function handleFileInput(e){
        //console.log("BIO Photo File:-->", e.target.files)
        setSelectedFile(e.target.files[0])
    }

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

 
    return (
        
        <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='orange' textAlign='center'>
                <Image src='beerlogo.png' /> Sign Up!    
              </Header>            
                <Form autoComplete="off"  onSubmit={handleSubmit}>

                {loading ? (
                <div>
                    <Dimmer active >
                    <Loader size="big" active inline='centered'>Creating User...</Loader>
                    </Dimmer>
                    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                </div>
                ) : null} 


                <Segment className="signupPage" stacked>               
                    <Form.Input                    
                      name="username"
                      placeholder="username"
                      value={state.username}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input
                      type="email"                  
                      name="email"
                      placeholder="email"
                      value={ state.email}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input             
                      name="password"
                      type="password"
                      placeholder="password"
                      value={ state.password}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input     
                      name="passwordConf"
                      type="password"
                      placeholder="Confirm Password"
                      value={ state.passwordConf}
                      onChange={handleChange}
                      required
                    />
                    <Form.TextArea label='List Favorite Beers here...' placeholder='My Favorite beer is...' name="beerbio" onChange={handleChange}/>
                    <Form.Field> 
                        <Form.Input
                          type="file"
                          name="photo"
                          placeholder="upload image"
                          onChange={handleFileInput}
                          required
                          />      
                          </Form.Field>
                          <Button type="submit" className="btn"  color="orange">
                          Signup
                        </Button>
                        </Segment>
                        <Message className="signupLink" >
                        Already Have An Account? &nbsp;&nbsp;&nbsp; <Link to="/login" className="link">Log In</Link>
                        </Message>

                        {error ? <ErrorMessage error={error} /> : null}
                      </Form>
                     
                  </Grid.Column>
                </Grid>
              </>
      
        
      );   
    
}
