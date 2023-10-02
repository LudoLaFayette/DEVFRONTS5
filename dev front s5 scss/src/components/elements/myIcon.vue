<template>
    <i class="icon">
        <iconCommunity />
    </i>
</template>

<script setup>
import iconCommunity from '../icons/iconCommunity.vue';
</script>

<style lang="scss" scoped>
.icon {
    display:inline-flex;
    align-items: center;
    border-radius: 100%;
    box-shadow: 0 0 50px gray;
    height: rem(50);
    width: rem(50);
    justify-content: center;
}
</style>