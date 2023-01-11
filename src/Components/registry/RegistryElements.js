import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
min-height: 692px;
position: absolute;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: scroll;
background: linear-gradient(108deg, rgba(3, 165, 252, 1) 0%, rgba(230, 230, 250) 100%);
`

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
}
`
export const RegistryPic = styled.img`
border-radius: 50%;
height: 120px;
width: 120px;
display: flex;
position: relative;
float: right;
align-items: center;
top: 32px;
right: 75px;

@media screen and (max-width: 1000px) {
    margin-left: 16px;
    margin-bottom: 60px;
    margin-top: 0;
    height: 75px;
    width: 75px;
}
`

export const RegistryH1 = styled.h1`
text-align: center;
margin-left: 80px;
font-weight: 700;
color: white;
`

export const ImgWrapper = styled.div`
max-width: 555px;
height: auto;
margin: 24px auto;
`

export const Img = styled.img`
width: 100%;
padding-right: 0;
`
export const ImageLink = styled(Link)`
text-decoration: none;
color: black;

&:hover {
    color: #fff;
}
`

export const RegistryP = styled.p`
text-align: center;
margin-top: 12px;
font-weight: 600;
`

export const RegistryBtn = styled.nav`
display: flex;
justify-content: center;
align-items: center;
margin-right: 24px;
`

export const RegistryBtnLink = styled(Link)`
border-radius: 50px;
background: #fff;
white-space: nowrap;
padding: 10px 22px;
color: black;
font-size: 16px;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: rgb(207, 3, 252);
    color: #fff;
}
`;