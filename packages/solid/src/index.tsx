import type { Component } from 'solid-js';

export type ButtonProps = {
    label?: string;
};

export const Button: Component<ButtonProps> = (props) => {
    return <button class="baseline-button">{props.label ?? 'Button'}</button>;
};
