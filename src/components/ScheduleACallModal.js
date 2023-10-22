import React, { useState, useEffect } from 'react';
import Button from './Button';
import '../styles/ScheduleACallModal.css';
import countryList from 'country-list';
import { useEmailHandleSubmit } from "./SubmitForm";



function ScheduleACall({setOpenModal}) {

    const { submitFormToGoogleSheets } = useEmailHandleSubmit();

    const initialFormData = {
        name: '',
        email: '',
        country_of_residence: '',
        comments: ''
    };
    const [defaultFormData, setFormData] = useState(initialFormData);

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
      
      }, [setOpenModal]);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwET_lKGbf9GWFt9L7vcVHJqK7mprjDbGnS67UWnJhZ5C8ARCtQZMEnPIYkXG04Zf26Cg/exec';

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

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      const formData = e.target;
      // Form is valid, proceed with submission
      submitFormToGoogleSheets( formData, scriptURL, "Schedule A Call Email" );
  };

    const closeModalSchedule = () => {
      setOpenModal(false);
    };

  return (
    <div className='scheduleACall' onClick={closeModalSchedule}>
      <div className="scheduleACallModalContainer" onClick={(e) => {e.stopPropagation()}}>
        <div className='cancelFormIcon' onClick={closeModalSchedule}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M13.5161 34.486L24.0021 24L34.4881 34.486M34.4881 13.514L24.0001 24L13.5161 13.514" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1>Fill the form below to schedule a call with us...</h1>
        <form onSubmit={handleSubmit} id="schedulingACall">
          <div className='mainForm'>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" autoComplete='name' value={defaultFormData.name} onChange={(e) => setFormData({ ...defaultFormData, name: e.target.value })} placeholder="Enter details here" onKeyPress={handleKeyPress} required />
            </div>
            <div>
              <label htmlFor="email2">Email</label>
              <input type="email" name="email" id="email2" autoComplete='email' value={defaultFormData.email} onChange={(e) => setFormData({ ...defaultFormData, email: e.target.value })} placeholder="Enter details here" required />
            </div>
            <div>
              <label htmlFor="country_of_residence">Country of residence</label>
              <select name="country_of_residence" id="country_of_residence" value={defaultFormData.country_of_residence} onChange={(e) => setFormData({ ...defaultFormData, country_of_residence: e.target.value })} required>
                {defaultFormData.countryOptions}
              </select>
            </div>
            <div>
              <label htmlFor="comments">Please share anything that will help prepare for our meeting</label>
              <textarea name="comments" id="comments" value={defaultFormData.comments} onChange={(e) => setFormData({ ...defaultFormData, comments: e.target.value })}></textarea>
            </div>
            <Button innerText='Schedule A Call' button="scheduleFormButton" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ScheduleACall