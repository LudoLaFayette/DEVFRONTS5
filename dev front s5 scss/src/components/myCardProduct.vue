<template>
    <!-- Card 2 : Présentation des produits  -->
    <div class="cardProduct">
        <div class="cardProduct__Image">
            <img src="../assets/green-beans.jpeg" alt="haricots verts">
        </div>
        <div class="cardProduct__content">
            <myTitle type="h4" content="Green Beans"></myTitle>
            <myNote/>
            <myButton  variant="rounded" :getIcon="false" size="small">{{ buttonLabel }}</myButton>            
            <p>$15.00</p>
        </div>
       
    </div>
</template>

<script setup>
import myButton from '@/components/elements/myButton.vue'
import myTitle from './elements/myTitle.vue';
import myNote from './elements/myNote.vue'
//import des titles sous story a faire (h1,h2...)

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




.cardProduct {
        max-width: 400px;
        max-height: 700px;
        border-radius: rem(20);
        border: rem(3) solid $grey;
        overflow: hidden;
        line-height: 1.2;
        text-align: center;

        &__Image{
            max-width: 100%;
            img{
                border-radius: rem(10) rem(10) rem(0) rem(0);
                padding-bottom: rem(15);
            }
            
        }

        &__content{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            gap: rem(20);
            margin-bottom: rem(50) ;
            padding-left: rem(15);
            padding-right: rem(10);

            
          
        }
    }
</style>