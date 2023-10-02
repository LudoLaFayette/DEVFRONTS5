<template>
    <i class="icon">
        <myHour/>
    </i>
</template>

<script setup>

import myHour from '../icons/iconHour.vue'
const props = defineProps({
    name: String,
})

</script>

<style lang="scss" scoped>
.icon {
    display: inline-flex;
    align-items: center;
    border-radius: 100%;
    box-shadow: 0 0 50px gray;
    height: rem(50);
    width: rem(50);
    justify-content: center;
}
</style>