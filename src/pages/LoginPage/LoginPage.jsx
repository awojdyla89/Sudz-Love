import React, { useState } from 'react';
import './LoginPage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory , Link} from 'react-router-dom';
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment,
  } from "semantic-ui-react";

export default function LoginPage(props){
    const [error, setError] = useState("");
    const [state, setState] = useState({
      email: "",
      password: "",
    });

    const history = useHistory();

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e){
        e.preventDefault();

        try{
            await userService.login(state);
            props.handleSignUpOrLogin();
            history.push("/");
        } catch (err) {
            setError(err.message);
        }
    }
    

    return (
        <>
        <Grid
        
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="orange" textAlign="center">
              <Image src="beerlogo.png" /> Log-in to your
              account
            </Header>
            <Form  autoComplete="off" onSubmit={handleSubmit}>
              <Segment stacked className="loginPage">
                <Form.Input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={state.email}
                  onChange={handleChange}
                  required
                 
                />
                <Form.Input
                  name="password"
                  type="password"
                  placeholder="password"
                  value={state.password}
                  onChange={handleChange}
                  required
                />
                <Button
                  color="orange"
                  fluid
                  size="large"
                  type="submit"
                  className="btn"
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message className="signupLink" >
              New to Sudz Love? &nbsp;&nbsp;&nbsp; <Link to="/signup" className="link">Sign Up</Link>
            </Message>
            {error ? <ErrorMessage error={error} /> : null}
          </Grid.Column>
        </Grid>
      </>
    
      
      );
}

