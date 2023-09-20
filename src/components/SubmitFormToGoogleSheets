import { useState } from "react";

export const useSubmitFormToGoogleSheets = () => {
    const [popupMessage, setPopupMessage] = useState('');
    const [isFormValidMessage] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isMessageSuccess, setIsMessageSuccess] = useState(false);

    const submitFormToGoogleSheets = ( initialFormData, formData, setFormData) => {

        const formData1 = new FormData(formData);

        fetch(endPoint, {
            method: 'POST',
            body: formData1 // Send the email as JSON data
            })
            .then((response) => {
                if (response.status === 409) {
                    response.json().then(data => {
                        console.log(1);
                        setPopupMessage(data);
                        setPopupVisible(true);
                    })
                    throw new Error(`HTTP error! Status: ${response.status}`);
                } else if (response.status >= 500) {
                    console.log(2)
                    throw new Error(`HTTP error! Status: ${response.status}`);
                } else if (response.status === 400) {
                    console.log(3)
                    response.json().then(data => {
                        setPopupMessage(data);
                        // setIsFormValidMessage(true);
                        setPopupVisible(true);
                    })
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json()
            })
            .then((data) => {
                console.log(4)
                console.log(data);
                setPopupMessage(data);
                setPopupVisible(true);
                setFormData(initialFormData);
                setIsMessageSuccess(true);
            })
            .catch((error) => {
                // Handle any errors that occur during the POST request
                console.error('Error:', error);
            })
            .finally(() => {
                // Enable the form after the request is complete (success or error)
                setTimeout(() => {
                    setPopupVisible(false);
                }, 3000);
            });
    }
    return {
        popupMessage,
        setPopupMessage,
        isFormValidMessage,
        isPopupVisible,
        setPopupVisible,
        isMessageSuccess,
        setIsMessageSuccess,
        submitFormToGoogleSheets,
    };
}