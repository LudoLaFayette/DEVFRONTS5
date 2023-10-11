<script setup>
const props = defineProps({
    title: String,
    description: String,
    image: String,
    id: Number,
})

import myButton from '@/components/elements/myButton.vue'
import myTitle from './elements/myTitle.vue';
import myNote from './elements/myNote.vue'
import myIcon from './elements/myIcon.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="cardVignette" >
        <img :src="image" alt="test"/>     
        <div class="cardVignette__content" >
            <RouterLink :to="`/recipes/${id}`" ><myTitle type="h4" :content="title"></myTitle></RouterLink>
            {{ description }}
            <div class="cardVignette__icons">
                <myIcon name="arrowRight" background="backgroundBCK"/>
                <myIcon name="arrowLeft" background="backgroundW"/>
            </div>
        </div>        
    </div>
</template>

<style lang="scss" scoped>
.cardVignette {
        display: grid;
        grid-template-rows: repeat(2 ,1fr);
        max-width: 400px;
        max-height: 500px;
        border-radius: rem(20);
        border: rem(3) solid $grey;
        margin: rem(30) rem(20);
        line-height: 1.2;
        text-align: center;
        position: relative;
            
        img{
            width: 100%;
            height: auto;
            border-radius: rem(20) rem(20) rem(0) rem(0)
        } 
       
        &__content{
            display: grid;
            grid-template-rows: repeat(3 ,1fr);            
            align-items: center;
            gap: rem(20);   
          
        }
        &__icons{       
            display: flex;     
            position: absolute;
            align-items: center;
            gap: rem(35);
            transform: translate(133px, 103px);
        }
    }
</style>