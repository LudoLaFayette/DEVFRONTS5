import myIcon from '@/components/elements/myIcon.vue'

export default {
    title: 'Elements/myIcon',
    component: myIcon,
    argTypes: {
        name : {
            control : "select",
            options: ['community', 'documentation', 'ecosystem', 'tooling', 'support', 'arrowLeft', 'arrowRight', 'chevronLeft', 'deliveryTruck', 'facebook','favori' , 'hour', 'instagram','linkedin', 'mapPin', 'phoneCall','play', 'search', 'shoppingBag','star', 'twitter', 'ustensils', 'ustensilsCrossed']
        },
        size: {
            control : "select",
            options: ['smallIcon', 'bigIcon']
        },
        background: {
            control : "select",
            options: ['backgroundW', 'backgroundT', 'backgroundBCK', 'backgroundTT', 'backgroundPlay']
        },
        
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
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'support',
        size: 'smallIcon',
        background : 'backgrounW'
    }
}
export const Play = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'play',
        size: 'bigIcon',
        background : 'backgroundPlay'
    }
}
export const arrowLeft = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'arrowLeft',
        size: 'smallIcon',
        background : 'backgroundW'
    }
}
export const arrowLeft2 = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'arrowLeft',
        size: 'smallIcon',
        background : 'backgroundBCK'
    }
}
export const arrowRight = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'arrowRight',
        size: 'smallIcon',
        background : 'backgroundW'
    }
}

export const chevronLeft = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'chevronLeft',
        size: 'smallIcon',
        background : 'backgroundW'
    }
}

export const tangerArrowLeft = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'arrowLeft',
        size: 'smallIcon',
        background : 'backgroundT'
    }
}

export const tangerArrowRight = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'arrowRight',
        size: 'smallIcon',
        background : 'backgroundT'
    }
}

export const ShoppingBag = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'shoppingBag',
        size: 'smallIcon',
        background : 'backgroundW'
    }
}

export const ArrowLeftSimple = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'arrowLeft',
        size: 'smallIcon',
        background : 'backgroundW'
    }
}

export const ArrowRightSimple = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'arrowRight',
        size: 'smallIcon',
        background : 'backgroundW'
    }
}

export const Search = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'search',
        size: 'smallIcon',
        background : 'backgroundW'
    }
}
export const Hour = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'hour',
        size: 'smallIcon',
        background : 'backgroundW'
    }
}

export const MapPin = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'mapPin',
        size: 'smallIcon',
        background : 'backgroundW'
    }
}

export const PhoneCall = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'phoneCall',
        size: 'smallIcon',
        background : 'backgroundW'
    }
}
export const ChevronLeftSimple = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'chevronLeft',
        size: 'smallIcon',
        background : 'backgroundW'
    }
}

export const Star = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'star',
        size: 'smallIcon',
        background : 'backgroundW'
    }
}
// Exception de non background en args car besoin de garder le fill d'origine svg
export const Favori = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'favori',
        size: 'smallIcon', 
            
    }
}
export const Ustensils = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'ustensils',
        size: 'smallIcon',
        background : 'backgroundW'
    }
}
export const UstensilsCrossed = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'ustensilsCrossed',
        size: 'smallIcon',
        background : 'backgroundW'
    }
}
export const Truck = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'deliveryTruck',
        size: 'smallIcon',
        background : 'backgroundW'
    }
}

export const TangerineUstensils = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'ustensils',
        size: 'bigIcon',
        background : 'backgroundTT'
    }
}
export const TangerineCrossedUstensils = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'ustensilsCrossed',
        size: 'bigIcon',
        background : 'backgroundTT'
    }
}

export const TangerineTruck = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'deliveryTruck',
        size: 'bigIcon',
        background : 'backgroundTT'
    }
}
export const Facebook = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'facebook',
        size: 'smallIcon',
        background : 'backgroundTT'
    }
}
export const Twitter = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'twitter',
        size: 'smallIcon',
        background : 'backgroundTT'
    }
}
export const Instagram = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'instagram',
        size: 'smallIcon',
        background : 'backgroundTT'
    }
}
export const Linkedin = {
    render: (args) => {
        return {
            components: {
                myIcon,
            },
            setup() {
                return {args}
            },
            template: `<myIcon v-bind="args"> </myIcon>`
        }
    },
    args: {
        name : 'linkedin',
        size: 'smallIcon',
        background : 'backgroundTT'
    }
}