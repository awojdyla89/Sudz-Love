import React from 'react';
import { Header, Segment, Image, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './PageHeader.css';

export default function PageHeader({user, handleLogout}){

    return(
        
       <Segment clearing className='header'>
           <Header size="huge" floated="left">
               <Link to={`/${user.username}`} ><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image></Link><br/> {user.username}'s Profile
           </Header>

           <Header size="huge" floated="right">
               <Link to="/"><Icon color="orange" name="home"></Icon>Home</Link><br />
               <Link to='' onClick={handleLogout}><Icon color="red" name="sign-out"></Icon>Logout</Link>
           </Header>
       </Segment>
       
  
    

    )
}
