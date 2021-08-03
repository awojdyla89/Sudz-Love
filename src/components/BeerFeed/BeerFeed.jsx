
import React from 'react';
import { Card  } from 'semantic-ui-react'
import BeerCard from '../BeerCard/BeerCard';


export default function BeerFeed({posts, numPhotosCol , user}){

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
           
                {posts.map((post) => {
                return ( 
                        <BeerCard 
                            post={post} 
                            key={post._id} 
                            user={user}
                            />
                    )
                })}
        </Card.Group>
  
    )
}