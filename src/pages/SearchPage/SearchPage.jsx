import React, { useState , useEffect} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Button, Form, Grid, Segment, Dimmer, Loader, Image, Item, Icon, Paragraph, Dropdown, Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom';


export default function HomePage({ user, handleLogout }){  

    const [brewHouses, setBrewHouses] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [stateInput, setStateInput] = useState("");
    const [cityInput, setCityInput] = useState("");

    const getBreweriesByName = () => {
        setLoading(true);
        fetch(`https://api.openbrewerydb.org/breweries?by_name=${userInput}`)
            .then((res) => res.json())
            .then((data) => {
                setBrewHouses(data)
        // console.log("DATA--------->>>>>>>", data)
                setLoading(false);
            })
            .catch((error) => {
                console.error(error.message);
                alert("There was an error fetching the data");
            });
    };


    const getBreweriesByState = () => {
      setLoading(true);
      fetch(`https://api.openbrewerydb.org/breweries?by_state=${stateInput}`)
          .then((res) => res.json())
          .then((data) => {
              setBrewHouses(data)
      // console.log("DATA--------->>>>>>>", data)
              setLoading(false);
          })
          .catch((error) => {
              console.error(error.message);
              alert("There was an error fetching the data");
          });
  };

  const getBreweriesByCity = () => {
    setLoading(true);
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${cityInput}`)
        .then((res) => res.json())
        .then((data) => {
            setBrewHouses(data)
    // console.log("DATA--------->>>>>>>", data)
            setLoading(false);
        })
        .catch((error) => {
            console.error(error.message);
            alert("There was an error fetching the data");
        });
};

  function handleChange(e){
    setUserInput(e.target.value)
  }

  function handleState(e){
    setStateInput(e.target.value)
  }

  function handleCity(e){
    setCityInput(e.target.value)
  }

  const handleClearInputField = () => {
    
    setUserInput("");
    setStateInput("");
    setCityInput("")
    setBrewHouses([]);
};


    function formatPhoneNumber(phoneNumber) {
        var raw = ('' + phoneNumber).replace(/\D/g, '');
        var match = raw.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return null;
      }


  

  return ( 

    <Grid centered>

    <Grid.Row>
      <Grid.Column>
        <PageHeader handleLogout={handleLogout} user={user} />
      </Grid.Column>
    </Grid.Row>

{/* SEARCH BY BREWERY NAME */}
    <Grid.Row columns={3} style={{padding:"30px"}}>
      <Grid.Column>
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
               placeholder="Search breweries by name.."
               onChange={handleChange}
            //   required
          /> 

          <Button
            type="submit"
            className="btn"
            inverted color="black"
            onClick={getBreweriesByName}
          >
            Search By Name
          </Button>
         
        </Form>
      </Segment>
      </Grid.Column>




{/* SEARCH BY STATE */}
      <Grid.Column>
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
               value={stateInput}
               placeholder="Search breweries by state.."
               onChange={handleState}
            //   required
          /> 

          <Button
            type="submit"
            className="btn"
            inverted color="black"
            onClick={getBreweriesByState}
          >
            Search By State
          </Button>
        
        </Form>
      </Segment>
      </Grid.Column>

{/* SEARCH BY CITY */}
      <Grid.Column>
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
               value={cityInput}
               placeholder="Search breweries by city.."
               onChange={handleCity}
            //   required
          /> 

          <Button
            type="submit"
            className="btn"
            inverted color="black"
            onClick={getBreweriesByCity}
          >
            Search By City
          </Button>
  
        </Form>
      </Segment>
      </Grid.Column>
      </Grid.Row>

      <Grid.Row>
      <Button
            type="submit"
             color="blue"
            onClick={handleClearInputField}
          >
            Clear Search
          </Button>
      </Grid.Row>

      <Grid.Row  columns={2}>
        <Grid.Column style={{ maxWidth: 750, overflow: 'auto', maxHeight: 900 }}>

      {brewHouses.map((brewery) => {
          return (

      <Item.Group style={{backgroundColor: "rgba(128, 128, 128, 0.633)", textAlign: "center", borderRadius: "25px", padding: "13px"}} >
          
    <Item >
      <Item.Content >
        <Item.Header style={{color:"rgb(255, 192, 24)", fontSize: "23px"}} >{brewery.name}</Item.Header>
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