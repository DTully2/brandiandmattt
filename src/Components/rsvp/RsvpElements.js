import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
//min-height: 692px;
position: relative;
bottom: 0;
left: 0;
right: 0;
top: 0;
//padding-bottom: 80px;
z-index: 1;
overflow: scroll;
background: linear-gradient(108deg, rgba(3, 165, 252, 1) 0%, rgba(230, 230, 250) 100%);
`

export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 0px;


@media screen and (max-width: 400px) {
    height: 80%;
}
`

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;

&:hover {
    color: red;
}

@media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
}
`

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px) {
    padding: 10px;
}
`

export const Form = styled.form`
background: linear-gradient(108deg, rgba(207, 3, 252, 1) 0%, rgba(210, 230, 250) 100%);
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 40px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);

@media screen and (max-width: 400px) {
    padding: 32px 32px;
    margin-top: 12px;
}
`

export const FormH1 = styled.h1`
margin-bottom: 8px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;
`

export const FormP = styled.p`
margin-bottom: 26px;
color: #fff;
font-size: 12px;
font-weight: 400;
text-align: center;
`

export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`

export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`

export const FormContainer = styled.div`
margin-bottom: 16px;
margin-top: 8px;
`

export const FormRadio = styled.input`
float: left;
width: 15px;
margin-right: 10px;
text-align: center;
cursor: pointer;
clear: left;
`

export const FormRadioLabel = styled.label`
float: left;
width: 200px;
color: #fff;
cursor: pointer;
margin-top: -5px;
`
 
export const FormSelect = styled.select`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`

export const FormTextArea = styled.textarea`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`

export const FormButton = styled.button`
background: rgb(3, 165, 252);
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
`

export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
`