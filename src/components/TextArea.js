import React, { useState } from 'react';
import './css/TextArea.css';

const Header = () => {
    const uppercaseText = () => {
        let newText = text.toUpperCase();
        updateText(newText);
    }

    const onchangeText = (event) => {
        updateText(event.target.value);
    }

    const [text, updateText] = useState("");
    return (
        <div className="textarea">
            <p>Enter text here:</p>
            <textarea name="" id="" cols="60" rows="17" value={text} onChange={onchangeText} placeholder='Enter text here'></textarea>
            <br /><br />
            <button className="btn btn-primary" onClick={uppercaseText}>Uppercase</button>
        </div>
    );
};

export default Header;
