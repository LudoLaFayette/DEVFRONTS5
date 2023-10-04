import myText from '@/components/elements/myText.vue'

export default {
    title: 'Elements/Mytext',
    component: myText,
    argTypes: {
        size : {
            control : "select",
            options: ['p1', 'p2']
        },
        content : {
            control : "text",           
        },
    }
}

export const Texts = {
    render: (args) => {
        return {
            components: {
                myText,
            },
            setup() {
                return {args}
            },
            template: `<myText v-bind="args"></myText>`
        }
    },
    args: {
       size: 'p1',
       content : 'Bonjour'
    }
}
