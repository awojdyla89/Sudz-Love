import React from 'react';
import { Segment } from 'semantic-ui-react';

export default function Header(){

    return(
       <Segment>
           <header>This is the Header</header>
       </Segment>

    )
}


{/* <Segment clearing>
<Header as='h2' floated='right'>
    <Link to="/"><Icon name="home"></Icon></Link>
    <Link to='' onClick={handleLogout}>Logout</Link>
</Header>
<Header as='h2' floated='left'>
    <Link to={`/${user.username}`}><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image></Link>          
</Header>
</Segment> */}