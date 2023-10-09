<template>
    <!-- Card 3 : Vignette des produits  -->

    <div class="cardVignette"> 
        <div>
            <img src="../assets/burger.jpeg" alt="burger">     
        </div>      
        <div class="cardVignette__content">                  
            <myTitle type="h4" content="Burger"></myTitle>
            <p>Mushrooms Sauce</p>        
            <p>$15.15</p>
            <div class="cardVignette__icons">
                <myIcon name="arrowRight" background="backgroundBCK"/>
                <myIcon name="arrowLeft" background="backgroundW"/>
            </div>
        </div>       
    </div>


</template>

<script setup>
import myButton from '@/components/elements/myButton.vue'
import myTitle from './elements/myTitle.vue';
import myNote from './elements/myNote.vue'
import myIcon from './elements/myIcon.vue';


const props = defineProps(
    {
        title: String,
        description: String,
        buttonLabel: String,
        imageSrc: String,
        imageAlt: String
    })
</script>

<style lang="scss" scoped>
.cardVignette {
        display: grid;
        grid-template-rows: repeat(2 ,1fr);
        max-width: 400px;
        max-height: 700px;
        border-radius: rem(20);
        border: rem(3) solid $grey;
        position: relative;
        line-height: 1.2;
        text-align: center;

        img{
            width: 100%;
            position: absolute;
            transform: translate(5px, -175px);
            left: 0;
            height: auto;
        } 
       
        &__content{
            display: grid;
            grid-template-rows: repeat(4 ,1fr);            
            align-items: center;
            gap: rem(20);   
            padding : rem(5) rem(5),

            p{
                
            }
        }
        &__icons{       
            display: flex;     
            position: absolute;
            align-items: center;
            gap: rem(35);
            transform: translate(133px, 92px);
        }
    }
</style>