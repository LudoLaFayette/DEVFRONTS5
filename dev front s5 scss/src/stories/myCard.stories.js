import myCard from '@/components/myCard.vue'

export default {
    title: 'Components/MyCard',
    component: myCard,
    argTypes: {
        description : {
            control : "text",           
        },
        title : {
            control : "text",
        },
        buttonLabel : {
            control : "text",
        },
        imageSrc : {
            control : "text"
        },
        imageAlt : {
            control : "text"
        }
    }
}

export const Card = {
    render: (args) => {
        return {
            components: {
                myCard,
            },
            setup() {
                return {args}
            },
            template: `<myCard v-bind="args">My link Button</myCard>`
        }
    },
    args: {
        description : 'description de la card',
        title : 'mon titre',
        buttonLabel : 'mon label',
        imageSrc : 'http://placekitten.com/200/150',
        imageAlt : 'test'
    }
}
