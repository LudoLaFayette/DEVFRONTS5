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
            <myButton variant="rounded" :getIcon="false" size="small">{{ buttonLabel }}</myButton>
        </div>
    </div>

</template>

<script setup>
import myButton from '@/components/elements/myButton.vue'

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





</style>