import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyCard = ({title, instructions, url}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text> {instructions}</Card.Text>
        <Button variant="primary"> {title} </Button>
      </Card.Body>
    </Card>
    )
}

export default MyCard;