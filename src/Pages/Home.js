import React, {useState} from 'react'
import Footer from '../Components/Footer/Footer';
import HeroSection from '../Components/HeroSection/HeroSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../Components/InfoSection/Data';
import InfoSection from '../Components/InfoSection/InfoSection';
import NavBar from '../Components/NavBar'
import Services from '../Components/Accommodations/Accommodations';
import Sidebar from '../Components/Sidebar/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
  <>
  <Sidebar isOpen={isOpen} toggle={toggle} />
  <NavBar toggle={toggle} />
  <HeroSection />
  <InfoSection {...homeObjOne}/>
  <InfoSection {...homeObjTwo}/>
  <Services />
  <InfoSection {...homeObjThree}/>
  <Footer />
  </>
  )
}

export default Home
