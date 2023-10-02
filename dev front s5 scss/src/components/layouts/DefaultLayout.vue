<template>
    <main class="layout">
        <header class="layout__header"> <slot name="header"></slot></header>     
        <aside class="layout__aside"> <slot name="aside" ></slot></aside>
        <article class="layout__article"> <slot ></slot></article>
        <footer class="layout__footer"><slot name="footer"></slot></footer>
    </main>
</template>
<script></script>
<style lang="scss" scoped>
.layout {
    display: grid;
    height: 200px;
    grid-template:
        "header"
        "article"
        "aside"
        "footer";

    @include medium-up {
        grid-template:
            "header header header"
            "aside article article"
            "footer footer footer";
    }
    >* {
        padding: rem(16);
    }
    &__aside{
        border: 2px solid black;
        grid-area : aside;
        padding: 1rem;
    }
    &__article{
        grid-area: article;
        border: 2px solid blue;
    }
    &__footer{
        grid-area: footer;
        border: 2px solid red;
    }
    &__header{
        border: 2px solid green;
        grid-area: header;
    } 
    
}
</style>