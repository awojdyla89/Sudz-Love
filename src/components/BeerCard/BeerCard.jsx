import React from 'react';
import { Card, Icon, Image ,Button, Item, Dimmer, Loader } from 'semantic-ui-react'
import './BeerCard.css';


function BeerCard({post, isProfile, user, addVote, removeVote, deletePost, loading }) { 

    const voted = post.votes.findIndex(vote => vote.username === user.username);
    const clickHandler = voted > -1 ?  () => removeVote(post.votes[voted]._id) : () => addVote(post._id)
    const voteColor = voted > -1 ? 'orange' : 'grey';

    const posted = post.user.username === user.username
    
    const delPostHandler = () => deletePost(post._id)

          
  return (

    <Card key={post._id} className='beerCard' >

{isProfile ? ( 
    ""
    ):(

<Card.Content  textAlign='left'>
  <Image
      floated='left'
      size='medium'
      avatar
      bordered
      src={post.user.photoUrl ? post.user.photoUrl : 'favicon.ico'}
  />
  <Card.Header style={{ color: "white", fontSize: "25px" }} floated="right">{post.user.username}</Card.Header>
  <Card.Description floated="right">Posted on {new Date((post.postedDate)).toLocaleDateString()}</Card.Description>
</Card.Content>
    )}

<Image  src={`${post.photoUrl}`} wrapped ui={false}  />

<Card.Content>
<Card.Description style={{ color: "white" }} textAlign="left">
<b> Beer Name:</b> {post.favBeer} <br />
<b>ABV:</b> {post.abv}% <br />
<b>Beer Family:</b> {post.beerType} <br />
<b>About:</b> {post.aboutBeer}
</Card.Description>
</Card.Content>
<Card.Content style={{ color: "white" }} extra textAlign={'left'}>
Buzz Count <Icon  name={'beer'} size='large' color={voteColor} onClick={clickHandler} />
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
