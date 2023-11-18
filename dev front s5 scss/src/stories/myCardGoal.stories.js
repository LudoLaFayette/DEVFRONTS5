// import myGoalCard from '@/components/myCard/myGoalCard.vue'

// export default {
//     title: 'Components/myGoalCard',
//     component: myGoalCard,
//     argTypes: {
//         title : {
//             control : "text",
//         },
//         description : {
//             control : "text",           
//         },
//         buttonLabel : {
//             control : "text",
//         },
//         imageSrc : {
//             control : "text"
//         },
//         imageAlt : {
//             control : "text"
//         }
//     }
// }


// export const CardGoal = {
//     render: (args) => {
//         return {
//             components: {
//                 myGoalCard,
//             },
//             setup() {
//                 return {args}
//             },
//             template: `<myGoalCard v-bind="args"></myGoalCard>`
//         }
//     },
//     args: {
//         title : 'Healthy Food',
//         description : 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.',        
//         buttonLabel : '',
//         imageSrc : '',
//         imageAlt : ''
//     }
// }