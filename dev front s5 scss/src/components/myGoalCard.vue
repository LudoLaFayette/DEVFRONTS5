<template>

    <!-- Card 1 : Présentation des objectifs du site  -->
    <div class="cardGoal">
        <div class="cardGoal__icon">
            <myIcon name="ustensilsCrossed" size="bigIcon" background="backgroundTT"></myIcon>
        </div>
        <div class="cardGoal__title">
            <myTitle type="h2" :content="title"></myTitle>
        </div>
        <div class="cardGoal__content">
            <p>But I must explain to you how all this
                mistaken idea of denouncing pleasure and
                praising pain was born.</p>
        </div>
    </div>

</template>

<script setup>

import myIcon from './elements/myIcon.vue';
import myTitle from './elements/myTitle.vue';


const props = defineProps(
    {
        title: String,
        description: String,
        buttonLabel: String,
        imageSrc: String,
        imageAlt: String, 

    })
</script>

<style lang="scss" scoped>


.cardGoal {
    max-width: 480px;
    max-height: 480px;
    border-radius: rem(20);
    border: rem(1) solid $grey;
    overflow: hidden;
    padding: rem(90) rem(20);
    line-height: 1.2;
    text-align: center;

    >*+* {
        margin-top: rem(40);
    }

    &__title {
        font-family: Helvetica, sans-serif;

    }

    &__content {
        font-family: Helvetica, sans-serif;


    }

}

</style>