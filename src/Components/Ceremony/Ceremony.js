import React from 'react'
import PagesInfo from './PagesInfo';
import { infoObjOne, } from './Data';

const Ceremony = () => {
  return (
    <>
     <PagesInfo {...infoObjOne}/>
    </>
  )
}

export default Ceremony
