
import React from 'react';
import { Card  } from 'semantic-ui-react'
import BeerCard from '../BeerCard/BeerCard';


export default function BeerFeed({posts, numPhotosCol , user, addVote, removeVote}){

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
           
                {posts.map((post) => {
                return ( 
                        <BeerCard  
                            key={post._id} 
                            post={post}
                            numPhotosCol={1}
                           // loading={loading}
                           // isProfile={false}
                            addVote={addVote}
                            removeVote={removeVote}
                            user={user}
                            />
                    )
                })}
        </Card.Group>
  
    )
}