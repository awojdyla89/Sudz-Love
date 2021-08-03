import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


function BeerCard({post, isProfile, user }) { 

 
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
        <Icon name={'beer'} size='large' color={'grey'} />
        {post.likes.length} Buzz Count
          
      </Card.Content>
    </Card>
  );
}

export default BeerCard;