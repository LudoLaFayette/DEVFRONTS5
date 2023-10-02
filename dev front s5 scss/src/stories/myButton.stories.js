import myButton from '@/components/elements/myButton.vue'

export default {
    title: 'Elements/MyButton',
    component: myButton,
    argTypes: {
        href: {
            control: "text"
        },
        size: {
            control: "select",
            options: ['regular', 'small']
        },
        variant: {
            control: "select",
            options: ['default', 'rounded']
        }
    }
}

export const PrimaryButton = {
    render: (args) => {
        return {
            components: {
                myButton,
            },
            setup() {
                return {args}
            },
            template: `<myButton v-bind="args">My link Button</myButton>`
        }
    },
    args: {
        size: "regular",
        variant: "default"
    }
}

export const SecondaryButton = {
    render: (args) => {
        return {
            components: {
                myButton,
            },
            setup() {
                return {args}
            },
            template: `<myButton v-bind="args">My link Button</myButton>`
        }
    },
    args: {
        size: "regular",
        variant: "rounded"
    }
}

export const TeritiaryButton = {
    render: (args) => {
        return {
            components: {
                myButton,
            },
            setup() {
                return {args}
            },
            template: `<myButton v-bind="args">My link Button</myButton>`
        }
    },
    args: {
        size: "small",
        variant: "rounded"
    }
}