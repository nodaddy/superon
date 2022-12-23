import React from 'react';
import './Button.css'; 

const buttonBackgroundColor = '#FB892E';
const buttonDisabledBackgroundColor = '#EDEEF2';
const buttonTextColor = 'white';
const buttonDisabledTextColor = 'grey';

function Button(props) {
    const { children, link, onClick, style, disabled } = props;

    const button = (
        <button 
        className="button"
        onClick={()=>{
            if(!disabled) onClick();
        }}
        size='medium' style={{
            ...style,
            background: disabled ? buttonDisabledBackgroundColor : buttonBackgroundColor,
            color: disabled ? buttonDisabledTextColor : buttonTextColor,

            border: '0px',
            borderRadius: '4px',
            padding: '9px 35px',
            fontWeight: '600',
            cursor: disabled ? '' : 'pointer',
            fontFamily: 'Roboto'
        }}>{children}</button>
    );
    return (
        link ? <a href={link}>
                    {button}
                </a> :
                 button
    );
} 

export default Button;