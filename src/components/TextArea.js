import React, { useState } from 'react';
import './css/TextArea.css';

const Header = () => {
    const uppercaseText = () => {
        let newText = text.toUpperCase();
        updateText(newText);
    }

    const lowercaseText = () => {
        let newText = text.toLowerCase();
        updateText(newText);
    }

    const clearText = () => {
        let newText = "";
        updateText(newText);
    }

    const copyText = () => {
        var text = document.getElementById("textarea")
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const onchangeText = (event) => {
        updateText(event.target.value);
    }

    const [text, updateText] = useState("");
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
