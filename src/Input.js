import React, { useContext } from "react";
import ColorContext from './ColorContext'

function Input(props) {
    const {handleChange, label, name, value} = props;

    const colors = useContext(ColorContext); 

    return (
        colors ?
        (<label style={{display: 'block', marginBottom: '0.5em'}}>
            {label}
            <br/>
            <input
                name={name}
                type="text"
                placeholder="Enter a color"
                style={{ background: colors[name] }}
                onChange={handleChange}
                value={colors[name]}
            />
        </label>)
        : (null)
    );
}

export default Input;
