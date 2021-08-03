import React, { useState, useEffect } from 'react';
import {  Grid , Loader} from 'semantic-ui-react'
import ProfileBio from '../../components/ProfileBio/ProfileBio';
//import ProfilePostDisplay from '../../components/ProfilePostDisplay/ProfilePostDisplay';
import PageHeader from '../../components/PageHeader/PageHeader';
import BeerFeed from "../../components/BeerFeed/BeerFeed";
import userService from '../../utils/userService';
import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";


export default function ProfilePage({user, handleLogout}){

    const [posts, setPosts] = useState([]);
    const [profileUser, setProfileUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    const { username } = useParams();
    
    async function getProfile() {
        try {
          const data = await userService.getProfile(username);
          console.log(data, " data");
    
          // data is the response from the controller function /api/users/profile
          // go to the controller function and look at what is returned
          // posts and user are the properties on the data object
          setLoading(() => false);
          setPosts(() => [...data.posts]);
          setProfileUser(() => data.user);
        } catch (err) {
          console.log(err);
          setError("Profile does not Exist");
        }
      }

    useEffect(() => {
        getProfile()
    }, [])

    if (loading) {
        return (
          <Grid
            textAlign="center"
            style={{ height: "100vh" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Loader size="large" active>
                Loading
              </Loader>
            </Grid.Column>
          </Grid>
        );
      }
    
      return (
        <>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <PageHeader user={user} handleLogout={handleLogout}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <ProfileBio user={profileUser} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column style={{ maxWidth: 750 }}>
                <BeerFeed
                  isProfile={true}
                  posts={posts}
                  numPhotosCol={3}
                  
                  user={user}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </>
      );
    }