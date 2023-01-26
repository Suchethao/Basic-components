import Button from "../Components/Button/Button";

export default {
    title: "Components/Button",
    component: Button,
    }
    // export const Primary = () => <Button backgroundColor="#6B4EFF" label="Primary"/>
    const Template = args => <Button {...args}/>
    export const Basic = Template.bind({})


Basic.args = {
backgroundColor: "#6B4EFF",
label: "Basic",
borderRadius:'2px',
}

export const New = Template.bind({})
New.args = {
backgroundColor: "#E7E7FF",
color: "#6B4EFF",
label: "New",
borderRadius:'2px',
}

export const Wire = Template.bind({})
Wire.args = {
backgroundColor: 'white',
color: 'orange',
label: "Wire",
borderRadius:'2px',
border:'orange',
border: '1px',
border: 'solid',
}
