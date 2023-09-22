import { useState } from "react";

export const useEmailHandleSubmit = () => {
    const [popupMessage, setPopupMessage] = useState('');
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isMessageSuccess, setIsMessageSuccess] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState(false);

    const submitForm = ( initialFormData, formData, setFormData, endPoint, setOpenModal) => {

        fetch(endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData) // Send the email as JSON data
            })
            .then((response) => {
                if (response.status === 409) {
                    response.json().then(data => {
                        setPopupMessage(data);
                        setPopupVisible(true);
                    })
                    throw new Error(`HTTP error! Status: ${response.status}`);
                } else if (response.status >= 500) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                } else if (response.status === 400) {
                    response.json().then(data => {
                        setPopupMessage(data);
                        setPopupVisible(true);
                    })
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json()
            })
            .then((data) => {
                console.log(data);
                setPopupMessage(data);
                setPopupVisible(true);
                setFormData(initialFormData);
                setIsMessageSuccess(true);
                setTimeout(() => {
                    if (popupMessage === 'Successfully scheduled!') {
                        setOpenModal(false);
                    }
                }, 4000);
            })
            .catch((error) => {
                // Handle any errors that occur during the POST request
                console.error('Error:', error);
                setPopupMessage('Error! Please try again');
                setPopupVisible(true);
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
        isPopupVisible,
        setPopupVisible,
        isMessageSuccess,
        setIsMessageSuccess,
        isErrorMessage,
        setIsErrorMessage,
        submitForm,
    };
}