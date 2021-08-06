
import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import {  Grid } from 'semantic-ui-react';
import './HomePage.css';

export default function HomePage({ user, handleLogout }){  

  return ( 
    <div className="backgroundimg">
        <Grid >
        <Grid.Row>
          <Grid.Column >
            <PageHeader user={user} handleLogout={handleLogout}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2} className="homePage">
          <Grid.Column width={12}>
          <h2 className="title">Welcome to Sudz Love</h2>
          <h2 className="title">Post your beers!</h2>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
}