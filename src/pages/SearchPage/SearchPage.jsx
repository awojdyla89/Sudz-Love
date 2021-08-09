import React, { useState , useEffect} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Button, Form, Grid, Segment, Dimmer, Loader, Image, Item, Icon, Paragraph, Dropdown, Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom';


export default function HomePage({ user, handleLogout }){  

    const [brewHouses, setBrewHouses] = useState([])
    const [userInput, setUserInput] = useState("")
    const [loading, setLoading] = useState(false);

    const getBreweries = () => {
        setLoading(true);
        fetch(`https://api.openbrewerydb.org/breweries/search?query=${userInput}`)
            .then((res) => res.json())
            .then((data) => {
                setBrewHouses(data)

        console.log("DATA--------->>>>>>>", data)
        console.log(data.website_url)
                // setTimeout(function () {
                //     // If the response of the data array is empty
                //     if (data.length < 1) {
                //         setEmptyResult(true); // NO results for the query
                //     }
                //     setBreweries(data); // Set the breweries array from the response
                //     setLoading(false); // Set the loading state back to false
                // }, 500);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error.message);
                alert("There was an error fetching the data");
            });
    };


    function formatPhoneNumber(phoneNumber) {
        var raw = ('' + phoneNumber).replace(/\D/g, '');
        var match = raw.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return null;
      }


        // const brewArr = brewHouses.map((brewery) => (
        //     <>
        //     <li key={brewery.id}>
        //         <h3>Name: {brewery.name}</h3>
        //         <h3>City: {brewery.city}</h3>
        //         <h3>State: {brewery.state}</h3>
        //     </li>
        //     </>
        // ))
  
    function handleChange(e){
      setUserInput(e.target.value)
    }

  return ( 

    <Grid centered>

    <Grid.Row>
      <Grid.Column>
        <PageHeader handleLogout={handleLogout} user={user} />
      </Grid.Column>
    </Grid.Row>


    <Grid.Row>
    <Segment className="beerform"> 
        <Form  autoComplete="off" >
            {loading ? (
            <div>
                <Dimmer active >
                <Loader size="medium" active inline='centered'>searching breweries...</Loader>
                </Dimmer>
                <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </div>
            ) : null} 
   
          <Form.Input
          type="text"
              className="brewery-form"
              name="aboutBeer"
               value={userInput}
               placeholder="Search breweries.."
              onChange={handleChange}
            //   required
          /> 

          <Button
            type="submit"
            className="btn"
            inverted color="black"
            // name="postedDate"
            // value={state.postedDate}
            onClick={getBreweries}
          >
            Search For Brewery
          </Button>
        </Form>
      </Segment>
      </Grid.Row>

      <Grid.Row  columns={2}>
          
        <Grid.Column style={{ maxWidth: 750, overflow: 'auto', maxHeight: 900 }}>

{brewHouses.map((brewery) => {
    return (



      <Item.Group style={{backgroundColor: "rgba(128, 128, 128, 0.633)", textAlign: "center", borderRadius: "25px", padding: "13px"}} >
          
    <Item >
      {/* <Item.Image size='tiny' src='/images/wireframe/image.png' /> */}

      <Item.Content >
        <Item.Header style={{color:"rgb(21, 91, 158)", fontSize: "23px"}} >{brewery.name}</Item.Header>
        <Item.Meta>
          <span><b>Address: </b> {brewery.street} <br />{brewery.city} , {brewery.state} <br />{brewery.postal_code} <br /> </span>
          <span><b>Phone: </b> {formatPhoneNumber(brewery.phone)} </span>
        </Item.Meta>
        <Item.Description>  <a href={brewery.website_url}><Button  inverted color="olive">{brewery.name} Website
    </Button></a>
     </Item.Description>
      </Item.Content>
    </Item>

  </Item.Group>
 

    )
})}
</Grid.Column>
      </Grid.Row>
  </Grid>

    )
}