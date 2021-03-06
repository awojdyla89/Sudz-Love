import React, { useState, useEffect } from "react";
import { Grid, Loader } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import PageHeader from "../../components/PageHeader/PageHeader";
import BeerFeed from "../../components/BeerFeed/BeerFeed";
import userService from "../../utils/userService";
import * as postsAPI from "../../utils/postApi";
import * as votesAPI from "../../utils/votesApi";

export default function ProfilePage({ user, handleLogout }) {
  const [posts, setPosts] = useState([]);
  const [profileUser, setProfileUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { username } = useParams();

  async function getProfile() {
    try {
      const data = await userService.getProfile(username);
      setLoading(() => false);
      setPosts(() => [...data.posts]);
      setProfileUser(() => data.user);
    } catch (err) {
      console.log(err);
      setError("Profile does not Exist");
    }
  }

  async function addVote(postId) {
    try {
      const data = await votesAPI.create(postId);
      getProfile();
    } catch (err) {
      console.log(err);
    }
  }

  async function removeVote(likeID) {
    try {
      const data = await votesAPI.removeVote(likeID);
      getProfile();
    } catch (err) {
      console.log(err);
    }
  }

  async function deletePost(postId) {
    try {
      await postsAPI.removePost(postId);
      getProfile();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  if (error) {
    return (
      <>
        <PageHeader />
        <h1>{error}</h1>
      </>
    );
  }

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
      <Grid className="backgroundimg">
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <div>
            <Grid.Column
              style={{
                paddingLeft: "40px",
                maxWidth: 650,
                overflow: "auto",
                maxHeight: 1000,
              }}
            >
              <BeerFeed
                isProfile={true}
                user={user}
                posts={posts}
                deletePost={deletePost}
                loading={loading}
                addVote={addVote}
                removeVote={removeVote}
              />
            </Grid.Column>
          </div>

          <Grid.Column>
            <ProfileBio user={profileUser} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
