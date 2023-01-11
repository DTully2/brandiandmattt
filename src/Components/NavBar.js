import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { RiMickeyLine } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import RsvpForm from './rsvp/RsvpForm';
import * as Yup from 'yup';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

export const ErrorSchema = Yup.object().shape({
  userName: Yup.string().required("Name is Required").min(2, "Name must be longer than two characters").max(15, "Name cannot exceed 15 characters"),
  email: Yup.string().email("Invalid email").required("Required"), 
  //phone: Yup.string().matches(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/, "Not a Phone Number").required("Required"),
  plusOne: Yup.string().oneOf(['yes', 'no'], "Invalid Selection").required("Required"),
  guests: Yup.string().oneOf(['one', 'two', 'three', 'four', 'five', 'six'], "Invalid Selection").required("Required"),
  guest_name: Yup.string().required("At least ONE Name is Required").min(2, "Name must be longer than two characters").max(75, "Name cannot exceed 15 characters"),
  song: Yup.string().required("Please provide a song").min(2, "Song must be longer than two characters").max(55, "The song must be shorter than 55 characters"),
  message: Yup.string().min(5, "Must be at least 5 characters").max(150, "Message is too long").required("Required"),
  //date: Yup.date().min(new Date(), "Must be later than today's date").required("Must enter a date"),
  //time: Yup.string().required("Required"),
 }); 
 
const NavBar = ({toggle}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  //this state is to change color of mouse icon
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

const [scrollNav, setScrollNav] = useState(false);

const changeNav =()=> {
  if(window.scrollY >= 80) {
    setScrollNav(true);
  } else {
    setScrollNav(false);
  }
}

useEffect(() => {
  window.addEventListener('scroll', changeNav)
}, [])

const toggleHome = () => {
  scroll.scrollToTop();
}

  return (
    <>
    {/* the next line keeps the icons whatever color is in there */}
    <IconContext.Provider value={{ color: '#fff'}}>  
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
            <RiMickeyLine style={{color: isHovering ? 'red' : 'white'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>  
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
        <NavMenu>
            <NavItem>
            <NavLinks to="ceremony" 
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Ceremony</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="reception" 
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Reception</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="accommodations" 
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Accommodations</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="registry" 
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Registry</NavLinks>
            </NavItem>
        </NavMenu>
        <NavBtn>
            <NavBtnLink onClick={handleShow}>RSVP</NavBtnLink>
        </NavBtn>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className='modalHeader text-light' closeButton>
          <Modal.Title >RSVP</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>
        <small className='' style={{display: "flex", justifyContent: "center", color: "white"}}>Please submit before January 3, 3449</small>
        <div>

<Formik
  className="bookingCredentials"
  initialValues={{
    userName: '', //this needs to be the same as the 'name' in ContactForm, if you add a value here it acts as a placeholder
    //age: '',
    email: '',
    attending: '',
    plusOne: '',
    guests: '',
    guest_name: '',
    song: '',
    message: '',
    
  }}

  validationSchema={ErrorSchema}
  component={RsvpForm}
/>
<small className='' style={{display: "flex", justifyContent: "center", color: "white"}}>Thank you for letting us know!</small>

</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default NavBar
