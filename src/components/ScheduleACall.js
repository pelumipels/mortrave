import React, { useState, useEffect } from 'react';
import PurpleButton from './PurpleButton';
import { useEmailHandleSubmit } from "./SubmitForm";
import Popup from './Popup';
// import ScheduleACall from './ScheduleACall';
import countryList from 'country-list';
import '../styles/ScheduleACall.css';



function ScheduleACall({setOpenModal}) {

    const { popupMessage, setPopupMessage, isFormValidMessage, isPopupVisible, setPopupVisible, isMessageSuccess, setIsMessageSuccess, submitForm } = useEmailHandleSubmit();

    const initialFormData = {
        name: '',
        email: '',
        country_of_residence: '',
        scheduled_date: ''
      };

      const endPoint = 'http://localhost:3000/schedulingACall';

      const [formData, setFormData] = useState(initialFormData);

      const validateForm = () => {
        // Add your form validation logic here
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setIsMessageSuccess(false);
        // setIsFormValidMessage(false);

        if (!formData.email || !formData.email.match(emailPattern)) {
          // Show an error message or take appropriate action for email validation
        //   setIsFormValidMessage(true);
            setPopupMessage('Invalid email address');
            setPopupVisible(true);
            console.error('Invalid email address');
            setTimeout(() => {
                setPopupVisible(false);
            }, 3000);
            return false;
        }
    
        return true;
      };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        
        if (validateForm()) {
          // console.log(1234);
            // Form is valid, proceed with submission
            submitForm( initialFormData, formData, setFormData, endPoint );
            // if (popupMessage) {
            // }
            setTimeout(() => {
              // setPopupVisible(false);
              setOpenModal(false);
          }, 4000);
        }
    };

    const closeModalSchedule = (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      setOpenModal(false);
  };

  useEffect(() => {
    const countries = countryList.getNames();

    // Create an array of <option> elements
    const optionElements = countries.map((country, index) => (
      <option key={index} value={country}>
        {country}
      </option>
    ));

    // Add an initial disabled option as the first element
    optionElements.unshift(
      <option key="initial" value="" disabled>
        Select your country
      </option>
    );

    // Use the functional form of setFormData to update the state
    setFormData((prevData) => ({
      ...prevData,
      countryOptions: optionElements
    }));
    
  }, []);

  // const generateCountryOptions = () => {
  //   const countries = countryList.getNames();
  //   return countries.map((country, index) => (
  //     <option key={index} value={country}>
  //       {country}
  //     </option>
  //   ));
  // };
  

    const handleKeyPress = (event) => {
        const char = event.which;
        if (
          char > 31 &&
          char !== 32 &&
          (char < 65 || char > 90) &&
          (char < 97 || char > 122)
        ) {
          event.preventDefault(); // Prevent non-alphabetic characters
        }
      };

  return (
    <div className='scheduleACall'>
            <h1>Fill the form below to schedule a call with us...</h1>
            <form onSubmit={handleSubmit} disabled={isPopupVisible} id="schedulingACall">
              <div>{isMessageSuccess ? (<div className="success-message">{popupMessage}</div>) : isFormValidMessage ? (<div className="error-message">{popupMessage}</div>) : null}</div>
              <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" autoComplete='name' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter details here" onKeyPress={handleKeyPress} required />
                </div>
                <div>
                    <label htmlFor="email2">Email</label>
                    <input type="email" name="email" id="email2" autoComplete='email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Enter details here" required />
                </div>
                <div>
                    <label htmlFor="country_of_residence">Country of residence</label>
                    <select name="country_of_residence" id="country_of_residence" value={formData.country_of_residence} onChange={(e) => setFormData({ ...formData, country_of_residence: e.target.value })} required>
                        {/* <option value="" disabled className="option"></option> */}
                        {/* {generateCountryOptions()} */}
                        {formData.countryOptions}
                    </select>
                </div>
                <div>
                    <label htmlFor="scheduled_date">Please share anything that will help prepare for our meeting</label>
                    <textarea name="scheduled_date" id="scheduled_date" value={formData.scheduled_date} onChange={(e) => setFormData({ ...formData, scheduled_date: e.target.value })}></textarea>
                </div>
                <PurpleButton innerText={isPopupVisible ? 'Scheduling...' : 'Schedule A Call'} purpleButton="scheduleButton" button="button" />
                <PurpleButton innerText='Close' purpleButton="closeModalSchedule" onClick={closeModalSchedule} />
              </div>
            </form>
                <Popup message={popupMessage} show={isPopupVisible} />
    </div>
  )
}

export default ScheduleACall
