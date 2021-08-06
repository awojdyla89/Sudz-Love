import React, { useState , useEffect} from 'react';

import { Button, Form, Grid, Segment, Dropdown, Menu } from 'semantic-ui-react'
import './AddBeerForm.css'

export default function AddBeerForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    favBeer: '',
    abv: '',
    beerType: '',
    aboutBeer: ''
  })

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('photo', selectedFile)
    formData.append('favBeer', state.favBeer)
    formData.append('abv', state.abv)
    formData.append('beerType', state.beerType)
    formData.append('aboutBeer', state.aboutBeer)
    
    props.handleAddPost(formData); // calling our function!
    
    // Have to submit the form now! We need a function!
  }

//   const beerTypes = [
//     { key: '0', text: 'Ale', value: 'Ale' },
//     { key: '1', text: 'Lager', value: 'Lager' },
//     { key: '2', text: 'Stout', value: 'Stout' },
//     { key: '3', text: 'Blonde Ale', value: 'Blonde Ale' },
//     { key: '4', text: 'Brown Ale', value: 'Brown Ale' },
//     { key: '5', text: 'Pale Ale', value: 'Pale Ale' },
//     { key: '6', text: 'Indian Pale Ale', value: 'Indian Pale Ale' },
//     { key: '7', text: 'Wheat', value: 'Wheat' },
//     { key: '8', text: 'Pilsner', value: 'Pilsner' },
//     { key: '9', text: 'Sour Ale', value: 'Sour Ale' },

//   ]

 
  

  return (
    
    <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment className="beerform">
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
            
              <Form.Input
                  className="form-control"
                  name="favBeer"
                  value={state.favBeer}
                  placeholder="What's the name of the Beer?"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                  className="form-control"
                  name="abv"
                  value={state.abv}
                  placeholder="Alcohol %?"
                  onChange={handleChange}
                  required
              />       

              <Form.Input
                  className="form-control"
                  name="beerType"
                  value={state.beerType}
                  placeholder="Beer Family."
                  onChange={handleChange}
                  required
              />  
{/*                   
                            <Form.Select
                                name="beerType"
                                
                                options={beerTypes}
                                onChange={handleChange}
                                value={state.beerType}
                                label="beerType"  
                                required              
                            /> */}

              <Form.Input
                  className="form-control"
                  name="aboutBeer"
                  value={state.aboutBeer}
                  placeholder="Tell us about the beer."
                  onChange={handleChange}
                  required
              /> 

              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />   
              <Button
                type="submit"
                className="btn"
                color="orange"
              >
                ADD BEER
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
   
  ); 
}

{/* 
              <Menu vertical>
                <Dropdown 
                placeholder="Beer Family"
                name="beerType"
                value={state.beerType}
                onChange={handleChange}
                required
                >
                <Dropdown.Menu>
                    <Dropdown.Item>Ale</Dropdown.Item>
                    <Dropdown.Item>Lager</Dropdown.Item>
                    <Dropdown.Item>Porter</Dropdown.Item>
                    <Dropdown.Item>Stout</Dropdown.Item>
                    <Dropdown.Item>Blonde Ale</Dropdown.Item>
                    <Dropdown.Item>Brown Ale</Dropdown.Item>
                    <Dropdown.Item>Pale Ale</Dropdown.Item>
                    <Dropdown.Item>Indian Pale Ale</Dropdown.Item>
                    <Dropdown.Item>Wheat</Dropdown.Item>
                    <Dropdown.Item>Pilsner</Dropdown.Item>
                    <Dropdown.Item>Sour Ale</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
               </Menu>  */}