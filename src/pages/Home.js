import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Card, Button, Tabs, Tab, Image } from 'react-bootstrap';
import AddForm from '../components/AddForm';

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            demonSlayers: [],
            didDelete: false
        }

        this.getDemonSlayers = this.getDemonSlayers.bind(this);
        this.createDemonSlayers = this.createDemonSlayers.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    } componentDidMount() { this.getDemonSlayers() }


    getDemonSlayers() {
        axios
            .get('https://dre-capstone-backend.herokuapp.com/demonSlayers')
            .then(response => {
                this.setState({
                    demonSlayers: response.data
                })

                console.log(this.state.demonSlayers)
            })
            .catch(error => {
                console.error(error)
            })
    }

    createDemonSlayers() {
        return this.state.demonSlayers.map((slayer) => {
            return (
                // Implementing the card style, Makes it more isolated for each character
                <Card key={slayer.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={slayer.url} />
                    <Card.Body>
                        <Card.Title>{slayer.name}</Card.Title>
                        <Card.Text>
                            {slayer.rank}{slayer.swordType}
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => this.handleDeleteClick(slayer.id)}>DELETE</Button>
                </Card>
            )

        })
    }

    handleDeleteClick(id) {
        axios.delete(`https://dre-capstone-backend.herokuapp.com/demonSlayer/${id}`)
            .then(response => {
                window.location.reload()

            })

    }

    render() {
        return (
            <Fragment>
                <Tabs
                    defaultActiveKey="characters"
                    className="mb-3"
                    variant="dark"
                    color="primary"
                >
                    <Tab eventKey="characters" title="Characters">
                        <div className='home-wrapper'>
                            {this.createDemonSlayers()}
                        </div>
                    </Tab>
                    
                    <Tab eventKey="addform" title="Add Character">
                        <div className='demonSlayerFam'>
                        <AddForm />
                        <div className='demon-family'>
                        <Image src="https://images-ext-2.discordapp.net/external/zIDpuTdA3UF1MiPeALSd9Uq6PViqIvmuSF6rdBusBRs/https/4.bp.blogspot.com/-fQMAHzKhDpo/X0fTBW_9jpI/AAAAAAAABEQ/hItbPA0If4gpx0gRMYNBaaZxKs4_W36EwCLcBGAsYHQ/w1200-h630-p-k-no-nu/Demon%252BSlayer%252BHindi%252BDubbed.webp?width=1190&height=625" />
                        </div>
                        </div>
                    </Tab>
                </Tabs>



            </Fragment>
        )
    }
}
