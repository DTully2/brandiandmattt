import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import "../../Styles/Carousel.css";



const PagesInfo = ({ headline, headlineDescription, location, address, startTime, startTimeSharp, linkLabel1, linkLabel2, link1, link2, img1, img2, img3 }) => {
  return (
    <div className='ceremonyContainer'>
    <Card style={{ width: '25rem', maxHeight: 'vh-100', margin: 'auto', marginBottom: '32px', marginTop: '32px' }}>
    {/* <Card.Img variant="top" src={require("../../images/thomson.JPG")} /> */}
    <div id='carouselDiv'>
        <div className='carouselContainer'>
    <Carousel className='carousel' fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ maxHeight: 300 }}
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption id='carouselCaptionWhite'>
        <h3 className='carouselCaptionHeader'>{headline}</h3>
        <p>{location}</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ maxHeight: 300 }}
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption id="carouselCaptionWhite">
        <h3 className="carouselCaptionHeader">{headline}</h3>
        <p>{startTimeSharp}</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ maxHeight: 300, }}
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption id="carouselCaptionWhite">
        <h3 className="carouselCaptionHeader">{headline}</h3>
        <p>
          Drinking game of the day will be every time Brandi yells
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  </div>
    <Card.Body>
      <Card.Title>{headline}</Card.Title>
      <Card.Text>
        {headlineDescription}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>{location}</ListGroup.Item>
      <ListGroup.Item>{address}</ListGroup.Item>
      <ListGroup.Item>{startTime} </ListGroup.Item>
    </ListGroup>
    <Card.Body style={{display: 'flex', justifyContent: 'center'}}>
      <Card.Link className='cardLinks' href={link1}>{linkLabel1}</Card.Link>
      <Card.Link className='cardLinks' href={link2} target="_blank">{linkLabel2}</Card.Link>
    </Card.Body>
  </Card>
  </div>
  )
}

export default PagesInfo
