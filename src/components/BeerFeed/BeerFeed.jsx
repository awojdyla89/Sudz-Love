
import React from 'react';
import { Card , Item, Loader, Dimmer, Segment, Image } from 'semantic-ui-react'
import BeerCard from '../BeerCard/BeerCard';


export default function BeerFeed({posts, isProfile, photowidth , user, addVote, removeVote, deletePost, loading}){

    return (
        <Card.Group itemsPerRow={photowidth} stackable>

        {/* {loading ? (
        <Segment>
          <Dimmer active inverted>
            <Loader size="small">Loading</Loader>
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
      ) : null} */}
           
                {posts.map((post) => {
                return ( 
                        <BeerCard  
                            key={post._id} 
                            post={post}
                            user={user}
                            photowidth={2}
                            addVote={addVote}
                            removeVote={removeVote}
                            deletePost={deletePost}
                            isProfile={isProfile}
                            />
                    )
                })}
        </Card.Group>
  
    )
}


{/* <Item.Group>
<Item>
  <Item.Image size='small' src='/images/wireframe/image.png' />

  <Item.Content>
    <Item.Header as='a'>Cute Dog</Item.Header>
    <Item.Description>{paragraph}</Item.Description>
    <Item.Extra>
      <Icon color='green' name='check' /> 121 Votes
    </Item.Extra>
  </Item.Content>
</Item>

<Item>
  <Item.Image size='small' src='/images/wireframe/image.png' />

  <Item.Content>
    <Item.Header as='a'>Cute Dog</Item.Header>
    <Item.Description>{paragraph}</Item.Description>
    <Item.Extra content='121 Votes' />
  </Item.Content>
</Item>

<Item>
  <Item.Image size='small' src='/images/wireframe/image.png' />
  <Item.Content header='Cute Dog' extra='121 Votes' />
</Item>
</Item.Group> */}