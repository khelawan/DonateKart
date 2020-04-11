/** @format */

import React from 'react';
//import p_list from "../components/p_list.json";
//import { Button, Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import data from '../components/p_list';

const Cards = ({ currency }) => {
  fetch(`$p_list.json`)
    .then((response) => response.json())
    .then((data) => console.log(data));
  const price_in_dollar = parseInt(localStorage.getItem('USD'));
  const json_data = data.list;
  if (json_data.length !== 0) {
    return (
      <div>
        <Nav className='justify-content-end'>
          <Nav.Item></Nav.Item>
        </Nav>
        <Container fluid>
          <Row>
            {json_data.map((item) => {
              return (
                <Col>
                  <Card style={{ width: '15rem' }}>
                    <Card.Img
                      variant='top'
                      style={{ padding: '0% 5% 0%' }}
                      src={item.img}
                    />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{`${currency} ${
                        currency === 'USD'
                          ? Math.round((item.price / price_in_dollar),3)
                          : item.price
                      }`}</Card.Text>
                    </Card.Body>
                  </Card>
                  <br />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
};
export default Cards;
