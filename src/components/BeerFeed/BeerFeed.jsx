
import React from 'react';
import { Card  } from 'semantic-ui-react'
import BeerCard from '../BeerCard/BeerCard';


export default function BeerFeed({posts, numPhotosCol , user, addVote, removeVote, deletePost}){

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
           
                {posts.map((post) => {
                return ( 
                        <BeerCard  
                            key={post._id} 
                            post={post}
                            user={user}
                            numPhotosCol={1}
                            addVote={addVote}
                            removeVote={removeVote}
                            deletePost={deletePost}
                           // loading={loading}
                           // isProfile={false}
                            />
                    )
                })}
        </Card.Group>
  
    )
}