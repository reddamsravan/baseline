import React from 'react';

export type ButtonProps = {
    label?: string;
};

export const Button = ({ label = 'Button' }: ButtonProps) => {
    return <button className="baseline-button">{label}</button>;
};
