import myButton from '@/components/icons/myButton.vue'

export default {
    title: 'Elements/MyButton',
    component: 'MyButton',
    argTypes: {
        href: {
            control: 'text'
        },
        size: {
            control: "select"
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
            component: {
                myButton
            },
            setup() {
                return args
            },
            template: '<MyButton v-bind={args}">My link Button</MyButton>'
        }
    },
    args: {
        size: "regular",
        variant: "default"
    }
}