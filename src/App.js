import React, { Component }  from 'react';
import './App.css';
import {Button, Container, Row, Col } from 'react-bootstrap'
import axios from "axios" 


class App extends Component {

  

  
  constructor(props) {
    super(props)
    this.state = {
      getKey: '',
      insertKey: '',
      insertValue: '',
      deleteKey: '',

    }

    console.log("Constructor called")

  }

  handleChange = (event) => {
    event.preventDefault()

    if(event.target.name == "getKey") {
      this.setState({getKey: event.target.value});
    } else if(event.target.name == "insertKey") {
      this.setState({insertKey: event.target.value});
    } else if(event.target.name == "insertValue") {
      this.setState({insertValue: event.target.value});
    } else if(event.target.name == "deleteKey") {
      this.setState({deleteKey: event.target.value});
    }
    
  }

  handleGet = async (event) => {
    event.preventDefault()
    try{
      const response = await axios.get(`http://13.57.34.243/${this.state.getKey}`);
      console.log('response  ', response)
      return response.data;
    }catch(error) {
        return [];
    }
  }

  handleInsert = async (event) => {
    event.preventDefault()
    console.log(this.state.insertKey)
    console.log(this.state.insertValue)
    await axios.put(`http://13.57.34.243/${this.state.insertKey}`, `${this.state.insertValue}`)
    .then(() => console.log("success"));

  }

  handleDelete = async (event) => {
    event.preventDefault()
    console.log(this.state.deleteKey)
    axios.delete(`http://13.57.34.243/${this.state.deleteKey}`)
    .then(() => console.log("Deleted"));
  }


  render() {

   return (
    <div className="App">
        <Container>
          <Row>
            <Col>
              <h1>TCSS558 Homework 1: Key/Value Store</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Get Value</h2>
              <form onSubmit={this.handleGet}>
                <label>
                  Fill in Key: 
                  <input value={this.state.getKey} onChange={this.handleChange} name="getKey"/>
                </label>
                <input type="submit" value="Submit" />
              </form>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Insert Key/Value Pair</h2>
              
              <Row>
                <form onSubmit={this.handleInsert}>
                  <label>
                    Fill in Key: 
                    <input value={this.state.insertKey} onChange={this.handleChange} name="insertKey"/>
                  </label>
                  <label>
                    Fill in Value: 
                    <input value={this.state.insertValue} onChange={this.handleChange} name="insertValue"/>
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </Row>
              
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Delete Key/Value Pair</h2>
              <form onSubmit={this.handleDelete}>
                <label>
                  Fill in Key: 
                  <input value={this.state.deleteKey} onChange={this.handleChange} name="deleteKey"/>
                </label>
                <input type="submit" value="Submit" />
              </form>
            </Col>
          </Row>
        </Container>
     
    </div>
  );
   }
}

export default App;
