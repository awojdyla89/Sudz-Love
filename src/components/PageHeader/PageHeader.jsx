import React from 'react';
import { Header, Segment, Image, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default function PageHeader(){

    return(

       <Segment clearing>
           <Header size="huge" floated="left">
               <Link to="/"><Icon color="black"name="address card"></Icon></Link><br/>Profile
           </Header>

           <Header size="huge" floated="right">
               <Link to="/"><Icon color="orange" name="home"></Icon></Link><br />
               <Link to='' >Logout</Link>
           </Header>
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