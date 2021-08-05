import React from 'react';
import {  Image, Grid, Segment } from 'semantic-ui-react';
import './ProfileBio.css';

function ProfileBio({user}) { 
  return (
  <Grid textAlign='center' columns={1}>
    <Grid.Row>
      <Grid.Column>
        {/* <Image src={`${user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} `} avatar size='small' /> */}
      </Grid.Column>
      <Grid.Column textAlign="left" style={{ maxWidth: 450 }}>
        {/* <Segment vertical>
           <h3> {user.username}'s Beer Posts</h3>
        </Segment> */}
        <Segment className='bio'>
           <span> " {user.beerbio} "</span>
        </Segment>
          
      </Grid.Column>
    </Grid.Row>
  </Grid>

  );
}



export default ProfileBio;