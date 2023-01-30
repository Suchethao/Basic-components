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
label: "Do Something",
borderRadius:'2px',
}

export const New = Template.bind({})
New.args = {
backgroundColor: "#E7E7FF",
color: "#6B4EFF",
label: "Do Something",
borderRadius:'2px',
}

export const Wire = Template.bind({})
Wire.args = {
backgroundColor: 'white',
color: 'orange',
label: "Do Something",
borderRadius:'2px',
border:'orange',
border: '1px',
border: 'solid',
}

export const AddToCart = Template.bind({})
AddToCart.args = {
backgroundColor: 'white',
color: 'orange',
label: "Add To Cart",
borderRadius:'2px',
border:'orange',
border: '1px',
border: 'solid',
}

export const AddToFavorites = Template.bind({})
AddToFavorites.args = {
backgroundColor: 'white',
color: 'orange',
label: "Add To Favorites",
borderRadius:'2px',
border:'orange',
border: '1px',
border: 'solid',
}

export const Heart = Template.bind({})
Heart.args = {
backgroundColor: 'white',
color: 'orange',
label: "Heart",
borderRadius:'2px',
border:'orange',
border: '1px',
border: 'solid',
}

export const Cart = Template.bind({})
Cart.args = {
backgroundColor: 'white',
color: 'orange',
label: "Cart",
borderRadius:'2px',
border:'orange',
border: '1px',
border: 'solid',
}


