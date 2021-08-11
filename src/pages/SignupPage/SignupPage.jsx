import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import userService from "../../utils/userService";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./SignupPage.css";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Message,
  Dimmer,
  Loader,
  Menu,
} from "semantic-ui-react";

export default function SignUpPage(props) {
  const [selectedFile, setSelectedFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
    beerbio: "",
  });

  const history = useHistory();

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", selectedFile);

    for (let fieldName in state) {
      formData.append(fieldName, state[fieldName]);
    }

    try {
      //console.log(formData.forEach((item) => console.log(item)));
      await userService.signup(formData);
      props.handleSignUpOrLogin();
      history.push("/");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
    setLoading(false);
  }

  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <Grid textAlign="center" style={{ height: "100vh" }}>
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
              <Image src="beerlogo.png" /> Sign Up!
            </Header>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              {loading ? (
                <div>
                  <Dimmer active>
                    <Loader size="big" active inline="centered">
                      Creating User...
                    </Loader>
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
                <Form.Input
                  name="passwordConf"
                  type="password"
                  placeholder="Confirm Password"
                  value={state.passwordConf}
                  onChange={handleChange}
                  required
                />
                <Form.TextArea
                  label="List Favorite Beers here..."
                  placeholder="My Favorite beer is..."
                  name="beerbio"
                  onChange={handleChange}
                />
                <Form.Field>
                  <Form.Input
                    type="file"
                    name="photo"
                    placeholder="upload image"
                    onChange={handleFileInput}
                    required
                  />
                </Form.Field>
                <Button type="submit" className="btn" color="orange">
                  Signup
                </Button>
              </Segment>
              <Message className="signupLink">
                Already Have An Account? &nbsp;&nbsp;&nbsp;{" "}
                <Link to="/login" className="link">
                  Log In
                </Link>
              </Message>

              {error ? <ErrorMessage error={error} /> : null}
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
