import React from 'react';
import Header from '../../components/PageHeader/PageHeader'
import { Grid, Loader } from "semantic-ui-react";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function MainPage({user, handleLogout}){

    return (
        <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <PageHeader handleLogout={handleLogout} user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          {/* <AddPostForm handleAddPost={handleAddPost} /> */}
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          {/* <PostFeed
            posts={posts}
            numPhotosCol={1}
            loading={loading}
            isProfile={false}
            addLike={addLike}
            removeLike={removeLike}
            user={user}
          /> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
}