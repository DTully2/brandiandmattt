import * as Yup from 'yup';

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