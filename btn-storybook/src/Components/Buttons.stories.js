import React from 'react';
import Button from './Buttons';

export default {
  title: 'MyButton',
  component: Button,
};

export const BasicUsage = () => <Button />;
export const DangerUsage = () => <Button color="red" />;
export const SuccessUsage = () => <Button color="green"/>;
export const WarningUsage = () => <Button color="yellow"/>;
export const DefaultUsage = () => <Button color="black"/>;

