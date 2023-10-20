import { useState } from "react";
import { useHamburgerMenu } from './HamburgerMenu';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export const useEmailHandleSubmit = () => {
    const [isMessageSuccess, setIsMessageSuccess] = useState(false);
    const { setLoading, setFormFilled } = useHamburgerMenu();

    const navigate = useNavigate();

    const submitFormToGoogleSheets = ( initialFormData, formData, setFormData, scriptURL) => {
        setLoading(true);
        const formDataBody = new FormData(formData);

        fetch(scriptURL, {
            method: 'POST',
            mode: 'cors', // Important for CORS-enabled requests
            body: formDataBody // Send the email as JSON data
            })
            .then((response) => {
                if (response.status === 200) {
                    setIsMessageSuccess(true);
                    setFormData(initialFormData);
                }
            }).catch((error) => {
                // Handle any errors that occur during the POST request
                console.error('Error:', error);
            })
            .finally(() => {
                // Enable the form after the request is complete (success or error)
                setLoading(false);
                const toastType = isMessageSuccess ? 'success' : 'error';
                if (toastType && !formDataBody.has('name')) {
                    setFormFilled(true);
                    const successData = {
                        successMessageTopic: "You have joined our waitlist!",
                        successMessageDetail: "We will notify you when we are ready to launch."
                    };
                    navigate('/successful-form-submission', { state: { successData }})
                } else if (toastType && formDataBody.has('name')) {
                    setFormFilled(true);
                    const successData = {
                        successMessageTopic: "You have scheduled a call!",
                        successMessageDetail: "We will notify you on more information about the call"
                    };
                    navigate('/successful-form-submission', { state: { successData }})
                } else {
                    toast.error('Error! Please try again', {
                        position: toast.POSITION.TOP_LEFT
                    });
                }
            })

        }

    return {
        submitFormToGoogleSheets
    };
}