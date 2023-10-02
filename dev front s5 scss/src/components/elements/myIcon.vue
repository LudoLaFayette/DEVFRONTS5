<template>
    <i class="icon">
        <component :is="getIcon" />
    </i>
</template>

<script setup>
import { computed } from 'vue';
import iconCommunity from '../icons/iconCommunity.vue';
import iconDocumentation from '../icons/iconDocumentation.vue'
import iconEcosystem from '../icons/iconEcosystem.vue'
import iconTooling from '../icons/iconTooling.vue'
import iconSupport from '../icons/iconSupport.Vue'
const props = defineProps({
    name: String,
})

const getIcon = computed(() => {
    switch (props.name) {
        case 'community':
            return iconCommunity;
        case 'documentation':
            return iconDocumentation;
        case 'ecosystem':
            return iconEcosystem;
        case 'tooling':
            return iconTooling;
        default:
            return iconSupport
    }
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