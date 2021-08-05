import React from 'react';
import { Card, Icon, Image ,Button, Item } from 'semantic-ui-react'
import './BeerCard.css';


function BeerCard({post, isProfile, user, addVote, removeVote, deletePost }) { 

    const voted = post.votes.findIndex(vote => vote.username === user.username);
    const clickHandler = voted > -1 ?  () => removeVote(post.votes[voted]._id) : () => addVote(post._id)
    const likeColor = voted > -1 ? 'orange' : 'grey';

    const posted = post.user.username === user.username
    
    const delPostHandler = () => deletePost(post._id)
 
  return (
    <Card key={post._id} >
{isProfile ? ( 
    ""
    ):(

<Card.Content textAlign='left'>
  <Image
      floated='left'
      size='medium'
      avatar
      bordered
      src={post.user.photoUrl ? post.user.photoUrl : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
  />
  <Card.Header floated="right">{post.user.username}<Card.Meta floated="right">Joined in 2016</Card.Meta></Card.Header>
  
  
</Card.Content>
    )}

<Image size="tiny" src={`${post.photoUrl}`} wrapped ui={false} />
<Card.Content>
<Card.Description textAlign="left">
<b> Beer Name:</b> {post.favBeer} <br />
<b>ABV:</b> {post.abv}% <br />
<b>Beer Family:</b> {post.beerType} <br />
<b>About:</b> {post.aboutBeer}
</Card.Description>
</Card.Content>
<Card.Content extra textAlign={'left'}>
Buzz Count <Icon  name={'beer'} size='large' color={likeColor} onClick={clickHandler} />
 {post.votes.length} 
</Card.Content>

{posted ? (
  
  <Button color="red" onClick={delPostHandler}>Delete</Button>
):(
  ''
)}
</Card> 
  );
}

export default BeerCard;

{/* <Card key={post._id}>
{isProfile ? ( 
    ""
    ):(

<Card.Content textAlign='left'>
  <Image
      floated='left'
      size='medium'
      avatar
      src={post.user.photoUrl ? post.user.photoUrl : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
  />
  <Card.Header floated="right">{post.user.username}</Card.Header>
  
</Card.Content>
    )}

<Image size="small" src={`${post.photoUrl}`} wrapped ui={false} />
<Card.Content>
<Card.Description>
{post.caption}
</Card.Description>
</Card.Content>
<Card.Content extra textAlign={'right'}>
<Icon name={'beer'} size='large' color={likeColor} onClick={clickHandler} />
{post.votes.length} Buzz Count
</Card.Content>

{posted ? (
  
  <Button color="red" onClick={delPostHandler}>Delete</Button>
):(
  ''
)}

</Card> */}

{/* <Item key={post._id}>
        {isProfile ? ( 
            ""
            ):(
   
      <Item.Content textAlign='left'>
          <Image
              floated='left'
              size='medium'
              avatar
              src={post.user.photoUrl ? post.user.photoUrl : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
          />
          <Item.Header floated="right">{post.user.username}</Item.Header>
          
      </Item.Content>
            )}
  
      <Image size="small" src={`${post.photoUrl}`} wrapped ui={false} />
      <Item.Content>
      <Item.Description>
        {post.caption}
      </Item.Description>
      </Item.Content>
      <Item.Content extra textAlign={'right'}>
        <Icon name={'beer'} size='large' color={likeColor} onClick={clickHandler} />
        {post.votes.length} Buzz Count
      </Item.Content>
      
      {posted ? (
          
          <Button color="red" onClick={delPostHandler}>Delete</Button>
      ):(
          ''
      )}
      
    </Item> */}