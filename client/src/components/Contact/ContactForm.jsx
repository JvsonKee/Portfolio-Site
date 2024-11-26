import styled from "styled-components";
import { useRef, useState } from "react";

const FormMatrix = styled.div`
    position: relative;

`
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: 300ms ease-in-out;
`

const FormTextInput = styled.input`
    height: 35px;
    border: none;
    border-bottom: 1px solid var(--black);
    outline: none;
    font-family: Helvetica, sans-serif;
    font-weight: 100;

    &::placeholder {
        color: var(--dark-grey)
    }
`

const TextArea = styled.textarea`
    height: 120px;
    resize: none;
    border: none;
    border-bottom: 1px solid var(--black);
    outline: none;
    margin-top: 17px;
    font-family: Helvetica, sans-serif;
    font-weight: 100;

    &::placeholder {
        color: var(--dark-grey);
    }
`

export const SubmitButton = styled.input`
    background-color: var(--black);
    height: 35px;
    margin-top: 17px;
    border: none;
    outline: none;
    color: #ffffff;
    font-family: Helvetica, sans-serif;
    font-weight: 100;
    font-size: 14px;
    cursor: pointer;
    transition: 300ms ease-in-out;

    &:hover {
        background-color: blue;
    }
`

export const SuccessContainer = styled.div`
    display: none;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    opacity: 0;
    transition-delay: 3s;
    transition: 300ms ease-in-out;
`

export const SuccessMessage = styled.div`

`

export const ResetButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--black);
    height: 35px;
    margin-top: 17px;
    border: none;
    outline: none;
    color: #ffffff;
    font-family: Helvetica, sans-serif;
    font-weight: 100;
    transition: 300ms ease-in-out;
    
    div {
        font-size: 14px;
    }

    &:hover {
        background-color: blue;
    }

    cursor: pointer;
`

const ContactForm = () => {

    const formRef = useRef(null);
    const successRef = useRef(null);

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "410fc460-8a96-496d-b0a1-3a224d853bd1");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            formRef.current.style.opacity = "0";
            formRef.current.reset();
            successRef.current.style.display= "flex";
            successRef.current.style.opacity = "1";
        } else {
            setResult(data.message);
        }
    };

    const handleReset = () => {
        formRef.current.style.opacity = "1";
        successRef.current.style.display = "none";
        successRef.current.style.opacity = "0";

    }

    return (
        <FormMatrix>
            
            <FormContainer onSubmit={onSubmit} ref={formRef}>
                <FormTextInput type="text" placeholder="Name" name="Name"/>
                <FormTextInput type="email" placeholder="Email" name="Email"/>
                <TextArea placeholder="Message" name="Message"/>
                <SubmitButton type="submit" value="SUBMIT"/>
            </FormContainer>
        
            <SuccessContainer ref={successRef}>
                <SuccessMessage style={{fontSize: "24px"}}>
                    Your message has been successfully sent! I'll get back to you as soon as possible.
                </SuccessMessage>
                <ResetButton onClick={handleReset}><div>RESET</div></ResetButton>
            </SuccessContainer>
            
        </FormMatrix>
    )
}

export default ContactForm;