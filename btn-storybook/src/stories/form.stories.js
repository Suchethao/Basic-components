import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "../Components/Form/Form"
export default {
    title: "Components/Form",
    component: Form,
    }

    const Template = args => <Form {...args}/>

    export const Text = Template.bind({})
 
    Text.args = {
    backgroundColor: "#6B4EFF",
    label: "Text",
    }
    export const Drop = Template.bind({})
 
    Drop.args = {
    backgroundColor: "#E7E7FF",
    color: "#6B4EFF",
    label: "Drop",
    }
    export const Count = Template.bind({})

    Count.args = {
        backgroundColor: "#E7E7FF",
        color: "#6B4EFF",
        label: "Count",
        }
    export const Voucher = Template.bind({})

    Voucher.args = {
        backgroundColor: "#E7E7FF",
        color: "#6B4EFF",
        label: "Voucher",
        }
    export const Checkbox = Template.bind({})

        Checkbox.args = {
        backgroundColor: "#E7E7FF",
        color: "#6B4EFF",
        label: "Checkbox",
        }

    export const CheckboxWithText = Template.bind({})

        CheckboxWithText.args = {
        backgroundColor: "#E7E7FF",
        color: "#6B4EFF",
        label: "Checkbox",
        }
    

    

