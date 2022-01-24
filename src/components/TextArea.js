import React, { useState } from 'react';
import './css/TextArea.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Header = (props) => {

    const options = {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    }

    const successToast = (message) => {
        toast.success(message, options)
    }

    const warningToast = (message) => {
        toast.warning(message, options)
    }

    const [text, updateText] = useState("");

    const uppercaseText = () => {
        let newText = text.toUpperCase();
        updateText(newText);
        if (newText.length > 1) {
            successToast("Converted to uppercase")
        } else {
            warningToast("Add some text")
        }
    }

    const lowercaseText = () => {
        let newText = text.toLowerCase();
        updateText(newText);
        if (newText.length > 1) {
            successToast("Converted to lowercase")
        } else {
            warningToast("Add some text")
        }
    }

    const clearText = () => {
        let newText = "";
        updateText(newText);
        warningToast("Cleared")
    }

    const copyText = () => {
        var text = document.getElementById("textarea")
        text.select();
        navigator.clipboard.writeText(text.value);
        if (text.length > 1) {
            successToast("Copied!")
        } else {
            warningToast("Nothing to copy")
        }
    }

    const onchangeText = (event) => {
        updateText(event.target.value);
    }

    return (
        <>
            <div className="textarea">
                <p>Enter text here:</p>
                <textarea id="textarea" cols="60" rows="17" value={text} onChange={onchangeText} placeholder='Enter text here'></textarea>
                <br /><br />
                <button className="btn btn-blue" onClick={uppercaseText}>Uppercase</button>
                <button className="btn btn-blue" onClick={lowercaseText}>Lowercase</button>
                <button className="btn btn-red" onClick={clearText}>Clear</button>
                <button className="btn btn-green" onClick={copyText}><ion-icon name="copy-outline"></ion-icon></button>
            </div>

            <div className="textdetails">
                <p><b>Words: </b> {text.split(" ").length} </p>
                <p><b>Charecters: </b> {text.length} </p>
            </div>
        </>
    );
};

export default Header;
