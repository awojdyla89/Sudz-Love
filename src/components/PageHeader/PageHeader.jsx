import React from 'react';
import { Header, Segment, Image, Icon, Menu, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './PageHeader.css';

export default function PageHeader({user, handleLogout}){

    return(
        
    //    <Segment clearing className='headerStyle'>
    //        <Header size="huge" floated="left">
    //            <Link to={`/${user.username}`} ><Image  src={user.photoUrl ? user.photoUrl : "favicon.ico"} avatar></Image></Link><br/> {user.username}'s Profile
    //        </Header>

    //        <Header size="huge" floated="right">
    //            <Link to="/"><Icon color="orange" name="home"></Icon>Home</Link><br />
    //            <Link to='' onClick={handleLogout}><Icon color="red" name="sign-out"></Icon>Logout</Link>
    //        </Header>
    //        <h1>Sudz Love</h1>
    //    </Segment>
       
  

<Menu secondary pointing className="headerStyle">
<Link style={{ fontSize: 20 }} to={`/${user.username}`} >
    <Image size="tiny"  src={user.photoUrl ? user.photoUrl : "favicon.ico"} ></Image>
    <Button inverted color="yellow">{user.username}'s Profile</Button>
</Link>
{/* <Menu.Item as={Link} to="/" style={{ fontSize: 15 }}>{user.username}'s <br /> Profile</Menu.Item> */}
<Menu.Item position="right" style={{ fontSize: 35 }}>Sudz Love</Menu.Item>



  <Menu.Item position="right">
    <Button as={Link} to="/" primary inverted color="blue" ><Icon name="add"></Icon>
      Beer Feed
    </Button>
  </Menu.Item>
  


  <Menu.Item>
    {" "}
    <Button onClick={handleLogout} inverted color="red" ><Icon name="log out"></Icon>
      Logout
    </Button>
  </Menu.Item>

</Menu>
    )
}

