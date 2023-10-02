<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const percent = ref(0)
const container = ref();

function handleScroll() {

    let scrollTop = window.scrollY
    let scrollBottom = scrollTop + window.innerHeight

    let offsetTop = container.value.offsetTop
    let elementHeight = container.value.offsetHeight


    let result = ((scrollBottom - offsetTop) / elementHeight * 100);
    // this.percent = Math.floor(percent)
    // console.log(`scrollTop: ${scrollTop}`, `scrollBottom: ${scrollBottom}`)
    // console.log(offsetTop)
    // console.log(percent)
    percent.value = result > 100 ? 100 : Math.round(result);

};

onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})
</script>
<!-- <script>
export default{
    data(){
        return{
            percent:0
        }
    },
    methods: {
        
    },
    mounted() {
        
    },
    unmounted() {
       
    }
}
</script> -->


<template>
    <div ref="container" class="backgroundScroll">
        <p class="backgroundScroll__content">Section Scroll : {{ percent }}</p>
    </div>
</template>




<style lang="scss" scoped>
.backgroundScroll {
    background: black;
    color: $white;
    height: 2000px;

    &__content {
        left: 0;
        top: 0;
        position: sticky;
        width: 100%;
    }

}
</style>