import React, {useState} from 'react'
import Ceremony from '../Components/Ceremony/Ceremony';
import ScrollToTop from '../Components/ScrollToTop';
import NavBarPages from '../Components/NavbarPages/NavbarPages';
import SidebarPages from '../Components/Sidebar/SidebarPages';

const CeremonyPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <ScrollToTop />
        <SidebarPages isOpen={isOpen} toggle={toggle} />
        <NavBarPages toggle={toggle} />
        <Ceremony />
        </>
    );
};

export default CeremonyPage;