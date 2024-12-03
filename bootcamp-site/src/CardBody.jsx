import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';

const CardAnnouncements = ({title, text, date}) => {
  return (
    <Card>
        <Card.Body>
            <Card.Title> {title} </Card.Title>
            <Card.Text className='date'> {date} </Card.Text>
            <Card.Text className='instructions'> {text} </Card.Text>
        </Card.Body>
    </Card>
  );
}

export default CardAnnouncements;