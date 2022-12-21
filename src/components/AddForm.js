import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';


export default class AddForm extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            rank: "",
            swordType: "",
            url: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        // Building the submit New Character to add more characters
        let data= {
            name: this.state.name,
            rank: this.state.rank,
            swordType: this.state.swordType,
            url: this.state.url
        }
        axios.post('http://localhost:5000/demonSlayer', data)
        .then((response) => {
            window.location.reload()
          })
          .catch((error) => {
            console.log(error);
          });


        event.preventDefault();
        // Axios call to POST (add) a new character
        // Created from this.state object
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        // event.target.name : event.target.value
    }
    render() {
        return (
            <div className='form-wrapper'>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Character</Form.Label>
                    <Form.Control as="input" type="text" name="name" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rank</Form.Label>
                    <Form.Control as="input" type="text" name="rank" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Breathing Form</Form.Label>
                    <Form.Control as="input" type="text" name="swordType" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control as="input" type="text" name="url" onChange={this.handleChange} />
                </Form.Group>
                <Button className='mt-2' variant="primary" type="submit">Add Character</Button>
            </Form>
            </div>
        )
    }
}
