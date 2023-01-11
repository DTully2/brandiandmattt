import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Accordion from 'react-bootstrap/Accordion';
import Icon1 from '../../images/quattro.jpeg';
import Icon2 from '../../images/microtel.jpeg';
import Icon3 from '../../images/airbnb.jpeg';
import '../../Styles/AccommodationsPages.css';


const AccommodationsPages = () => {
  return (
    <div className='accommodationsContainer'>
    <h1 className='accommodationsHeader'>Accommodations</h1>
    <div className='accommodationsCardContainer'>
    <CardGroup>
      <Card>
        <Card.Img className='accommodationsIcon' variant="top" src={Icon1} />
        <Card.Body>
          <Card.Title className='accommodationsTitle'>Quattro Hotel</Card.Title>
          <Card.Text>
            We have kindly booked a block. Reservations must be made before xyz date, click on the booking information tab below for more information.
          </Card.Text>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Booking Information</Accordion.Header>
        <Accordion.Body>
         In order to book under our block, please call 1 (800) 503-7262. Inform them you are booking for Mattieu Jacques and Brandi Martel's wedding.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Address</Accordion.Header>
        <Accordion.Body>
        229 Great Northern Road,
        Sault Ste. Marie,
        Ontario
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>More Information</Accordion.Header>
        <Accordion.Body>
       Here is more information about Quattro.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Card.Body>
        <Card.Footer>
          {/* <small className="text-muted">Last updated 3 mins ago</small> */}
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img className='accommodationsIcon' variant="top" src={Icon2} />
        <Card.Body>
          <Card.Title className='accommodationsTitle'>Microtel Inn & Suites by Wyndham</Card.Title>
          <Card.Text>
          We have kindly booked a block. Reservations must be made before xyz date, click on the booking information tab below for more information.
          </Card.Text>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Booking Information</Accordion.Header>
        <Accordion.Body>
         In order to book under our block, please call 1 (800) xxx-xxxx. Inform them you are booking for Mattieu Jacques and Brandi Martel's wedding.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Address</Accordion.Header>
        <Accordion.Body>
        724 Great Northern Road,
        Sault Ste. Marie,
        Ontario
        Phone: (705) 910-0180
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>More Information</Accordion.Header>
        <Accordion.Body>
       Here is more information about Microtel.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img className='accommodationsIcon' variant="top" src={Icon3} />
        <Card.Body>
          <Card.Title className='accommodationsTitle'>AirBnB Sault Ste Marie</Card.Title>
          <Card.Text>
           If you are looking for something different, and something other than a traditional hotel, feel free to look at some of the great AirBnB stays available.
          </Card.Text>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>More Information</Accordion.Header>
        <Accordion.Body>
            Here is the link for AirBnB, please feel free to contact us should you have any questions about the area, or location of places you  might want to stay.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </CardGroup>
    </div>
    </div>
  )
}

export default AccommodationsPages
