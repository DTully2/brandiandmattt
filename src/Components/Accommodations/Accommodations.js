import React from 'react';
import Icon3 from '../../images/airbnb.jpeg';
import Icon2 from '../../images/microtel.jpeg';
import Icon1 from '../../images/quattro.jpeg';
import '../../Styles/App.css'
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesP, BtnWrap } from './AccommodationsElements';
import { Button } from '../ButtonElement';

const Services = ({
  primary,
  dark,
  dark2}) => {
  return (
    <ServicesContainer id='accommodations'>
      <ServicesH1>Accommodations</ServicesH1>
      <ServicesWrapper>
        <a className="accommodationsTag" href="https://quattrossm.com/" target='_blank' rel='noreferrer'>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Quattro Hotel</ServicesH2>
          <ServicesP>
            There is a block booked off, for the wedding. 
          </ServicesP>
        </ServicesCard>
        </a>
        <a className="accommodationsTag"  href="https://www.wyndhamhotels.com/en-ca/microtel/sault-sainte-marie-ontario/microtel-inn-and-suites-by-wyndham-sault-ste-marie/overview?CID=LC:MT::GGL:RIO:National:45802&iata=00093796" target="_blank" rel='noreferrer'>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Microtel Inn by Wyndham</ServicesH2>
          <ServicesP>Click photo for more info about a stay with Microtel.</ServicesP>
        </ServicesCard>
        </a>
        <a className="accommodationsTag" href="https://www.airbnb.ca/a/stays/Sault-Ste-Marie--Ontario--Canada?sem_brand_destination_erf=true&c=.pi0.pk355652324_64070011577&localized_ghost=true&gclid=Cj0KCQiAg_KbBhDLARIsANx7wAz5IU_QCWml_dQ4m2iAbW_ch5UPfoWvPvjc6JymqPTDfR01hoXdbv8aAmXMEALw_wcB" target='_blank' rel='noreferrer'>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Air BNB</ServicesH2>
          <ServicesP>Looking for something other than a hotel. Check out airbnb.</ServicesP>
        </ServicesCard>
        </a>
      </ServicesWrapper>
      <BtnWrap>
      <Button
                    to='/accommodations'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {'More Info'}
                  </Button>
                </BtnWrap>
    </ServicesContainer>
  );
};

export default Services;
