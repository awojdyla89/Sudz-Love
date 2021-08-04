
import React from 'react';
import { Card  } from 'semantic-ui-react'
import BeerCard from '../BeerCard/BeerCard';


export default function BeerFeed({posts, isProfile, photowidth , user, addVote, removeVote, deletePost}){

    return (
        <Card.Group itemsPerRow={photowidth} stackable>
           
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