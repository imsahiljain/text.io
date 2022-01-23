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

    const onchangeText = (event) => {
        updateText(event.target.value);
    }

    const [text, updateText] = useState("");
    return (
        <>
            <div className="textarea">
                <p>Enter text here:</p>
                <textarea name="" id="" cols="60" rows="17" value={text} onChange={onchangeText} placeholder='Enter text here'></textarea>
                <br /><br />
                <button className="btn btn-primary" onClick={uppercaseText}>Uppercase</button>
                <button className="btn btn-primary" onClick={lowercaseText}>Lowercase</button>
            </div>

            <div className="textdetails">
                <h2>Text Details</h2>
                <p><b>Words: </b> {text.split(" ").length} </p>
                <p><b>Charecters: </b> {text.length} </p>
            </div>
        </>
    );
};

export default Header;
