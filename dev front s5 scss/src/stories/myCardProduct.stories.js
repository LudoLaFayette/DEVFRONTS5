import myCardProduct from '@/components/myCardProduct.vue'

export default {
    title: 'Components/myCardProduct',
    component: myCardProduct,
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


export const CardProduct = {
    render: (args) => {
        return {
            components: {
                myCardProduct,
            },
            setup() {
                return {args}
            },
            template: `<myCardProduct v-bind="args"></myCardProduct>`
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