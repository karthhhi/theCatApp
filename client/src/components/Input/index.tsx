import React from 'react';
import styles from './input.module.scss';

type InputProps = {
    label: string;
    type?: string;
    onChange: (value: string) => void;
};

const Input = ({ label, type, onChange }: InputProps): JSX.Element => {
    const {
        input__label,
    } = styles;

    return (
        <>
            <label className={input__label}>{label}:</label>
            <input type={type || 'text'} onChange={(e) => onChange(e.target.value)} />
        </>
    );
};

export default Input;