import myTitle from '@/components/elements/myTitle.vue'

export default {
    title: 'Elements/MyTitle',
    component: myTitle,
    argTypes: {
        type : {
            control : "select",
            options: ['h1', 'h2', 'h3', 'h4', 'h5']
        },
        content : {
            control : "text",           
        },
    }
}

export const Titles = {
    render: (args) => {
        return {
            components: {
                myTitle,
            },
            setup() {
                return {args}
            },
            template: `<myTitle v-bind="args"></myTitle>`
        }
    },
    args: {
       type: 'h1',
       content : 'Bonjour'
    }
}
