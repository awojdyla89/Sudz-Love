import React, { useState } from "react";
import "./AddBeerForm.css";
import {
  Button,
  Form,
  Grid,
  Segment,
  Dimmer,
  Loader,
  Image,
} from "semantic-ui-react";

export default function AddBeerForm(props) {
  const [selectedFile, setSelectedFile] = useState("");
  const [state, setState] = useState({
    favBeer: "",
    abv: "",
    beerType: "",
    postedDate: "",
    aboutBeer: "",
  });

  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let today = new Date();
    state.postedDate = today;

    const formData = new FormData();
    formData.append("photo", selectedFile);
    formData.append("favBeer", state.favBeer);
    formData.append("abv", state.abv);
    formData.append("beerType", state.beerType);
    formData.append("postedDate", state.postedDate);
    formData.append("aboutBeer", state.aboutBeer);

    props.handleAddPost(formData);
  }

  return (
    <Grid textAlign="center" style={{ height: "25vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment className="beerform">
          <Form autoComplete="off" onSubmit={handleSubmit}>
            {props.loading ? (
              <div>
                <Dimmer active>
                  <Loader size="medium" active inline="centered">
                    Adding Post...
                  </Loader>
                </Dimmer>
                <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
              </div>
            ) : null}

            <Form.Input
              className="form-control"
              name="favBeer"
              value={state.favBeer}
              placeholder="What's the name of the Beer?"
              onChange={handleChange}
              required
            />
            <Form.Input
              className="form-control"
              name="abv"
              value={state.abv}
              placeholder="Alcohol %?"
              onChange={handleChange}
              required
            />

            <Form.Input
              className="form-control"
              name="beerType"
              value={state.beerType}
              placeholder="Beer Family."
              onChange={handleChange}
              required
            />

            <Form.Input
              className="form-control"
              name="aboutBeer"
              value={state.aboutBeer}
              placeholder="Tell us about the beer."
              onChange={handleChange}
              required
            />

            <Form.Input
              className="form-control"
              type="file"
              name="photo"
              placeholder="upload image"
              onChange={handleFileInput}
            />
            <Button
              type="submit"
              className="btn"
              color="orange"
              name="postedDate"
              value={state.postedDate}
              onChange={handleChange}
            >
              ADD BEER
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
