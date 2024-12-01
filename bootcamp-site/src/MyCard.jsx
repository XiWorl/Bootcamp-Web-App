import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyCard = (card) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card.url} />
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text> {card.instructions}</Card.Text>
        <Button variant="primary"> {card.title} </Button>
      </Card.Body>
    </Card>
    )
}