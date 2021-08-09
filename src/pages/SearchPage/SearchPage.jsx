import React, { useState , useEffect} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Button, Form, Grid, Segment, Dimmer, Loader, Image, Dropdown, Menu } from 'semantic-ui-react'


export default function HomePage({ user, handleLogout }){  

    const [brewHouses, setBrewHouses] = useState([])
    const [userInput, setUserInput] = useState("")

    const getBreweries = () => {
        fetch(`https://api.openbrewerydb.org/breweries/search?query=${userInput}`)
            .then((res) => res.json())
            .then((data) => {
                setBrewHouses(data)

console.log("DATA--------->>>>>>>", data)
                // setLoading(true);
                // setTimeout(function () {
                //     // If the response of the data array is empty
                //     if (data.length < 1) {
                //         setEmptyResult(true); // NO results for the query
                //     }
                //     setBreweries(data); // Set the breweries array from the response
                //     setLoading(false); // Set the loading state back to false
                // }, 500);
            })
            .catch((error) => {
                console.error(error.message);
                alert("There was an error fetching the data");
            });
    };


        const brewArr = brewHouses.map((brewery) => (
            <>
            <li key={brewery.id}>
                <h3>Name: {brewery.name}</h3>
                <h3>City: {brewery.city}</h3>
                <h3>State: {brewery.state}</h3>
            </li>
            </>
        ))
  
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

    <Segment className="beerform">
        
        <Form  autoComplete="off" >

            {/* {props.loading ? (
            <div>
                <Dimmer active >
                <Loader size="medium" active inline='centered'>Adding Post...</Loader>
                </Dimmer>
                <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </div>
            ) : null}  */}
   

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
            color="orange"
            // name="postedDate"
            // value={state.postedDate}
            onClick={getBreweries}
          >
            Search For Brewery
          </Button>
        </Form>
      </Segment>

      <div>
          <ul>{brewArr}</ul>
      </div>

      

     

  </Grid>












    )
}