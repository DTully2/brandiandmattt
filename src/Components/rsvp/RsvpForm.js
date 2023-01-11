import React, { useState, useRef } from 'react';
import { useFormik, Field } from 'formik';
import emailjs from '@emailjs/browser';
import { ErrorSchema } from './validateForm';
import { Container, FormContainer, FormRadio, FormRadioLabel, FormWrap, FormSelect, FormTextArea, Icon, FormContent, Form, FormH1, FormP, FormLabel, FormInput, FormButton, Text } from './RsvpElements'
import { RiMickeyLine } from 'react-icons/ri';
const RsvpForm = () => {

  
 
    // const form = useRef();
        //form state object //we are decoupleing the formik here to gain more acces 
        const {handleChange,errors,handleSubmit,values,handleBlur,} = useFormik({
          initialValues: {
            userName: '',
            email: '',          
            attending: '',
            plusOne: '',
            guests: '',
            // guestNumber: '',
            guest_name: '',
            song: '',
            message: ''
          } ,
          validationSchema: ErrorSchema,
          onSubmit: values => { 
            console.log('form data ', values )
            emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, values, process.env.REACT_APP_PUBLIC_KEY) 
             
               .then((result) => {
                   console.log(result.text);
                    // e.target.reset();
               }, (error) => {
                   console.log(error.text);
               });
          
          }
        })
        // to see the values inside of the feilds as they are created. 
        //  console.log("form values", formik.values);
        //to see if there is errors in the form
         // console.log("form errors", errors);

         // not needed anymore because we are using formik
    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   const userName = e.target[0].value;
    //   const email = e.target[1].value;
    //   const attending = state;
    //   const plusOne = plusone;
    //   const guests = e.target[4].value;
    //   const guestNumber = e.target[5].value;
    //   const guest_name = e.target[6].value;
    //   const song = e.target[7].value;
    //   const message = e.target[8].value;
 
    //   let templateParams = {
    //       userName: userName,
    //       email: email,
    //       attending: attending,
    //       plusOne: plusOne, 
    //       guests: guests,
    //       guestNumber: guestNumber,
    //       guest_name: guest_name,
    //       song: song,
    //       message: message, 
    //   };
  
    //   //emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
    //     emailjs.send('service_gd7gbot1', 'template_9pn5aba', templateParams, 'user_T460qcGFHu3WS5K7aV7Yy')
    //   .then((result) => {
    //         console.log(result.text);
    //         e.target.reset();
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };
  
    // const[state, attendingState] = useState("");
    // const onClick = (e) => {
    //   let{value} = e.target;
    //   if(value=== 'yes') {
    //     attendingState('yes')
    //   }else {
    //     attendingState('no')
    //   }
    // }
  
    // const[plusone, plusOnestate] = useState("");
    // const onPick = (e) => {
    //   let {value} = e.target;
    //   // plusOnestate(value);
    //   if(value === 'no') {
    //     plusOnestate('no')
    //   }else {
    //     plusOnestate('yes')
    //   }
    // }
  return (
    // <Form ref={form} onSubmit={sendEmail}>
    <Container>
    <FormWrap >
      <Icon to='/'>
          <RiMickeyLine /> 
      </Icon>
      <FormContent>
      <Form  onSubmit={handleSubmit}>
      <FormH1>RSVP</FormH1>
                    <FormP>Please Respond by January 1st, 2099</FormP>
       
      <FormLabel htmlFor='name' className='col-form-label'>Name:</FormLabel>
      <FormInput
         className={ errors.userName ? 'input-error': "input-success"}
        //   touched.userName
        //     ? `form-control ${errors.userName ? 'invalid' : 'valid'}`
        //     : `form-control`
        // }
        name='userName'
        type='text'
        placeholder='Full Name'
        onChange={handleChange}
        value={values.userName}
        
    
      />
      {/* add the first '&' because if there is no error there is no need for the small tag
      {touched.userName && errors.userName && (
        <small className='text-warning'><strong>{errors.userName}</strong></small>
      )} */}
   


      <FormLabel className='col-form-label'>Email:</FormLabel>
      <FormInput
       className={ errors.email ? 'input-error': "input-success"}
        // className={
        //   touched.email
        //     ? `form-control ${errors.email ? 'invalid' : 'valid'}`
        //     : `form-control`
        // }
        name='email'
        type='text'
        placeholder='mickey@disney.com'
        
        onChange={handleChange}
        value={values.email}
      />
      {/* {touched.email && errors.email && (
        <small className='text-warning'><strong>{errors.email}</strong></small>
      )} */}
    

   
    <FormLabel className='col-form-label'>Will you be joining our Magical day?</FormLabel><br/>
    <FormContainer>
    <FormRadio  id='attendingY' type="radio" name="attending"  onChange={handleChange} value="Yes" defaultChecked={values.attending === "Yes"}/>
        <FormRadioLabel htmlFor='attendingY' className='col-form-label ps-2 pe-3'>
        Wouldn't Miss It!
        </FormRadioLabel>
        <FormRadio id='attendingN' type="radio" name="attending" onChange={handleChange}  value="No" defaultChecked={values.attending === "No"} />
        <FormRadioLabel htmlFor='attendingN' className='col-form-label ps-2'>
            Sorry, maybe next time 
        </FormRadioLabel>
    </FormContainer>
   

    
      <FormLabel className='col-form-label'>Plus One:</FormLabel>
      <FormSelect
        component='select'
        className={ errors.plusOne ? 'input-error': "input-success"}
        // className={
        //   touched.plusOne
        //     ? `form-control ${errors.plusOne ? 'invalid' : 'valid'}`
        //     : `form-control`
        // }
        name='plusOne'
        type='select'
        value={values.plusOne}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ display: "block" }}
        // onChange={(e) => setFieldValue('plusOne', e.target.value)}
        // onChange={handleChange}
         // still only gives a value of yes 
      >
        <option value="">Please select an answer</option>
        <option value="yes">Yes, please add a plus one or few</option>
        <option value="no">Just me!</option>
        
      </FormSelect>
      {/* {touched.plusOne && errors.plusOne && (
        <small className='text-warning'><strong>{errors.plusOne}</strong></small>
      )} */}
    

  
      <FormLabel className='col-form-label'>Total number of Guests attending:</FormLabel>
      <FormSelect
        component='select'
        // className={
        //   touched.guests
        //     ? `form-control ${errors.guests ? 'invalid' : 'valid'}`
        //     : `form-control`
        // }
        className={ errors.guests ? 'input-error': "input-success"}
        value={values.guests}
        onChange={handleChange}
        onBlur={handleBlur}
        name='guests'
        type='select'
      >
        <option value="">Please select an answer</option>
        <option value="one">Just Me!</option>
        <option value="two">2</option>
        <option value="three">3</option>
        <option value="four">4</option>
        <option value="five">5</option>
        <option value="six">Too many!</option>
        
      </FormSelect>
      {/* {touched.guests && errors.guests && (
        <small className='text-warning'><strong>{errors.guests}</strong></small>
      )} */}
  
   
      <FormLabel className='col-form-label'>Name(s):</FormLabel>
      <FormInput
        // className={
        //   touched.guest_name
        //     ? `form-control ${errors.guest_name ? 'invalid' : 'valid'}`
        //     : `form-control`
        // }
        className={ errors.guest_name ? 'input-error': "input-success"}
        name='guest_name'
        type='text'
        placeholder='Please enter full name for all attending guests'
        onChange={handleChange}
        value={values.guest_name}
      />
      {/* add the first '&' because if there is no error there is no need for the small tag */}
      {/* {touched.guest_name && errors.guest_name && (
        <small className='text-warning'><strong>{errors.guest_name}</strong></small>
      )} */}
   

  
      <FormLabel className='col-form-label'>Song:</FormLabel>
      <FormInput
        // className={
        //   touched.song
        //     ? `form-control ${errors.song ? 'invalid' : 'valid'}`
        //     : `form-control`
        // }
        className={ errors.song ? 'input-error': "input-success"}
        name='song'
        type='text'
        placeholder='Provide a song that will get you up on the dance floor'
        onChange={handleChange}
        value={values.song}
      />
      {/* {touched.song && errors.song && (
        <small className='text-warning'><strong>{errors.song}</strong></small>
      )} */}
 

   
      <FormLabel className='col-form-label'>Additional Comments:</FormLabel>
      <FormTextArea
        as='textarea'
        // className={
        //   touched.message
        //     ? `form-control ${errors.message ? 'invalid' : 'valid'}`
        //     : `form-control`
        // }
        className={ errors.message ? 'input-error': "input-success"}
        name='message'
        placeholder='Please provide any dietary restrictions or additional information.'
        onChange={handleChange}
        value={values.message}
      ></FormTextArea>
      {/* {touched.message && errors.message && (
        <small className='text-warning'><strong>{errors.message}</strong></small>
      )} */}
   
   
      <FormButton
         className='btn btn-primary my-3'
        // disabled={!isValid || !dirty}
         type='submit'
         value="Send"
      >
        Submit
      </FormButton>
      <Text>Thank You! We look forward to getting your gift!</Text>
    
    </Form>
    </FormContent>
  </FormWrap>
  </Container>
  );
}

export default RsvpForm;
