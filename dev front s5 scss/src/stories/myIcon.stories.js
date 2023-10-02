import myIcon from '@/components/elements/myIcon.vue'
import myHour from '@/components/elements/myHour.vue'

export default {
    title: 'Elements/MyIcon',
    component: myIcon,
    argTypes: {
        name : {
            control : "select",
            options: ['community', 'documentation', 'ecosystem', 'tooling', 'support']
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
export const Hour = {
    render: (args) => {
        return {
            components: {
                myHour,
            },
            setup() {
                return {args}
            },
            template: `<myHour v-bind="args">My link Button</myHour>`
        }
    },
    args: {
        
    }
}
