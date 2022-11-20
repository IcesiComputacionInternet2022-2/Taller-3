import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'


class Home extends Component {
  render() {
    return (
        <Container>
            <Row>
                <Col xs={2}></Col>
                <Col>
                    <h1>Zoologico de Cali</h1>
                    <Image src ="https://pbs.twimg.com/media/DY0hgEkWAAAMQ1a?format=jpg&name=large" className='img-thumbnail' width="600"/>
                    <div className="limit">
                        <p>Aplicativo Zoologico de Cali diseñado para el curso de Computación en internet de la universidad
                           ICESI.<br></br>Esta aplicación permite la creación y consulta de tucanes para el Zoologico de Cali.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default Home;