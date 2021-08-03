import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


function BeerCard({post, isProfile, user, addVote, removeVote }) { 

    const voted = post.votes.findIndex(vote => vote.username === user.username);
    const clickHandler = voted > -1 ?  () => removeVote(post.votes[voted]._id) : () => addVote(post._id)
    const likeColor = voted > -1 ? 'orange' : 'grey';
  

 
  return (
    <Card key={post._id}>
   
      <Card.Content textAlign='left'>
          <Image
              floated='left'
              size='medium'
              avatar
              src={user.photoUrl ? user.photoUrl : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
          />
          <Card.Header floated="right">{post.user.username}</Card.Header>
      </Card.Content>
        
  
      <Image src={`${post.photoUrl}`} wrapped ui={false} />
      <Card.Content>
      <Card.Description>
        {post.caption}
      </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={'right'}>
        <Icon name={'beer'} size='large' color={likeColor} onClick={clickHandler} />
        {post.votes.length} Buzz Count
          
      </Card.Content>
    </Card>
  );
}

export default BeerCard;