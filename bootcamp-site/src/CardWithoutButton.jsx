import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const CardWithoutButton = ({ title, mentors, mentees}) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text> Mentors: </Card.Text>
                <Card.Text> {mentors} </Card.Text>
                <Card.Text> Mentees: </Card.Text>
                <Card.Text> {mentees} </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardWithoutButton;