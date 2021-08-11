import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useHistory, Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Dimmer,
  Loader,
  Menu,
} from "semantic-ui-react";

export default function LoginPage(props) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();

    try {
      await userService.login(state);
      props.handleSignUpOrLogin();
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <>
      <Grid textAlign="center" style={{ height: "100vh" }} >
        <Grid.Row>
          <Grid.Column>
            <Menu secondary pointing className="headerStyle">
              <Menu.Item
                style={{
                  margin: "auto",
                  width: "50%",
                  padding: "29px",
                  fontSize: 51,
                  fontFamily: "Chalkduster, fantasy",
                  textShadow: "-1px 1px 2px orange",
                  fontWeight: 600,
                }}
              >
                <div style={{ margin: "auto", width: "75%", padding: "10px" }}>
                  Sudz Love
                </div>
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="orange" textAlign="center">
              <Image src="beerlogo.png" /> Log-in to your account
            </Header>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              {loading ? (
                <div>
                  <Dimmer active>
                    <Loader size="large" active inline="centered">
                      Signing In...
                    </Loader>
                  </Dimmer>
                  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                </div>
              ) : null}

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
            <Message className="signupLink">
              New to Sudz Love? &nbsp;&nbsp;&nbsp;{" "}
              <Link to="/signup" className="link">
                Sign Up
              </Link>
            </Message>
            {error ? <ErrorMessage error={error} /> : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
