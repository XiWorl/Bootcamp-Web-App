import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const MyCard = ({ title, instructions, image, url, typeOfButton}) => {
    return (
        <Card style={{ width: "23rem" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text> {instructions}</Card.Text>
        <Button variant="primary" href={url} target="_blank"> {typeOfButton} </Button>
      </Card.Body>
    </Card>
    )
}

export default MyCard;