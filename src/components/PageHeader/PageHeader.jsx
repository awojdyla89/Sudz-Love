import React from 'react';
import { Header, Segment, Image, Icon, Menu, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './PageHeader.css';

export default function PageHeader({user, handleLogout}){

    return(
 
<Menu secondary pointing className="headerStyle">
{/* <Link style={{ fontSize: 20 }} to={`/${user.username}`} >
    <Image size="tiny"   src={user.photoUrl ? user.photoUrl : "favicon.ico"} ></Image>
</Link> */}
<Menu.Item>
    <Button as={Link} to={`/${user.username}`} inverted color="yellow"><Icon name="user circle"></Icon>{user.username}'s Profile</Button>
    </Menu.Item>

{/* <Menu.Item as={Link} to="/" style={{ fontSize: 15 }}>{user.username}'s <br /> Profile</Menu.Item> */}
<Menu.Item >
    <Button as={Link} to="/" inverted color="orange" ><Icon name="home"></Icon>
      Home
    </Button>
  </Menu.Item>



<Menu.Item position="right" style={{ fontSize: 49, fontFamily: 'Chalkduster, fantasy', textShadow: "-1px 1px 2px orange", fontWeight: 600 }}>Sudz Love</Menu.Item>



{/* ---------------------- */}

  {/* ---------------------- */}

  <Menu.Item position="right">
    <Button as={Link} to="/main" primary inverted color="blue" ><Icon name="add"></Icon>
      Beer Feed
    </Button>
  </Menu.Item>

  <Menu.Item >
    <Button as={Link} to="/search"  inverted color="green" ><Icon name="search"></Icon>
      Brewery Search
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

