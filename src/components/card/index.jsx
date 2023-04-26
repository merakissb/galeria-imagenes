import React from 'react';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';
import Dictionary from './config/dictionary/es';
import './style.css';


const CardContainer = (props) => {
  const { title, description, imageUrl } = props;

  return (
    <Container fluid='md'>
      <Row className='justify-content-md-center p-3'>
        <Col md={4}>
          <Card>
            <Card.Img variant='top' src={imageUrl} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button variant="primary">{Dictionary.card.button}</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardContainer;