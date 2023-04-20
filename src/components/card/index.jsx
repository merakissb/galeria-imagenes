import React from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import './styles.css';


const CardContainer = ({ title, description, imageUrl }) => {
  return (
    <Container fluid='md'>
      <Row className='justify-content-md-center p-3'>
        <Col md={4}>
          <Card>
            <Card.Img variant='top' src={imageUrl} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardContainer;