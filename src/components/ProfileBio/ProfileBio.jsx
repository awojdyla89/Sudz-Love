import React from "react";
import { Image, Grid, Segment } from "semantic-ui-react";
import "./ProfileBio.css";

function ProfileBio({ user }) {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column
          floated="right"
          textAlign="centered"
          style={{ maxWidth: 480 }}
        >
          <Segment className="bio">
            <span> " {user.beerbio} "</span>
          </Segment>

          <Image
            size="medium"
            avatar
            src={`${user.photoUrl ? user.photoUrl : "favicon.ico"} `}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default ProfileBio;
