import myCardVignette from '@/components/myCardVignette.vue'

export default {
    title: 'Components/myCardVignette',
    component: myCardVignette,
    argTypes: {
        title : {
            control : "text",
        },
        description : {
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


export const CardVignette = {
    render: (args) => {
        return {
            components: {
                myCardVignette,
            },
            setup() {
                return {args}
            },
            template: `<myCardVignette v-bind="args"></myCardVignette>`
        }
    },
    args: {
        title : 'Healthy Food',
        description : 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.',        
        buttonLabel : 'Add to Cart',
        imageSrc : '',
        imageAlt : ''
    }
}