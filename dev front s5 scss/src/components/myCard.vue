<template>
    <!-- Card Exemple En cours -->
    <div class="card">
        <div class="card__image">
            <img :src='imageSrc' :alt="imageAlt">
        </div>
        <div class="card__content">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
        <div class="card__button">
            <myButton variant="rounded" :getIcon="true" size="small">{{ buttonLabel }}</myButton>
        </div>
    </div>
    <!-- Card 1 : Présentation des objectifs du site  -->
    <div class="cardGoal">
        <div class="cardGoal__icon">
            <myIcon name="ustensilsCrossed" size="smallICon" background="backgroundTT"></myIcon>
        </div>
        <div class="cardGoal__title">
            <h2>Healthy Food</h2>

        </div>
        <div class="cardGoal__content">
            <p>But I must explain to you how all this
                mistaken idea of denouncing pleasure and
                praising pain was born.</p>
        </div>
    </div>
</template>

<script setup>
import myButton from '@/components/elements/myButton.vue'
import myIcon from './elements/myIcon.vue';
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
.card {
    max-width: 200px;
    border-radius: rem(20);
    border: rem(1) solid $grey;
    overflow: hidden;

    &__content {
        padding: rem(20) rem(10);

    }

    >*+* {
        margin-bottom: rem(20);
    }

    &__button {
        text-align: center;
    }
}

.cardGoal {
    max-width: 480px;
    max-height: 480px;
    border-radius: rem(20);
    border: rem(1) solid gray;
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