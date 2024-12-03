import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const CardWithoutButton = ({ title, instructions, image, url}) => {
    return (
        <Card style={{ width: "23rem" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text> {instructions}</Card.Text>
      </Card.Body>
    </Card>
    )
}

export default CardWithoutButton;