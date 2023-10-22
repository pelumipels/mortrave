import { useHamburgerMenu } from './HamburgerMenu';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export const useEmailHandleSubmit = () => {
    const { setLoading, setFormFilled } = useHamburgerMenu();
    const navigate = useNavigate();

    const submitFormToGoogleSheets = ( formData, scriptURL, formType) => {
        setLoading(true);
        const formDataBody = new FormData(formData);

        fetch(scriptURL, {
            method: 'POST',
            mode: 'cors', // Important for CORS-enabled requests
            body: formDataBody // Send the email as JSON data
            })
            .then((response) => {
                if (response.status === 200) {
                    setFormFilled(true);
                    const successData = {
                        successMessageTopic: "",
                        successMessageDetail: ""
                    };
                    if (formType === "WaitList Email") {
                            successData.successMessageTopic = "You have joined our waitlist!";
                            successData.successMessageDetail = "We will notify you when we are ready to launch.";
                    } else if (formType === "Schedule A Call Email") {
                            successData.successMessageTopic = "You have scheduled a call!";
                            successData.successMessageDetail = "We will notify you on more information about the call";
                    }
                    navigate('/successful-form-submission', { state: { successData }});
                } else {
                    toast.error('Error! Please try again', {
                        position: toast.POSITION.TOP_LEFT
                    });
                }
            }).catch((error) => {
                // Handle any errors that occur during the POST request
                console.error('Error:', error);
                toast.error('Error! Please try again', {
                    position: toast.POSITION.TOP_LEFT
                });
            }).finally(() => {
                setLoading(false);
            })
        }
    return {
        submitFormToGoogleSheets
    };
}