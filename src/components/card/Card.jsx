import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Card as BoostrapCard } from 'react-bootstrap';
import Dictionary from './config/dictionary/es';
import './style.css';


const Card = (props) => {
  const { title, description, imageUrl } = props;

  return (
    <Container fluid='md'>
      <Row className='justify-content-md-center p-3'>
        <Col md={4}>
          <BoostrapCard>
            <BoostrapCard.Img variant='top' src={imageUrl} />
            <BoostrapCard.Body>
              <BoostrapCard.Title>{title}</BoostrapCard.Title>
              <BoostrapCard.Text>{description}</BoostrapCard.Text>
              <Button variant="primary">{Dictionary.card.button}</Button>
            </BoostrapCard.Body>
          </BoostrapCard>
        </Col>
      </Row>
    </Container>
  );
}

export default Card;