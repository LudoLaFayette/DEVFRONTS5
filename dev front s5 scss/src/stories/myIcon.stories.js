import myIcon from '@/components/elements/myIcon.vue'

export default {
    title: 'Elements/MyIcon',
    component: myIcon,
    argTypes: {
        name : {
            control : "select",
            options: ['community', 'documentation', 'ecosystem', 'tooling', 'support', 'arrowLeft', 'arrowRight', 'chevronLeft', 'deliveryTruck', 'facebook', 'hour', 'instagram','linkedin', 'mapPin', 'phoneCall','play', 'search', 'shoppingBag','star', 'twitter', 'ustensils', 'ustensilsCrossed']
        }
    }
}

export const PrimaryIcon = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args">My link Button</myIcon>`
        }
    },
    args: {
        
    }
}

