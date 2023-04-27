import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Card as BootstrapCard } from 'react-bootstrap';
import Dictionary from './config/dictionary/es';
import './style.css';


const Card = (props) => {
  const { title, description, imageUrl } = props;

  return (
    <Container fluid='md'>
      <Row className='justify-content-md-center p-3'>
        <Col md={4}>
          <BootstrapCard>
            <BootstrapCard.Img variant='top' src={imageUrl} />
            <BootstrapCard.Body>
              <BootstrapCard.Title>{title}</BootstrapCard.Title>
              <BootstrapCard.Text>{description}</BootstrapCard.Text>
              <Button variant="primary">{Dictionary.card.button}</Button>
            </BootstrapCard.Body>
          </BootstrapCard>
        </Col>
      </Row>
    </Container>
  );
}

export default Card;