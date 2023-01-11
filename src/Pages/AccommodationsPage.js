import React, {useState} from 'react'
import ScrollToTop from '../Components/ScrollToTop';
import Sidebar from '../Components/Sidebar/Sidebar';
import NavBarPages from '../Components/NavbarPages/NavbarPages';
import AccommodationsPages from '../Components/Accommodations/AccommodationsPages';

const AccommodationsPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <ScrollToTop />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavBarPages toggle={toggle} />
        <AccommodationsPages />
        </>
    );
};

export default AccommodationsPage;