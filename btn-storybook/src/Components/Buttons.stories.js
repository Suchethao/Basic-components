import React from 'react';
import Button from './Buttons';

export default {
  title: 'MyButton',
  component: Button,
};

export const BasicUsage = () => <Button className="basic">Click me</Button>;
export const Danger = () => <Button className="my-button" color="red">Danger</Button>;
export const Success = () => <Button className="my-button" color="green">Success</Button>;
export const Warning = () => <Button className="my-button" color="yellow">Warning</Button>;
export const Default = () => <Button className="my-button" color="black">Default</Button>;