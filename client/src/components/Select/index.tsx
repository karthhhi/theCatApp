import React from 'react';
import styles from './select.module.scss';

type SelectProps = {
    label?: string;
    hasNullValue?: boolean;
    options: { label: string, value: string }[];
    onChange: (value: string) => void;
};

const Select = ({ label, hasNullValue= true, options, onChange }: SelectProps): JSX.Element => {
    const {
        select__label,
    } = styles;

    return (
        <>
            {label && (<label className={select__label}>{label}:</label>)}
            <select onChange={(e) => onChange(e.target.value)} >
                {hasNullValue && (<option value="">Select</option>)}
                {options.map(({ label, value }) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </select>
        </>
    );
};

export default Select;