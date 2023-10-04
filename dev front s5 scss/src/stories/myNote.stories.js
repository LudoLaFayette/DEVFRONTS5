import myButton from '@/components/elements/myNote.vue'

export default {
    title: 'Elements/myNote',
    component: myButton,
    argTypes: {
        name: {
            control :"select",
            options: ['star', 'favori']
        }
    }
}

export const myNote = {
    render: (args) => {
        return {
            components: {
                myNote,
            },
            setup() {
                return {args}
            },
            template: `<myNote v-bind="args">4.9</myNote>`
        }
    },
    args: {
        name:'star',
    }
}