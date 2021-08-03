import React from 'react';
import { Header, Segment, Image, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default function PageHeader({user, handleLogout}){

    return(

       <Segment clearing>
           <Header size="huge" floated="left">
               <Link to={`/${user.username}`}><Icon color="black"name="address card"></Icon></Link><br/> {user.username}'s Profile
           </Header>

           <Header size="huge" floated="right">
               <Link to="/"><Icon color="orange" name="home"></Icon></Link><br />
               <Link to='' onClick={handleLogout}>Logout</Link>
           </Header>
       </Segment>
    
  
    

    )
}
