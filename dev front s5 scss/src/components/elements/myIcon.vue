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

//Icones du projet
import iconArrowLeft from '../icons/iconArrowLeft.vue'
import iconArrowRight from '../icons/iconArrowRight.vue'
import iconChrevronLeft from '../icons/iconChrevronLeft.vue';
import iconDeliveryTruck from '../icons/iconDeliveryTruck.vue';
import iconFacebook from '../icons/iconFacebook.vue';
import iconHour from '../icons/iconHour.vue';
import iconInstagram from '../icons/iconInstagram.vue';
import iconLinkedin from '../icons/iconLinkedin.vue';
import iconMapPin from '../icons/iconMapPin.vue';
import iconPhoneCall from '../icons/iconPhoneCall.vue';
import iconPlay from '../icons/iconPlay.vue';
import iconSearch from '../icons/iconSearch.vue';
import iconShoppingBag from '../icons/iconShoppingBag.vue';
import iconStar from '../icons/iconStar.Vue';
import iconTwitter from '../icons/iconTwitter.vue';
import iconUstensils from '../icons/iconUstensils.vue';
import iconUstensilsCrossed from '../icons/iconUstensilsCrossed.vue';

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
        case 'arrowLeft':
            return iconArrowLeft;
        case 'arrowRight':
            return iconArrowRight
        case 'chevronLeft':
            return iconChrevronLeft;
        case 'deliveryTruck':
            return iconDeliveryTruck;
        case 'facebook':
            return iconFacebook;
        case 'hour':
            return iconHour;
        case 'instagram': 
            return iconInstagram;
        case 'linkedin':
            return iconLinkedin
        case 'mapPin': 
            return iconMapPin
        case 'phoneCall':
            return iconPhoneCall
        case 'play':
            return iconPlay
        case 'search':
            return iconSearch
        case 'shoppingBag':
            return iconShoppingBag
        case 'star' :
            return iconStar;
        case 'twitter' : 
            return iconTwitter
        case 'ustensils': 
            return iconUstensils
        case 'ustensilsCrossed':
            return iconUstensilsCrossed
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