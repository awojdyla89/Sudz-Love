import React, { useState, useEffect } from 'react';
import { Grid, Loader } from "semantic-ui-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import AddBeerForm from '../../components/AddBeerForm/AddBeerForm';
import BeerFeed from '../../components/BeerFeed/BeerFeed'; 
import * as postsAPI from '../../utils/postApi';

export default function MainPage({user, handleLogout}){

    const [posts, setPosts] = useState([])


    async function handleAddPost (post){
   
        console.log(post);
        //setLoading(true);
        const data = await postsAPI.create(post);
        console.log(data.post, ' This is new BEER', data, ' data variable')
        setPosts(posts => [data.post, ...posts])
        //setLoading(false);
      }

      async function getPosts(){

        try {
          const data = await postsAPI.getAll();
          setPosts([...data.posts])
        } catch(err){
          console.log(err, ' this is the error')
        }
      }

      useEffect(() => {
        getPosts()
      }, [])

    return (
        <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <PageHeader handleLogout={handleLogout} user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <AddBeerForm handleAddPost={handleAddPost} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <BeerFeed
             posts={posts}
             numPhotosCol={1}
            // loading={loading}
            // isProfile={false}
            // addLike={addLike}
            // removeLike={removeLike}
             user={user}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
}