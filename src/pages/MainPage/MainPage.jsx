import React, { useState, useEffect } from 'react';
import { Grid} from "semantic-ui-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import AddBeerForm from '../../components/AddBeerForm/AddBeerForm';
import BeerFeed from '../../components/BeerFeed/BeerFeed'; 
import * as postsAPI from '../../utils/postApi';
import * as votesAPI from '../../utils/votesApi';
//import userService from '../../utils/userService';

export default function MainPage({user, handleLogout}){

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);


    async function handleAddPost (post){
   
        console.log(post);
        setLoading(true);
        const data = await postsAPI.create(post);
        console.log(data.post, ' This is new BEER', data, ' data variable')
        setPosts(posts => [data.post, ...posts])
        setLoading(false);
      }

      async function getPosts(){

        try {
          const data = await postsAPI.getAll();
          setPosts([...data.posts])
        } catch(err){
          console.log(err, ' this is the error')
        }
      }

      async function addVote(postId) {
        try {
          const data = await votesAPI.create(postId);
          console.log(data, " this is from addVote() Mainpage");
          getPosts();
        } catch (err) {
          console.log(err);
        }
      }
    
      async function removeVote(likeID) {
        try {
          const data = await votesAPI.removeVote(likeID);
          getPosts();
        } catch (err) {
          console.log(err);
        }
      }



    async function deletePost(postId) {
        try {
            await postsAPI.removePost(postId);
            getPosts();
        } catch (err) {
            console.log(err)
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

      <div class="seven wide column">
        <Grid.Column style={{ maxWidth: 450 }} >
          <AddBeerForm handleAddPost={handleAddPost} />
        </Grid.Column>
        </div>

        <div >
        <Grid.Column style={{ maxWidth: 550, overflow: 'auto', maxHeight: 900 }}>
          <BeerFeed
             posts={posts}
             user={user}
             photowidth={2}
             addVote={addVote}
             removeVote={removeVote}
             loading={loading}
             isProfile={false}
             deletePost={deletePost}
          />
        </Grid.Column>
        </div>

    </Grid>
    )
}